# 📊 Estructura de Análisis Univariante

Documento que define la estructura estándar para todos los análisis univariantes en este proyecto.

## 🎯 Template Estándar

Cada análisis univariante debe incluir:

### 1. Cargar y Explorar (Import + Load)
```python
# - Importar librerías
# - Cargar panel_maestro desde ../data_extraction/panel_maestro_UPV.csv
# - Mostrar primeras filas con las variables a analizar
# - Verificar tipos de datos
# - Mostrar resumen de faltantes
```

### 2. Estadísticas Descriptivas
```python
# Para cada variable:
#   - Media, mediana, moda
#   - Desviación estándar, varianza
#   - Min, max, rango, IQR
#   - Q1, Q2, Q3, percentiles 5-95
#   - Valores faltantes (%)
```

### 3. Análisis de Distribución
```python
# Para cada variable:
#   - Sesgo (Skewness) e interpretación
#   - Curtosis (Kurtosis) e interpretación
#   - Test Shapiro-Wilk (si n ≤ 5000)
#   - Test Kolmogorov-Smirnov
#   - Conclusión sobre normalidad
```

### 4. Visualizaciones (5 Gráficos)

#### Gráfico 1: Histogramas + KDE
```python
# - 2x2 grid de subplots (o 2x1 si menos variables)
# - Histograma con densidad KDE
# - Línea de media y mediana
# - Etiquetas con n y valores faltantes
```

#### Gráfico 2: Box Plots
```python
# - Detección de outliers por IQR
# - Mostrar Q1, Q3, IQR en título
# - Marcar outliers en rojo
# - Incluir mediana en rojo
```

#### Gráfico 3: Violin Plots
```python
# - Distribución simétrica
# - Mostrar media y mediana
# - Útil para ver multimodalidad
```

#### Gráfico 4: Q-Q Plots
```python
# - Verificar normalidad visualmente
# - Comparar contra distribución normal
# - Línea de referencia roja
```

#### Gráfico 5: Gráfico Especial (según contexto)
```python
# - Para variables de abandono: Scatter % abandono vs permanencia
# - Para variables categóricas: Frecuencias
# - Para variables de empleo: Scatter empleo vs no-empleo
# - Para autoeficacia: Scatter años vs nivel
```

### 5. Detección de Outliers
```python
# Método 1: IQR
#   - Límites: Q1 - 1.5*IQR, Q3 + 1.5*IQR
#   - Contar outliers
#   - Listar valores extremos

# Método 2: Z-score
#   - |Z| > 3 para outliers extremos
#   - Contar

# Método 3: Isolation Forest
#   - Contamination = 0.05 (5%)
#   - Detectar anomalías
```

### 6. Evaluación de Calidad
```python
# - Valores faltantes (lista por variable)
# - Duplicados (filas y valores)
# - Consistencia de cálculos (si aplica)
# - Rango de valores válido
# - Integridad general (%)
```

### 7. Resumen Ejecutivo
```python
# - Nivel general de la métrica
# - Características de distribución
# - Calidad de datos
# - Outliers principales
# - Normalidad y recomendaciones
```

---

## 📋 Variables por Análisis

### 1. SATISFACCIÓN ✅ (Completado)
- `satisfaccion_alumnos` (0-10)
- `satisfaccion_profesores` (0-10)
- `diferencia_satis` (calculada)
- `satisfaccion_promedio` (calculada)

### 2. ABANDONO (Pendiente)
- `tasa_abandono` (0-100%)
- `tasa_permanencia` (calculada como 100 - abandono)

### 3. AUTOEFICACIA (Pendiente)
- `autoeficacia_3_anos` (0-10)
- `nivel_autoeficacia` (categórica)

### 4. EMPLEABILIDAD (Pendiente)
- `porcentaje_no_desempleados` (0-100%)
- `porcentaje_desempleados` (calculada)
- `nivel_empleabilidad` (categórica)

---

## 🎨 Estilo de Gráficos

**Configuración Global:**
```python
sns.set_style('whitegrid')
plt.rcParams['figure.figsize'] = (14, 8)
plt.rcParams['font.size'] = 10
```

**Colores:**
- Histogramas/Densidad: `steelblue` + `red` KDE
- Box plots: `lightblue` boxes, `red` mediana
- Violin plots: `steelblue`
- Q-Q plots: `blue` puntos, `red` línea
- Outliers: `red`

**Resolución:**
- `dpi=300` para todos los gráficos (publicable)
- `bbox_inches='tight'` para márgenes limpios

---

## 📊 Nombres de Archivos

Patrón: `NN_tipo_metrica.png` o `NN_analisis_univariante_metrica.ipynb`

Ejemplos:
- `01_analisis_univariante_satisfaccion.ipynb` ✅
- `01_histogramas_densidad_satisfaccion.png` ✅
- `02_analisis_univariante_abandono.ipynb` (próximo)
- `02_histogramas_densidad_abandono.png` (próximo)
- etc.

---

## 🔄 Checklist para Nuevo Análisis

- [ ] Crear notebook nuevo: `0N_analisis_univariante_METRICA.ipynb`
- [ ] Cargar e importar datos correctamente
- [ ] Calcular estadísticas descriptivas
- [ ] Realizar análisis de distribución
- [ ] Generar 5 gráficos con nombres consistentes
- [ ] Detectar outliers con 3 métodos
- [ ] Evaluar calidad de datos
- [ ] Generar resumen ejecutivo
- [ ] Crear `RESUMEN_ANALISIS_METRICA.md`
- [ ] Añadir sección a `README.md`
- [ ] Ejecutar todas las celdas sin errores
- [ ] Guardar y versionar

---

## 📁 Estructura Final de data_analysis/

```
data_analysis/
├── README.md
├── ESTRUCTURA_ANALISIS_UNIVARIANTE.md (este archivo)

├── # SATISFACCIÓN ✅
├── 01_analisis_univariante_satisfaccion.ipynb
├── 01_histogramas_densidad_satisfaccion.png
├── 02_boxplots_satisfaccion.png
├── 03_violinplots_satisfaccion.png
├── 04_qqplots_satisfaccion.png
├── 05_comparacion_alumnos_profesores.png
└── RESUMEN_ANALISIS_SATISFACCION.md

├── # ABANDONO (próximo)
├── 02_analisis_univariante_abandono.ipynb
├── 06_histogramas_densidad_abandono.png
├── 07_boxplots_abandono.png
├── 08_violinplots_abandono.png
├── 09_qqplots_abandono.png
├── 10_comparacion_abandono_permanencia.png
└── RESUMEN_ANALISIS_ABANDONO.md

└── ... (autoeficacia, empleabilidad)
```

---

## 🚀 Instrucciones para Siguiente Análisis

Para crear el análisis de ABANDONO:

1. **Copiar estructura:** Usar `01_analisis_univariante_satisfaccion.ipynb` como template
2. **Cambiar variables:**
   - `satisfaction_cols` → `abandono_cols`
   - Variables: `['tasa_abandono', 'tasa_permanencia']`
3. **Ajustar títulos y etiquetas** para abandonado
4. **Generar gráficos especiales** (ej: scatter abandono vs permanencia)
5. **Adaptar interpretaciones** al contexto
6. **Documentar hallazgos** en resumen
7. **Numerar gráficos:** 06-10 (después de 05 de satisfacción)

---

**Última actualización:** 21 de octubre de 2025
**Autor:** Análisis UPV
**Estado:** Template validado ✅
