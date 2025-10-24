# Instrucciones de Ejecución - Análisis Univariante de Tasa de Abandono

## 🎯 Objetivo

Ejecutar el análisis univariante de tasa de abandono y regenerar todos los gráficos y resultados.

---

## 📋 Requisitos Previos

### Sistema Operativo
- Linux, macOS o Windows (con WSL/Git Bash)
- Terminal/Consola disponible

### Software Requerido
- Python 3.10+
- pip (gestor de paquetes de Python)
- Jupyter (se instala con las dependencias)

### Datos Requeridos
- `data_extraction/panel_maestro_UPV.csv`
  - Ubicación: Directorio raíz del proyecto
  - Tamaño: ~200 KB
  - Formato: CSV UTF-8

---

## 🔧 Opción 1: Ejecución Completa con Jupyter Notebook

### Paso 1: Activar Entorno Virtual

```bash
# Navegar a la carpeta raíz del proyecto
cd /path/to/UPV-Bachelor--und-Masterstudium-analysis

# Activar el entorno virtual (Linux/macOS)
source venv/bin/activate

# Activar el entorno virtual (Windows - PowerShell)
venv\Scripts\Activate.ps1

# Activar el entorno virtual (Windows - CMD)
venv\Scripts\activate.bat
```

### Paso 2: Abrir Jupyter Notebook

```bash
# Opción A: Iniciar Jupyter Notebook (interfaz web clásica)
jupyter notebook

# Opción B: Iniciar JupyterLab (interfaz moderna)
jupyter lab
```

### Paso 3: Navegar al Notebook

1. Se abrirá una ventana del navegador
2. Navegar a: `data_analysis/analisis_tasa_abandono/`
3. Hacer doble clic en: `01_analisis_univariante_tasa_abandono.ipynb`

### Paso 4: Ejecutar el Notebook

**Opción A: Ejecutar Todo**
- Menú: `Cell` → `Run All`
- Atajo: `Ctrl+A` luego `Ctrl+Enter`
- Tiempo estimado: 2-3 minutos

**Opción B: Ejecutar Celda por Celda**
- Seleccionar celda
- Presionar: `Shift+Enter`
- Esperar a que termine (indicador de `In [*]`)
- Pasar a siguiente celda

### Paso 5: Revisar Resultados

1. **Outputs de consola**: Aparecen debajo de cada celda
2. **Gráficos**: Se muestran incrustados en el notebook
3. **Archivos generados**: Se guardan en la misma carpeta

---

## 🚀 Opción 2: Ejecución Rápida con nbconvert

### Paso 1: Activar Entorno Virtual

```bash
cd /path/to/UPV-Bachelor--und-Masterstudium-analysis
source venv/bin/activate  # Linux/macOS
# o
venv\Scripts\activate     # Windows
```

### Paso 2: Ejecutar el Notebook

```bash
# Navegar a la carpeta del análisis
cd data_analysis/analisis_tasa_abandono

# Ejecutar todas las celdas y guardar resultados
jupyter nbconvert --to notebook --execute \
  01_analisis_univariante_tasa_abandono.ipynb \
  --output 01_analisis_univariante_tasa_abandono_ejecutado.ipynb
```

### Paso 3: Ver Resultados

```bash
# Los gráficos se guardan automáticamente como PNG
ls -lh *.png

# Abrir el notebook ejecutado en tu editor favorito
# (VS Code, Jupyter, etc.)
```

---

## 💻 Opción 3: Ejecución desde VS Code (Recomendado)

### Paso 1: Abrir VS Code

```bash
# Desde la carpeta raíz del proyecto
code .
```

### Paso 2: Instalar Extensión de Jupyter

1. Abrir: `Extensions` (Ctrl+Shift+X)
2. Buscar: "Jupyter"
3. Instalar la extensión oficial de Microsoft

### Paso 3: Abrir el Notebook

1. En el explorador de archivos (izquierda)
2. Navegar a: `data_analysis` → `analisis_tasa_abandono`
3. Hacer clic en: `01_analisis_univariante_tasa_abandono.ipynb`

### Paso 4: Seleccionar Kernel

1. Botón arriba a la derecha: "Select Kernel"
2. Elegir: Python de venv (si no aparece, hacer clic en "Python Environments")
3. Ruta típica: `.../venv/bin/python`

### Paso 5: Ejecutar Celdas

**Ejecutar una celda:**
- Hacer clic en la celda
- Presionar: `Shift+Enter` o Ctrl+Enter

**Ejecutar todo el notebook:**
- Botón de play (▶) en la barra superior
- O: Ctrl+Shift+Enter

### Paso 6: Revisar Resultados

- Los outputs aparecen debajo de cada celda
- Los gráficos se muestran incrustados
- Los archivos PNG se guardan en la carpeta

---

## 🐍 Opción 4: Ejecución desde Python Script

### Paso 1: Crear Script de Ejecución

Crear archivo: `run_analisis.py`

```python
#!/usr/bin/env python3
import os
import subprocess
import sys

# Cambiar a directorio de análisis
os.chdir('data_analysis/analisis_tasa_abandono')

# Ejecutar notebook
cmd = [
    sys.executable, '-m', 'jupyter', 'nbconvert',
    '--to', 'notebook',
    '--execute',
    '01_analisis_univariante_tasa_abandono.ipynb',
    '--output', '01_analisis_univariante_tasa_abandono.ipynb'
]

result = subprocess.run(cmd, capture_output=True, text=True)
print(result.stdout)
if result.stderr:
    print("ERRORES:", result.stderr)

print("\n✅ Análisis completado")
print("📊 Gráficos guardados en:")
print("  - 01_histogramas_densidad_tasa_abandono.png")
print("  - 02_boxplots_tasa_abandono.png")
print("  - 03_violinplots_tasa_abandono.png")
print("  - 04_qqplots_tasa_abandono.png")
print("  - 05_comparacion_abandono_permanencia.png")
print("  - 06_distribucion_abandono_por_categoria.png")
```

### Paso 2: Ejecutar el Script

```bash
# Hacer ejecutable (Linux/macOS)
chmod +x run_analisis.py

# Ejecutar
python3 run_analisis.py
# o (si Python 3 es predeterminado)
python run_analisis.py
```

---

## 📊 Gráficos Generados

Al ejecutar el notebook, se crean 6 gráficos:

| # | Archivo | Descripción |
|---|---------|-------------|
| 1 | `01_histogramas_densidad_tasa_abandono.png` | Distribución y densidad |
| 2 | `02_boxplots_tasa_abandono.png` | Detección de outliers |
| 3 | `03_violinplots_tasa_abandono.png` | Distribución detallada |
| 4 | `04_qqplots_tasa_abandono.png` | Verificación de normalidad |
| 5 | `05_comparacion_abandono_permanencia.png` | Relación abandono-permanencia |
| 6 | `06_distribucion_abandono_por_categoria.png` | Análisis por año académico |

**Resolución**: 300 DPI (apto para impresión)
**Formato**: PNG (compatible con todos los sistemas)

---

## 🐛 Troubleshooting (Solución de Problemas)

### Problema: "ModuleNotFoundError: No module named 'pandas'"

**Solución:**
```bash
# Reinstalar dependencias
pip install pandas numpy matplotlib seaborn scipy scikit-learn jupyter
```

### Problema: "FileNotFoundError: panel_maestro_UPV.csv"

**Solución:**
- Verificar que el archivo existe: `data_extraction/panel_maestro_UPV.csv`
- Verificar ruta relativa correcta (desde `data_analysis/analisis_tasa_abandono/`)
- La ruta correcta es: `../../data_extraction/panel_maestro_UPV.csv`

### Problema: Gráficos no aparecen en notebook

**Solución:**
```python
# Agregar al inicio del notebook:
%matplotlib inline
```

### Problema: Kernel muere durante ejecución

**Solución:**
- Aumentar memoria disponible
- Ejecutar celda por celda en lugar de todo junto
- Cerrar otras aplicaciones pesadas

### Problema: Archivo modificado pero no se ejecuta cambios

**Solución:**
- Reiniciar el kernel (Kernel → Restart)
- Ejecutar: `Cell → Run All`

---

## ✅ Checklist de Verificación

Después de ejecutar, verificar que existe:

- [ ] `01_analisis_univariante_tasa_abandono.ipynb` actualizado
- [ ] `01_histogramas_densidad_tasa_abandono.png` generado
- [ ] `02_boxplots_tasa_abandono.png` generado
- [ ] `03_violinplots_tasa_abandono.png` generado
- [ ] `04_qqplots_tasa_abandono.png` generado
- [ ] `05_comparacion_abandono_permanencia.png` generado
- [ ] `06_distribucion_abandono_por_categoria.png` generado
- [ ] Outputs de consola con estadísticas
- [ ] Análisis de normalidad completado
- [ ] Resumen ejecutivo disponible

---

## ⏱️ Tiempos Esperados

| Tarea | Tiempo |
|-------|--------|
| Activar venv | 1 seg |
| Iniciar Jupyter | 5-10 seg |
| Ejecutar notebook | 2-3 min |
| Generar gráficos | Incluido en notebook |
| Total | ~3-4 minutos |

---

## 📞 Ayuda Adicional

### Ver ayuda de Jupyter
```bash
jupyter notebook --help
jupyter nbconvert --help
```

### Información de sistema
```bash
python --version
jupyter --version
pip show pandas
```

### Verificar dependencias
```bash
pip list | grep -E "pandas|numpy|matplotlib|seaborn|scipy|scikit-learn"
```

---

## 📚 Documentación Relacionada

- **README.md** - Descripción general del análisis
- **ESTRUCTURA_ANALISIS_UNIVARIANTE.md** - Metodología detallada
- **RESUMEN_ANALISIS_ABANDONO.md** - Resultados esperados

---

## 🎓 Interpretación de Resultados

Una vez ejecutado el notebook:

1. **Lee** la sección "Resumen Ejecutivo"
2. **Observa** los 6 gráficos
3. **Compara** con `RESUMEN_ANALISIS_ABANDONO.md`
4. **Identifica** programas con outliers (alto/bajo abandono)
5. **Planifica** investigación adicional si es necesario

---

## ✨ Notas Finales

- La ejecución es **completamente automatizada**
- Los resultados son **reproducibles**
- Los gráficos son **de publicación**
- Los datos son **verificables**

**¡Bienvenido al análisis de tasa de abandono!** 🎓

---

**Última actualización**: 24 de octubre de 2025
