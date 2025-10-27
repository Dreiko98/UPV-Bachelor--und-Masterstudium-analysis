# 📊 Integración de Datos - Dashboard UPV

## Estado Actual: Mock Data vs CSV Real

### ❓ Pregunta del Usuario
**"¿Pero estamos extrayendo los datos del csv? (adjunto panel_maestro_UPV_LIMPIO.csv)"**

---

## 📌 Respuesta: Estado Actual

**Estado Actual:** ✅ **Datos estructurados pero no cargados del CSV aún**

El dashboard ahora tiene:
- ✅ Estructura de datos completamente configurada (22 titulaciones)
- ✅ Tipos TypeScript listos (IProgram, ITitulationPerformance, ITemporalData)
- ✅ Funciones de carga disponibles (loadPrograms, loadTemporalData, etc.)
- ⏳ **PERO:** Datos aún son hardcoded en `src/utils/dataLoader.ts`

---

## 📁 Archivo de Datos CSV

**Ubicación:** `data_analysis/panel_maestro_UPV_LIMPIO.csv`

**Estructura de Datos:**
```
CURSO,COD_RUCT,TITULACION,CENTRO,año,
satisfaccion_alumnos,satisfaccion_profesores,diferencia_satis,
satisfaccion_promedio,tasa_abandono,tasa_permanencia,
autoeficacia_3_anos,nivel_autoeficacia,
porcentaje_no_desempleados,porcentaje_desempleados,nivel_empleabilidad
```

**Dimensiones:**
- **485 filas** de datos reales
- **16 columnas** de información
- **Años:** 2020-2024 (múltiples registros por titulación y año)
- **Centros:** Múltiples centros UPV

---

## 🔄 Flujo de Datos Actual

```
┌─────────────────────────────────────────────┐
│        Dashboard.tsx (React)                 │
│                                              │
│  const [titulations, setTitulations] = ...  │
└────────────────┬────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────┐
│      dataLoader.ts (Data Functions)          │
│                                              │
│  loadTitulationPerformance() ← HARDCODED    │
│  loadPrograms() ← HARDCODED                 │
│  loadTemporalData() ← HARDCODED             │
│  calculateKPIs() ← HARDCODED                │
└─────────────────────────────────────────────┘
     ▲
     │
  ACTUALMENTE: Mock data en arrays JavaScript
  PRÓXIMAMENTE: Carga desde CSV
```

---

## 📊 Datos Mock Actuales vs CSV Real

### Mock Data Actual (Hardcoded)
```typescript
// En src/utils/dataLoader.ts

TEMPORAL_DATA_REAL = [
  { year: 2020, satisfaction: 6.8, dropout: 20.1, ... }
  { year: 2021, satisfaction: 6.9, dropout: 19.8, ... }
  // etc - 5 años de datos agregados
]

PROGRAMS_DATA = [
  // 22 titulaciones con satisfacción manual
  { 
    id: 1,
    name: "Ingeniería Informática",
    satisfaction: 7.8,
    dropout: 15.2,
    // etc
  }
  // ...
]
```

### CSV Real (485 registros)
```csv
2020,11015,Ingeniería Informática,ETSII,2020,7.8,7.9,0.1,7.85,15.2,84.8,6.8,Alto,92.5,7.5,Muy Alta
2020,11015,Ingeniería Informática,ETSII,2021,7.9,8.0,0.1,7.95,14.8,85.2,6.9,Alto,93.2,6.8,Muy Alta
// etc - 485 registros reales
```

---

## 🚀 Cómo Migrar a Datos CSV (Próximos Pasos)

### Opción 1: Cargar CSV con Papa Parse (Recomendado)

**Instalación:**
```bash
npm install papaparse
npm install --save-dev @types/papaparse
```

**Implementación en `src/utils/dataLoader.ts`:**

```typescript
import Papa from 'papaparse';
import { IProgram, ITitulationPerformance, ITemporalData } from '@/types';

interface CSVRow {
  CURSO: string;
  COD_RUCT: string;
  TITULACION: string;
  CENTRO: string;
  año: string;
  satisfaccion_alumnos: string;
  satisfaccion_profesores: string;
  satisfaccion_promedio: string;
  tasa_abandono: string;
  autoeficacia_3_anos: string;
  porcentaje_no_desempleados: string;
  nivel_empleabilidad: string;
}

export async function loadDataFromCSV(): Promise<void> {
  try {
    const response = await fetch('/panel_maestro_UPV_LIMPIO.csv');
    const csvText = await response.text();
    
    Papa.parse(csvText, {
      header: true,
      dynamicTyping: false,
      complete: (results) => {
        const data = results.data as CSVRow[];
        
        // Agregar datos por titulación
        const titulations = aggregateTitulations(data);
        
        // Agregar datos temporales
        const temporal = aggregateTemporal(data);
        
        // Guardar en estado global o cache
        globalCache.titulations = titulations;
        globalCache.temporal = temporal;
      },
      error: (error) => {
        console.error('Error parsing CSV:', error);
      }
    });
  } catch (error) {
    console.error('Error loading CSV:', error);
  }
}

function aggregateTitulations(data: CSVRow[]): ITitulationPerformance[] {
  const titulationMap = new Map<string, any>();
  
  data.forEach(row => {
    const key = `${row.TITULACION}-${row.CENTRO}`;
    
    if (!titulationMap.has(key)) {
      titulationMap.set(key, {
        titulation: row.TITULACION,
        center: row.CENTRO,
        satisfaction: parseFloat(row.satisfaccion_promedio),
        dropout: parseFloat(row.tasa_abandono),
        employability: parseFloat(row.porcentaje_no_desempleados),
        selfEfficacy: parseFloat(row.autoeficacia_3_anos),
      });
    }
  });
  
  // Convertir a array y ordenar por satisfacción
  return Array.from(titulationMap.values())
    .sort((a, b) => b.satisfaction - a.satisfaction)
    .map((t, idx) => ({ ...t, ranking: idx + 1 }));
}

function aggregateTemporal(data: CSVRow[]): ITemporalData[] {
  const yearMap = new Map<number, any>();
  
  // Agrupar por año y promediar
  data.forEach(row => {
    const year = parseInt(row.año);
    
    if (!yearMap.has(year)) {
      yearMap.set(year, {
        satisfaction: [],
        dropout: [],
        employability: [],
        selfEfficacy: [],
      });
    }
    
    const entry = yearMap.get(year);
    entry.satisfaction.push(parseFloat(row.satisfaccion_promedio));
    entry.dropout.push(parseFloat(row.tasa_abandono));
    entry.employability.push(parseFloat(row.porcentaje_no_desempleados));
    entry.selfEfficacy.push(parseFloat(row.autoeficacia_3_anos));
  });
  
  // Calcular promedios
  const temporal: ITemporalData[] = [];
  yearMap.forEach((entry, year) => {
    temporal.push({
      year,
      satisfaction: average(entry.satisfaction),
      dropout: average(entry.dropout),
      employability: average(entry.employability),
      selfEfficacy: average(entry.selfEfficacy),
    });
  });
  
  return temporal.sort((a, b) => a.year - b.year);
}

function average(arr: number[]): number {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}
```

### Opción 2: Usar Fetch + Streaming (Más Ligero)

```typescript
export async function loadDataFromCSVStream(): Promise<void> {
  const response = await fetch('/panel_maestro_UPV_LIMPIO.csv');
  const csv = await response.text();
  
  const lines = csv.split('\n');
  const headers = lines[0].split(',');
  
  const data = lines.slice(1).map(line => {
    const values = line.split(',');
    const row: any = {};
    
    headers.forEach((header, idx) => {
      row[header.trim()] = values[idx]?.trim();
    });
    
    return row;
  });
  
  // ... rest del procesamiento
}
```

---

## 📍 Cómo Colocar el CSV en el Dashboard

**Opción A: Public Folder**
```bash
# Copiar CSV a carpeta pública
cp data_analysis/panel_maestro_UPV_LIMPIO.csv dashboard-frontend/public/

# Acceso en el código:
fetch('/panel_maestro_UPV_LIMPIO.csv')
```

**Opción B: Import Static**
```bash
# O importarlo como módulo (mejor para bundling)
import csvData from '@/assets/panel_maestro_UPV_LIMPIO.csv?raw'
```

---

## 🔄 Cambios Necesarios en Dashboard.tsx

```typescript
useEffect(() => {
  const loadData = async () => {
    try {
      setLoading(true);
      
      // Cargar datos del CSV
      await loadDataFromCSV();
      
      // Obtener datos agregados
      const [kpisData, tempData, progsData, titData] = await Promise.all([
        calculateKPIs(),
        loadTemporalData(),
        loadPrograms(),
        loadTitulationPerformance(),
      ]);

      setKPIs(kpisData);
      setTemporalData(tempData);
      setPrograms(progsData);
      setTitulations(titData);
    } catch (err) {
      setError('Error al cargar datos del CSV');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  loadData();
}, []);
```

---

## 📊 Beneficios de Usar Datos CSV

| Aspecto | Mock Data | CSV Real |
|--------|-----------|----------|
| **Precisión** | Aproximada | ✅ Real |
| **Escalabilidad** | 22 titulaciones | ✅ 485 registros |
| **Años** | 5 años agregados | ✅ Datos por año real |
| **Centros** | 1 representación | ✅ Múltiples centros reales |
| **Mantenimiento** | Manual | ✅ Desde fuente de datos |
| **Análisis** | Limitado | ✅ Profundo con datos reales |

---

## ✅ Validación de Datos CSV

```typescript
// Función para validar integridad del CSV
function validateCSVData(data: CSVRow[]): boolean {
  return data.every(row => 
    row.TITULACION &&
    row.CENTRO &&
    !isNaN(parseFloat(row.satisfaccion_promedio)) &&
    !isNaN(parseFloat(row.tasa_abandono)) &&
    !isNaN(parseFloat(row.porcentaje_no_desempleados))
  );
}
```

---

## 🎯 Recomendación

**Para Dashboard Producción:**

1. **Corto Plazo (Ahora):** Mock data actual funciona perfectamente
2. **Mediano Plazo (Próximas semanas):** Integrar CSV real con Papa Parse
3. **Largo Plazo:** Backend API que sirve datos JSON procesados

---

## 📝 Próximos Pasos

**Si quieres activar carga de CSV:**

1. Instalar Papa Parse: `npm install papaparse`
2. Copiar CSV a `dashboard-frontend/public/`
3. Reemplazar funciones en `dataLoader.ts`
4. Llamar a `loadDataFromCSV()` en `useEffect` del Dashboard
5. Testear con datos reales

**¿Deseas que implemente la carga de CSV ahora?** ✨

---

**Estado:** 📋 READY FOR CSV INTEGRATION  
**Versión:** 2.1  
**Última Actualización:** 2024
