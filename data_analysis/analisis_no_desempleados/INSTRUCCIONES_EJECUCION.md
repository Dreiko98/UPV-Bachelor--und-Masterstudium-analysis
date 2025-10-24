# 🚀 GUÍA DE EJECUCIÓN: ANÁLISIS UNIVARIANTE DE EMPLEABILIDAD

## 📌 Introducción

Este documento proporciona instrucciones paso a paso para ejecutar el análisis univariante de empleabilidad y obtener todos los resultados.

## ✅ Requisitos Previos

### 1. **Dependencias Python**
Asegúrate de que tienes instaladas las siguientes librerías:

```bash
pip install pandas numpy matplotlib seaborn scipy scikit-learn jupyter
```

### 2. **Datos Disponibles**
- Archivo: `data_extraction/panel_maestro_UPV.csv`
- Ubicación: Directorio padre del notebook
- Tamaño: Debe contener columnas de empleabilidad

### 3. **Permisos de Escritura**
- La carpeta `analisis_no_desempleados/` necesita permiso de escritura
- Los gráficos PNG se guardarán en esta misma carpeta

## 🔧 Configuración del Entorno

### Opción 1: VS Code + Jupyter Extension

```bash
1. Instalar extensión "Jupyter" en VS Code
2. Abrir: 01_analisis_univariante_no_desempleados.ipynb
3. Seleccionar kernel Python 3
4. Ejecutar todas las celdas (Shift + Ctrl + Enter)
```

### Opción 2: Jupyter Notebook Clásico

```bash
cd /home/ayuda137/Escritorio/asuntos\ internos/UPV-Bachelor--und-Masterstudium-analysis/data_analysis/analisis_no_desempleados/
jupyter notebook 01_analisis_univariante_no_desempleados.ipynb
```

### Opción 3: Jupyter Lab

```bash
cd /home/ayuda137/Escritorio/asuntos\ internos/UPV-Bachelor--und-Masterstudium-analysis/data_analysis/analisis_no_desempleados/
jupyter lab 01_analisis_univariante_no_desempleados.ipynb
```

## 📋 Estructura del Notebook

El notebook contiene **9 secciones principales**:

### Sección 1: Librerías Requeridas
- Carga de todas las dependencias
- Configuración de estilos gráficos
- ⏱️ Tiempo: ~2 segundos

### Sección 2: Carga de Datos
- Importa `panel_maestro_UPV.csv`
- Muestra primeras 10 filas
- ⏱️ Tiempo: ~3 segundos

### Sección 3: Estadísticas Descriptivas
- Calcula media, mediana, desv. estándar, etc.
- Genera tabla resumen
- ⏱️ Tiempo: ~2 segundos

### Sección 4: Análisis de Distribución
- Tests Shapiro-Wilk y Kolmogorov-Smirnov
- Calcula asimetría y curtosis
- ⏱️ Tiempo: ~3 segundos

### Sección 5: Análisis de Categorías
- Distribución del nivel_empleabilidad
- Frecuencias absolutas y porcentuales
- ⏱️ Tiempo: ~1 segundo

### Sección 6: Visualizaciones (IMPORTANTE)
- **Genera 6 gráficos PNG** (300 DPI)
- Histogramas, box plots, violin plots, Q-Q plots, comparativas
- ⏱️ Tiempo: ~15-20 segundos (depende del sistema)

```
Gráficos generados:
✓ 01_histogramas_densidad_empleabilidad.png
✓ 02_boxplots_empleabilidad.png
✓ 03_violinplots_empleabilidad.png
✓ 04_qqplots_empleabilidad.png
✓ 05_comparacion_no_desempleados_desempleados.png
✓ 06_distribucion_nivel_empleabilidad.png
```

### Sección 7: Detección de Outliers
- Métodos IQR, Z-score, Isolation Forest
- Reporte de outliers detectados
- ⏱️ Tiempo: ~2 segundos

### Sección 8: Evaluación de Calidad
- Análisis de valores faltantes
- Verificación de consistencia
- Validación de rangos
- ⏱️ Tiempo: ~2 segundos

### Sección 9: Resumen Ejecutivo
- Síntesis de hallazgos principales
- Conclusiones sobre empleabilidad
- ⏱️ Tiempo: ~1 segundo

**⏱️ Tiempo total estimado: 30-40 segundos**

## 🎯 Cómo Ejecutar

### Opción A: Ejecutar Todo de Una Vez

```python
# En VS Code (desde la paleta de comandos: Ctrl+Shift+P)
Jupyter: Run All Cells
```

O en terminal:
```bash
jupyter nbconvert --to notebook --execute 01_analisis_univariante_no_desempleados.ipynb
```

### Opción B: Ejecutar Sección por Sección

1. **Ejecutar celda de librerías** → Verifica que todo está instalado
2. **Ejecutar carga de datos** → Comprueba que archivo existe
3. **Ejecutar estadísticas** → Verifica que hay datos
4. **Ejecutar análisis de distribución** → Tests estadísticos
5. **Ejecutar visualizaciones** → AQUÍ se crean los 6 PNG
6. **Ejecutar outliers y calidad** → Análisis adicional
7. **Ejecutar resumen** → Conclusiones finales

### Opción C: Ejecutar Celdas Específicas

En VS Code:
- Sitúate en una celda
- Presiona `Shift + Enter` para ejecutar solo esa celda
- El estado se guarda entre celdas

## 📊 Salida Esperada

### Consola (stdout)
Deberías ver mensajes como:

```
✅ Librerías cargadas exitosamente
📊 Información General del Dataset:
  • Dimensiones: XXX filas × XXX columnas
  • Peso: XX.XX KB

📋 Columnas de Empleabilidad:
  • porcentaje_no_desempleados
  • porcentaje_desempleados
  • nivel_empleabilidad

📊 ESTADÍSTICAS DESCRIPTIVAS COMPLETAS
==================================================================
🔹 PORCENTAJE_NO_DESEMPLEADOS
  Observaciones válidas: XXX/XXX (100.00%)
  Valores faltantes: 0 (0.00%)
  
  Medidas de Tendencia Central:
    • Media: XX.XXXX
    • Mediana: XX.XXXX
    • Moda: XX.XXXX
  ...
```

### Archivos Creados
En la carpeta `analisis_no_desempleados/`:

```
✅ 01_histogramas_densidad_empleabilidad.png       (guardado)
✅ 02_boxplots_empleabilidad.png                   (guardado)
✅ 03_violinplots_empleabilidad.png                (guardado)
✅ 04_qqplots_empleabilidad.png                    (guardado)
✅ 05_comparacion_no_desempleados_desempleados.png (guardado)
✅ 06_distribucion_nivel_empleabilidad.png         (guardado)
```

## ⚠️ Solución de Problemas

### Error: "No module named 'pandas'"
```bash
pip install pandas numpy matplotlib seaborn scipy scikit-learn
```

### Error: "FileNotFoundError: panel_maestro_UPV.csv"
- Verifica que estás en el directorio correcto
- El archivo debe estar en: `../../data_extraction/panel_maestro_UPV.csv`
- O modifica la ruta en la celda de carga

### Error: "Permission denied" al guardar PNG
- Verifica permisos de escritura: `chmod 755 analisis_no_desempleados/`
- O guarda en una carpeta diferente

### Los gráficos no se muestran
- En Jupyter: Ejecuta `%matplotlib inline` al inicio
- En VS Code: Debería mostrar automáticamente
- Si no funciona: Abre los PNG manualmente

### Ejecución muy lenta
- Reduce tamaño de dataset si es muy grande
- O usa `skip_outlier_detection=True` en algunas celdas
- Ajusta `contamination=0.10` en Isolation Forest

## 📈 Interpretación de Resultados

### Estadísticas Descriptivas
```
Busca:
- Media ≈ 75-85% → Empleabilidad moderada a buena
- Desv. Estándar ≈ 10-15% → Variabilidad entre programas
- Mín < 50% → Algunos programas con baja empleabilidad
- Máx > 90% → Algunos programas con muy alta empleabilidad
```

### Tests de Normalidad
```
Si p-valor < 0.05:
  → Distribución NO es normal
  → Usar métodos no-paramétricos
  
Si p-valor ≥ 0.05:
  → Distribución es normal (probable)
  → Usar métodos paramétricos seguros
```

### Outliers
```
Si IQR detecta < 5% outliers:
  → Distribución normal

Si IQR detecta 5-10% outliers:
  → Hay variabilidad notable

Si IQR detecta > 10% outliers:
  → Distribución muy dispersa
```

## 💾 Guardar Resultados

### Guardar Consola Completa
```python
# Ejecutar en la última celda:
import sys
from io import StringIO

# Redirigir output
output = StringIO()
sys.stdout = output
# ... código ...
sys.stdout = sys.__stdout__

with open('RESULTADOS_CONSOLA.txt', 'w') as f:
    f.write(output.getvalue())
```

### Guardar como PDF
```python
# Desde Jupyter:
# File → Download as → PDF via LaTeX
```

### Guardar como HTML
```bash
jupyter nbconvert --to html 01_analisis_univariante_no_desempleados.ipynb
```

## 📊 Resumen de Archivos Generados

```
analisis_no_desempleados/
├── 01_analisis_univariante_no_desempleados.ipynb    (Notebook)
├── README.md                                         (Documentación)
├── ESTRUCTURA_ANALISIS_UNIVARIANTE.md              (Metodología)
├── RESUMEN_ANALISIS_EMPLEABILIDAD.md               (Hallazgos)
├── 01_histogramas_densidad_empleabilidad.png        (Gráfico 1)
├── 02_boxplots_empleabilidad.png                    (Gráfico 2)
├── 03_violinplots_empleabilidad.png                 (Gráfico 3)
├── 04_qqplots_empleabilidad.png                     (Gráfico 4)
├── 05_comparacion_no_desempleados_desempleados.png  (Gráfico 5)
└── 06_distribucion_nivel_empleabilidad.png          (Gráfico 6)
```

## 🔄 Siguiente Paso Recomendado

Después de ejecutar este análisis:

1. ✅ Revisar los gráficos PNG
2. ✅ Leer RESUMEN_ANALISIS_EMPLEABILIDAD.md
3. ✅ Comparar con análisis de satisfacción
4. ➡️ Crear análisis bivariante (empleabilidad vs otras variables)
5. ➡️ Generar dashboard interactivo

## 📞 Contacto y Soporte

Para preguntas:
- **Sobre datos**: Ver `panel_maestro_UPV.csv`
- **Sobre metodología**: Ver `ESTRUCTURA_ANALISIS_UNIVARIANTE.md`
- **Sobre hallazgos**: Ver `RESUMEN_ANALISIS_EMPLEABILIDAD.md`
- **Sobre ejecución**: Ver sección "Solución de Problemas" arriba

---

**Última actualización**: 24 de octubre de 2025
**Versión**: 1.0
**Estado**: Listo para ejecutar ✅
