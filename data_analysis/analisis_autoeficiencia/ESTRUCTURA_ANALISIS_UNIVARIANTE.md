# Estructura del Análisis Univariante: Autoeficacia

## 📋 Resumen Ejecutivo

Este documento describe la estructura metodológica del análisis univariante de **autoeficacia** de estudiantes en programas académicos de la UPV. El análisis sigue un enfoque sistemático en 7 secciones, con el objetivo de proporcionar una comprensión exhaustiva de esta variable.

## 🎯 Objetivos del Análisis

1. **Caracterizar la distribución** de autoeficacia en la población estudiantil
2. **Identificar patrones** y relaciones con categorías de nivel
3. **Detectar anomalías** (outliers) que puedan afectar el análisis
4. **Evaluar la calidad** de los datos de autoeficacia
5. **Proporcionar insights** para toma de decisiones académicas
6. **Generar visualizaciones** profesionales para presentación

## 📊 Variables Analizadas

### Variable Principal: `autoeficacia_3_anos`
- **Tipo**: Numérica continua
- **Escala**: 0 a 10
- **Interpretación**: Percepción del estudiante sobre su capacidad para realizar tareas académicas
- **Datos válidos**: 393 de 483 registros (81.4%)
- **Datos faltantes**: 90 registros (18.6%)

### Variable Complementaria: `nivel_autoeficacia`
- **Tipo**: Categórica nominal
- **Categorías**: 5 niveles ordinales
  - Muy baja
  - Baja
  - Media
  - Alta
  - Muy alta
- **Relación**: Clasificación cualitativa de la variable numérica

## 📐 Secciones del Análisis

### Sección 1: Carga y Exploración de Datos

**Objetivo**: Verificar la disponibilidad y estructura de los datos

**Procedimiento**:
1. Cargar dataset `panel_maestro_UPV.csv`
2. Verificar dimensiones (filas × columnas)
3. Listar todas las columnas disponibles
4. Contar registros válidos y faltantes por variable
5. Mostrar primeras filas del dataset

**Salida esperada**:
- Dimensión del dataset
- Tipo de datos de cada variable
- Recuento de datos válidos/faltantes
- Vista previa de datos

### Sección 2: Estadísticas Descriptivas

**Objetivo**: Resumir numéricamente la variable de autoeficacia

**Medidas calculadas**:

#### Tendencia Central
- **Media (μ)**: Promedio aritmético de autoeficacia
- **Mediana (M)**: Valor central cuando se ordena de menor a mayor
- **Moda (Mo)**: Valor más frecuente
- **Interpretación**: Dónde se concentra la autoeficacia

#### Dispersión
- **Desviación Estándar (σ)**: Variabilidad alrededor de la media
- **Varianza (σ²)**: Cuadrado de la desviación estándar
- **Rango**: Diferencia entre máximo y mínimo
- **Interpretación**: Cuánto varían los estudiantes en autoeficacia

#### Posición (Percentiles)
- **Q1 (25%)**: Primer cuartil
- **Q2 (50%)**: Mediana
- **Q3 (75%)**: Tercer cuartil
- **IQR**: Rango intercuartílico (Q3 - Q1)
- **Percentiles 10, 90**: Extremos
- **Interpretación**: Distribución en la población

### Sección 3: Análisis de Distribución

**Objetivo**: Determinar si los datos siguen una distribución normal y caracterizar su forma

**Medidas de forma**:

#### Asimetría (Skewness)
- **Fórmula**: γ₁ = E[(X - μ)³] / σ³
- **Rango**: -∞ a +∞
- **Interpretación**:
  - |γ₁| < 0.5: Distribución simétrica
  - γ₁ > 0.5: Sesgo a la derecha (cola positiva)
  - γ₁ < -0.5: Sesgo a la izquierda (cola negativa)

#### Curtosis (Kurtosis)
- **Fórmula**: β₂ = E[(X - μ)⁴] / σ⁴ - 3
- **Rango**: -∞ a +∞
- **Interpretación**:
  - β₂ ≈ 0: Distribución normal (mesocúrtica)
  - β₂ > 0.5: Picos pronunciados (leptocúrtica)
  - β₂ < -0.5: Distribución plana (platicúrtica)

### Sección 4: Tests de Normalidad

**Objetivo**: Verificar si los datos provienen de una distribución normal

#### Test de Shapiro-Wilk
- **Hipótesis nula (H₀)**: Los datos siguen una distribución normal
- **Estadístico**: W (0 a 1)
- **P-valor**: Probabilidad de observar W si H₀ es verdadera
- **Regla de decisión**:
  - Si p < 0.05: RECHAZAR H₀ → Datos NO normales
  - Si p ≥ 0.05: NO rechazar H₀ → Datos aproximadamente normales

#### Test de Kolmogorov-Smirnov
- **Hipótesis nula**: Datos siguen distribución normal
- **Estadístico**: D (máxima distancia entre CDF observada y teórica)
- **Interpretación**: Similar a Shapiro-Wilk

**Implicaciones**:
- Si datos NO son normales:
  - Usar tests no-paramétricos para comparaciones
  - Transformaciones de datos pueden ser necesarias
  - Métodos como Kruskal-Wallis en lugar de ANOVA

### Sección 5: Visualizaciones

**Objetivo**: Presentar gráficamente la distribución y características de autoeficacia

#### Gráfico 1: Histogramas con Densidad KDE
- **Componentes**:
  - Histograma: Distribución frecuencia de datos
  - Curva KDE: Estimación suave de densidad
  - Línea media: Indicador de promedio
  - Línea mediana: Indicador de mediana
- **Interpretación**: Visualiza forma, simetría, multimodalidad

#### Gráfico 2: Histograma Categórico
- **Componentes**: Barras de frecuencia por nivel de autoeficacia
- **Interpretación**: Cuántos estudiantes en cada categoría

#### Gráfico 3: Box Plots
- **Componentes**:
  - Caja: Contiene 50% de datos (Q1 a Q3)
  - Línea central: Mediana
  - Bigotes: Extensión de datos dentro de 1.5 × IQR
  - Puntos: Outliers potenciales
- **Interpretación**: Visualiza quartiles, mediana, outliers

#### Gráfico 4: Box Plots por Nivel
- **Componentes**: Box plots comparativos para cada nivel de autoeficacia
- **Interpretación**: Cómo varía la distribución entre categorías

#### Gráfico 5: Violin Plots
- **Componentes**: Distribución simétrica en forma de violín
- **Interpretación**: Densidad detallada de distribución

#### Gráfico 6: Q-Q Plots
- **Componentes**:
  - Eje X: Quantiles teóricos de distribución normal
  - Eje Y: Quantiles observados en datos
  - Línea de referencia: Diagonal
- **Interpretación**: Si puntos siguen diagonal → datos normales

#### Gráfico 7: Distribución de Niveles
- **Tipo**: Gráfico de pie
- **Componentes**: Porcentaje en cada categoría de autoeficacia
- **Interpretación**: Proporción relativa de estudiantes por nivel

#### Gráfico 8: Autoeficacia Media por Nivel
- **Componentes**: Barras con media y desviación estándar
- **Interpretación**: Nivel promedio por categoría

### Sección 6: Detección de Outliers

**Objetivo**: Identificar observaciones anómalas que pueden afectar análisis

#### Método 1: IQR (Rango Intercuartílico)
- **Fórmula**:
  - Lower bound = Q1 - 1.5 × IQR
  - Upper bound = Q3 + 1.5 × IQR
- **Criterio**: Outlier si X < Lower o X > Upper
- **Ventaja**: Robusto, fácil de interpretar
- **Aplicación**: Recomendado para análisis exploratorio

#### Método 2: Z-score
- **Fórmula**: Z = (X - μ) / σ
- **Criterio**: Outlier si |Z| > 3 (aprox. 99.7% de confianza)
- **Ventaja**: Usa desviación estándar
- **Limitación**: Puede ser afectado por outliers extremos

#### Método 3: Isolation Forest
- **Tipo**: Algoritmo de machine learning
- **Principio**: Identifica puntos aislados del resto
- **Ventaja**: Detecta outliers multidimensionales
- **Parámetro**: contamination (proporción esperada de outliers)

**Recomendación**: Usar método IQR como estándar, validar con Z-score

### Sección 7: Evaluación de Calidad de Datos

**Objetivo**: Evaluar la confiabilidad de los datos para análisis

#### Datos Faltantes
- **Recuento**: Número de valores NaN por variable
- **Porcentaje**: Proporción de datos faltantes
- **Evaluación**:
  - 0-5%: Excelente (ignorable)
  - 5-10%: Bueno
  - 10-20%: Aceptable
  - >20%: Problemático

#### Duplicados
- **Recuento**: Número de filas completamente idénticas
- **Evaluación**: 0 duplicados es ideal

#### Valores Únicos
- **Recuento**: Número de valores diferentes
- **Evaluación**: Valida que variable es continua/categórica

#### Validación de Rango
- **Autoeficacia numérica**: Debe estar en [0, 10]
- **Niveles**: Solo debe contener 5 categorías válidas
- **Evaluación**: Asegura que no hay errores de entrada

#### Correlación entre Variables
- **Cálculo**: Correlación de Pearson entre autoeficacia numérica y categórica
- **Esperado**: r > 0.80 (correlación fuerte positiva)
- **Evaluación**: Si r < 0.80, revisar consistencia de datos

## 📈 Interpretación de Resultados

### Escala de Autoeficacia

| Rango | Interpretación | Implicación |
|-------|----------------|-------------|
| 0-2 | Muy baja autoeficacia | Estudiantes con baja confianza en capacidades |
| 2-4 | Baja autoeficacia | Desafíos académicos potenciales |
| 4-6 | Media autoeficacia | Autoeficacia normal/promedio |
| 6-8 | Alta autoeficacia | Confianza en capacidades académicas |
| 8-10 | Muy alta autoeficacia | Estudiantes con fuerte confianza |

### Indicadores de Calidad

| Indicador | Bueno | Aceptable | Problema |
|-----------|-------|-----------|----------|
| Datos válidos | > 95% | 80-95% | < 80% |
| Normalidad (Shapiro-Wilk) | p ≥ 0.05 | - | p < 0.05 |
| Outliers (IQR) | < 5% | 5-10% | > 10% |
| Asimetría | \|γ₁\| < 0.5 | \|γ₁\| < 1 | \|γ₁\| ≥ 1 |
| Correlación variables | r > 0.80 | r > 0.60 | r < 0.60 |

## 🔍 Archivos Generados

### Visualizaciones (PNG, 300 DPI)
1. `01_histogramas_densidad_autoeficacia.png` - Distribución general
2. `02_boxplots_autoeficacia.png` - Outliers y medidas de posición
3. `03_violinplots_autoeficacia.png` - Distribución detallada
4. `04_qqplots_autoeficacia.png` - Verificación de normalidad
5. `05_distribucion_nivel_autoeficacia.png` - Proporción por nivel
6. `06_autoeficacia_por_categoria.png` - Medias por nivel

### Documentación
- `README.md` - Descripción general
- `ESTRUCTURA_ANALISIS_UNIVARIANTE.md` - Este documento
- `RESUMEN_ANALISIS_AUTOEFICACIA.md` - Hallazgos principales
- `INSTRUCCIONES_EJECUCION.md` - Cómo ejecutar el análisis

## ✅ Checklist de Validación

- [ ] Datos cargados correctamente (483 registros)
- [ ] Variables de autoeficacia identificadas
- [ ] Gráficos generados a 300 DPI
- [ ] Estadísticas calculadas sin errores
- [ ] Tests de normalidad ejecutados
- [ ] Outliers detectados
- [ ] Calidad de datos evaluada
- [ ] Documentación completa

## 💡 Notas Importantes

1. **Datos faltantes**: 18.6% de datos faltantes en autoeficacia (superior a otras variables)
2. **Normalidad**: Validar si datos cumplen con supuestos para pruebas estadísticas
3. **Interpretación**: Autoeficacia es percepción subjetiva, no medida objetiva
4. **Contexto**: Considerar variables adicionales para análisis causal
5. **Reproducibilidad**: Todos los resultados son reproducibles con datos y código incluidos

## 📚 Referencias Metodológicas

- Shapiro, S. S., & Wilk, M. B. (1965). An analysis of variance test for normality. Biometrika, 52(3/4), 591-611.
- Tukey, J. W. (1977). Exploratory data analysis. Addison-Wesley.
- Liu, F. T., Ting, K. M., & Zhou, Z. H. (2008). Isolation forest. ICDM, 8, 413-422.

## 👥 Información de Contacto

Para preguntas o aclaraciones sobre este análisis, consulte:
- Documentación: `README.md`
- Resumen: `RESUMEN_ANALISIS_AUTOEFICACIA.md`
- Ejecución: `INSTRUCCIONES_EJECUCION.md`
