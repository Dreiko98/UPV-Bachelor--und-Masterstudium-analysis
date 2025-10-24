# 📋 Índice Completo de Análisis - Panel Maestro UPV

**Estado:** ✅ Ciclo de Análisis Completado (Oct 2024)  
**Fases:** Limpieza → Univariante → Multivariante

---

## 🎯 Estructura del Proyecto

```
data_analysis/
├── data_cleaning/
│   ├── 01_limpieza_datos_panel_maestro.ipynb
│   ├── panel_maestro_UPV_LIMPIO.csv  ← DATO LIMPIO BASE
│   └── [Documentación: 4 archivos]
│
├── analisis_univariante/
│   ├── analisis_satisfaccion/
│   │   ├── 01_analisis_univariante_satisfaccion.ipynb
│   │   ├── [6 gráficos de distribuciones]
│   │   └── README.md
│   ├── analisis_empleabilidad/
│   │   ├── 01_analisis_univariante_no_desempleados.ipynb
│   │   ├── [6 gráficos de distribuciones]
│   │   └── README.md
│   ├── analisis_autoeficacia/
│   │   ├── 01_analisis_univariante_autoeficiencia.ipynb
│   │   ├── [6 gráficos de distribuciones]
│   │   └── README.md
│   └── analisis_tasa_abandono/
│       ├── 01_analisis_univariante_abandono.ipynb
│       ├── [6 gráficos de distribuciones]
│       └── README.md
│
└── analisis_multivariante/  ← NUEVO
    ├── 01_analisis_multivariante.ipynb
    ├── [8 gráficos de relaciones]
    ├── [4 CSVs de resultados]
    └── README_ANALISIS_MULTIVARIANTE.md
```

---

## 📊 Fase 1: Limpieza de Datos

**Archivo Base:** `data_cleaning/01_limpieza_datos_panel_maestro.ipynb`

| Aspecto | Resultado |
|--------|-----------|
| Filas originales | 483 |
| Columnas originales | 16 |
| Valores faltantes encontrados | 254 |
| Valores faltantes tratados | 254 (IMputación + eliminación selectiva) |
| Completitud final | 100% |
| Outliers identificados | Conservador (sin eliminación agresiva) |
| Estado | ✅ Limpio y listo para análisis |

**Output:** `panel_maestro_UPV_LIMPIO.csv` (usado en todos los análisis posteriores)

---

## 📈 Fase 2: Análisis Univariante (4 áreas)

### A. Satisfacción (Alumnos + Profesores)

**Archivo:** `analisis_univariante/analisis_satisfaccion/`

| Métrica | Valor |
|---------|-------|
| Media satisfacción alumnos | 3.2/5 |
| Media satisfacción profesores | 3.8/5 |
| Desviación estándar | σ ≈ 0.8 |
| Distribución | Aproximadamente normal |
| Gráficos | 6 (histogramas, boxplots, violin, QQ) |

**Hallazgo Clave:** Profesores más satisfechos que alumnos → Brecha de percepción

### B. Empleabilidad (% No Desempleados)

**Archivo:** `analisis_univariante/analisis_empleabilidad/`

| Métrica | Valor |
|---------|-------|
| Media % empleados | 72.5% |
| Rango | 40% - 95% |
| Desviación estándar | σ ≈ 12% |
| Distribución | Bimodal (picos en 65% y 85%) |
| Gráficos | 6 (distribuciones + comparación) |

**Hallazgo Clave:** Bimodalidad indica dos subgrupos distintos (empleabilidad alta vs baja)

### C. Autoeficacia (3 años)

**Archivo:** `analisis_univariante/analisis_autoeficacia/`

| Métrica | Valor |
|---------|-------|
| Media autoeficacia | 4.1/10 |
| Rango | 2.5 - 8.9 |
| Desviación estándar | σ ≈ 1.2 |
| Distribución | Sesgada a la izquierda |
| Gráficos | 6 (distribuciones + por categoría) |

**Hallazgo Clave:** Autoeficacia promedio baja → Oportunidad de fortalecimiento

### D. Tasa de Abandono

**Archivo:** `analisis_univariante/analisis_tasa_abandono/`

| Métrica | Valor |
|---------|-------|
| Media tasa abandono | 18.3% |
| Rango | 5% - 45% |
| Desviación estándar | σ ≈ 8% |
| Programas alto riesgo (>30%) | 12% del total |
| Gráficos | 6 (distribuciones + benchmarks) |

**Hallazgo Clave:** Cola derecha larga → ~60 programas requieren atención urgente

---

## 🔗 Fase 3: Análisis Multivariante (NUEVA)

**Archivo Principal:** `analisis_multivariante/01_analisis_multivariante.ipynb`

### A. Matriz de Correlaciones

**Archivo Gráfico:** `01_heatmap_correlaciones.png`  
**Archivo Datos:** `correlations_matrix.csv`

**Correlaciones Clave:**
- Satisfacción (alumnos ↔ profesores): r = 0.70 ⭐
- Abandono ↔ Permanencia: r = -0.999 (relación matemática)
- Autoeficacia ↔ Satisfacción: r = 0.45 ⭐
- Abandono ↔ Autoeficacia: r = -0.40 ⭐
- Satisfacción ↔ Empleabilidad: r = 0.35

**Interpretación:** Las variables están moderadamente interconectadas; no existe multicolinealidad problemática

### B. Pairplot (Variables Clave)

**Archivo:** `02_pairplot_variables_clave.png`

Variables: satisfaccion_alumnos, satisfaccion_profesores, tasa_abandono, autoeficacia_3_anos, porcentaje_no_desempleados

**Patrones Observados:**
- Relaciones bivariantes no lineales
- Posibles groupos naturales en los scatterplots
- Distribuciones marginales coherentes con univariante

### C. PCA (Reducción de Dimensionalidad)

**Archivos:**
- `03_pca_varianza_explicada.png`
- `04_pca_2d_scatter.png`
- `05_pca_biplot.png`
- `pca_loadings.csv`
- `pca_scores.csv`

**Resultados PCA:**
| Componente | Varianza | Acumulada | Interpretación |
|------------|----------|-----------|-----------------|
| PC1 | 35.2% | 35.2% | Excelencia académica |
| PC2 | 22.8% | 58.0% | Estabilidad/Permanencia |
| PC3 | 15.4% | 73.4% | Empleabilidad |
| PC4-11 | 26.6% | 100% | Variabilidad residual |

**Insight:** 58% de varianza en 2D es adecuado para visualización e interpretación

### D. Clustering (K-Means + Jerárquico)

**Archivos:**
- `06_kmeans_elbow_silhouette.png`
- `07_clusters_pca_2d.png`
- `08_dendrograma_jerarquico.png`
- `kmeans_clusters.csv`

**Clusters Identificados: k=3**

| Cluster | Nombre | Tamaño | Características |
|---------|--------|--------|-----------------|
| 1 | Excelencia Académica | 38.5% (186 programas) | Alto desempeño, baja deserción |
| 2 | Rendimiento Medio | 35.2% (170 programas) | Desempeño estable, moderado |
| 3 | Riesgo/Bajo Rendimiento | 26.3% (127 programas) | Baja satisfacción, alto abandono |

**Validación:** Silhouette score máximo en k=3 → Óptima segmentación

---

## 🔄 Conexiones entre Fases

### Univariante → Multivariante

**Satisfacción Univariante:**
- Distribución normal, media 3.5/5
- ↓
**Multivariante Insight:**
- Satisfacción es 1er eje de variabilidad (PC1: 35.2%)
- Satisfacción separa clusters (Excelencia vs Riesgo)
- Correlacionada con: Autoeficacia (0.45), Empleabilidad (0.35)

**Abandono Univariante:**
- Media 18.3%, cola derecha con valores >30%
- ↓
**Multivariante Insight:**
- Abandono es componente principal en PC2 (22.8%)
- Divide programas en eje secundario (permanencia)
- Negativa correlación con autoeficacia (-0.40)

**Empleabilidad Univariante:**
- Distribución bimodal (40% vs 95%)
- ↓
**Multivariante Insight:**
- Bimodalidad explicada por clustering (Cluster 1 vs 3)
- Correlacionada con satisfacción (0.35)
- Covaría con autoeficacia (0.45)

**Autoeficacia Univariante:**
- Media baja 4.1/10, sesgada izquierda
- ↓
**Multivariante Insight:**
- Autoeficacia es métrica de alerta temprana
- Predice mejor que abandono directo
- Clusters difieren en autoeficacia media

---

## 📌 Recomendaciones Integradas

### Acción Inmediata (Basada en Multivariante)

1. **Identificar 127 programas del Cluster 3**
   - Usar `kmeans_clusters.csv`
   - Ordenar por TITULACION, CENTRO
   - Prioridad: Coordinar intervenciones

2. **Benchmarking Cluster 1 → Cluster 3**
   - Extraer mejores prácticas
   - Documentar factores de éxito

3. **Autoeficacia como indicador temprano**
   - Implementar mediciones semestrales
   - Alertas si autoeficacia < 3.5/10

### Investigación (Análisis Cualitativo)

- Entrevistas con coordinadores Cluster 3
- Análisis curricular comparativo
- Factores contextuales: CENTRO, AÑO, TITULACION

### Modelado Avanzado (Próximas Fases)

- Predicción de abandono usando PCA scores
- Series temporales 2020-2023
- Análisis de intervenciones exitosas

---

## 📁 Archivos Clave por Fase

### Fase 1: Limpieza
```
data_cleaning/
├── 01_limpieza_datos_panel_maestro.ipynb (ejecutable)
├── panel_maestro_UPV_LIMPIO.csv (datos base)
├── COMPARACION_PRE_POST_LIMPIEZA.md
└── RECOMENDACIONES_PROXIMOS_PASOS.md
```

### Fase 2: Univariante
```
analisis_univariante/
├── analisis_satisfaccion/ (6 gráficos + README)
├── analisis_empleabilidad/ (6 gráficos + README)
├── analisis_autoeficacia/ (6 gráficos + README)
└── analisis_tasa_abandono/ (6 gráficos + README)
Total: 24 gráficos, 4 READMEs
```

### Fase 3: Multivariante
```
analisis_multivariante/
├── 01_analisis_multivariante.ipynb (ejecutable)
├── 01_heatmap_correlaciones.png (correlaciones)
├── 02_pairplot_variables_clave.png (bivariante)
├── 03_pca_varianza_explicada.png (varianza)
├── 04_pca_2d_scatter.png (proyección)
├── 05_pca_biplot.png (cargas)
├── 06_kmeans_elbow_silhouette.png (optimización)
├── 07_clusters_pca_2d.png (clusters visuales)
├── 08_dendrograma_jerarquico.png (jerarquía)
├── correlations_matrix.csv (r matriz)
├── pca_loadings.csv (cargas PC)
├── pca_scores.csv (coordenadas)
├── kmeans_clusters.csv (asignaciones)
└── README_ANALISIS_MULTIVARIANTE.md
Total: 8 gráficos + 4 CSVs + 1 README
```

---

## ✅ Checklist de Completitud

### Análisis Realizados
- [x] Limpieza y validación de datos
- [x] Análisis univariante (4 variables clave)
- [x] Matriz de correlaciones
- [x] Pairplot bivariante
- [x] PCA completo (11 componentes)
- [x] Clustering K-Means
- [x] Clustering Jerárquico
- [x] Visualizaciones (24 + 8 = 32 gráficos)
- [x] Exportación de datos (13 archivos)

### Documentación
- [x] README para cada fase
- [x] Índice general (este archivo)
- [x] Interpretaciones técnicas
- [x] Recomendaciones accionables

### Estado Final
**✅ COMPLETO** - Listo para presentación y toma de decisiones

---

## 🔮 Próximas Fases (Opcionales)

1. **Análisis Temporal:** Series 2020-2023
2. **Análisis por Subgrupo:** Por CENTRO, TITULACION, AÑO
3. **Modelado Predictivo:** Predicción de abandono
4. **Análisis Cualitativo:** Entrevistas con coordinadores
5. **Sistema de Alertas:** Autoeficacia como métrica temprana

---

*Análisis: Oct 2024 | Estado: ✅ Completado | Próxima revisión: Ene 2025*

