# Estructura del Análisis Univariante - Tasa de Abandono

## 📋 Descripción del Análisis

Este documento detalla la metodología y estructura del análisis univariante realizado sobre la tasa de abandono en programas académicos de la UPV.

## 🔍 Fases del Análisis

### Fase 1: Carga y Exploración de Datos
**Objetivo:** Comprender la estructura y contenido de los datos

**Acciones:**
- Lectura del archivo `panel_maestro_UPV.csv`
- Inspección de dimensiones (filas × columnas)
- Identificación de columnas relevantes
- Revisión de primeras filas
- Evaluación de tipos de datos

**Salidas:**
- Información general del dataset
- Primeras 10 filas con datos de abandono
- Resumen de columnas

---

### Fase 2: Estadísticas Descriptivas
**Objetivo:** Obtener resumen numérico de las variables

**Métricas Calculadas:**

#### Medidas de Tendencia Central
- **Media (Mean)**: Promedio aritmético
- **Mediana (Median)**: Valor central
- **Moda (Mode)**: Valor más frecuente

#### Medidas de Dispersión
- **Desviación Estándar (Std Dev)**: √Varianza
- **Varianza**: Promedio de desviaciones cuadradas
- **Rango**: Máximo - Mínimo
- **Rango Intercuartílico (IQR)**: Q3 - Q1

#### Cuantiles (Percentiles)
- Q1 (25º percentil): Valor por debajo del cual cae el 25% de datos
- Q2 (50º percentil): Mediana
- Q3 (75º percentil): Valor por debajo del cual cae el 75% de datos
- Percentil 5: Valor mínimo teórico (95% de datos por encima)
- Percentil 95: Valor máximo teórico (5% de datos por encima)

**Salidas:**
- Tabla descriptiva completa
- Tabla resumida con `describe()`

---

### Fase 3: Análisis de Distribución
**Objetivo:** Evaluar forma y característica de la distribución

**Tests Estadísticos:**

#### Asimetría (Skewness)
- **Medida**: Grado de asimetría de la distribución
- **Interpretación**:
  - |Skewness| < 0.5: Aproximadamente simétrica
  - Skewness > 0: Asimétrica a la derecha (cola derecha larga)
  - Skewness < 0: Asimétrica a la izquierda (cola izquierda larga)
- **Fórmula**: E[(X - μ)³] / σ³

#### Curtosis (Kurtosis)
- **Medida**: Forma de pico de la distribución
- **Interpretación**:
  - Kurtosis ≈ 0: Mesocúrtica (normal)
  - Kurtosis > 0: Leptocúrtica (colas pesadas, picos altos)
  - Kurtosis < 0: Platicúrtica (colas ligeras, picos bajos)
- **Fórmula**: E[(X - μ)⁴] / σ⁴ - 3

#### Test de Shapiro-Wilk
- **Hipótesis Nula (H₀)**: Los datos siguen distribución normal
- **p-valor < 0.05**: Rechazar H₀ (NO es normal)
- **p-valor ≥ 0.05**: No rechazar H₀ (aproximadamente normal)
- **Ventaja**: Excelente para n < 5000
- **Limitación**: Sensible a tamaños grandes de muestra

#### Test de Kolmogorov-Smirnov
- **Hipótesis Nula (H₀)**: Datos siguen distribución normal
- **p-valor < 0.05**: Rechazar H₀ (NO es normal)
- **p-valor ≥ 0.05**: No rechazar H₀ (aproximadamente normal)
- **Ventaja**: Aplicable a cualquier distribución
- **Limitación**: Menos potente que Shapiro-Wilk

**Salidas:**
- Valores de asimetría y curtosis
- Resultados de ambos tests de normalidad
- Interpretación de resultados

---

### Fase 4: Visualizaciones
**Objetivo:** Representar gráficamente las características de los datos

#### 4.1 Histogramas con Curvas de Densidad
- **Archivo**: `01_histogramas_densidad_tasa_abandono.png`
- **Componentes**:
  - Histograma (barras azules)
  - Curva KDE (Kernel Density Estimation, línea roja)
  - Línea de media (verde punteada)
  - Línea de mediana (naranja punteada)
- **Interpretación**: Muestra forma general, concentración y simetría

#### 4.2 Box Plots
- **Archivo**: `02_boxplots_tasa_abandono.png`
- **Componentes**:
  - Caja (Q1 a Q3)
  - Línea mediana (roja)
  - Bigotes (whiskers)
  - Puntos rojos = outliers
- **Interpretación**: Identifica cuartiles, mediana y outliers

#### 4.3 Violin Plots
- **Archivo**: `03_violinplots_tasa_abandono.png`
- **Componentes**:
  - Forma de violín = densidad de probabilidad
  - Línea blanca = media
  - Línea naranja = mediana
- **Interpretación**: Distribución completa con mejor detalle

#### 4.4 Q-Q Plots
- **Archivo**: `04_qqplots_tasa_abandono.png`
- **Componentes**:
  - Puntos = cuantiles observados
  - Línea = cuantiles teóricos (normal)
- **Interpretación**: Si puntos siguen línea → distribución normal

#### 4.5 Scatter Plot Comparativo
- **Archivo**: `05_comparacion_abandono_permanencia.png`
- **Componentes** (izquierda):
  - Scatter plot abandono vs permanencia
  - Línea teórica (suma = 100%)
- **Componentes** (derecha):
  - Histograma de suma (abandono + permanencia)
  - Línea roja = suma ideal (100%)
  - Línea verde = suma media
- **Interpretación**: Complementariedad entre variables

#### 4.6 Distribución por Categoría
- **Archivo**: `06_distribucion_abandono_por_categoria.png`
- **Componentes**:
  - Box plot por año académico
  - Violin plot por año académico
- **Interpretación**: Variabilidad según período temporal

**Resolución**: Todos en 300 DPI (apto para impresión)

---

### Fase 5: Detección de Outliers
**Objetivo:** Identificar valores atípicos o anómalos

**Tres Métodos Complementarios:**

#### Método 1: IQR (Rango Intercuartílico)
- **Fórmula**:
  - Límite inferior = Q1 - 1.5 × IQR
  - Límite superior = Q3 + 1.5 × IQR
  - Outlier: valor < límite inferior o > límite superior
- **Ventaja**: Simple, interpretable, estándar en estadística
- **Limitación**: Puede ser conservador

#### Método 2: Z-score
- **Fórmula**: Z = (X - μ) / σ
- **Criterio**: |Z| > 3 indica outlier
- **Interpretación**: Valor a más de 3 desviaciones estándar
- **Ventaja**: Sensible a valores extremos
- **Limitación**: Asume distribución normal

#### Método 3: Isolation Forest
- **Tipo**: Algoritmo de machine learning no supervisado
- **Principio**: Aisla outliers mediante árboles aleatorios
- **Parámetro**: contamination = 0.05 (espera ~5% outliers)
- **Ventaja**: No asume distribución, detecta anomalías multidimensionales
- **Limitación**: Menos interpretable

**Salidas:**
- Cantidad de outliers por método
- Valores específicos de outliers
- Percentajes de contaminación

---

### Fase 6: Evaluación de Calidad de Datos
**Objetivo:** Evaluar integridad y confiabilidad de datos

#### 6.1 Valores Faltantes (Missing Values)
- **Métrica**: Cantidad y % de NaN (Not a Number)
- **Aceptable**: < 5%
- **Revisar**: 5-10%
- **Crítico**: > 10%
- **Tabla**:
  - Variable
  - Cantidad faltantes
  - Porcentaje
  - Cantidad válidos

#### 6.2 Duplicados
- **Análisis**: Búsqueda de filas duplicadas completas
- **Análisis**: Búsqueda de valores duplicados por columna
- **Implicación**: Puede indicar errores de entrada

#### 6.3 Consistencia de Datos
- **Verificación**: abandono + permanencia ≈ 100%
- **Tolerancia**: ±0.1% (0.1 puntos porcentuales)
- **Registro de**:
  - Registros consistentes
  - Registros inconsistentes
  - Suma mínima, máxima y media
- **Implicación**: Discrepancias indican problemas en recopilación

#### 6.4 Validación de Rango
- **Expectativas**: Valores entre 0% y 100%
- **Verificación**: Búsqueda de valores fuera de rango
- **Reporte**: Cantidad de anomalías por variable

**Salidas:**
- Tabla resumen de calidad
- Identificación de problemas
- Recomendaciones de limpieza

---

### Fase 7: Resumen Ejecutivo
**Objetivo:** Resumir hallazgos principales en conclusiones

**Elementos:**

1. **Nivel General de Abandono**
   - Tasa media de abandono
   - Clasificación: BAJA/MEDIA/ALTA
   - Contexto institucional

2. **Características de Distribución**
   - Asimetría por variable
   - Desviación estándar
   - Nivel de variación

3. **Calidad de Datos**
   - Porcentaje de faltantes
   - Valoración general
   - Recomendaciones

4. **Outliers Encontrados**
   - Cantidad y porcentaje
   - Implicación académica
   - Necesidad de investigación

5. **Normalidad de la Distribución**
   - Resultado del test
   - Métodos recomendados para análisis
   - Implicaciones para inferencia estadística

---

## 🎯 Interpretación General

### Buena Calidad de Datos
- ✅ Valores faltantes < 5%
- ✅ Consistencia > 95%
- ✅ Outliers < 10%
- ✅ Rango válido [0-100%]

### Distribución Normal
- ✅ p-valor ≥ 0.05 (Shapiro-Wilk)
- ✅ |Skewness| < 0.5
- ✅ |Kurtosis| < 1
- ✅ Puntos cerca de línea en Q-Q plot

### Distribución Anómala
- ⚠️ p-valor < 0.05 (NO es normal)
- ⚠️ Asimetría pronunciada
- ⚠️ Puntos separados de línea en Q-Q plot
- ⚠️ Recomendación: Usar métodos no-paramétricos

---

## 📊 Comparación con Otros Análisis

Este análisis sigue la **misma metodología** que:
- Análisis de Satisfacción (alumnos y profesores)
- Análisis de Empleabilidad (no desempleados)
- Análisis de Autoeficacia

Permitiendo **comparaciones coherentes** entre variables.

---

## 📚 Referencias

### Estadística Descriptiva
- Mendenhall, Beaver & Beaver (2021). "Introduction to Probability and Statistics"
- Moore & McCabe (2016). "Introduction to the Practice of Statistics"

### Tests de Normalidad
- Shapiro-Wilk: Shapiro & Wilk (1965)
- Kolmogorov-Smirnov: Kolmogorov (1933)

### Detección de Outliers
- IQR: Tukey (1977)
- Z-score: Estándar en estadística
- Isolation Forest: Liu et al. (2008)

---

## ✅ Checklist de Ejecución

- [x] Librerías importadas
- [x] Datos cargados
- [x] Estadísticas descriptivas calculadas
- [x] Tests de distribución aplicados
- [x] Gráficos generados (300 DPI)
- [x] Outliers detectados
- [x] Calidad de datos evaluada
- [x] Resumen ejecutivo generado

---

**Última actualización**: 24 de octubre de 2025
**Responsable**: Análisis Automatizado
