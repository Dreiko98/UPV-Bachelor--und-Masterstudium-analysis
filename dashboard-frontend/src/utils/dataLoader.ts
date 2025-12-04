import { IKPIData, Status, ITemporalData, IProgram, ITitulationPerformance, ClusterType, DegreeType } from '@/types';

function classifyCluster(satisfaction: number, dropout: number, employability: number): ClusterType {
  const score = (satisfaction / 10) * 0.4 + ((100 - dropout) / 100) * 0.4 + (employability / 100) * 0.2;
  if (score >= 0.75) return ClusterType.EXCELLENCE;
  if (score >= 0.6) return ClusterType.INTERMEDIATE;
  return ClusterType.RISK;
}

function classifyDegreeType(titulation: string): DegreeType {
  const title = titulation.toUpperCase();
  if (title.includes('DOBLE GRADO') || title.includes('DOBLE TITULACIÓN')) {
    return DegreeType.DOBLE_GRADO;
  } else if (title.includes('MÁSTER') || title.includes('MASTER')) {
    return DegreeType.MASTER;
  } else if (title.includes('GRADO')) {
    return DegreeType.GRADO;
  }
  return DegreeType.OTROS;
}

let csvCache: any[] = [];
let csvLoaded = false;

export async function loadCSVData(): Promise<any[]> {
  if (csvLoaded) return csvCache;
  
  try {
    const response = await fetch('/panel_maestro_UPV_LIMPIO.csv');
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    
    const text = await response.text();
    const lines = text.trim().split('\n');
    if (lines.length < 2) throw new Error('CSV empty');
    
    const headers = lines[0].split(',').map(h => h.trim());
    const data: any[] = [];
    
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;
      
      const values: string[] = [];
      let current = '';
      let inQuotes = false;
      
      for (let j = 0; j < line.length; j++) {
        const char = line[j];
        if (char === '"') inQuotes = !inQuotes;
        else if (char === ',' && !inQuotes) {
          values.push(current.trim().replace(/^"|"$/g, ''));
          current = '';
        } else {
          current += char;
        }
      }
      values.push(current.trim().replace(/^"|"$/g, ''));
      
      const row: any = {};
      headers.forEach((header, idx) => {
        row[header] = values[idx] || '';
      });
      
      ['satisfaccion_promedio', 'tasa_abandono', 'porcentaje_no_desempleados', 'autoeficacia_3_anos', 'año'].forEach(field => {
        if (row[field]) {
          const num = parseFloat(row[field]);
          if (!isNaN(num)) row[field] = num;
        }
      });
      
      data.push(row);
    }
    
    csvCache = data;
    csvLoaded = true;
    console.log(`✓ CSV: ${data.length} records`);
    return data;
  } catch (error) {
    console.error('CSV error:', error);
    csvLoaded = true;
    return [];
  }
}

const FALLBACK_TEMPORAL: ITemporalData[] = [
  { year: 2020, satisfaction: 6.8, dropout: 20.1, employability: 68.5, selfEfficacy: 6.3 },
  { year: 2021, satisfaction: 6.9, dropout: 19.8, employability: 69.2, selfEfficacy: 6.5 },
  { year: 2022, satisfaction: 7.0, dropout: 19.2, employability: 70.5, selfEfficacy: 6.7 },
  { year: 2023, satisfaction: 7.05, dropout: 18.9, employability: 71.2, selfEfficacy: 6.8 },
  { year: 2024, satisfaction: 7.1, dropout: 18.5, employability: 72.3, selfEfficacy: 6.9 },
];

const FALLBACK_PROGRAMS: IProgram[] = [
  { id: 'p1', titulation: 'Ingeniería Informática', center: 'ETSE', degree: DegreeType.GRADO, satisfaction: 7.8, dropout: 12.3, employability: 85.2, selfEfficacy: 7.5, cluster: ClusterType.EXCELLENCE },
  { id: 'p2', titulation: 'Ingeniería de Telecomunicaciones', center: 'ETSE', degree: DegreeType.GRADO, satisfaction: 7.6, dropout: 14.2, employability: 82.1, selfEfficacy: 7.3, cluster: ClusterType.EXCELLENCE },
  { id: 'p3', titulation: 'Administración de Empresas', center: 'ETSE', degree: DegreeType.GRADO, satisfaction: 6.9, dropout: 19.2, employability: 72.4, selfEfficacy: 6.6, cluster: ClusterType.INTERMEDIATE },
];

export async function calculateKPIs(): Promise<IKPIData[]> {
  const data = await loadCSVData();
  
  if (data.length === 0) {
    const latest = FALLBACK_TEMPORAL[4];
    return [
      { label: 'Satisfacción', value: latest.satisfaction.toFixed(1), unit: '/10', trend: 0.5, status: Status.OK, icon: '😊' },
      { label: 'Abandono', value: latest.dropout.toFixed(1), unit: '%', trend: -0.8, status: Status.OK, icon: '📉' },
      { label: 'Autoeficacia', value: latest.selfEfficacy.toFixed(1), unit: '/10', trend: 0.3, status: Status.OK, icon: '💪' },
      { label: 'Empleabilidad', value: latest.employability.toFixed(1), unit: '%', trend: 1.2, status: Status.OK, icon: '📊' },
    ];
  }
  
  let totS = 0, totD = 0, totE = 0, totA = 0, count = 0;
  data.forEach((r: any) => {
    const s = parseFloat(r.satisfaccion_promedio) || 0;
    const d = parseFloat(r.tasa_abandono) || 0;
    const e = parseFloat(r.porcentaje_no_desempleados) || 0;
    const a = parseFloat(r.autoeficacia_3_anos) || 0;
    if (s > 0 && d >= 0 && e > 0 && a > 0) {
      totS += s; totD += d; totE += e; totA += a; count++;
    }
  });
  
  const avgS = count > 0 ? totS / count : 7.0;
  const avgD = count > 0 ? totD / count : 19.0;
  const avgE = count > 0 ? totE / count : 70.0;
  const avgA = count > 0 ? totA / count : 6.7;
  
  return [
    { label: 'Satisfacción', value: avgS.toFixed(1), unit: '/10', trend: 0.5, status: avgS > 6.5 ? Status.OK : Status.WARNING, icon: '😊' },
    { label: 'Abandono', value: avgD.toFixed(1), unit: '%', trend: -0.8, status: avgD < 20 ? Status.OK : Status.CRITICAL, icon: '📉' },
    { label: 'Autoeficacia', value: avgA.toFixed(1), unit: '/10', trend: 0.3, status: avgA > 6.5 ? Status.OK : Status.WARNING, icon: '��' },
    { label: 'Empleabilidad', value: avgE.toFixed(1), unit: '%', trend: 1.2, status: avgE > 70 ? Status.OK : Status.WARNING, icon: '📊' },
  ];
}

export async function loadPrograms(): Promise<IProgram[]> {
  const data = await loadCSVData();
  if (data.length === 0) return FALLBACK_PROGRAMS;
  
  const map = new Map<string, any>();
  data.forEach((r: any) => {
    const key = `${r.TITULACION}|${r.CENTRO}`;
    const y = parseInt(r.año) || 0;
    if (!map.has(key) || (map.get(key).año || 0) < y) map.set(key, r);
  });
  
  const programs: IProgram[] = [];
  let id = 0;
  map.forEach((r: any) => {
    const sat = parseFloat(r.satisfaccion_promedio) || 6.5;
    const drop = parseFloat(r.tasa_abandono) || 20;
    const emp = parseFloat(r.porcentaje_no_desempleados) || 70;
    const eff = parseFloat(r.autoeficacia_3_anos) || 6.5;
    programs.push({
      id: `p_${id++}`,
      titulation: r.TITULACION,
      center: r.CENTRO,
      degree: classifyDegreeType(r.TITULACION),
      satisfaction: sat,
      dropout: drop,
      employability: emp,
      selfEfficacy: eff,
      cluster: classifyCluster(sat, drop, emp),
    });
  });
  
  return programs.sort((a, b) => b.satisfaction - a.satisfaction);
}

export async function loadTitulationPerformance(): Promise<ITitulationPerformance[]> {
  const programs = await loadPrograms();
  return programs.map((p, idx) => ({
    titulation: p.titulation,
    center: p.center,
    degree: p.degree,
    satisfaction: p.satisfaction,
    dropout: p.dropout,
    employability: p.employability,
    selfEfficacy: p.selfEfficacy,
    cluster: p.cluster,
    ranking: idx + 1,
  }));
}

export async function loadTemporalData(): Promise<ITemporalData[]> {
  const data = await loadCSVData();
  if (data.length === 0) return FALLBACK_TEMPORAL;
  
  const map = new Map<number, { c: number; s: number; d: number; e: number; a: number }>();
  data.forEach((r: any) => {
    const y = parseInt(r.año) || 0;
    if (y < 2000 || y > 2030) return;
    const s = parseFloat(r.satisfaccion_promedio) || 0;
    const d = parseFloat(r.tasa_abandono) || 0;
    const e = parseFloat(r.porcentaje_no_desempleados) || 0;
    const a = parseFloat(r.autoeficacia_3_anos) || 0;
    if (s > 0 && d >= 0 && e > 0 && a > 0) {
      if (!map.has(y)) map.set(y, { c: 0, s: 0, d: 0, e: 0, a: 0 });
      const yd = map.get(y)!;
      yd.c++; yd.s += s; yd.d += d; yd.e += e; yd.a += a;
    }
  });
  
  const result: ITemporalData[] = [];
  map.forEach((yd, y) => {
    result.push({ year: y, satisfaction: yd.s / yd.c, dropout: yd.d / yd.c, employability: yd.e / yd.c, selfEfficacy: yd.a / yd.c });
  });
  
  return result.sort((a, b) => a.year - b.year).slice(-5);
}
