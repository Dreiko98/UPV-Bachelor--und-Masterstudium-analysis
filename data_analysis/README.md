# 📊 Data Analysis - UPV

Carpeta dedicada al análisis exploratorio y univariante de las métricas de la UPV.

## 📁 Estructura

```
data_analysis/
├── 01_analisis_univariante_satisfaccion.ipynb
├── 01_histogramas_densidad_satisfaccion.png
├── 02_boxplots_satisfaccion.png
├── 03_violinplots_satisfaccion.png
├── 04_qqplots_satisfaccion.png
├── 05_comparacion_alumnos_profesores.png
├── RESUMEN_ANALISIS_SATISFACCION.md
└── README.md (este archivo)
```

## 🎯 Análisis Disponibles

### ✅ 1. Análisis Univariante - Satisfacción
**Archivo:** `01_analisis_univariante_satisfaccion.ipynb`

**Variables Analizadas:**
- `satisfaccion_alumnos`: Satisfacción reportada por estudiantes (0-10)
- `satisfaccion_profesores`: Satisfacción reportada por profesores (0-10)
- `diferencia_satis`: Diferencia (profesores - alumnos)
- `satisfaccion_promedio`: Promedio de ambas métricas

**Contenido del Análisis:**
1. Cargar y explorar datos
2. Estadísticas descriptivas completas
3. Análisis de distribución (sesgo, curtosis, normalidad)
4. Visualización de 5 tipos de gráficos
5. Detección de outliers (3 métodos diferentes)
6. Evaluación de calidad de datos
7. Resumen ejecutivo

**Gráficos Generados:**
1. Histogramas y Densidad (KDE)
2. Box Plots (detección de outliers)
3. Violin Plots (distribución detallada)
4. Q-Q Plots (verificación de normalidad)
5. Comparación Alumnos vs Profesores

**Hallazgos Principales:**
- Satisfacción de alumnos: 6.92/10 (moderada)
- Satisfacción de profesores: 8.65/10 (alta)
- Brecha: 1.73 puntos a favor de profesores
- Distribuciones NO normales (p < 0.05)
- 42 outliers detectados en total
- Calidad de datos: Excelente (< 3% faltantes)

## ⏳ Análisis Pendientes

### 📋 2. Análisis Univariante - Abandono
**Por crear:** `02_analisis_univariante_abandono.ipynb`

Variables a analizar:
- `tasa_abandono`: Porcentaje de abandono (0-100%)
- `tasa_permanencia`: Porcentaje de permanencia (0-100%)

### 📋 3. Análisis Univariante - Autoeficacia
**Por crear:** `03_analisis_univariante_autoeficacia.ipynb`

Variables a analizar:
- `autoeficacia_3_anos`: Autoeficacia en programas de 3 años (0-10)
- `nivel_autoeficacia`: Nivel categórico (Muy baja/Baja/Media/Alta/Muy alta)

### 📋 4. Análisis Univariante - Empleabilidad
**Por crear:** `04_analisis_univariante_empleabilidad.ipynb`

Variables a analizar:
- `porcentaje_no_desempleados`: % No desempleados (0-100%)
- `porcentaje_desempleados`: % Desempleados (0-100%)
- `nivel_empleabilidad`: Nivel categórico (Baja/Media/Buena/Muy buena/Excelente)

## 🛠️ Cómo Usar

### Ejecutar el notebook de Satisfacción:
```bash
jupyter notebook 01_analisis_univariante_satisfaccion.ipynb
```

### Ver resumen de hallazgos:
```bash
cat RESUMEN_ANALISIS_SATISFACCION.md
```

### Crear nuevo análisis univariante:
El patrón es repetible. Cada análisis incluye:
- Importación de librerías
- Carga de datos del panel maestro
- Estadísticas descriptivas
- Análisis de distribución
- 5 tipos de visualizaciones
- Detección de outliers
- Verificación de calidad
- Resumen ejecutivo

## 📊 Librerías Utilizadas

- **pandas**: Manipulación de datos
- **numpy**: Operaciones numéricas
- **matplotlib**: Visualización base
- **seaborn**: Visualización avanzada
- **scipy.stats**: Análisis estadístico
- **scikit-learn**: Machine learning (Isolation Forest)

## 🔄 Workflow Recomendado

1. **Fase 1:** Análisis univariante de cada métrica
   - Satisfacción ✅
   - Abandono (siguiente)
   - Autoeficacia
   - Empleabilidad

2. **Fase 2:** Análisis bivariante
   - Relaciones entre variables
   - Correlaciones
   - Causalidades

3. **Fase 3:** Análisis temporal
   - Tendencias 2020-2023
   - Cambios por año

4. **Fase 4:** Segmentación
   - Por centro
   - Por titulación
   - Por programa

## 📈 Estadísticas de Cobertura

| Variable | Observaciones | % Válido | Estado |
|----------|---------------|----------|--------|
| satisfaccion_alumnos | 475/483 | 98.3% | ✅ |
| satisfaccion_profesores | 480/483 | 99.4% | ✅ |
| diferencia_satis | 472/483 | 97.7% | ✅ |
| satisfaccion_promedio | 472/483 | 97.7% | ✅ |

## 🎓 Decisiones Metodológicas

1. **Métodos no-paramétricos:** Dado que los datos no son normales, se recomiendan tests no-paramétricos (Mann-Whitney, Kruskal-Wallis)

2. **Outliers:** Se mantienen en el análisis principal (no se eliminan) ya que representan casos reales

3. **Valores faltantes:** Se documentan pero se mantienen (estrategia left-join preserva contexto)

4. **Visualización múltiple:** 5 gráficos por variable para capturas múltiples de la misma información

## 🔗 Referencias

- Panel maestro: `../data_extraction/panel_maestro_UPV.csv`
- Consolidación: `../data_extraction/consolidacion_panel_maestro.ipynb`

## 📞 Contacto

Rama: `GPR-10-Merge-general-de-los-datos`
Proyecto: UPV Bachelor und Masterstudium Analysis

---

**Última actualización:** 21 de octubre de 2025
**Estado:** Análisis de Satisfacción completado ✅
