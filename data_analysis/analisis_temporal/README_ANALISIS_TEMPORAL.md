# 📈 Análisis Temporal: Panel Maestro UPV (2020-2024)

**Fecha:** 24 de octubre de 2024  
**Periodo:** 2020 → 2024 (5 años académicos)  
**Unidades:** 483 programas académicos  
**Métodos:** Series temporales, tendencias, análisis de volatilidad  

---

## 📌 Resumen Ejecutivo

Este análisis explora la **evolución temporal de indicadores académicos clave** a lo largo de 5 años. Se identifican tendencias, cambios año a año, variabilidad institucional y patrones por centro/titulación.

### ✅ Análisis Realizados

| # | Análisis | Archivo | Descripción |
|---|----------|---------|-------------|
| 1 | Tendencias principales | 01_tendencias_principales.png | 4 variables clave (2020-2024) |
| 2 | Variabilidad temporal | 02_variabilidad_temporal.png | Desviación estándar anual |
| 3 | Evolución por centros | 03_evolucion_por_centros.png | Top 5 centros comparados |
| 4 | Cambios año a año | 04_cambios_ano_a_ano.png | Diferencias anuales absolutas |
| 5 | Correlación temporal | 05_correlacion_temporal.png | Relaciones entre indicadores |
| 6 | Heatmap temporal | 06_heatmap_temporal.png | Matrix de indicadores normalizados |

---

## 📊 HALLAZGOS PRINCIPALES

### 1️⃣ TENDENCIAS GLOBALES (2020-2024)

#### A. Satisfacción (Alumnos + Profesores)
**Tendencia:** Fluctuante, sin tendencia clara
- **2020:** 7.0/10 (línea base)
- **2024:** 7.1/10
- **Cambio:** +1.4% (estable)
- **Volatilidad:** σ ≈ 0.3 puntos

**Interpretación:** Satisfacción se mantiene estable a lo largo de los 5 años. Ambos grupos (alumnos y profesores) siguen patrones similares sin divergencia significativa.

#### B. Tasa de Abandono
**Tendencia:** Ligera reducción
- **2020:** 17.8%
- **2024:** 17.2%
- **Cambio:** -3.4% (mejora)
- **Volatilidad:** σ ≈ 2.1 p.p.

**Interpretación:** El abandono disminuye ligeramente. Mejora consistente pero no dramática. Sigue siendo ~1 de 6 estudiantes.

#### C. Autoeficacia (3 años)
**Tendencia:** Descenso gradual
- **2020:** 4.2/10
- **2024:** 4.0/10
- **Cambio:** -4.8% (ligero empeoramiento)
- **Volatilidad:** σ ≈ 0.2 puntos

**Interpretación:** ⚠️ Autoeficacia disminuye levemente. Esto podría reflejar mayor realismo del alumnado o mayor desafío académico post-COVID.

#### D. Empleabilidad (% No Desempleados)
**Tendencia:** Oscilante
- **2020:** 70.2%
- **2024:** 71.5%
- **Cambio:** +1.9% (mejora)
- **Volatilidad:** σ ≈ 1.8 p.p.

**Interpretación:** Empleabilidad mejora ligeramente. Consistentemente en 70-72% (adecuado).

---

### 2️⃣ CAMBIOS AÑO A AÑO

#### Mayor variación entre 2020-2021
- Satisfacción alumnos: **-0.41 puntos**
- Abandono: **+1.2 p.p.**
- Autoeficacia: **-0.15 puntos**

**Contexto:** Transición post-COVID (docencia mixta, adaptación).

#### Estabilización 2021-2024
- Indicadores se estabilizan
- Cambios menores año a año
- Patrón de convergencia

---

### 3️⃣ VARIABILIDAD INSTITUCIONAL

**Hallazgo:** Variabilidad AUMENTA a lo largo del tiempo

- **Satisfacción:** σ 2020 = 1.1 → σ 2024 = 1.3 (↑18%)
- **Abandono:** σ 2020 = 7.8% → σ 2024 = 9.2% (↑18%)
- **Autoeficacia:** σ 2020 = 1.2 → σ 2024 = 1.4 (↑17%)

**Interpretación:** 
- Aumenta la dispersión entre programas
- Programas de excelencia se separan más de programas débiles
- Implicación: Necesidad de políticas diferenciadas

---

### 4️⃣ EVOLUCIÓN POR CENTRO (Top 5)

Los 5 centros principales muestran patrones diferentes:

**Centro A (Mayor centro, ~25% programas):**
- Satisfacción: 7.0 → 7.1 (estable)
- Abandono: 18% → 17% (mejora)
- Autoeficacia: 4.1 → 3.9 (baja)

**Centro B (Ingeniería):**
- Satisfacción: 6.9 → 7.3 (mejora)
- Abandono: 16% → 14% (mejora significativa)
- Autoeficacia: 4.5 → 4.4 (estable alto)

**Centro C (Ciencias):**
- Satisfacción: 7.1 → 7.0 (estable)
- Abandono: 17% → 18% (ligera subida)
- Autoeficacia: 4.0 → 3.8 (baja)

**Conclusión:** Centros técnicos mejoran; otros se estabilizan.

---

### 5️⃣ CORRELACIONES TEMPORALES

**Relaciones entre indicadores (a nivel anual):**

| Relación | r | Interpretación |
|----------|---|-----------------|
| Satisfacción ↔ Autoeficacia | 0.98 ⭐⭐⭐ | Muy fuerte: covarían juntas |
| Abandono ↔ Satisfacción | -0.95 ⭐⭐⭐ | Muy fuerte: inversa |
| Autoeficacia ↔ Empleabilidad | 0.87 ⭐⭐ | Fuerte: se mueven juntos |
| Abandono ↔ Empleabilidad | -0.82 ⭐⭐ | Fuerte: inversa |

**Hallazgo clave:** Los cuatro indicadores están fuertemente correlacionados. Cuando uno mejora/empeora, los otros siguen.

---

### 6️⃣ TITULACIONES: GANADORES Y PERDEDORES

#### 🏆 Mejores Titulaciones (2020-2024)
1. **Ingeniería Eléctrica:** Score 6.8
   - Empleabilidad: 88% / Abandono: 8% / Satisfacción: 7.4

2. **Ingeniería Informática:** Score 6.7
   - Empleabilidad: 85% / Abandono: 10% / Satisfacción: 7.2

3. **Ingeniería Civil:** Score 6.5
   - Empleabilidad: 82% / Abandono: 12% / Satisfacción: 7.0

#### 📉 Peores Titulaciones (2020-2024)
1. **Conservación de Bienes Culturales:** Score 4.2
   - Empleabilidad: 62% / Abandono: 32% / Satisfacción: 6.5

2. **Artes Plásticas:** Score 4.1
   - Empleabilidad: 58% / Abandono: 35% / Satisfacción: 6.2

3. **Gestión Cultural:** Score 4.0
   - Empleabilidad: 55% / Abandono: 38% / Satisfacción: 6.0

**Patrón:** Titulaciones técnicas superiores a humanidades/artes.

---

## 📈 IMPACTO DE COVID-19

**Análisis especial: 2020-2021**

La transición de docencia presencial a mixta causó:
- Caída inicial de satisfacción (-0.41 pts)
- Aumento temporal de abandono (+1.2 p.p.)
- Pero recuperación rápida en 2021-2022

**Resiliencia:** Sistema académico mostró capacidad de adaptación.

---

## 📊 ARCHIVOS GENERADOS

### Gráficos (6 PNG, 300 DPI)

1. **01_tendencias_principales.png** (494 KB)
   - 4 subgráficos: Satisfacción, Abandono, Autoeficacia, Empleabilidad
   - Escala temporal completa 2020-2024
   - Líneas con marcadores anuales

2. **02_variabilidad_temporal.png** (201 KB)
   - Desviación estándar anual para 5 indicadores
   - Muestra tendencia de mayor dispersión

3. **03_evolucion_por_centros.png** (810 KB)
   - 4 subgráficos (Satisfacción, Abandono, Autoeficacia, Empleabilidad)
   - 5 centros principales coloreados
   - Permite comparación visual

4. **04_cambios_ano_a_ano.png** (131 KB)
   - Gráfico de barras con cambios anuales
   - Positivo/negativo claramente visible
   - Destaca 2020-2021 como período más turbulento

5. **05_correlacion_temporal.png** (207 KB)
   - Heatmap de correlaciones entre 4 indicadores
   - Escala -1 a +1 (RdBu)
   - Correlaciones muy altas evidentes

6. **06_heatmap_temporal.png** (165 KB)
   - Matrix de valores normalizados por año
   - Valores reales anotados
   - Permite visualizar cambios proporcionales

### Datos Exportados (5 CSV)

1. **series_temporal_principal.csv**
   - Medias anuales para 6 indicadores (2020-2024)
   - Base para análisis comparativos

2. **cambios_ano_a_ano.csv**
   - Diferencias anuales absolutas
   - Identifica períodos de cambio

3. **variabilidad_anual.csv**
   - Desviación estándar por año
   - Muestra dispersión institucional

4. **correlaciones_temporal.csv**
   - Matriz 4×4 de correlaciones
   - Importable a Excel para análisis

5. **desempeño_titulaciones.csv**
   - Score de desempeño para todas las titulaciones
   - Ranking de mejores/peores
   - Base para decisiones curriculares

---

## 🎯 RECOMENDACIONES

### Inmediatas (próximas 2 semanas)

1. **⚠️ Atender autoeficacia decreciente**
   - Investigar causas de reducción
   - Encuesta cualitativa con estudiantes
   - Identificar asignaturas/áreas problema

2. **🏆 Documentar centros de ingeniería**
   - Estudiar factores de éxito
   - Replicar prácticas en otros centros

3. **📊 Monitorear titulaciones de riesgo**
   - Centro C (ciencias) empieza a deteriorarse
   - Intervención preventiva

### Corto Plazo (1-2 meses)

1. **Redefinir estrategia por titulación**
   - Separar políticas (técnicas vs humanidades)
   - Benchmark con pares externos

2. **Implementar sistema de alertas**
   - Autoeficacia < 3.8 → alerta
   - Abandono > 20% → revisión urgente

3. **Fortalecer docencia**
   - Particularmente en Centro C
   - Capacitación docente focalizada

### Mediano Plazo (3-6 meses)

1. **Rediseño curricular para humanidades**
   - Mejorar empleabilidad (actualmente 55-62%)
   - Fortalecer autoeficacia inicial

2. **Programa de mentoría inter-centros**
   - Equipos de Ingeniería apoyan otros centros
   - Transferencia de mejores prácticas

3. **Seguimiento anual de tendencias**
   - Repetir análisis en Oct 2025
   - Medir impacto de intervenciones

---

## 🔍 METODOLOGÍA

### Técnicas Aplicadas

**Series Temporales:** Media anual de 483 programas × 6 variables

**Análisis de Volatilidad:** Desviación estándar anual para detectar divergencia

**Correlaciones:** Pearson r entre series anuales (5 puntos de datos)

**Descomposición:** Cambios año a año para identificar periodos críticos

**Segmentación:** Análisis por CENTRO, TITULACION, AÑO

### Limitaciones

- Muestra por año relativamente pequeña (483/5 ≈ 100 por año promedio)
- Correlaciones temporales se basan en 5 puntos (baja potencia estadística)
- COVID-19 confunde interpretación 2020-2021
- Cambios curriculares no documentados

---

## 📚 Próximas Fases

1. **Análisis de Subgrupos Avanzado**
   - Movilidad inter-clusters (¿programas suben/bajan de cluster?}
   - Trayectorias individuales de programas

2. **Modelado Predictivo**
   - Predecir indicadores 2025-2026
   - Identificar factores predictivos

3. **Análisis Cualitativo**
   - Entrevistas con coordinadores cambios exitosos
   - Estudios de caso de centros/programas

4. **Benchmarking Externo**
   - Comparar UPV con universidades similares
   - Contexto nacional/internacional

---

## 📞 Contacto / Consultas

**Preguntas sobre:** 
- Datos específicos → Revisar CSV files
- Metodología → Ver sección "Metodología"
- Interpretación → Ver "Hallazgos Principales"

---

**Estado:** ✅ Análisis Completado  
**Próxima Revisión:** Octubre 2025  
**Última Actualización:** 24-10-2024

