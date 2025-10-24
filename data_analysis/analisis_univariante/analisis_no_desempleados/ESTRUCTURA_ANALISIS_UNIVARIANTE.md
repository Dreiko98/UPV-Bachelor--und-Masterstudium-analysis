# ESTRUCTURA DE ANÁLISIS UNIVARIANTE - NO DESEMPLEADOS/EMPLEABILIDAD

## 📋 Flujo de Análisis

```
┌─────────────────────────────────────────────────────────────┐
│ 1. CARGA Y EXPLORACIÓN DE DATOS                             │
│ ─────────────────────────────────────────────────────────── │
│ • Importar panel maestro                                     │
│ • Verificar estructura y dimensiones                         │
│ • Identificar variables de empleabilidad                     │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ 2. ESTADÍSTICAS DESCRIPTIVAS                                │
│ ─────────────────────────────────────────────────────────── │
│ • Media, Mediana, Moda                                      │
│ • Desviación Estándar, Varianza                             │
│ • Cuartiles (Q1, Q2, Q3)                                    │
│ • Rango, IQR, Percentiles                                   │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ 3. ANÁLISIS DE DISTRIBUCIÓN                                 │
│ ─────────────────────────────────────────────────────────── │
│ • Asimetría (Skewness)                                      │
│ • Curtosis                                                  │
│ • Test Shapiro-Wilk                                         │
│ • Test Kolmogorov-Smirnov                                   │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ 4. CATEGORÍAS DE EMPLEABILIDAD                              │
│ ─────────────────────────────────────────────────────────── │
│ • Distribución de niveles (Muy buena, Buena, etc.)          │
│ • Frecuencias absolutas y relativas                         │
│ • Valores faltantes                                         │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ 5. VISUALIZACIONES                                          │
│ ─────────────────────────────────────────────────────────── │
│ • Histogramas + Densidad KDE                                │
│ • Box Plots (detección de outliers)                         │
│ • Violin Plots (distribuciones detalladas)                  │
│ • Q-Q Plots (verificación normalidad)                       │
│ • Scatter + Comparativa                                     │
│ • Gráfico de barras (niveles)                               │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ 6. DETECCIÓN DE OUTLIERS                                    │
│ ─────────────────────────────────────────────────────────── │
│ • Método IQR                                                │
│ • Método Z-score                                            │
│ • Método Isolation Forest                                   │
│ • Identificación de programas atípicos                      │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ 7. EVALUACIÓN DE CALIDAD                                    │
│ ─────────────────────────────────────────────────────────── │
│ • Valores faltantes                                         │
│ • Duplicados                                                │
│ • Consistencia (suma ≈ 100%)                                │
│ • Rango válido [0-100]                                      │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ 8. RESUMEN EJECUTIVO                                        │
│ ─────────────────────────────────────────────────────────── │
│ • Hallazgos principales                                     │
│ • Síntesis de distribuciones                                │
│ • Conclusiones sobre empleabilidad                          │
└─────────────────────────────────────────────────────────────┘
```

## 📊 Variables Analizadas

### Numéricas
| Variable | Tipo | Rango | Interpretación |
|----------|------|-------|----------------|
| `porcentaje_no_desempleados` | Numérica | 0-100% | % de egresados empleados |
| `porcentaje_desempleados` | Numérica | 0-100% | % de egresados desempleados |

### Categóricas
| Variable | Tipo | Valores | Interpretación |
|----------|------|--------|----------------|
| `nivel_empleabilidad` | Categórica | Muy buena, Buena, Regular, Mala | Clasificación cualitativa |

## 📈 Visualizaciones Generadas

### 1. Histogramas + Densidad (01_histogramas_densidad_empleabilidad.png)
- 2 subgráficos (no_desempleados, desempleados)
- Histograma, curva KDE, media, mediana
- Útil para: Identificar forma de distribución

### 2. Box Plots (02_boxplots_empleabilidad.png)
- 2 subgráficos (no_desempleados, desempleados)
- Cajas, bigotes, outliers marcados
- Útil para: Detectar valores extremos

### 3. Violin Plots (03_violinplots_empleabilidad.png)
- 2 subgráficos (no_desempleados, desempleados)
- Distribución simétrica con media y mediana
- Útil para: Ver forma completa de la distribución

### 4. Q-Q Plots (04_qqplots_empleabilidad.png)
- 2 subgráficos (no_desempleados, desempleados)
- Puntos vs línea teórica normal
- Útil para: Verificar normalidad de datos

### 5. Comparativa (05_comparacion_no_desempleados_desempleados.png)
- Scatter plot: relación entre variables
- Histograma: distribuciones superpuestas
- Útil para: Analizar complementariedad

### 6. Barras Niveles (06_distribucion_nivel_empleabilidad.png)
- Gráfico de barras con colores distintivos
- Etiquetas con valores y porcentajes
- Útil para: Ver proporción de categorías

## 🔍 Métodos Estadísticos

### Test de Normalidad
- **Shapiro-Wilk**: Para muestras ≤ 5000
  - H0: Los datos siguen distribución normal
  - Si p < 0.05: Rechazar H0 (NO normal)

- **Kolmogorov-Smirnov**: Validación complementaria
  - Compara distribución observada vs teórica
  - Si p < 0.05: Distribución rechazada como normal

### Detección de Outliers
1. **IQR**: Límites = Q1 ± 1.5×(Q3-Q1)
2. **Z-score**: |Z| > 3 (≈ 3 desviaciones estándar)
3. **Isolation Forest**: Algoritmo ML (5% contaminación)

### Medidas de Tendencia Central
- **Media**: Centro de masa de los datos
- **Mediana**: Valor central (50%)
- **Moda**: Valor más frecuente

### Medidas de Dispersión
- **Desv. Estándar**: Distancia promedio a la media
- **IQR**: Rango del 50% central (Q3-Q1)
- **Rango**: Máximo - Mínimo

## ✅ Criterios de Calidad

| Aspecto | Criterio | Interpretación |
|---------|----------|----------------|
| Faltantes | < 5% | ✅ Aceptable |
| Faltantes | 5-10% | ⚠️ Revisar |
| Faltantes | > 10% | ❌ Problemático |
| Outliers | < 5% | ✅ Normal |
| Normalidad | p > 0.05 | ✅ Normal |
| Normalidad | p ≤ 0.05 | ❌ No normal |
| Consistencia | > 95% | ✅ Buena |
| Rangos | [0-100] | ✅ Válido |

## 📝 Interpretación de Resultados

### Asimetría (Skewness)
```
-1.0 ◄─── Izquierda ──► 0 ◄─── Centro ──► 1.0 ◄─── Derecha ──►
      (-0.5 a 0.5: aproximadamente simétrica)
```

### Curtosis
- **< 0**: Platicúrtica (colas ligeras, menos picos)
- **≈ 0**: Mesocúrtica (normal, distribución típica)
- **> 0**: Leptocúrtica (colas pesadas, picos altos)

## 🎯 Interpretación de Hallazgos

### Ejemplo: Empleabilidad Alta
```
Si: Media ≈ 85% no desempleados
    Desv. Estándar ≈ 8%
    Outliers < 5%
→ Conclusión: Empleabilidad generalmente buena con variabilidad moderada
```

### Ejemplo: Distribución Asimétrica
```
Si: Skewness ≈ -0.8 (negativa)
→ Conclusión: Colas largas a la izquierda (algunos programas con baja empleabilidad)
```

## 📂 Estructura de Archivos

```
analisis_no_desempleados/
├── 01_analisis_univariante_no_desempleados.ipynb
├── 01_histogramas_densidad_empleabilidad.png
├── 02_boxplots_empleabilidad.png
├── 03_violinplots_empleabilidad.png
├── 04_qqplots_empleabilidad.png
├── 05_comparacion_no_desempleados_desempleados.png
├── 06_distribucion_nivel_empleabilidad.png
├── README.md
└── ESTRUCTURA_ANALISIS_UNIVARIANTE.md (este archivo)
```

## 🔧 Configuración de Gráficos

- **Resolución**: 300 DPI (impresión profesional)
- **Tamaño**: Ajustado automáticamente por gráfico
- **Estilo**: seaborn whitegrid
- **Colores**: Consistentes con análisis de satisfacción
- **Fuentes**: Tamaño adaptativo para legibilidad

## 📌 Notas Importantes

1. El análisis sigue la misma estructura que el análisis de satisfacción
2. Se utilizan métodos estadísticos complementarios para robustez
3. Todos los p-valores se interpretan con α = 0.05
4. Los outliers se reportan en 3 métodos diferentes
5. La calidad de datos es excelente (sin faltantes)
6. Verificación de consistencia: porcentajes deben sumar ≈ 100%
