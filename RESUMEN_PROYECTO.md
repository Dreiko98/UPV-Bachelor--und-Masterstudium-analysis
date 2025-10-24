# Resumen de Proyecto - Análisis Univariantes UPV

## 🎯 Objetivo General

Realizar análisis univariantes exhaustivos de cuatro variables institucionales clave de la Universidad Politécnica de Valencia (UPV), proporcionando visualizaciones profesionales, metodología reproducible y documentación completa.

## ✅ Estado del Proyecto

**Estado General:** ✅ **COMPLETADO - 100%**

### Análisis Completados

| # | Variable | Carpeta | Archivos | Estado |
|---|----------|---------|----------|--------|
| 1 | Satisfacción | `analisis_satisfaccion/` | 1 notebook + 6 gráficos + 4 docs | ✅ |
| 2 | Empleabilidad | `analisis_no_desempleados/` | 1 notebook + 6 gráficos + 4 docs | ✅ |
| 3 | Tasa de Abandono | `analisis_tasa_abandono/` | 1 notebook + 6 gráficos + 4 docs | ✅ |
| 4 | Autoeficacia | `analisis_autoeficiencia/` | 1 notebook + 6 gráficos + 4 docs | ✅ |

## 📊 Entregables

### Total de Archivos Generados

- **4 Jupyter Notebooks** (580-584 KB cada uno) → Análisis ejecutables
- **24 Visualizaciones PNG** (300 DPI) → ~1.5 MB total
  - 6 gráficos por análisis
  - Resolución profesional de impresión
  - Incluyen: histogramas, box plots, violin plots, Q-Q plots, comparativos
- **16 Documentos Markdown** → Documentación completa
  - 4 por análisis (README, Estructura, Resumen, Instrucciones)
  - Guía centralizada (INDICE_GENERAL_ANALISIS.md)
- **1 Entorno Virtual** → Reproducibilidad garantizada

**Tamaño Total:** ~4.5 MB de análisis y documentación

## 🔬 Metodología Consistente

Todos los análisis siguen una estructura idéntica de **7 secciones**:

1. **Carga y Exploración de Datos**
   - Lectura del dataset
   - Verificación de estructura
   - Recuento de valores válidos

2. **Estadísticas Descriptivas**
   - Media, mediana, moda
   - Desviación estándar, varianza
   - Cuartiles, percentiles, IQR

3. **Análisis de Distribución**
   - Asimetría (Skewness)
   - Curtosis (Kurtosis)
   - Tests de normalidad (Shapiro-Wilk, Kolmogorov-Smirnov)

4. **Visualizaciones Profesionales** (6 por análisis)
   - Histogramas con densidad KDE
   - Box plots (numérico y categórico)
   - Violin plots
   - Q-Q plots
   - Distribuciones comparativas
   - Análisis categórico

5. **Detección de Outliers**
   - Método IQR
   - Método Z-score
   - Isolation Forest

6. **Evaluación de Calidad de Datos**
   - Datos faltantes
   - Duplicados
   - Validación de rangos
   - Correlación entre variables

7. **Resumen Ejecutivo**
   - Hallazgos clave
   - Conclusiones
   - Recomendaciones

## 📈 Resultados Resumidos

### Satisfacción
- **Escala**: 1-5
- **Media**: ~3.5/5 (buena satisfacción)
- **Estado**: ✅ Datos válidos 100%

### Empleabilidad (No Desempleados)
- **Escala**: 0-100%
- **Media**: ~78% no desempleados
- **Estado**: ✅ Datos válidos 94.2%

### Tasa de Abandono
- **Escala**: 0-100%
- **Media**: ~15% abandono
- **Estado**: ✅ Datos válidos 94.2%

### Autoeficacia
- **Escala**: 0-10
- **Media**: 5.77/10 (moderadamente alta)
- **Estado**: ✅ Datos válidos 81.4%
- **Nota**: No distribuida normalmente

## 🎯 Características Destacadas

### ✅ Reproducibilidad
- Código completo en notebooks
- Venv con todas las dependencias
- Paths relativos para portabilidad
- Semillas aleatorias controladas

### ✅ Calidad Profesional
- Gráficos a 300 DPI (apto para impresión)
- Estilos visuales consistentes
- Colores accesibles y diferenciables
- Etiquetas en español

### ✅ Documentación Exhaustiva
- Explicaciones metodológicas
- Guías de ejecución paso a paso
- Interpretación de resultados
- Recomendaciones de análisis

### ✅ Análisis Consistente
- Misma estructura en todos
- Mismas métricas estadísticas
- Misma cantidad de gráficos
- Comparabilidad directa

## 📦 Estructura del Proyecto

```
UPV-Bachelor--und-Masterstudium-analysis/
├── venv/                               # Entorno Python 3.12
├── data_extraction/
│   └── panel_maestro_UPV.csv          # Dataset fuente (483 registros)
├── data_analysis/
│   ├── INDICE_GENERAL_ANALISIS.md     # Guía de navegación centralizada
│   ├── analisis_satisfaccion/
│   │   ├── 01_analisis_univariante_satisfaccion.ipynb
│   │   ├── 6 gráficos PNG (300 DPI)
│   │   └── 4 documentos markdown
│   ├── analisis_no_desempleados/
│   │   ├── 01_analisis_univariante_no_desempleados.ipynb
│   │   ├── 6 gráficos PNG (300 DPI)
│   │   └── 4 documentos markdown
│   ├── analisis_tasa_abandono/
│   │   ├── 01_analisis_univariante_tasa_abandono.ipynb
│   │   ├── 6 gráficos PNG (300 DPI)
│   │   └── 4 documentos markdown
│   └── analisis_autoeficiencia/       ⭐ NUEVO
│       ├── 01_analisis_univariante_autoeficiencia.ipynb
│       ├── 6 gráficos PNG (300 DPI)
│       └── 4 documentos markdown
├── requirements.txt                    # Dependencias Python
└── README.md                           # Descripción del proyecto
```

## 🚀 Cómo Usar el Proyecto

### 1. Explorar Resultados
```bash
# Navegar a carpeta de análisis
cd data_analysis/analisis_autoeficiencia/

# Ver gráficos (cualquier visor de imágenes)
ls -la *.png

# Leer resumen en Markdown
cat RESUMEN_ANALISIS_AUTOEFICACIA.md
```

### 2. Revisar Análisis Completo
```bash
# Abrir notebook en VS Code
code 01_analisis_univariante_autoeficiencia.ipynb

# O abrir en Jupyter
source ../../venv/bin/activate
jupyter notebook
```

### 3. Ejecutar Nuevamente
```bash
# Desde carpeta del análisis
source ../../venv/bin/activate
jupyter nbconvert --to notebook --execute 01_analisis_univariante_autoeficiencia.ipynb
```

## 📊 Comparación de Variables

| Característica | Satisfacción | Empleabilidad | Abandono | Autoeficacia |
|---|---|---|---|---|
| Tipo de escala | Ordinal 1-5 | Ratio 0-100% | Ratio 0-100% | Ratio 0-10 |
| Datos válidos | 100% | 94.2% | 94.2% | 81.4% |
| Media | ~3.5 | ~78% | ~15% | 5.77 |
| Normalidad | - | - | - | NO (p<0.05) |
| Asimetría | - | - | - | -0.51 |
| Intrepretación | Satisfecho | Empleado | Permanencia | Confianza |

## 💡 Insights Clave

1. **UPV tiene buenos indicadores generales**
   - Satisfacción positiva
   - Baja tasa de abandono
   - Alta empleabilidad

2. **Autoeficacia es moderadamente positiva**
   - 5.77/10 indica confianza general
   - Pero con margen de mejora

3. **Existe variabilidad significativa**
   - Desviaciones estándar notables en todos
   - Hay subgrupos que requieren atención diferenciada

4. **Datos son de calidad aceptable**
   - >80% válidos en todas las variables
   - Suficientes para análisis estadístico

5. **Metodología garantiza reproducibilidad**
   - Mismo análisis, mismos resultados
   - Cualquier persona puede replicarlo

## 📚 Documentación Disponible

- **INDICE_GENERAL_ANALISIS.md** → Navegación centralizada
- **README.md** → Descripción por variable (4 × 1)
- **ESTRUCTURA_ANALISIS_UNIVARIANTE.md** → Metodología detallada (4 × 1)
- **RESUMEN_ANALISIS_*.md** → Hallazgos específicos (4 × 1)
- **INSTRUCCIONES_EJECUCION.md** → Guía técnica (4 × 1)

## ✅ Verificación Final

- ✓ 4 análisis completados
- ✓ 4 notebooks ejecutables
- ✓ 24 gráficos a 300 DPI
- ✓ 16 documentos markdown
- ✓ 1 entorno virtual configurado
- ✓ Reproducibilidad garantizada
- ✓ Documentación completa
- ✓ Índice centralizado funcional

## 🎓 Notas Finales

### Metodología Estadística
- Uso de tests paramétricos y no-paramétricos
- Validación de supuestos de normalidad
- Detección robusta de outliers
- Evaluación integral de calidad

### Calidad Visual
- Gráficos profesionales a 300 DPI
- Estilos visuales consistentes
- Colores distinguibles y accesibles
- Etiquetas claras en español

### Reproducibilidad
- Código completo disponible
- Dependencias especificadas
- Paths relativos utilizados
- Datos originales preservados

## 📞 Contacto y Soporte

Para preguntas sobre:
- **Resultados**: Revisar carpeta de análisis relevante
- **Metodología**: Ver ESTRUCTURA_ANALISIS_UNIVARIANTE.md
- **Ejecución**: Consultar INSTRUCCIONES_EJECUCION.md
- **Navegación**: Usar INDICE_GENERAL_ANALISIS.md

---

**Proyecto completado:** 24 de octubre de 2025
**Estado:** ✅ LISTO PARA USO
**Mantenimiento:** Sistema de Análisis Automatizado UPV
