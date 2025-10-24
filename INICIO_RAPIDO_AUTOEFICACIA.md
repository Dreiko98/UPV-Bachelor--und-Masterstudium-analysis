# 🚀 Inicio Rápido - Análisis de Autoeficacia

## ⚡ Para Empezar en 2 Minutos

### 1. Ver Gráficos
```bash
# Abrir carpeta de análisis
cd data_analysis/analisis_autoeficiencia/

# Los 6 gráficos están aquí (PNG, listos para ver)
# Abrir con cualquier visor de imágenes
```

### 2. Leer Resumen
```bash
# Principales hallazgos en español
cat RESUMEN_ANALISIS_AUTOEFICACIA.md
```

### 3. Ver Detalles
```bash
# Abrir el notebook en VS Code
code 01_analisis_univariante_autoeficiencia.ipynb
```

---

## 📊 Hallazgos en 30 Segundos

| Métrica | Valor |
|--------|-------|
| **Media de autoeficacia** | 5.77 / 10 |
| **Interpretación** | Moderadamente alta |
| **Estudiantes** | 393 válidos de 483 |
| **Distribución** | No normal, sesgo izquierdo |
| **Confianza** | Moderada con variabilidad |

---

## 📁 Archivos Clave

| Archivo | Qué es | Cuándo leer |
|---------|--------|-----------|
| `README.md` | Descripción general | Primera vez |
| `RESUMEN_ANALISIS_AUTOEFICACIA.md` | Hallazgos principales | Para conclusiones rápidas |
| `ESTRUCTURA_ANALISIS_UNIVARIANTE.md` | Metodología detallada | Si quieres entender el "cómo" |
| `01_analisis_univariante_autoeficiencia.ipynb` | Código completo | Si quieres reproducir análisis |
| `*.png` | Gráficos | Para presentaciones/reportes |

---

## 🎯 Guía por Objetivo

### "Quiero ver los resultados"
1. Abre `01_histogramas_densidad_autoeficacia.png`
2. Lee `RESUMEN_ANALISIS_AUTOEFICACIA.md`
3. Listo ✓

### "Quiero entender la metodología"
1. Lee `ESTRUCTURA_ANALISIS_UNIVARIANTE.md`
2. Abre `01_analisis_univariante_autoeficiencia.ipynb` en VS Code
3. Lee los comentarios en el código

### "Quiero ejecutar el análisis de nuevo"
```bash
source venv/bin/activate
cd data_analysis/analisis_autoeficiencia/
jupyter nbconvert --to notebook --execute 01_analisis_univariante_autoeficiencia.ipynb
```

### "Quiero comparar con otros análisis"
1. Ve a `INDICE_GENERAL_ANALISIS.md`
2. Abre la carpeta de otro análisis (satisfacción, empleabilidad, etc.)
3. Compara gráficos y resúmenes

---

## 🔍 Preguntas Frecuentes

**P: ¿Los gráficos están listos para presentar?**
A: Sí, están a 300 DPI, perfectos para imprimir y presentaciones.

**P: ¿Puedo cambiar los gráficos?**
A: Sí, edita el notebook `01_analisis_univariante_autoeficiencia.ipynb` y ejecuta de nuevo.

**P: ¿Por qué el análisis dice "NO normal"?**
A: Porque el test Shapiro-Wilk p-valor < 0.05. Significa usar tests no-paramétricos para comparaciones.

**P: ¿18.6% datos faltantes es malo?**
A: No, es aceptable. 81.4% válidos es suficiente para análisis estadístico.

**P: ¿Dónde está el código?**
A: En el notebook `01_analisis_univariante_autoeficiencia.ipynb`, completamente comentado.

---

## 📚 Archivos Generados

```
analisis_autoeficiencia/
├── Notebook (código ejecutable)
│   └── 01_analisis_univariante_autoeficiencia.ipynb
│
├── Gráficos (300 DPI, listos para presentar)
│   ├── 01_histogramas_densidad_autoeficacia.png
│   ├── 02_boxplots_autoeficacia.png
│   ├── 03_violinplots_autoeficacia.png
│   ├── 04_qqplots_autoeficacia.png
│   ├── 05_distribucion_nivel_autoeficacia.png
│   └── 06_autoeficacia_por_categoria.png
│
└── Documentación (en español)
    ├── README.md (inicio rápido)
    ├── ESTRUCTURA_ANALISIS_UNIVARIANTE.md (metodología)
    ├── RESUMEN_ANALISIS_AUTOEFICACIA.md (hallazgos)
    └── INSTRUCCIONES_EJECUCION.md (cómo ejecutar)
```

---

## 💡 Estadísticas en Español

- **Media**: Promedio de autoeficacia = 5.77 de 10
- **Mediana**: Valor central = 6.03 de 10
- **Desv. Est.**: Cuánto varían = 1.68 puntos
- **Rango**: De 0 a 10
- **Asimetría**: -0.51 = Algunos estudiantes con baja autoeficacia
- **P-valor**: 0.000015 = Datos NO normales estadísticamente

---

## ✅ Checklist Rápido

- [ ] He abierto al menos un gráfico
- [ ] He leído RESUMEN_ANALISIS_AUTOEFICACIA.md
- [ ] Entiendo que media es 5.77/10
- [ ] Sé dónde están los gráficos (6 PNG)
- [ ] Sé dónde está el código (notebook)
- [ ] Sé dónde está la documentación (4 archivos MD)

---

## 🎓 Contexto de Autoeficacia

**¿Qué es autoeficacia?**
La percepción de un estudiante sobre su capacidad para realizar tareas académicas.

**¿Es bueno 5.77?**
Sí, es moderadamente positivo (más que el punto medio de 5.0).

**¿Hay problema si algunos tienen 2 y otros 9?**
No es un problema, es normal. Hay variabilidad natural entre estudiantes.

**¿Esto afecta el abandono?**
Posiblemente sí. Estudiantes con baja autoeficacia tienen más riesgo.

---

## 🚀 Pasos Siguientes

1. ✅ Entender autoeficacia en UPV (ya hecho)
2. 📊 Comparar con otros análisis (usar INDICE_GENERAL_ANALISIS.md)
3. 🔗 Relacionar con empleabilidad y abandono (hacer análisis cruzado)
4. 💼 Usar en toma de decisiones académicas

---

## 📞 Ayuda Rápida

- **"No veo los gráficos"** → Abre carpeta `analisis_autoeficiencia/`, busca archivos `.png`
- **"No entiendo el análisis"** → Lee `RESUMEN_ANALISIS_AUTOEFICACIA.md`
- **"¿Cómo lo hizo?"** → Ve `ESTRUCTURA_ANALISIS_UNIVARIANTE.md`
- **"¿Cómo lo ejecuto?"** → Consulta `INSTRUCCIONES_EJECUCION.md`

---

**¡Análisis completado y listo para usar!** 🎉

Creado: 24 de octubre de 2025
