# Análisis Univariante: Tasa de Abandono

## 📋 Descripción General

Este análisis realiza un estudio univariante exhaustivo de la **tasa de abandono** en los programas académicos de la UPV. Se centra en comprender la distribución, características estadísticas, anomalías y patrones de los estudiantes que abandonan sus estudios.

## 🎯 Objetivos

- Analizar la distribución de la tasa de abandono
- Identificar características estadísticas (media, mediana, dispersión)
- Detectar outliers y anomalías
- Evaluar la calidad de los datos
- Proporcionar visualizaciones comprensibles
- Comparar con tasas de permanencia

## 📊 Variables Analizadas

### Variables Principales
1. **tasa_abandono** (0-100%)
   - Porcentaje de estudiantes que abandonan el programa
   - Tipo: Numérica continua
   - Rango: [0.0, 100.0]

2. **tasa_permanencia** (0-100%)
   - Porcentaje de estudiantes que continúan en el programa
   - Tipo: Numérica continua
   - Relación: tasa_abandono + tasa_permanencia = 100% (teórico)

## 📁 Estructura del Análisis

### Notebook Principal
- `01_analisis_univariante_tasa_abandono.ipynb`

### Gráficos Generados
1. `01_histogramas_densidad_tasa_abandono.png` - Distribución y densidad
2. `02_boxplots_tasa_abandono.png` - Detección de outliers
3. `03_violinplots_tasa_abandono.png` - Distribución detallada
4. `04_qqplots_tasa_abandono.png` - Verificación de normalidad
5. `05_comparacion_abandono_permanencia.png` - Relación entre variables
6. `06_distribucion_abandono_por_categoria.png` - Análisis por categorías

### Documentación
- `README.md` - Este archivo
- `ESTRUCTURA_ANALISIS_UNIVARIANTE.md` - Metodología detallada
- `RESUMEN_ANALISIS_ABANDONO.md` - Hallazgos principales
- `INSTRUCCIONES_EJECUCION.md` - Guía paso a paso

## 🔍 Secciones del Notebook

### 1. Carga y Exploración de Datos
- Lectura del panel maestro
- Información general del dataset
- Primeras filas y columnas relevantes

### 2. Estadísticas Descriptivas
- Media, mediana, moda
- Desviación estándar, varianza
- Rango e IQR
- Cuartiles y percentiles

### 3. Análisis de Distribución
- Asimetría (Skewness)
- Curtosis (Kurtosis)
- Tests de normalidad (Shapiro-Wilk, Kolmogorov-Smirnov)

### 4. Visualizaciones
- Histogramas con curvas KDE
- Box Plots
- Violin Plots
- Q-Q Plots
- Scatter plots comparativos

### 5. Detección de Outliers
- Método IQR (Rango Intercuartílico)
- Método Z-score
- Método Isolation Forest

### 6. Evaluación de Calidad de Datos
- Valores faltantes
- Duplicados
- Consistencia de datos
- Validación de rangos

### 7. Resumen Ejecutivo
- Hallazgos principales
- Conclusiones

## 🛠️ Requisitos

### Dependencias Python
- pandas
- numpy
- matplotlib
- seaborn
- scipy
- scikit-learn
- jupyter

### Datos Necesarios
- `data_extraction/panel_maestro_UPV.csv`

## 🚀 Cómo Usar

### Opción 1: Ejecutar con Jupyter Notebook
```bash
# Activar el entorno virtual
source venv/bin/activate

# Abrir Jupyter
jupyter notebook data_analysis/analisis_tasa_abandono/01_analisis_univariante_tasa_abandono.ipynb
```

### Opción 2: Ejecutar con nbconvert
```bash
# Ejecutar todas las celdas
jupyter nbconvert --execute 01_analisis_univariante_tasa_abandono.ipynb
```

### Opción 3: Abrir en VS Code
- Abrir el notebook directamente con la extensión Jupyter de VS Code
- Ejecutar las celdas con Shift+Enter

## 📈 Interpretación de Resultados

### Distribución
- **Simétrica (|Skewness| < 0.5)**: Distribución equilibrada
- **Sesgada positiva**: Más valores bajos, cola derecha larga
- **Sesgada negativa**: Más valores altos, cola izquierda larga

### Normalidad
- **p-valor < 0.05**: NO es normal (rechazar H0)
- **p-valor ≥ 0.05**: Aproximadamente normal

### Outliers
- **IQR**: Valores fuera de [Q1-1.5×IQR, Q3+1.5×IQR]
- **Z-score**: |Z| > 3 indica outlier
- **Isolation Forest**: Anomalías según algoritmo de aislamiento

## 📊 Comparación con Otros Análisis

- **vs. Análisis de Satisfacción**: Relación entre satisfacción y abandono
- **vs. Análisis de Empleabilidad**: Relación entre permanencia y empleabilidad
- **vs. Análisis de Autoeficacia**: Efecto de la autoeficacia en abandono

## 💡 Notas Importantes

1. Los datos pueden contener valores faltantes (NaN)
2. La tasa de abandono puede no ser exactamente complementaria a permanencia
3. Se recomienda usar métodos no-paramétricos si no hay normalidad
4. Los gráficos están en resolución 300 DPI (apto para impresión)

## ✅ Estado

- ✅ Notebook creado
- ✅ Documentación completa
- ⏳ A ejecutar y generar gráficos

## 📞 Contacto

Para más información sobre la metodología o los resultados, consulte:
- `ESTRUCTURA_ANALISIS_UNIVARIANTE.md`
- `RESUMEN_ANALISIS_ABANDONO.md`
