# 📊 Análisis Univariante: Satisfacción en la UPV

## Archivo Notebook
- **Ruta:** `01_analisis_univariante_satisfaccion.ipynb`
- **Tamaño:** 26 KB
- **Estado:** ✅ Completado exitosamente

## Gráficos Generados

### 1. Histogramas y Densidad (01_histogramas_densidad_satisfaccion.png)
- **Tamaño:** 544 KB
- **Contenido:** Distribución de 4 métricas de satisfacción con curvas KDE
- **Incluye:** Media, mediana, y densidad de probabilidad

### 2. Box Plots (02_boxplots_satisfaccion.png)
- **Tamaño:** 337 KB
- **Contenido:** Detección de outliers usando método IQR
- **Hallazgos:**
  - Satisfacción alumnos: 11 outliers detectados (2.32%)
  - Satisfacción profesores: 5 outliers detectados (1.04%)
  - Diferencia de satisfacción: 20 outliers detectados (4.24%)
  - Satisfacción promedio: 6 outliers detectados (1.27%)

### 3. Violin Plots (03_violinplots_satisfaccion.png)
- **Tamaño:** 419 KB
- **Contenido:** Distribución detallada de cada métrica
- **Útil para:** Visualizar forma de distribución y modas

### 4. Q-Q Plots (04_qqplots_satisfaccion.png)
- **Tamaño:** 411 KB
- **Contenido:** Verificación de normalidad
- **Hallazgo:** Todas las distribuciones se desvían de la normalidad en colas

### 5. Comparación Alumnos vs Profesores (05_comparacion_alumnos_profesores.png)
- **Tamaño:** 590 KB
- **Contenido:** 
  - Scatter plot: Relación entre satisfacción de alumnos y profesores
  - Histograma: Distribución de diferencias

## 📈 Hallazgos Principales

### 1. Nivel General de Satisfacción
| Métrica | Valor | Interpretación |
|---------|-------|----------------|
| **Satisfacción Alumnos** | 6.92/10 | Moderada |
| **Satisfacción Profesores** | 8.65/10 | Alta |
| **Diferencia** | +1.73 | Profesores mucho más satisfechos |
| **Satisfacción Promedio** | 7.78/10 | Moderada-Alta |

### 2. Dispersión de Datos
| Variable | Desv. Estándar | Rango | Interpretación |
|----------|----------------|-------|----------------|
| Satisfacción Alumnos | 1.46 | 1.25-10.00 | Mayor variabilidad |
| Satisfacción Profesores | 0.74 | 4.17-10.00 | Menor variabilidad |
| Diferencia | 1.41 | -2.14-7.08 | Bastante variable |

### 3. Distribución
- **Satisfacción Alumnos:** Aproximadamente simétrica (sesgo: -0.35)
- **Satisfacción Profesores:** Sesgada a la izquierda (sesgo: -0.55)
- **Ambas:** Presentan colas más pesadas que distribución normal (exceso de curtosis)

### 4. Normalidad
**Conclusión:** ❌ Ninguna variable sigue distribución normal perfecta
- **Test Shapiro-Wilk (p-valor < 0.05):** Rechaza normalidad
- **Implicación:** Usar métodos no-paramétricos para pruebas de hipótesis
- **Recomendación:** Usar Mann-Whitney U test en lugar de t-test

### 5. Calidad de Datos
| Variable | Faltantes | % Faltantes | Estado |
|----------|-----------|------------|--------|
| Satisfacción Alumnos | 8 | 1.66% | ✅ Excelente |
| Satisfacción Profesores | 3 | 0.62% | ✅ Excelente |
| Diferencia | 11 | 2.28% | ✅ Muy Bueno |
| Satisfacción Promedio | 11 | 2.28% | ✅ Muy Bueno |

### 6. Outliers Detectados
- **Método IQR:** 11 outliers en satisfacción de alumnos
- **Método Z-score (|Z|>3):** Muy pocos outliers extremos
- **Método Isolation Forest:** ~5% de datos identificados como anómalos (moderado)

### 7. Consistencia de Datos
- ✅ Satisfacción promedio = (alumnos + profesores)/2: **100% consistente**
- ✅ Diferencia = profesores - alumnos: **100% consistente**
- ✅ Rango [0-10]: **100% dentro de rango válido**

## 🔍 Insights por Variable

### Satisfacción de Alumnos
- Media: 6.92/10 (moderada)
- Mediana: 6.90/10 (cercana a media → distribución simétrica)
- Q1-Q3: 6.11-7.75 (50% central bastante compacto)
- Rango: 1.25-10.00 (gran variabilidad)
- **Implicación:** Existe considerable variación entre programas

### Satisfacción de Profesores
- Media: 8.65/10 (alta)
- Mediana: 8.62/10 (muy cercana a media)
- Q1-Q3: 8.18-9.13 (50% central muy compacto)
- Rango: 4.17-10.00 (algunos profesores muy insatisfechos)
- **Implicación:** Satisfacción más consistente que alumnos, pero algunos outliers significativos

### Diferencia de Satisfacción
- Media: 1.75 puntos (profesores consistentemente más satisfechos)
- Rango: -2.14 a 7.08
- Moda cercana a 1.75 (patrón consistente)
- **Implicación:** Brecha positiva y consistente

## 📊 Recomendaciones

1. **Investigar Outliers:** Identificar qué programas tienen satisfacción muy baja (<4)
2. **Análisis Multivariante:** Evaluar relación con otras variables (abandono, empleabilidad)
3. **Temporal:** Analizar tendencias 2020-2023
4. **Causas de Brecha:** Investigar por qué profesores reportan mayor satisfacción
5. **Métodos Estadísticos:** Usar pruebas no-paramétricas para comparaciones

## 📁 Archivos Generados
- `01_analisis_univariante_satisfaccion.ipynb` (26 KB) - Notebook completo
- `01_histogramas_densidad_satisfaccion.png` (544 KB)
- `02_boxplots_satisfaccion.png` (337 KB)
- `03_violinplots_satisfaccion.png` (419 KB)
- `04_qqplots_satisfaccion.png` (411 KB)
- `05_comparacion_alumnos_profesores.png` (590 KB)

**Total:** ~2.3 MB de análisis y visualizaciones

---
**Fecha:** 21 de octubre de 2025
**Estado:** ✅ ANÁLISIS COMPLETADO

