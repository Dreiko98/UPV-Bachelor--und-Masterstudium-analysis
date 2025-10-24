# 🚀 Acceso Rápido: Análisis Temporal (2020-2024)

**¿Qué quieres hacer? Elige tu opción:**

---

## 📊 1️⃣ Ver Gráficos de Tendencias

### Si quieres una VISIÓN GENERAL rápida:
1. Abre: `data_analysis/analisis_temporal/01_tendencias_principales.png`
   - Muestra 4 indicadores clave: Satisfacción, Abandono, Autoeficacia, Empleabilidad
   - Periodo completo 2020-2024
   - ⏱️ 2 minutos

2. Luego: `data_analysis/analisis_temporal/03_evolucion_por_centros.png` 
   - Compara 5 centros principales
   - Muestra divergencias
   - ⏱️ 3 minutos

### Si quieres DETALLES técnicos:
- `02_variabilidad_temporal.png` → Cómo cambia la dispersión
- `04_cambios_ano_a_ano.png` → Años más turbulentos
- `05_correlacion_temporal.png` → Relaciones entre indicadores
- `06_heatmap_temporal.png` → Matriz completa de cambios

---

## 📄 2️⃣ Leer Resúmenes y Análisis

### Para DIRECTIVOS / TOMA DE DECISIONES:
📌 **Lee:** `RESUMEN_EJECUTIVO_ANALISIS_TEMPORAL.md`
- Los 5 hallazgos principales
- Qué significa cada uno
- Recomendaciones accionables
- ⏱️ Tiempo: 10-15 minutos

### Para ANALISTAS TÉCNICOS:
📌 **Lee:** `data_analysis/analisis_temporal/README_ANALISIS_TEMPORAL.md`
- Interpretación detallada de tendencias
- Métodos aplicados
- Descripción completa de gráficos
- Análisis por centro y titulación
- ⏱️ Tiempo: 30-45 minutos

### Para DIRECTORES DE CENTRO:
📌 **Lee:** `INTEGRACION_MULTIVARIANTE_TEMPORAL.md`
- Cómo el análisis temporal conecta con multivariante
- Matriz de decisiones para tu centro
- Planes de acción específicos
- Escenarios futuros
- ⏱️ Tiempo: 20-30 minutos

---

## 📊 3️⃣ Acceder a Datos Específicos

### Tendencias por Año:
```
data_analysis/analisis_temporal/series_temporal_principal.csv
```
**Contiene:** Medias anuales para 6 indicadores (2020-2024)
**Columnas:** satisfaccion, abandono, autoeficacia, empleabilidad, etc.
**Uso:** Importar en Excel → Crear gráficos personalizados

### Cambios Año a Año:
```
data_analysis/analisis_temporal/cambios_ano_a_ano.csv
```
**Contiene:** Diferencias anuales (2021-2024)
**Ejemplo:** Si 2020 satisfacción = 7.0, cambio 2020-2021 = -0.41
**Uso:** Identificar años de mayor volatilidad

### Desempeño de Titulaciones:
```
data_analysis/analisis_temporal/desempeño_titulaciones.csv
```
**Contiene:** Score de desempeño para TODAS las titulaciones
**Ejemplo:** Ingeniería Eléctrica score 6.8, Artes Plásticas score 4.1
**Columnas:** Satisfacción, abandono, autoeficacia, empleabilidad, score total
**Uso:** Ranking de mejor a peor. Base para decisiones curriculares.

### Correlaciones entre Indicadores:
```
data_analysis/analisis_temporal/correlaciones_temporal.csv
```
**Contiene:** Matriz 4×4 de correlaciones (Pearson r)
**Ejemplo:** r(Satisfacción-Autoeficacia) = 0.98 (muy fuerte)
**Uso:** Importar a Excel, crear análisis de sensibilidad

---

## 🎯 4️⃣ Próximas Acciones Recomendadas

### Si eres RESPONSABLE ACADÉMICO:
1. Lee: `RESUMEN_EJECUTIVO_ANALISIS_TEMPORAL.md`
2. Mira: `03_evolucion_por_centros.png`
3. Acción: Identifica tendencia de tu centro
4. Lee: `INTEGRACION_MULTIVARIANTE_TEMPORAL.md` (tu matriz de decisión)
5. Planifica: Intervenciones según urgencia

### Si eres DIRECTOR DE CENTRO:
1. Lee: `INTEGRACION_MULTIVARIANTE_TEMPORAL.md` (sección "3 CASOS")
2. Identifica: Tu caso (A, B, o C)
3. Lee: Plan de acción asociado
4. Obtén: Presupuesto indicativo
5. Implementa: Según timeline (90 días)

### Si eres COORDINADOR DE TITULACIÓN:
1. Descarga: `desempeño_titulaciones.csv`
2. Busca: Tu titulación
3. Lee: Score de desempeño
4. Compara: Con top 3 (ingeniería) y bottom 3 (humanidades)
5. Lee: README_ANALISIS_TEMPORAL.md (sección titulaciones)

### Si eres ANALISTA / INVESTIGADOR:
1. Lee: README_ANALISIS_TEMPORAL.md (técnico)
2. Abre: Notebook `01_analisis_temporal.ipynb`
3. Explora: Código Python reproducible
4. Descarga: 5 CSV files para análisis personalizado
5. Crea: Análisis adicionales (regresión, predicción, etc.)

---

## 🔍 Búsqueda Rápida por Pregunta

**P: "¿Cómo evolucionó la satisfacción 2020-2024?"**  
→ `01_tendencias_principales.png` (subgráfico superior izq) OR  
→ `series_temporal_principal.csv` (columna "satisfaccion_promedio")

**P: "¿Qué año fue más caótico?"**  
→ `04_cambios_ano_a_ano.png` → Busca barra más grande

**P: "¿Mis centros mejoran o empeoran?"**  
→ `03_evolucion_por_centros.png` → Línea sube o baja

**P: "¿Qué titulación tiene mejor empleabilidad?"**  
→ `desempeño_titulaciones.csv` → Ordena por empleabilidad descendente

**P: "¿Autoeficacia sigue bajando?"**  
→ `01_tendencias_principales.png` (subgráfico inferior izq) → Línea verde

**P: "¿Variabilidad aumenta o disminuye?"**  
→ `02_variabilidad_temporal.png` → ¿Curvas suben o bajan?

**P: "¿Qué indicadores van juntos?"**  
→ `05_correlacion_temporal.png` → Heatmap muestra colores altos

**P: "¿Qué pasó 2020-2021?"**  
→ `RESUMEN_EJECUTIVO_ANALISIS_TEMPORAL.md` → Hallazgo 2 "COVID-19"

**P: "¿Cuál es el plan para mi centro?"**  
→ `INTEGRACION_MULTIVARIANTE_TEMPORAL.md` → Matriz de decisiones

**P: "¿Qué datos puedo descargar?"**  
→ `data_analysis/analisis_temporal/*.csv` → 5 archivos disponibles

---

## ⏱️ Itinerarios según Tiempo Disponible

### 📱 "Tengo 5 minutos"
1. Ve a: `01_tendencias_principales.png`
2. Mira: ¿Qué indicador más cambió?
3. Conclusión: Satisfacción estable, pero autoeficacia baja

### 📋 "Tengo 15 minutos"
1. Lee: `RESUMEN_EJECUTIVO_ANALISIS_TEMPORAL.md` (completo)
2. Toma nota: 5 hallazgos principales
3. Acción: ¿Qué afecta a tu área?

### 📊 "Tengo 1 hora"
1. Lee: `RESUMEN_EJECUTIVO_ANALISIS_TEMPORAL.md`
2. Mira: Todos los 6 gráficos
3. Lee: `INTEGRACION_MULTIVARIANTE_TEMPORAL.md`
4. Identifica: Tu posición en matriz de decisiones

### 🔬 "Tengo 2+ horas"
1. Revisa: Toda la carpeta `analisis_temporal/`
2. Lee: README_ANALISIS_TEMPORAL.md (técnico)
3. Abre: Notebook `01_analisis_temporal.ipynb`
4. Descarga: 5 CSVs
5. Crea: Análisis personalizado

---

## 📁 Estructura de Carpetas

```
Proyecto UPV/
│
├── RESUMEN_EJECUTIVO_ANALISIS_TEMPORAL.md  ← AQUÍ EMPEZAR
├── INTEGRACION_MULTIVARIANTE_TEMPORAL.md   ← MATRIZ DECISIONES
│
└── data_analysis/
    └── analisis_temporal/  ← TODOS LOS RESULTADOS
        ├── Gráficos (6 PNG, 300 DPI)
        ├── Datos (5 CSV)
        ├── Notebook (01_analisis_temporal.ipynb)
        └── README_ANALISIS_TEMPORAL.md
```

---

## ✅ Checklist de Completitud

- [x] Datos temporales cargados (2020-2024)
- [x] 6 gráficos generados (300 DPI)
- [x] 5 archivos CSV exportados
- [x] Tendencias identificadas
- [x] Variabilidad medida
- [x] Centros comparados
- [x] Titulaciones analizadas
- [x] Correlaciones calculadas
- [x] Documentación técnica
- [x] Resumen ejecutivo
- [x] Integración con multivariante
- [x] Matriz de decisiones

---

## 🎓 Perspectiva: Temporal + Multivariante

**Análisis Multivariante (Oct 2024):** "Hay 3 clusters"  
**Análisis Temporal (2020-2024):** "Clusters crecen en divergencia"  

**Combinado:** 3 clusters son REALES y DIVERGENTES. Intervención urgente.

Ver: `INTEGRACION_MULTIVARIANTE_TEMPORAL.md`

---

## 📞 ¿Algo no está claro?

**Si no encuentras algo:** → Busca en `README_ANALISIS_TEMPORAL.md`

**Si tienes pregunta técnica:** → Consulta `README_ANALISIS_TEMPORAL.md` (sección "Metodología")

**Si necesitas datos específicos:** → Ve a `data_analysis/analisis_temporal/` y abre los CSV

**Si quieres reproducir/modificar:** → Usa `01_analisis_temporal.ipynb` en Jupyter

**Si necesitas interpretar:** → Lee `RESUMEN_EJECUTIVO_ANALISIS_TEMPORAL.md`

---

**¡Estás listo para comenzar!** 🚀

*Última actualización: 24-10-2024 | Próxima revisión: Octubre 2025*

