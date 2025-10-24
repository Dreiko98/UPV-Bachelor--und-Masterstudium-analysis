# Índice General - Análisis Univariantes UPV

## 📚 Guía de Navegación Rápida

Este documento proporciona acceso rápido a todos los análisis realizados.

---

## 🎯 Tres Análisis Univariantes Completados

### 1️⃣ Análisis de Satisfacción
**Carpeta:** `data_analysis/analisis_satisfaccion/`

**Variables:**
- `satisfaccion_alumnos` (1-5 escala)
- `satisfaccion_profesores` (1-5 escala)
- `satisfaccion_promedio`

**Archivos Principales:**
| Archivo | Tipo | Descripción |
|---------|------|-------------|
| `01_analisis_univariante_satisfaccion.ipynb` | Notebook | Análisis completo con código ejecutable |
| `README.md` | Documentación | Descripción general del análisis |
| `ESTRUCTURA_ANALISIS_UNIVARIANTE.md` | Documentación | Metodología paso a paso |
| `RESUMEN_ANALISIS_SATISFACCION.md` | Documentación | Hallazgos y conclusiones |
| `INSTRUCCIONES_EJECUCION.md` | Guía | Cómo ejecutar el análisis |

**Gráficos Generados:**
1. Histogramas y densidad de satisfacción
2. Box plots de satisfacción
3. Violin plots de satisfacción
4. Q-Q plots de normalidad
5. Comparación alumnos vs profesores
6. Distribución de satisfacción

**Estado:** ✅ Completado

---

### 2️⃣ Análisis de Empleabilidad (No Desempleados)
**Carpeta:** `data_analysis/analisis_no_desempleados/`

**Variables:**
- `porcentaje_no_desempleados` (0-100%)
- `porcentaje_desempleados` (0-100%)
- `nivel_empleabilidad` (categórica)

**Archivos Principales:**
| Archivo | Tipo | Descripción |
|---------|------|-------------|
| `01_analisis_univariante_no_desempleados.ipynb` | Notebook | Análisis completo con código ejecutable |
| `README.md` | Documentación | Descripción general del análisis |
| `ESTRUCTURA_ANALISIS_UNIVARIANTE.md` | Documentación | Metodología paso a paso |
| `RESUMEN_ANALISIS_EMPLEABILIDAD.md` | Documentación | Hallazgos y conclusiones |
| `INSTRUCCIONES_EJECUCION.md` | Guía | Cómo ejecutar el análisis |

**Gráficos Generados:**
1. Histogramas y densidad de empleabilidad
2. Box plots de empleabilidad
3. Violin plots de empleabilidad
4. Q-Q plots de normalidad
5. Comparación no desempleados vs desempleados
6. Distribución de nivel de empleabilidad

**Estado:** ✅ Completado

---

### 3️⃣ Análisis de Tasa de Abandono
**Carpeta:** `data_analysis/analisis_tasa_abandono/`

**Variables:**
- `tasa_abandono` (0-100%)
- `tasa_permanencia` (0-100%)

**Archivos Principales:**
| Archivo | Tipo | Descripción |
|---------|------|-------------|
| `01_analisis_univariante_tasa_abandono.ipynb` | Notebook | Análisis completo con código ejecutable |
| `README.md` | Documentación | Descripción general del análisis |
| `ESTRUCTURA_ANALISIS_UNIVARIANTE.md` | Documentación | Metodología paso a paso |
| `RESUMEN_ANALISIS_ABANDONO.md` | Documentación | Hallazgos y conclusiones |
| `INSTRUCCIONES_EJECUCION.md` | Guía | Cómo ejecutar el análisis |

**Gráficos Generados:**
1. Histogramas y densidad de tasa de abandono
2. Box plots de tasa de abandono
3. Violin plots de tasa de abandono
4. Q-Q plots de normalidad
5. Comparación abandono vs permanencia
6. Distribución de abandono por año académico

**Estado:** ✅ Completado

---

## 📊 Estructura de Cada Análisis

### Dentro de Cada Carpeta

```
analisis_XXX/
├── 01_analisis_univariante_XXX.ipynb          # Notebook ejecutable
├── 01_histogramas_densidad_XXX.png            # Gráfico 1
├── 02_boxplots_XXX.png                        # Gráfico 2
├── 03_violinplots_XXX.png                     # Gráfico 3
├── 04_qqplots_XXX.png                         # Gráfico 4
├── 05_comparacion_XXX.png                     # Gráfico 5
├── 06_distribucion_XXX.png                    # Gráfico 6
├── README.md                                   # Descripción
├── ESTRUCTURA_ANALISIS_UNIVARIANTE.md         # Metodología
├── RESUMEN_ANALISIS_XXX.md                    # Hallazgos
└── INSTRUCCIONES_EJECUCION.md                 # Guía ejecutiva
```

---

## 🚀 Guía Rápida de Uso

### Para Revisar Resultados
1. Abrir carpeta del análisis
2. Leer `README.md` para descripción general
3. Revisar `01_analisis_univariante_XXX.ipynb` en VS Code
4. Ver gráficos PNG en la misma carpeta

### Para Entender la Metodología
1. Leer `ESTRUCTURA_ANALISIS_UNIVARIANTE.md` (completo)
2. Consultar `INSTRUCCIONES_EJECUCION.md` (cómo ejecutar)
3. Revisar código del notebook (comentarios explicativos)

### Para Ver Hallazgos Principales
1. Ir a `RESUMEN_ANALISIS_XXX.md`
2. Leer secciones de "Hallazgos Principales"
3. Revisar conclusiones ejecutivas

### Para Ejecutar Nuevamente
```bash
# Desde la carpeta raíz del proyecto
source venv/bin/activate
cd data_analysis/analisis_XXX/
jupyter notebook 01_analisis_univariante_XXX.ipynb
# O usar: Shift+Enter en VS Code para cada celda
```

---

## 📈 Contenido de Cada Notebook

### Sección 1: Carga y Exploración de Datos
- Lectura del archivo CSV
- Información general del dataset
- Primeras filas y columnas

### Sección 2: Estadísticas Descriptivas
- Media, mediana, moda
- Desviación estándar, varianza
- Cuartiles y percentiles
- Tabla resumen completa

### Sección 3: Análisis de Distribución
- Asimetría (Skewness)
- Curtosis (Kurtosis)
- Test Shapiro-Wilk
- Test Kolmogorov-Smirnov

### Sección 4: Visualizaciones
- Histogramas con KDE
- Box Plots
- Violin Plots
- Q-Q Plots
- Gráficos comparativos
- Gráficos categoriales

### Sección 5: Detección de Outliers
- Método IQR
- Método Z-score
- Método Isolation Forest

### Sección 6: Evaluación de Calidad de Datos
- Valores faltantes
- Duplicados
- Consistencia
- Validación de rango

### Sección 7: Resumen Ejecutivo
- Hallazgos principales
- Conclusiones
- Recomendaciones

---

## 📊 Gráficos por Tipo (18 Total)

### Histogramas (3)
- Satisfacción
- Empleabilidad
- Abandono

### Box Plots (3)
- Satisfacción
- Empleabilidad
- Abandono

### Violin Plots (3)
- Satisfacción
- Empleabilidad
- Abandono

### Q-Q Plots (3)
- Satisfacción
- Empleabilidad
- Abandono

### Comparativos (3)
- Alumnos vs Profesores (satisfacción)
- No desempleados vs Desempleados
- Abandono vs Permanencia

### Categoriales (3)
- Distribución de satisfacción
- Distribución de nivel empleabilidad
- Distribución de abandono por año

**Resolución:** 300 DPI en todos (apto para impresión)
**Formato:** PNG (compatible universal)

---

## 🔍 Estadísticas Generales

### Datos Disponibles
| Variable | Válidos | Faltantes | Rango |
|----------|---------|-----------|-------|
| Satisfacción alumnos | Completo | Mínimos | 1-5 |
| Satisfacción profesores | Completo | Mínimos | 1-5 |
| % No desempleados | 455/483 | 5.8% | 0-100% |
| % Desempleados | 455/483 | 5.8% | 0-100% |
| Tasa abandono | 455/483 | 5.8% | 0-100% |
| Tasa permanencia | 455/483 | 5.8% | 0-100% |

### Tamaño de Archivos Generados
| Tipo | Cantidad | Tamaño Total |
|------|----------|--------------|
| Notebooks | 3 | ~1.7 MB |
| Gráficos PNG | 18 | ~1.5 MB |
| Documentación | 12 | ~200 KB |
| **Total** | **33** | **~3.4 MB** |

---

## 📚 Documentación Completa

### Cada Análisis Incluye

#### README.md
- Descripción general
- Objetivos
- Estructura del análisis
- Variables analizadas
- Requisitos y dependencias
- Cómo usar

#### ESTRUCTURA_ANALISIS_UNIVARIANTE.md
- Metodología detallada (7 fases)
- Explicación de cada test estadístico
- Interpretación de gráficos
- Criterios de evaluación
- Referencias bibliográficas

#### RESUMEN_ANALISIS_XXX.md
- Hallazgos principales
- Nivel general de la métrica
- Características de distribución
- Relaciones con otras variables
- Calidad de datos
- Pruebas de normalidad
- Outliers detectados
- Conclusiones
- Recomendaciones

#### INSTRUCCIONES_EJECUCION.md
- Requisitos previos
- 4 opciones de ejecución
  1. Con Jupyter Notebook
  2. Con nbconvert
  3. Desde VS Code
  4. Desde Python script
- Troubleshooting
- Checklist de verificación

---

## 🎓 Interpretación Rápida

### Distribución
- **Simétrica (|Skewness| < 0.5):** Datos bien distribuidos
- **Sesgada derecha:** Muchos valores bajos, algunos altos
- **Sesgada izquierda:** Muchos valores altos, algunos bajos

### Normalidad
- **p-valor < 0.05:** NO es normal → Usar métodos no-paramétricos
- **p-valor ≥ 0.05:** ES normal → Métodos paramétricos válidos

### Outliers
- **IQR:** Valores fuera del rango [Q1-1.5×IQR, Q3+1.5×IQR]
- **Z-score:** |Z| > 3
- **Isolation Forest:** Anomalías según algoritmo ML

---

## 🔗 Relaciones Entre Análisis

### Satisfacción ↔ Abandono
¿Mayor satisfacción implica menor abandono?

### Satisfacción ↔ Empleabilidad
¿Relación entre satisfacción y empleabilidad?

### Empleabilidad ↔ Abandono
¿Mejor empleabilidad en programas con menor abandono?

**Análisis bivariante recomendado:** Ver correlaciones

---

## ✨ Características Destacadas

✅ **Análisis Completo**
- Media, mediana, moda, desv. est., varianza, rango
- Tests Shapiro-Wilk y Kolmogorov-Smirnov
- 3 métodos de detección de outliers
- 6 tipos de visualizaciones diferentes

✅ **Documentación Exhaustiva**
- 12 documentos complementarios
- 4 documentos por análisis (README, Estructura, Resumen, Instrucciones)
- Comentarios explicativos en código

✅ **Calidad de Presentación**
- Gráficos en 300 DPI
- Títulos y leyendas claras
- Colores profesionales
- Apto para publicación

✅ **Reproducibilidad**
- Código completamente ejecutable
- Venv pre-configurado
- Instrucciones paso a paso
- Todos los datos de entrada disponibles

---

## 📞 Preguntas Frecuentes

### ¿Cómo regenero los análisis?
Ver `INSTRUCCIONES_EJECUCION.md` en cada carpeta

### ¿Puedo modificar los gráficos?
Sí, abrir el notebook en Jupyter y editar código de visualización

### ¿Dónde están las fuentes de datos?
En `data_extraction/panel_maestro_UPV.csv`

### ¿Cómo interpreto los resultados?
Consultar `ESTRUCTURA_ANALISIS_UNIVARIANTE.md` para metodología
y `RESUMEN_ANALISIS_XXX.md` para hallazgos específicos

### ¿Puedo usar otros tipos de tests?
Sí, modificar código Python en el notebook según necesidades

---

## 📅 Información General

**Fecha de Creación:** 24 de octubre de 2025
**Tipo de Análisis:** Univariante (una variable a la vez)
**Metodología:** Estadística descriptiva e inferencial
**Software:** Python 3.12 con Jupyter
**Datos:** Panel maestro UPV (483 registros × 16 variables)

---

## 🎯 Próximos Pasos Sugeridos

1. **Corto Plazo:**
   - Revisar gráficos y resúmenes
   - Identificar programas outlier
   - Validar datos

2. **Mediano Plazo:**
   - Análisis bivariante (correlaciones)
   - Comparativas entre programas
   - Análisis temporal

3. **Largo Plazo:**
   - Análisis multivariante (clustering, etc.)
   - Modelado predictivo
   - Benchmarking con otras universidades

---

## ✅ Checklist de Revisión

Para cada análisis:
- [ ] Leer README.md
- [ ] Revisar gráficos (6 PNG)
- [ ] Leer RESUMEN_ANALISIS_XXX.md
- [ ] Consultar ESTRUCTURA_ANALISIS_UNIVARIANTE.md si necesita detalles
- [ ] Abrir notebook en VS Code/Jupyter
- [ ] Revisar outputs de ejecución
- [ ] Verificar hallazgos principales
- [ ] Tomar nota de outliers/anomalías

---

### 4️⃣ Análisis de Autoeficacia
**Carpeta:** `data_analysis/analisis_autoeficiencia/`

**Variables:**
- `autoeficacia_3_anos` (0-10 escala continua)
- `nivel_autoeficacia` (categórica: Muy baja, Baja, Media, Alta, Muy alta)

**Archivos Principales:**
| Archivo | Tipo | Descripción |
|---------|------|-------------|
| `01_analisis_univariante_autoeficiencia.ipynb` | Notebook | Análisis completo con código ejecutable |
| `README.md` | Documentación | Descripción general del análisis |
| `ESTRUCTURA_ANALISIS_UNIVARIANTE.md` | Documentación | Metodología paso a paso |
| `RESUMEN_ANALISIS_AUTOEFICACIA.md` | Documentación | Hallazgos y conclusiones |
| `INSTRUCCIONES_EJECUCION.md` | Guía | Cómo ejecutar el análisis |

**Gráficos Generados:**
1. Histogramas con densidad KDE (numérica y categórica)
2. Box plots (numérico y por nivel)
3. Violin plots de distribución
4. Q-Q plots de normalidad
5. Distribución por nivel (gráfico de pie)
6. Media de autoeficacia por categoría

**Hallazgos Clave:**
- Media: 5.77/10 (autoeficacia moderadamente alta)
- Mediana: 6.03/10
- Desviación estándar: 1.68
- Distribución: NO normal (Shapiro-Wilk p < 0.05)
- Asimetría: -0.51 (sesgo izquierdo)
- Datos válidos: 393/483 (81.4%)

**Estado:** ✅ Completado

---

## 📊 Tabla Comparativa de Análisis

| Característica | Satisfacción | Empleabilidad | Abandono | Autoeficacia |
|----------------|-------------|---------------|----------|--------------|
| **Carpeta** | `analisis_satisfaccion/` | `analisis_no_desempleados/` | `analisis_tasa_abandono/` | `analisis_autoeficiencia/` |
| **Variable Principal** | Escala 1-5 | Porcentaje % | Porcentaje % | Escala 0-10 |
| **Datos Válidos** | 100% | 94.2% | 94.2% | 81.4% |
| **Normalidad (Shapiro-Wilk)** | - | - | - | NO (p=0.000015) |
| **Medida Central** | Media/Mediana | Media/Mediana | Media/Mediana | 5.77/6.03 |
| **Gráficos** | 6 PNG (300 DPI) | 6 PNG (300 DPI) | 6 PNG (300 DPI) | 6 PNG (300 DPI) |
| **Documentación** | 4 archivos MD | 4 archivos MD | 4 archivos MD | 4 archivos MD |
| **Estado** | ✅ Completo | ✅ Completo | ✅ Completo | ✅ Completo |

---

## 📎 Enlaces Rápidos

### Carpetas de Análisis
- [Satisfacción](./analisis_satisfaccion/)
- [No Desempleados (Empleabilidad)](./analisis_no_desempleados/)
- [Tasa de Abandono](./analisis_tasa_abandono/)
- [Autoeficacia](./analisis_autoeficiencia/) ⭐ **NUEVO**

### Datos
- [Panel Maestro](../data_extraction/panel_maestro_UPV.csv)

### Entorno Virtual
- [venv](../../venv/)

---

## 🎯 Análisis Realizados - Resumen Total

**Total de Análisis**: 4 análisis univariantes
**Total de Notebooks**: 4 (1 por análisis)
**Total de Gráficos**: 24 visualizaciones (6 por análisis) a 300 DPI
**Total de Documentación**: 16 archivos markdown (4 por análisis)
**Tamaño Total**: ~4.5 MB (1.7 MB notebooks + 1.5 MB gráficos + 1.3 MB documentación)
**Estado Global**: ✅ **COMPLETADO - 100%**

---

**¡Bienvenido al análisis de datos de la UPV!** 🎓

---

*Última actualización: 24 de octubre de 2025*
*Mantenedor: Sistema de Análisis Automatizado*
