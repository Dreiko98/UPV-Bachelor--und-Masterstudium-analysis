import { IKPIData, Status, ITemporalData, IProgram, ITitulationPerformance, ClusterType } from '@/types';

// Global cache for performance
let csvDataCache: any[] | null = null;
let programsCache: IProgram[] | null = null;
let titulationsCache: ITitulationPerformance[] | null = null;
let temporalCache: ITemporalData[] | null = null;

/**
 * Load and parse CSV data from public folder
 */
export async function loadCSVData(): Promise<any[]> {
  if (csvDataCache !== null) {
    return csvDataCache;
  }

  try {
    const response = await fetch('/panel_maestro_UPV_LIMPIO.csv');
    if (!response.ok) {
      console.error(`CSV fetch failed: ${response.status}`);
      return [];
    }

    const text = await response.text();
    const lines = text.trim().split('\n');
    
    if (lines.length < 2) {
      console.error('CSV is empty or malformed');
      return [];
    }

    // Parse headers
    const headers = lines[0].split(',').map(h => h.trim());
    console.log('CSV Headers:', headers);

    // Parse data rows
    const data: any[] = [];
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;

      const values = line.split(',').map(v => v.trim());
      const row: any = {};

      headers.forEach((header, idx) => {
        row[header] = values[idx] || '';
      });

      data.push(row);
    }

    console.log(`Loaded ${data.length} rows from CSV`);
    csvDataCache = data;
    return data;
  } catch (error) {
    console.error('Error loading CSV:', error);
    return [];
  }
}

/**
 * Function to classify program by performance cluster
 */
function classifyCluster(satisfaction: number, dropout: number, employability: number): ClusterType {
  const satScore = satisfaction / 10;
  const dropoutScore = (100 - dropout) / 100;
  const empScore = employability / 100;
  const compositeScore = satScore * 0.35 + dropoutScore * 0.35 + empScore * 0.3;

  if (compositeScore >= 0.72) return ClusterType.EXCELLENCE;
  if (compositeScore >= 0.62) return ClusterType.INTERMEDIATE;
  return ClusterType.RISK;
}

/**
 * Load programs aggregated by titulation+center
 */
export async function loadPrograms(): Promise<IProgram[]> {
  if (programsCache !== null) {
    return programsCache;
  }

  const csvData = await loadCSVData();
  if (csvData.length === 0) {
    console.warn('No CSV data available for loadPrograms');
    return [];
  }

  const programMap = new Map<string, any>();

  csvData.forEach(row => {
    const titulation = row['TITULACION'] || 'Unknown';
    const centro = row['CENTRO'] || 'Unknown';
    const year = parseInt(row['año']) || 2024;
    const key = `${titulation}|${centro}`;

    if (!programMap.has(key) || parseInt(programMap.get(key)['año']) < year) {
      programMap.set(key, row);
    }
  });

  const programs: IProgram[] = [];
  let id = 0;

  programMap.forEach((row) => {
    const satisfaction = parseFloat(row['satisfaccion_promedio']) || 6.5;
    const dropout = parseFloat(row['tasa_abandono']) || 20;
    const employability = parseFloat(row['porcentaje_no_desempleados']) || 65;
    const selfEfficacy = parseFloat(row['autoeficacia_3_anos']) || 6.5;

    const cluster = classifyCluster(satisfaction, dropout, employability);

    programs.push({
      id: `prog_${id}`,
      titulation: row['TITULACION'] || 'Unknown',
      center: row['CENTRO'] || 'Unknown',
      degree: 'Bachelor',
      satisfaction,
      dropout,
      employability,
      selfEfficacy,
      cluster,
    });
    id++;
  });

  console.log(`Loaded ${programs.length} unique programs`);
  programsCache = programs;
  return programs;
}

/**
 * Load titulation rankings sorted by satisfaction
 */
export async function loadTitulationPerformance(): Promise<ITitulationPerformance[]> {
  if (titulationsCache !== null) {
    return titulationsCache;
  }

  const programs = await loadPrograms();

  const titulations: ITitulationPerformance[] = programs
    .map((prog, idx) => ({
      titulation: prog.titulation,
      center: prog.center,
      satisfaction: prog.satisfaction,
      dropout: prog.dropout,
      employability: prog.employability,
      selfEfficacy: prog.selfEfficacy,
      cluster: prog.cluster,
      ranking: idx + 1,
    }))
    .sort((a, b) => b.satisfaction - a.satisfaction)
    .map((tit, idx) => ({ ...tit, ranking: idx + 1 }));

  console.log(`Loaded ${titulations.length} titulation rankings`);
  titulationsCache = titulations;
  return titulations;
}

/**
 * Load temporal data aggregated by year
 */
export async function loadTemporalData(): Promise<ITemporalData[]> {
  if (temporalCache !== null) {
    return temporalCache;
  }

  const csvData = await loadCSVData();
  if (csvData.length === 0) {
    console.warn('No CSV data available for loadTemporalData');
    return [];
  }

  const yearMap = new Map<number, { count: number; sat: number; drop: number; emp: number; self: number }>();

  csvData.forEach(row => {
    const year = parseInt(row['año']) || 2024;
    const satisfaction = parseFloat(row['satisfaccion_promedio']) || 0;
    const dropout = parseFloat(row['tasa_abandono']) || 0;
    const employability = parseFloat(row['porcentaje_no_desempleados']) || 0;
    const selfEfficacy = parseFloat(row['autoeficacia_3_anos']) || 0;

    if (!yearMap.has(year)) {
      yearMap.set(year, { count: 0, sat: 0, drop: 0, emp: 0, self: 0 });
    }

    const stats = yearMap.get(year)!;
    stats.count += 1;
    stats.sat += satisfaction;
    stats.drop += dropout;
    stats.emp += employability;
    stats.self += selfEfficacy;
  });

  const temporal: ITemporalData[] = [];
  yearMap.forEach((stats, year) => {
    temporal.push({
      year,
      satisfaction: stats.sat / stats.count,
      dropout: stats.drop / stats.count,
      employability: stats.emp / stats.count,
      selfEfficacy: stats.self / stats.count,
    });
  });

  temporal.sort((a, b) => a.year - b.year);
  console.log(`Loaded temporal data for ${temporal.length} years`);
  return temporal;
}

/**
 * Calculate KPIs from all CSV data
 */
export async function calculateKPIs(): Promise<IKPIData[]> {
  const temporalData = await loadTemporalData();

  if (temporalData.length === 0) {
    console.warn('No temporal data available for KPI calculation');
    return [
      {
        label: 'Satisfacción Promedio',
        value: 'N/A',
        unit: '/10',
        trend: 0,
        status: Status.WARNING,
        icon: '😊',
      },
      {
        label: 'Tasa de Abandono',
        value: 'N/A',
        unit: '%',
        trend: 0,
        status: Status.WARNING,
        icon: '📉',
      },
      {
        label: 'Autoeficacia Percibida',
        value: 'N/A',
        unit: '/10',
        trend: 0,
        status: Status.WARNING,
        icon: '💪',
      },
      {
        label: 'Empleabilidad',
        value: 'N/A',
        unit: '%',
        trend: 0,
        status: Status.WARNING,
        icon: '📊',
      },
    ];
  }

  const latest = temporalData[temporalData.length - 1];
  const previous = temporalData.length > 1 ? temporalData[temporalData.length - 2] : latest;

  const satisfactionTrend =
    ((latest.satisfaction - previous.satisfaction) / (previous.satisfaction || 1)) * 100;
  const dropoutTrend = ((previous.dropout - latest.dropout) / (previous.dropout || 1)) * 100;
  const employabilityTrend =
    ((latest.employability - previous.employability) / (previous.employability || 1)) * 100;
  const selfEfficacyTrend =
    ((latest.selfEfficacy - previous.selfEfficacy) / (previous.selfEfficacy || 1)) * 100;

  const kpis: IKPIData[] = [
    {
      label: 'Satisfacción Promedio',
      value: latest.satisfaction.toFixed(1),
      unit: '/10',
      trend: parseFloat(satisfactionTrend.toFixed(1)),
      status: latest.satisfaction > 6.8 ? Status.OK : latest.satisfaction > 6.5 ? Status.WARNING : Status.CRITICAL,
      icon: '😊',
    },
    {
      label: 'Tasa de Abandono',
      value: latest.dropout.toFixed(1),
      unit: '%',
      trend: parseFloat(dropoutTrend.toFixed(1)),
      status: latest.dropout < 20 ? Status.OK : latest.dropout < 23 ? Status.WARNING : Status.CRITICAL,
      icon: '📉',
    },
    {
      label: 'Autoeficacia Percibida',
      value: latest.selfEfficacy.toFixed(1),
      unit: '/10',
      trend: parseFloat(selfEfficacyTrend.toFixed(1)),
      status: latest.selfEfficacy > 6.7 ? Status.OK : latest.selfEfficacy > 6.5 ? Status.WARNING : Status.CRITICAL,
      icon: '💪',
    },
    {
      label: 'Empleabilidad',
      value: latest.employability.toFixed(1),
      unit: '%',
      trend: parseFloat(employabilityTrend.toFixed(1)),
      status: latest.employability > 72 ? Status.OK : latest.employability > 68 ? Status.WARNING : Status.CRITICAL,
      icon: '📊',
    },
  ];

  console.log('KPIs calculated:', kpis);
  return kpis;
}
