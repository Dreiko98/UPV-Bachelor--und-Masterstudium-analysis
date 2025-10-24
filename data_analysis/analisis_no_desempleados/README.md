# Análisis Univariante: No Desempleados / Empleabilidad

## Descripción

Este análisis realiza un estudio univariante exhaustivo de las métricas de empleabilidad y no desempleo de estudiantes egresados de la UPV, siguiendo la misma metodología que el análisis de satisfacción.

## Estructura del Análisis

### 1. **Carga de Datos**
- Importación del panel maestro consolidado (`panel_maestro_UPV.csv`)
- Exploración inicial de las columnas de empleabilidad

### 2. **Estadísticas Descriptivas**
Se proporcionan medidas completas para cada variable:
- **Medidas de Tendencia Central**: Media, Mediana, Moda
- **Medidas de Dispersión**: Desviación Estándar, Varianza, Rango, IQR
- **Cuartiles**: Q1, Q2, Q3
- **Extremos**: Mínimo, Máximo, Percentiles 5 y 95

### 3. **Análisis de Distribución**
- **Asimetría (Skewness)**: Indica si la distribución está sesgada
- **Curtosis**: Evalúa la concentración de datos en las colas
- **Test de Normalidad**:
  - Shapiro-Wilk (para n ≤ 5000)
  - Kolmogorov-Smirnov

### 4. **Análisis de Nivel de Empleabilidad**
- Distribución de las categorías cualitativas
- Frecuencias absolutas y porcentuales

### 5. **Visualizaciones**
Se generan 6 gráficos PNG principales:

1. **01_histogramas_densidad_empleabilidad.png**: Histogramas y curvas KDE
2. **02_boxplots_empleabilidad.png**: Box plots para detección de outliers
3. **03_violinplots_empleabilidad.png**: Distribuciones detalladas con violin plots
4. **04_qqplots_empleabilidad.png**: Q-Q plots para verificación de normalidad
5. **05_comparacion_no_desempleados_desempleados.png**: Comparación entre variables complementarias
6. **06_distribucion_nivel_empleabilidad.png**: Gráfico de barras de categorías

### 6. **Detección de Outliers**
Se utilizan tres métodos complementarios:
- **IQR (Rango Intercuartílico)**: Límites en Q1 ± 1.5×IQR
- **Z-score**: Detecta puntos con |Z| > 3
- **Isolation Forest**: Algoritmo de aprendizaje no supervisado (5% contaminación)

### 7. **Evaluación de Calidad de Datos**
- Análisis de valores faltantes
- Detección de duplicados
- Verificación de consistencia (suma ≈ 100%)
- Validación de rangos [0-100]

### 8. **Resumen Ejecutivo**
Síntesis de hallazgos principales:
- Tasa general de empleabilidad
- Características de distribución
- Categorización de niveles
- Calidad de datos
- Presencia de outliers
- Características de normalidad

## Variables Analizadas

### Variables Numéricas
- **porcentaje_no_desempleados**: Porcentaje de egresados que no están desempleados (0-100%)
- **porcentaje_desempleados**: Porcentaje de egresados que están desempleados (0-100%)

### Variable Categórica
- **nivel_empleabilidad**: Clasificación cualitativa de la empleabilidad

## Archivos Generados

```
analisis_no_desempleados/
├── 01_analisis_univariante_no_desempleados.ipynb    # Notebook principal
├── 01_histogramas_densidad_empleabilidad.png
├── 02_boxplots_empleabilidad.png
├── 03_violinplots_empleabilidad.png
├── 04_qqplots_empleabilidad.png
├── 05_comparacion_no_desempleados_desempleados.png
├── 06_distribucion_nivel_empleabilidad.png
└── README.md                                          # Este archivo
```

## Interpretación de Resultados

### Simetría de Distribución
- **Valor < -0.5**: Sesgada a la izquierda
- **Valor entre -0.5 y 0.5**: Aproximadamente simétrica
- **Valor > 0.5**: Sesgada a la derecha

### Test de Normalidad
- **p-valor < 0.05**: Los datos NO siguen distribución normal
- **p-valor ≥ 0.05**: Los datos SÍ siguen distribución normal

### Detección de Outliers
- Casos donde los valores se desvían significativamente del resto
- Pueden indicar programas con empleabilidad atípica
- Se utilizan múltiples métodos para mayor robustez

## Notas Metodológicas

1. Se utiliza la metodología identical a la del análisis de satisfacción para garantizar coherencia
2. Los análisis utilizan métodos estadísticos complementarios para validación cruzada
3. Se documentan todos los hallazgos con explicaciones interpretativas
4. Los gráficos se generan con alta resolución (300 dpi) para presentaciones

## Requisitos

- pandas
- numpy
- matplotlib
- seaborn
- scipy
- scikit-learn

## Cómo ejecutar

1. Abrir el notebook `01_analisis_univariante_no_desempleados.ipynb`
2. Ejecutar todas las celdas secuencialmente
3. Los gráficos se guardarán automáticamente en la misma carpeta
