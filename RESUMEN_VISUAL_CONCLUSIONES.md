# 📊 RESUMEN VISUAL - CONCLUSIONES PARA DASHBOARD
## Panel Maestro UPV - Guía de Decisiones Rápida

**Formato:** Referencia visual de decisiones  
**Uso:** Acompañar a INFORME_CONCLUSIONES_DASHBOARD.md  

---

## 🎯 LOS 10 HALLAZGOS EN 60 SEGUNDOS

```
┌─────────────────────────────────────────────────────────────────────────┐
│ 1. SATISFACCIÓN es el EJE PRINCIPAL                                   │
│    • Alumnos: 6.9/10 | Profesores: 8.7/10 (Brecha +1.73)             │
│    • Explica 35% de variación en desempeño                             │
│    • ACCIÓN: Mejorar satisfacción alumnos como lever primario         │
└─────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────┐
│ 2. AUTOEFICACIA es el CANARIO (⚠️ ALERTA)                              │
│    • Media 5.8/10 (media-baja)                                         │
│    • Baja -4.8% en 5 años (empeorando)                                │
│    • Predice abandono: r = -0.40                                       │
│    • ACCIÓN: Sistema monitoreo semestral, intervención temprana       │
└─────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────┐
│ 3. HAY 3 SEGMENTOS DISTINTOS (No es homogéneo)                        │
│                                                                          │
│    🥇 CLUSTER 1: 38.5% (186 programas) - EXCELENCIA                   │
│       Satisfacción 3.9/5 | Abandono 10% | Empleabilidad 82%          │
│       → MANTENER Y REPLICAR                                            │
│                                                                          │
│    🟡 CLUSTER 2: 35.2% (170 programas) - RENDIMIENTO MEDIO            │
│       Satisfacción 3.4/5 | Abandono 18% | Empleabilidad 70%          │
│       → MEJORAS INCREMENTALES                                          │
│                                                                          │
│    🔴 CLUSTER 3: 26.3% (127 programas) - RIESGO (⚠️ URGENTE)         │
│       Satisfacción 2.8/5 | Abandono 28% | Empleabilidad 58%          │
│       → INTERVENCIÓN URGENTE                                           │
│                                                                          │
│    DIFERENCIA Cluster1 vs Cluster3: 2.7 pts satisfacción, 18 p.p.    │
│    abandono = GRANDES DIFERENCIAS MEDIBLES                             │
│                                                                          │
│    ACCIÓN: Abandonar políticas uniformes, estrategias por cluster     │
└─────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────┐
│ 4. ABANDONO es DIFERENCIADO (No es problema uniforme)                 │
│    • Media 17.2% (pero rango 0-100%)                                  │
│    • 10% en Ingeniería vs 28% en Humanidades                          │
│    • Varía σ = 10.2% → hay modelos de bajo abandono                  │
│    • ACCIÓN: Identificar y transferir modelos de bajo abandono        │
└─────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────┐
│ 5. EMPLEABILIDAD es BIMODAL (Dos poblaciones)                         │
│    • Media 71.5% pero distribución en picos 65% y 85%                │
│    • NO es normal → dos subgrupos distintos (buenos y malos)          │
│    • Brecha huge: Ingeniería 85% vs Humanidades 58%                  │
│    • ACCIÓN: Intervención específica, no uniforme                     │
└─────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────┐
│ 6. HUMANIDADES son PROBLEMA REAL (Medible, no percepción)            │
│    • Performance Score: 4.1/10 (vs Ingeniería 6.7)                   │
│    • Empleabilidad 55-62% (crítica, vs Ingeniería 85%)               │
│    • Abandono 32-38% (alto, vs Ingeniería 8-10%)                    │
│    • Ranking NO cambia 5 años → estructura, no coyuntura             │
│    • ACCIÓN: Rediseño curricular urgente humanidades                 │
└─────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────┐
│ 7. INGENIERÍA es MODELO A REPLICAR                                    │
│    • Performance Score: 6.7-6.8 (TOP)                                │
│    • Empleabilidad 85-88% (excelente)                                │
│    • Abandono 8-10% (bajo)                                            │
│    • Satisfacción 7.2-7.4 (buena)                                    │
│    • Tendencia: Mejora sostenida 2020-2024                           │
│    • ACCIÓN: Documentar factores, adaptar a otros centros            │
└─────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────┐
│ 8. COVID FUE TEMPORAL (Sistema es resiliente)                         │
│    • Crisis 2020-2021: Satisfacción -0.41, Abandono +1.2%            │
│    • Recuperación 2021-2024: Indicadores convergen                    │
│    • 2024: Sistema adaptado, números estables                         │
│    • ACCIÓN: Mantener adaptaciones que funcionaron                    │
└─────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────┐
│ 9. VARIABILIDAD CRECE (Divergencia institucional) ⚠️ ALERTA           │
│    • Dispersión +18% en 5 años (todas las variables)                 │
│    • Programas NO convergen, se DIVERGEN                              │
│    • Brechas Cluster1-Cluster3 se amplifican                          │
│    • Políticas uniformes cada vez MENOS efectivas                     │
│    • ACCIÓN: Presupuesto y políticas diferenciadas URGENTE           │
└─────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────┐
│ 10. SISTEMA NO ES CAÓTICO (Hay estructura predecible)                 │
│     • Correlaciones significativas (r=0.70 satisfacción)              │
│     • Clusters claros (Silhouette 0.68)                               │
│     • PCA interpretable (58% varianza en 2D)                          │
│     • Tendencias predecibles (no volatilidad aleatoria)               │
│     • ACCIÓN: Cambios inteligentes funcionarán                        │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 📊 TABLA COMPARATIVA: CLUSTER 1 vs CLUSTER 3

```
┌──────────────────────────────────────────────────────────────────────────┐
│                                                                            │
│   MÉTRICA               CLUSTER 1 (✅)    CLUSTER 3 (🔴)    DIFERENCIA   │
│   ──────────────────────────────────────────────────────────────────────  │
│   Satisfacción         3.9/5            2.8/5           +1.1 (39%)      │
│   Tasa Abandono        10%              28%             +18 p.p. (180%) │
│   Empleabilidad        82%              58%             +24 p.p. (41%)  │
│   Autoeficacia         5.2/10           3.2/10          +2.0 (62%)      │
│   Programas            186              127             59 menos        │
│   Porcentaje Total     38.5%            26.3%           -12.2 p.p.      │
│                                                                            │
│   PERFIL: Ingeniería consolidada      PERFIL: Nuevos/riesgo             │
│   ACCIÓN: MANTENER                    ACCIÓN: INTERVENCIÓN URGENTE      │
│                                                                            │
└──────────────────────────────────────────────────────────────────────────┘
```

---

## 📈 TABLA TEMPORAL: EVOLUCIÓN 5 AÑOS

```
┌──────────────────────────────────────────────────────────────────────────┐
│                                                                            │
│   INDICADOR          2020    2021    2022    2023    2024    CAMBIO      │
│   ──────────────────────────────────────────────────────────────────────  │
│   Satisfacción       7.0     6.59    6.95    7.15    7.1     +1.4%       │
│   Abandono           17.8%   18.9%   17.5%   17.3%   17.2%   -3.4%       │
│   Autoeficacia       4.2     4.10    4.05    4.02    4.0     -4.8% ⚠️    │
│   Empleabilidad      70.2%   69.9%   71.0%   71.3%   71.5%   +1.9%       │
│                                                                            │
│   2020-2021: TRANSICIÓN COVID (volatilidad máxima)                        │
│   2021-2024: RECUPERACIÓN Y ESTABILIZACIÓN                               │
│                                                                            │
│   CONCLUSIÓN: SISTEMA ESTABLE pero AUTOEFICACIA BAJA (ALERTA)           │
│                                                                            │
└──────────────────────────────────────────────────────────────────────────┘
```

---

## 🎯 TITULACIONES: TOP 5 vs BOTTOM 5

```
┌──────────────────────────────────────────────────────────────────────────┐
│                                                                            │
│   TOP 5 (MODELOS A REPLICAR)          BOTTOM 5 (INTERVENCIÓN URGENTE)    │
│   ─────────────────────────────       ──────────────────────────────     │
│   1. Ingeniería           6.8          1. Humanidades Básicas  4.0        │
│   2. Ing. Técnica         6.6          2. Artes Aplicadas      4.1        │
│   3. Informática          6.5          3. Filología            4.2        │
│   4. Ing. Industrial      6.4          4. Ciencias Puras       4.3        │
│   5. Telecomunicaciones   6.3          5. Historia             4.4        │
│                                                                            │
│   Empleabilidad: 85-88%                Empleabilidad: 55-62%  (CRÍTICA) │
│   Abandono: 8-10%                      Abandono: 32-38%       (CRÍTICA) │
│   Satisfacción: 7.2-7.4                Satisfacción: 6.0-6.5             │
│   Autoeficacia: 4.5+                   Autoeficacia: 3.5-4.0             │
│                                                                            │
│   DIFERENCIA TOTAL: 2.4-2.8 puntos en performance score                  │
│                                                                            │
└──────────────────────────────────────────────────────────────────────────┘
```

---

## 🚨 INDICADORES DE ALERTA

```
🔴 CRÍTICO (Intervención inmediata):
   • Autoeficacia baja -4.8% (señal de alerta temprana de abandono)
   • Humanidades empleabilidad 55-62% (insostenible)
   • Cluster 3 abandono 28% (1 de 3.5 estudiantes abandona)
   • Variabilidad crece +18% (divergencia = políticas inefectivas)

⚠️ IMPORTANTE (Próximas 1-3 semanas):
   • Satisfacción alumnos 6.9/10 (mejora necesaria)
   • Cluster 3 satisfacción 2.8/5 (baja, causas a investigar)
   • Centro de Ciencias empeorando (investigación diagnóstica)

✅ POSITIVO (Mantener):
   • Cluster 1 estable y mejorando (modelo a replicar)
   • Ingeniería liderando (benchmarking interno)
   • Empleabilidad general sube +1.9% (progreso)
   • Sistema resiliente post-COVID (lecciones aplicables)
```

---

## 💡 RECOMENDACIONES POR URGENCIA

### 🚨 INMEDIATO (Esta semana)
```
1. Listar 127 programas Cluster 3
   • Agrupar por Centro y Titulación
   • Reunión diagnostica con coordinadores

2. Investigación especial Autoeficacia
   • ¿Por qué baja -4.8%? (grupos focales)
   • ¿Está relacionada con COVID o es estructural?

3. Análisis Centro de Ciencias
   • Empeorando mientras otros mejoran
   • Causas y propuesta de intervención
```

### 📅 CORTO PLAZO (1-4 semanas)
```
4. Documentar factores de éxito Ingeniería
   • Visitas a 5 programas top
   • Capturar prácticas replicables

5. Benchmarking Cluster 1 → Cluster 3
   • Emparejamiento de programas
   • Mentoring y visitas cruzadas

6. Diseño de intervención Humanidades
   • Rediseño curricular con empleabilidad
   • Alianzas sector laboral
```

### 🎯 MEDIANO PLAZO (1-3 meses)
```
7. Sistema de monitoreo Autoeficacia
   • Cuestionario validado
   • Implementación semestral
   • Alertas automáticas

8. Políticas diferenciadas por Cluster
   • Abandonar "one-size-fits-all"
   • Presupuestos y objetivos distintos

9. Seguimiento Empleabilidad
   • Tracking egresados 6-12 meses
   • Retroalimentación a programas
```

---

## 📊 GRÁFICAS QUE DEBE TENER EL DASHBOARD

### MUST HAVE (6 gráficas - Dashboard Ejecutivo)

```
┌─────────────────────────────────────────────────────┐
│ 1. SERIES TEMPORALES 4 INDICADORES (2020-2024)    │
│    • Satisfacción, Abandono, Autoeficacia, Empleab │
│    • Líneas con marcadores anuales                  │
│    • Anotaciones COVID 2020-2021                    │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ 2. CLUSTERS EN PCA 2D                              │
│    • 3 colores: Cluster 1/2/3                      │
│    • 483 puntos (programas)                         │
│    • Muestra separación clara                       │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ 3. HEATMAP CORRELACIONES (11×11)                   │
│    • Matriz completa de dependencias                │
│    • Color RdBu_r (rojo fuerte, azul débil)       │
│    • Labels de variables                           │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ 4. HISTOGRAMA EMPLEABILIDAD BIMODAL               │
│    • Muestra dos picos (65% y 85%)                 │
│    • Línea KDE superpuesta                         │
│    • Justifica intervención diferenciada           │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ 5. EVOLUCIÓN POR CENTROS (Top 5, 4 indicadores)   │
│    • 2×2 subplots (satisfacción, abandono, etc)   │
│    • Líneas coloreadas por centro                  │
│    • Identifica ganadores/perdedores               │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ 6. VARIABILIDAD TEMPORAL (σ por año)              │
│    • 5 líneas (σ de cada indicador)                │
│    • Muestra divergencia +18%                      │
│    • Justifica necesidad de cambio                 │
└─────────────────────────────────────────────────────┘
```

### SHOULD HAVE (6 gráficas - Dashboard Analítico)

```
7. Violin Plots Satisfacción (Alumnos vs Profesores)
8. Scatter Correlación Alumnos-Profesores
9. Box Plots Abandono (Outliers)
10. PCA Scree Plot (Validación 2D)
11. PCA Biplot (Interpretación ejes)
12. Elbow + Silhouette (Validación k=3)
```

### NICE TO HAVE (4 gráficas - Dashboard Técnico)

```
13. Pairplot 5 Variables
14. Dendrograma Jerárquico
15. Cambios Año-a-Año
16. Ranking Titulaciones (Tabla interactiva)
```

---

## 🎯 DATOS PARA EXPORTAR

```
✅ CSV 1: kmeans_clusters.csv
   • Uso: Búsqueda "¿Dónde está mi programa?"
   • Contenido: Programa, Centro, Cluster, Métricas

✅ CSV 2: desempeño_titulaciones.csv
   • Uso: Comparación horizontal por titulación
   • Contenido: Titulación, Score, Indicadores

✅ CSV 3: correlations_matrix.csv
   • Uso: Profundización técnica
   • Contenido: 11×11 matriz correlaciones

✅ CSV 4: series_temporal_principal.csv
   • Uso: Filtros temporales por centro
   • Contenido: Años 2020-2024, indicadores

✅ CSV 5: pca_scores.csv
   • Uso: Gráficos interactivos
   • Contenido: Coordenadas PC1/PC2 de 483 programas
```

---

## 🚀 PRÓXIMO PASO: DASHBOARD

### Herramientas recomendadas:
- **Tableau** (interactividad, filtros, drill-down)
- **PowerBI** (integración Microsoft, actualización automática)
- **Looker Studio** (Google, gratuito, dashboard web)

### Layout recomendado:
1. **Pestaña 1: Resumen Ejecutivo** (KPIs + 3 gráficas principales)
2. **Pestaña 2: Análisis por Cluster** (Detalles de cada segmento)
3. **Pestaña 3: Búsqueda de Programa** (Entrada libre, resultados automáticos)
4. **Pestaña 4: Evolución Temporal** (Series, filtros por año/centro)
5. **Pestaña 5: Titulaciones** (Ranking, comparativa)

### Filtros principales:
- Centro (selección múltiple)
- Cluster (1, 2, 3 o todos)
- Titulación (selección)
- Año (2020-2024)

---

## ✅ CHECKLIST ANTES DE LANZAR DASHBOARD

```
□ Gráficas 6 MUST HAVE cargadas
□ KPIs principales visibles en home
□ Búsqueda de programa funcional
□ Filtros básicos (centro, cluster, año)
□ Exportación a PDF/PNG/CSV funcional
□ Mobile-responsive (si aplica)
□ Documentación de métricas (tooltips)
□ Validación datos vs análisis originals
□ Prueba con stakeholders (coordinadores)
□ Manual de usuario generado
□ Capacitación a usuarios finales
```

---

## 📌 CONCLUSIÓN

**Este informe de conclusiones guía el diseño del dashboard final.**

**Principios clave:**
1. **No mostrar todo, destacar lo importante**
2. **Cada gráfica debe responder una pregunta clave**
3. **Interactividad > visualización estática**
4. **Acceso fácil para coordinadores (búsqueda de programa)**
5. **Profundidad para analistas (CSVs descargables)**

**Métricas que DEBE RECORDAR:**
- Satisfacción 7.1/10
- Abandono 17.2% (mejora -3.4%)
- **Autoeficacia 4.0/10 (ALERTA -4.8%)**
- Empleabilidad 71.5%
- **3 Clusters: 38.5% / 35.2% / 26.3%**
- **Humanidades en riesgo (performance 4.1)**
- **Ingeniería es modelo (performance 6.7)**

---

**Preparado por:** Equipo de Análisis UPV  
**Fecha:** 24 de octubre de 2024  
**Referencia:** INFORME_CONCLUSIONES_DASHBOARD.md (Completo)
