# Análisis Univariante: Autoeficacia

## 📋 Descripción General

Este análisis realiza un estudio univariante exhaustivo de la **autoeficacia** de estudiantes en programas académicos de la UPV. La autoeficacia se refiere a la percepción que tienen los estudiantes sobre su capacidad para realizar tareas y alcanzar objetivos académicos.

## 🎯 Objetivos

- Analizar la distribución de autoeficacia en 3 años
- Identificar niveles de autoeficacia (muy baja, baja, media, alta, muy alta)
- Detectar patrones y anomalías
- Evaluar la calidad de los datos
- Proporcionar visualizaciones comprensibles
- Analizar relaciones con otras variables

## 📊 Variables Analizadas

### Variables Principales
1. **autoeficacia_3_anos** (0-10)
   - Puntuación de autoeficacia a 3 años (escala continua)
   - Tipo: Numérica continua
   - Rango: [0.0, 10.0]
   - Interpretación: Mayor valor = Mayor percepción de autoeficacia

2. **nivel_autoeficacia** (categórica)
   - Categorización de autoeficacia
   - Categorías: Muy baja, Baja, Media, Alta, Muy alta
   - Relación: Corresponde a rango de autoeficacia_3_anos

## 📁 Estructura del Análisis

### Notebook Principal
- `01_analisis_univariante_autoeficacia.ipynb`

### Gráficos Generados
1. `01_histogramas_densidad_autoeficacia.png` - Distribución y densidad
2. `02_boxplots_autoeficacia.png` - Detección de outliers
3. `03_violinplots_autoeficacia.png` - Distribución detallada
4. `04_qqplots_autoeficacia.png` - Verificación de normalidad
5. `05_distribucion_nivel_autoeficacia.png` - Análisis categórico
6. `06_autoeficacia_por_categoria.png` - Análisis por año/centro

### Documentación
- `README.md` - Este archivo
- `ESTRUCTURA_ANALISIS_UNIVARIANTE.md` - Metodología detallada
- `RESUMEN_ANALISIS_AUTOEFICACIA.md` - Hallazgos principales
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
- Distribuciones categóricas

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
jupyter notebook data_analysis/analisis_autoeficacia/01_analisis_univariante_autoeficacia.ipynb
```

### Opción 2: Ejecutar con nbconvert
```bash
# Ejecutar todas las celdas
jupyter nbconvert --execute 01_analisis_univariante_autoeficacia.ipynb
```

### Opción 3: Abrir en VS Code
- Abrir el notebook directamente con la extensión Jupyter de VS Code
- Ejecutar las celdas con Shift+Enter

## 📈 Interpretación de Resultados

### Escala de Autoeficacia
- **0-2**: Muy baja autoeficacia
- **2-4**: Baja autoeficacia
- **4-6**: Media autoeficacia
- **6-8**: Alta autoeficacia
- **8-10**: Muy alta autoeficacia

### Distribución
- **Simétrica (|Skewness| < 0.5)**: Distribución equilibrada
- **Sesgada positiva**: Mayoría con autoeficacia alta
- **Sesgada negativa**: Mayoría con autoeficacia baja

### Normalidad
- **p-valor < 0.05**: NO es normal (rechazar H0)
- **p-valor ≥ 0.05**: Aproximadamente normal

### Outliers
- **IQR**: Valores fuera de [Q1-1.5×IQR, Q3+1.5×IQR]
- **Z-score**: |Z| > 3 indica outlier
- **Isolation Forest**: Anomalías según algoritmo de aislamiento

## 📊 Comparación con Otros Análisis

- **vs. Análisis de Satisfacción**: Relación entre satisfacción y autoeficacia
- **vs. Análisis de Empleabilidad**: Efecto de autoeficacia en empleabilidad
- **vs. Análisis de Abandono**: Relación entre autoeficacia y permanencia

## 💡 Notas Importantes

1. Los datos pueden contener valores faltantes (NaN) - ~19% en autoeficacia
2. La autoeficacia es una percepción subjetiva, no una medida objetiva
3. Se recomienda usar métodos no-paramétricos si no hay normalidad
4. Los gráficos están en resolución 300 DPI (apto para impresión)

## ✅ Estado

- ✅ Notebook creado
- ✅ Documentación completa
- ⏳ A ejecutar y generar gráficos

## 📞 Contacto

Para más información sobre la metodología o los resultados, consulte:
- `ESTRUCTURA_ANALISIS_UNIVARIANTE.md`
- `RESUMEN_ANALISIS_AUTOEFICACIA.md`
