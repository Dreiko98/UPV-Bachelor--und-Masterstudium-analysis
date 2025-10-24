# Instrucciones de Ejecución: Análisis de Autoeficacia

## 🚀 Cómo Ejecutar el Análisis

### Prerrequisitos

✓ **Sistema Operativo**: Linux, macOS o Windows con WSL
✓ **Python**: Versión 3.12 o superior
✓ **Entorno Virtual**: venv configurado
✓ **Dependencias**: Instaladas (pandas, numpy, matplotlib, seaborn, scipy, scikit-learn)
✓ **Datos**: `data_extraction/panel_maestro_UPV.csv` disponible

### Verificar Configuración

Antes de ejecutar, verificar que el entorno esté configurado:

```bash
# 1. Navegar al directorio del proyecto
cd /home/ayuda137/Escritorio/asuntos\ internos/UPV-Bachelor--und-Masterstudium-analysis

# 2. Activar el entorno virtual
source venv/bin/activate

# 3. Verificar que Python 3.12 está disponible
python3 --version

# 4. Verificar que se instalaron librerías requeridas
python3 -c "import pandas, numpy, matplotlib, seaborn, scipy, sklearn; print('✓ Todas las librerías están disponibles')"
```

## 📖 Opción 1: Ejecutar con Jupyter Notebook

**Ventaja**: Interactivo, ver outputs en tiempo real
**Desventaja**: Requiere interfaz gráfica

### Pasos:

```bash
# 1. Activar venv
source venv/bin/activate

# 2. Navegar a carpeta de análisis
cd data_analysis/analisis_autoeficiencia

# 3. Iniciar Jupyter
jupyter notebook 01_analisis_univariante_autoeficiencia.ipynb
```

**En el navegador**:
1. Se abrirá interfaz de Jupyter
2. Hacer clic en cada celda y presionar `Shift+Enter` para ejecutar
3. O hacer clic en "Cell" → "Run All" para ejecutar todo
4. Ver outputs y gráficos directamente

### Esperado:
- ✓ Celdas ejecutadas secuencialmente
- ✓ Outputs mostrados en notebook
- ✓ Gráficos embebidos en notebook
- ✓ Archivos PNG guardados en carpeta

## 📖 Opción 2: Ejecutar con nbconvert (Recomendado)

**Ventaja**: Automatizado, genera notebook con outputs
**Desventaja**: No hay interfaz interactiva

### Pasos:

```bash
# 1. Activar venv
source venv/bin/activate

# 2. Navegar a carpeta de análisis
cd data_analysis/analisis_autoeficiencia

# 3. Ejecutar notebook con nbconvert
jupyter nbconvert --to notebook --execute 01_analisis_univariante_autoeficiencia.ipynb
```

**Resultado**:
- ✓ Notebook original preservado
- ✓ Nuevo notebook `01_analisis_univariante_autoeficiencia.nbconvert.ipynb` con outputs
- ✓ Gráficos PNG salvados en carpeta

### Tiempo esperado: 2-3 minutos

## 📖 Opción 3: Ejecutar como Script Python

**Ventaja**: Rápido, sin dependencias de Jupyter
**Desventaja**: Menos interactivo

### Pasos:

```bash
# 1. Activar venv
source venv/bin/activate

# 2. Navegar a carpeta
cd data_analysis/analisis_autoeficiencia

# 3. Ejecutar el análisis
python3 analisis_autoeficiencia.py
```

## 📊 Verificar Resultados

Después de ejecutar, verificar que se generaron:

```bash
# Listar archivos generados
ls -lh data_analysis/analisis_autoeficiencia/

# Esperados:
# - 01_analisis_univariante_autoeficiencia.ipynb (notebook original)
# - 01_histogramas_densidad_autoeficacia.png (300 DPI)
# - 02_boxplots_autoeficacia.png (300 DPI)
# - 03_violinplots_autoeficacia.png (300 DPI)
# - 04_qqplots_autoeficacia.png (300 DPI)
# - 05_distribucion_nivel_autoeficacia.png (300 DPI)
# - 06_autoeficacia_por_categoria.png (300 DPI)
```

**Validar tamaños** (cada gráfico debe ser ~200-400 KB):

```bash
# Ver detalles de archivos PNG
file data_analysis/analisis_autoeficiencia/*.png

# Ejemplo de salida esperada:
# 01_histogramas_densidad_autoeficacia.png: PNG image data, 1600 x 600, 8-bit/color RGBA, non-interlaced
```

## 🔍 Interpretar Outputs

### En el Notebook/Terminal, verá:

```
================================================================================
ANÁLISIS UNIVARIANTE: AUTOEFICACIA
================================================================================

Dataset cargado: (483, 16)
Datos válidos de autoeficacia: 393

================================================================================
ESTADÍSTICAS DESCRIPTIVAS
================================================================================
Media: 5.7732
Mediana: 6.0300
Desv. Est.: 1.6772
Rango: 0.0000 - 10.0000

================================================================================
ANÁLISIS DE DISTRIBUCIÓN
================================================================================
Asimetría: -0.5119
Curtosis: 0.2267
Shapiro-Wilk p-valor: 0.000015

================================================================================
GENERANDO GRÁFICOS (300 DPI)
================================================================================

1. Histogramas con densidad KDE...
   ✓ 01_histogramas_densidad_autoeficacia.png
2. Box plots...
   ✓ 02_boxplots_autoeficacia.png
...
```

### Significado de valores:

- **Media 5.77**: Autoeficacia promedio moderadamente alta
- **p-valor 0.000015 < 0.05**: Datos NO normales (usar tests no-paramétricos)
- **Asimetría -0.51**: Distribución con sesgo a la izquierda

## ⚠️ Troubleshooting

### Error: "ModuleNotFoundError: No module named 'pandas'"

**Solución**:
```bash
# Reinstalar dependencias
pip install -r requirements.txt
```

### Error: "FileNotFoundError: panel_maestro_UPV.csv"

**Solución**:
```bash
# Verificar que está en directorio correcto
ls -la data_extraction/panel_maestro_UPV.csv

# Si no existe, revisar ruta relativa en notebook
```

### Error: "Permission denied" en generación de PNG

**Solución**:
```bash
# Verificar permisos de carpeta
chmod 755 data_analysis/analisis_autoeficiencia

# O generar PNG en /tmp temporalmente
```

### Notebook no responde o se cuelga

**Solución**:
```bash
# Detener kernel (Jupyter)
# Ctrl+C en terminal

# Reintentar desde cero
jupyter notebook --NotebookApp.iopub_msg_rate_limit=10000
```

## 📝 Personalización

### Cambiar variables analizadas

Editar en notebook, Sección 2:
```python
# Original
autoeficacia_cols = ['autoeficacia_3_anos', 'nivel_autoeficacia']

# Modificar según necesidad
autoeficacia_cols = ['otra_variable', 'categoria']
```

### Cambiar resolución de gráficos

En sección de visualizaciones, cambiar:
```python
# Original (300 DPI para impresión)
plt.savefig('grafico.png', dpi=300, bbox_inches='tight')

# Para pantalla (72 DPI)
plt.savefig('grafico.png', dpi=72, bbox_inches='tight')

# Para presentación (150 DPI)
plt.savefig('grafico.png', dpi=150, bbox_inches='tight')
```

### Cambiar número de bins en histograma

```python
# Original
axes[0].hist(autoeficacia_data, bins=30, ...)

# Más bins (más detalle)
axes[0].hist(autoeficacia_data, bins=50, ...)

# Menos bins (más agregado)
axes[0].hist(autoeficacia_data, bins=15, ...)
```

## 📋 Reproducibilidad

### Garantizar resultados idénticos

```bash
# 1. Usar mismo Python
python3 --version  # Debe ser 3.12.x

# 2. Usar mismo venv
source venv/bin/activate

# 3. Usar mismo dataset
md5sum data_extraction/panel_maestro_UPV.csv

# 4. Ejecutar script idéntico
jupyter nbconvert --to notebook --execute 01_analisis_univariante_autoeficiencia.ipynb
```

## ✅ Checklist de Ejecución

- [ ] venv está activado
- [ ] Python 3.12 disponible
- [ ] Dependencias instaladas
- [ ] Dataset existe en `data_extraction/`
- [ ] Permisos de escritura en `data_analysis/analisis_autoeficiencia/`
- [ ] Notebook ejecutado sin errores
- [ ] 6 gráficos PNG generados
- [ ] Gráficos tienen resolución 300 DPI
- [ ] Estadísticas mostradas en output
- [ ] Archivos PNG guardados correctamente

## 🎓 Recursos Adicionales

- **Documentación Jupyter**: https://jupyter.org/
- **Documentación pandas**: https://pandas.pydata.org/
- **Documentación matplotlib**: https://matplotlib.org/
- **Test Shapiro-Wilk**: https://en.wikipedia.org/wiki/Shapiro%E2%80%93Wilk_test

## 📞 Soporte

Si hay problemas con la ejecución:

1. Revisar archivos de log (si existen)
2. Ejecutar línea por línea en Python shell para identificar error
3. Verificar que datos no tienen valores corruptos
4. Consultar documentación de librerías específicas

**Para ayuda en ejecución**: Contactar al equipo de análisis de datos
