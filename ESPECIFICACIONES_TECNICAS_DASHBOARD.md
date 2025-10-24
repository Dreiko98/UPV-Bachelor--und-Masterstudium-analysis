# 📐 ESPECIFICACIONES TÉCNICAS - DASHBOARD UPV
## Documento para Desarrollo (Tableau, PowerBI o similar)

**Versión:** 1.0  
**Fecha:** 24 de octubre de 2024  
**Audiencia:** Desarrolladores, especialistas en BI  
**Formatos soportados:** Tableau, PowerBI, Looker Studio, dashboards web

---

## 📋 ÍNDICE DE CONTENIDOS

1. [Arquitectura del Dashboard](#1-arquitectura-del-dashboard)
2. [Pestaña 1: Resumen Ejecutivo](#2-pestaña-1-resumen-ejecutivo)
3. [Pestaña 2: Análisis por Cluster](#3-pestaña-2-análisis-por-cluster)
4. [Pestaña 3: Búsqueda de Programa](#4-pestaña-3-búsqueda-de-programa)
5. [Pestaña 4: Análisis Temporal](#5-pestaña-4-análisis-temporal)
6. [Pestaña 5: Comparativa Titulaciones](#6-pestaña-5-comparativa-titulaciones)
7. [Especificaciones de Colores](#7-especificaciones-de-colores)
8. [Fuentes de Datos](#8-fuentes-de-datos)
9. [Filtros Globales](#9-filtros-globales)
10. [Interactividades](#10-interactividades)

---

## 1. ARQUITECTURA DEL DASHBOARD

### 1.1 Estructura General

```
PANEL MAESTRO UPV - DASHBOARD ESTRATÉGICO
│
├── HEADER (Siempre visible)
│   ├── Logo UPV
│   ├── Título: "Panel Maestro UPV - Análisis Académico 2020-2024"
│   ├── Última actualización: [Fecha dinámica]
│   └── Selector período: [2020] [2021] [2022] [2023] [2024]
│
├── FILTROS GLOBALES (Parte superior izquierda)
│   ├── Centro (Multi-select dropdown)
│   ├── Cluster (Checkboxes: 1, 2, 3)
│   ├── Titulación (Multi-select dropdown)
│   └── Botón "Reset Filtros"
│
├── PESTAÑA 1: RESUMEN EJECUTIVO (Default abierta)
├── PESTAÑA 2: ANÁLISIS POR CLUSTER
├── PESTAÑA 3: BÚSQUEDA DE PROGRAMA
├── PESTAÑA 4: ANÁLISIS TEMPORAL
└── PESTAÑA 5: COMPARATIVA TITULACIONES
```

### 1.2 Breakpoints Responsivos

```
DESKTOP (> 1200px):
  • 4-6 gráficas por row según layout
  • Filtros lado izquierdo (220px ancho)
  • Tooltips completos

TABLET (768-1199px):
  • 2-3 gráficas por row
  • Filtros collapsibles
  • Tooltips simplificados

MOBILE (< 768px):
  • 1 gráfica por row (stack vertical)
  • Filtros en modal/drawer
  • Gráficas sin zoom hover
  • NO incluir algunas gráficas técnicas
```

---

## 2. PESTAÑA 1: RESUMEN EJECUTIVO

### 2.1 Objetivo
Visión de 60 segundos para ejecutivos. Responde: "¿Cómo está la UPV ahora?"

### 2.2 Layout

```
┌──────────────────────────────────────────────────────────────────────────┐
│                          HEADER + FILTROS GLOBALES                      │
├──────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│  ┌─────────────┬──────────────┬──────────────┬──────────────┐           │
│  │  KPI: Satis │  KPI: Abandon│  KPI: Autoe │  KPI: Emplea │           │
│  │  7.1 / 10   │  17.2%       │  4.0 / 10 ⚠️│  71.5%       │           │
│  │             │              │  (-4.8%)    │              │           │
│  └─────────────┴──────────────┴──────────────┴──────────────┘           │
│                                                                            │
│  ┌───────────────────────────┬─────────────────────────────────────┐    │
│  │                           │                                       │    │
│  │  1. Series Temporales     │  3. Clusters PCA 2D                │    │
│  │  4 indicadores 2020-2024  │  Scatter: Cluster 1, 2, 3         │    │
│  │  (450×300)                │  (450×400)                         │    │
│  │                           │                                       │    │
│  └───────────────────────────┴─────────────────────────────────────┘    │
│                                                                            │
│  ┌──────────────────────────────────────────────────────────────────┐   │
│  │  2. Heatmap Correlaciones (11×11)                              │   │
│  │  Color RdBu_r, labels en ejes                                   │   │
│  │  (600×500)                                                       │   │
│  └──────────────────────────────────────────────────────────────────┘   │
│                                                                            │
│  ┌──────────────────────────────────────────────────────────────────┐   │
│  │  CARDS DE ALERTA (3 tarjetas)                                   │   │
│  │  • Autoeficacia bajando -4.8% (ROJO)                           │   │
│  │  • 127 programas en Cluster 3 (NARANJA)                         │   │
│  │  • Humanidades empleabilidad crítica 55-62% (ROJO)            │   │
│  └──────────────────────────────────────────────────────────────────┘   │
│                                                                            │
└──────────────────────────────────────────────────────────────────────────┘
```

### 2.3 Elementos Específicos

#### 2.3.1 KPIs (4 cards arriba)

**Card 1: Satisfacción Promedio**
- Métrica: ROUND(AVG(satisfaccion_promedio), 1)
- Formato: "7.1 / 10"
- Subtext: "Alumnos: 6.9 | Profesores: 8.7"
- Cambio YoY: "+0.1 pts vs 2023"
- Icono: 😊 (verde si > 7, amarillo si 5-7, rojo si < 5)
- Botón: Click → va a Pestaña 4 (Análisis Temporal)

**Card 2: Tasa Abandono**
- Métrica: ROUND(AVG(tasa_abandono), 1)
- Formato: "17.2 %"
- Subtext: "Mejora: -3.4% vs 2020"
- Cambio YoY: "-0.1 p.p. vs 2023"
- Icono: 📉 (verde si < 20%, amarillo si 20-25%, rojo si > 25%)
- Botón: Click → va a Pestaña 3 (Búsqueda programa)

**Card 3: Autoeficacia** ⚠️ CRÍTICA
- Métrica: ROUND(AVG(autoeficacia_3_anos), 1)
- Formato: "4.0 / 10"
- Subtext: "⚠️ ALERTA: Baja -4.8% en 5 años"
- Cambio YoY: "-0.02 pts vs 2023"
- Icono: 🚨 (SIEMPRE ROJO, parpadeando suavemente)
- Badge: "CRÍTICO"
- Botón: Click → abre modal con análisis autoeficacia

**Card 4: Empleabilidad**
- Métrica: ROUND(AVG(porcentaje_no_desempleados), 1)
- Formato: "71.5 %"
- Subtext: "Mejora: +1.9% vs 2020"
- Cambio YoY: "+0.2 p.p. vs 2023"
- Icono: 💼 (verde si > 75%, amarillo si 65-75%, rojo si < 65%)
- Botón: Click → va a Pestaña 5 (Titulaciones)

**Interactividad:**
- Mostrar valores actuales al pasar mouse
- Comparación con período anterior (línea de tendencia)
- Click en card para drill-down relevante

---

#### 2.3.2 Gráfica Principal: Series Temporales

**Especificación:**
- **Archivo:** 01_tendencias_principales.png (previa)
- **Tipo:** Line chart con 4 líneas
- **Variables:**
  1. Satisfacción Promedio (0-10 scale, línea azul)
  2. Tasa Abandono % (0-100 scale, línea roja)
  3. Autoeficacia (0-10 scale, línea naranja)
  4. Empleabilidad % (0-100 scale, línea verde)
- **Período:** 2020, 2021, 2022, 2023, 2024
- **Marcadores:** Círculo en cada punto anual
- **Anulación COVID:** Rectángulo gris translúcido 2020-2021
- **Eje Y:** Dos ejes secundarios (0-10 izq, 0-100 dcha)
- **Dimensiones:** 450 ancho × 300 alto
- **Interactividad:**
  - Hover: Mostrar valor exacto año
  - Leyenda clickeable: Ocultar/mostrar líneas
  - Tooltip: "Año: 2023 | Satisfacción: 7.15 | Abandono: 17.3%..."

**Anotaciones visuales:**
```
┌─────────────────────────────┐
│ 📍 Período COVID             │
│   Mayor volatilidad y cambio │
│   2020-2021                   │
└─────────────────────────────┘

📌 Hallazgo: Autoeficacia bajando
   Requiere investigación
```

---

#### 2.3.3 Gráfica Secundaria: Clusters PCA 2D

**Especificación:**
- **Archivo:** 07_clusters_pca_2d.png (previa)
- **Tipo:** Scatter plot
- **Ejes:** PC1 (35.2% varianza) vs PC2 (22.8% varianza)
- **Puntos:** 483 programas, tamaño 8px, transparencia 60%
- **Colores por Cluster:**
  - Cluster 1 (Excelencia): Verde oscuro (#2ecc71)
  - Cluster 2 (Medio): Amarillo (#f39c12)
  - Cluster 3 (Riesgo): Rojo (#e74c3c)
- **Centroides:** Estrella (10px) con color cluster + etiqueta
- **Dimensiones:** 450 ancho × 400 alto
- **Interactividad:**
  - Hover en punto: Muestra nombre programa, cluster, métricas
  - Click en punto: Filtro por ese programa (Pestaña 3)
  - Leyenda: Seleccionar/deseleccionar clusters
  - Zoom: Si se hace click en zona, ampliar

**Labels en gráfica:**
```
PC1: 35.2% Varianza
     "Eje Satisfacción + Desempeño"

PC2: 22.8% Varianza
     "Eje Retención"

Total 2D: 58% varianza explicada
```

---

#### 2.3.4 Gráfica Complementaria: Heatmap Correlaciones

**Especificación:**
- **Archivo:** 01_heatmap_correlaciones.png (previa)
- **Tipo:** Heatmap (11×11)
- **Variables (11):**
  1. satisfaccion_alumnos
  2. satisfaccion_profesores
  3. satisfaccion_promedio
  4. tasa_abandono
  5. tasa_permanencia
  6. autoeficacia_3_anos
  7. porcentaje_no_desempleados
  8. porcentaje_desempleados
  9. COD_RUCT (puede excluirse)
  10. año
  11. (otra si hay)

- **Colormap:** RdBu_r (Rojo = correlación positiva fuerte, Azul = negativa)
- **Escala:** -1 a +1
- **Valores en celdas:** 2 decimales (ej: 0.70)
- **Dimensiones:** 600 ancho × 500 alto
- **Interactividad:**
  - Hover: Muestra par de variables y valor exacto r
  - Destacar fila/columna al pasar
  - Click en celda: Muestra scatter plot bivariante
  - Ordenar por correlación (ascendente/descendente) si aplica

**Anotaciones:**
```
Correlaciones Fuertes (|r| > 0.5):
- Abandono ↔ Permanencia: r = -0.999
- Satisfacción alumnos ↔ profesores: r ≈ 0.70
- Empleados ↔ Desempleados: r ≈ -0.99

Correlaciones Moderadas (0.3 < |r| ≤ 0.5):
- Autoeficacia ↔ Satisfacción: r ≈ 0.45
- Abandono ↔ Autoeficacia: r ≈ -0.40
- Satisfacción ↔ Empleabilidad: r ≈ 0.35
```

---

#### 2.3.5 Tarjetas de Alerta

**Layout:** 3 tarjetas horizontales, lado a lado

**Tarjeta 1: AUTOEFICACIA EN ALERTA** 🚨
```
╔═══════════════════════════════════════════╗
║ ⚠️ AUTOEFICACIA BAJANDO                  ║
║ ───────────────────────────────────────── ║
║ Métrica: 4.0 / 10                        ║
║ Cambio 2020-2024: -4.8%                  ║
║                                           ║
║ Significado:                              ║
║ Estudiantes menos confiados en habilid. ║
║                                           ║
║ Relación:                                 ║
║ Predice abandono (r = -0.40)             ║
║                                           ║
║ ⚡ ACCIÓN: Monitoreo semestral           ║
╚═══════════════════════════════════════════╝
```
- Color fondo: Rojo pálido (#ffebee)
- Color texto principal: Rojo oscuro (#c62828)
- Icono: 🚨 parpadeante

**Tarjeta 2: CLUSTER 3 - INTERVENCIÓN URGENTE**
```
╔═══════════════════════════════════════════╗
║ 🔴 CLUSTER 3 - RIESGO                   ║
║ ───────────────────────────────────────── ║
║ Programas afectados: 127 (26.3%)        ║
║                                           ║
║ Métricas críticas:                        ║
║ • Satisfacción: 2.8/5 (baja)            ║
║ • Abandono: 28% (alto)                   ║
║ • Empleabilidad: 58% (crítica)          ║
║ • Autoeficacia: 3.2/10 (muy baja)       ║
║                                           ║
║ ⚡ ACCIÓN: Ver detalles por Cluster     ║
║   (Pestaña 2)                             ║
╚═══════════════════════════════════════════╝
```
- Color fondo: Naranja pálido (#ffe0b2)
- Color texto: Naranja oscuro (#e65100)
- Icono: 🔴

**Tarjeta 3: HUMANIDADES - CRÍTICA**
```
╔═══════════════════════════════════════════╗
║ 🚨 HUMANIDADES - EMPLEABILIDAD CRÍTICA  ║
║ ───────────────────────────────────────── ║
║ Tasa empleabilidad: 55-62%               ║
║ vs Ingeniería: 85-88%                    ║
║ Diferencia: -23-30 p.p.                  ║
║                                           ║
║ Impacto:                                  ║
║ • Abandono: 32-38%                       ║
║ • Autoeficacia: 3.5-4.0                  ║
║ • Performance Score: 4.1/10              ║
║                                           ║
║ ⚡ ACCIÓN: Rediseño curricular urgente  ║
║   (Pestaña 5)                             ║
╚═══════════════════════════════════════════╝
```
- Color fondo: Rojo pálido (#ffebee)
- Color texto: Rojo (#d32f2f)
- Icono: 🚨

---

## 3. PESTAÑA 2: ANÁLISIS POR CLUSTER

### 3.1 Objetivo
Entender profundamente cada uno de los 3 segmentos: características, métricas, recomendaciones.

### 3.2 Layout

```
┌──────────────────────────────────────────────────────────────────────────┐
│  SELECTOR CLUSTER: [Cluster 1] [Cluster 2] [Cluster 3] [Todos]         │
├──────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│  CLUSTER [N]: [NOMBRE]                                                   │
│  Descripción: [Texto ejecutivo del cluster]                              │
│                                                                            │
│  ┌──────────┬──────────┬──────────┬──────────┬──────────┐              │
│  │ Satisfac │ Abandono │ Empleabi │ Autoefic │ # Progra │              │
│  │ 3.9/5    │ 10%      │ 82%      │ 5.2/10   │ 186      │              │
│  └──────────┴──────────┴──────────┴──────────┴──────────┘              │
│                                                                            │
│  ┌──────────────────────┬──────────────────────┐                        │
│  │                      │                      │                        │
│  │ Distribución Centros │ Top 5 Titulaciones  │                        │
│  │ (Pie chart)          │ (Bar chart)          │                        │
│  │                      │                      │                        │
│  └──────────────────────┴──────────────────────┘                        │
│                                                                            │
│  ┌──────────────────────────────────────────────────────────────────┐   │
│  │  Recomendaciones de Acción                                      │   │
│  │  • [Recomendación 1 específica del cluster]                    │   │
│  │  • [Recomendación 2]                                            │   │
│  │  • [Recomendación 3]                                            │   │
│  │  • [Recomendación 4]                                            │   │
│  └──────────────────────────────────────────────────────────────────┘   │
│                                                                            │
│  ┌──────────────────────────────────────────────────────────────────┐   │
│  │  Programas en este cluster: [Exportar lista] [Buscar programa]  │   │
│  │  Tabla con columns:                                              │   │
│  │  • Programa | Centro | Satisfacción | Abandono | Empleabilidad │   │
│  │  (Primeras 10 filas, rest paginadas/scroll)                    │   │
│  └──────────────────────────────────────────────────────────────────┘   │
│                                                                            │
└──────────────────────────────────────────────────────────────────────────┘
```

### 3.3 Especificaciones por Cluster

#### CLUSTER 1: EXCELENCIA ACADÉMICA ✅

**Descripción:**
> 186 programas (38.5%) con alto desempeño consistente. Principalmente programas de ingeniería consolidados con excelentes estándares académicos. Este es el modelo a replicar.

**Métricas (5 mini-cards):**
- Satisfacción: 3.9/5 (alta)
- Abandono: 10% (bajo)
- Empleabilidad: 82% (excelente)
- Autoeficacia: 5.2/10 (media-alta)
- Programas: 186

**Gráficas:**
1. **Pie Chart: Distribución por Centro**
   - Etiquetas con %
   - Colores suaves (no alertas)
   - Mostrar top 5 centros + otros

2. **Bar Chart Horizontal: Top 5 Titulaciones**
   - Ordenado por conteo
   - Valores y %

**Recomendaciones (texto + botones):**
```
✅ ACCIÓN RECOMENDADA: MANTENER Y REPLICAR

• Documentar factores de éxito de estos programas
• Identificar 5-10 programas "estrella" para benchmarking
• Crear programa de mentoría Cluster 1 → Cluster 2/3
• Establecer estándares de excelencia basados en estos modelos
• Reconocimiento y difusión de buenas prácticas

[Botón: Ver programas top] [Botón: Crear plan benchmarking]
```

---

#### CLUSTER 2: RENDIMIENTO MEDIO 🟡

**Descripción:**
> 170 programas (35.2%) con desempeño moderado pero estable. Oportunidades claras de mejora. Estos programas se beneficiarían especialmente de aprendizajes desde Cluster 1.

**Métricas (5 mini-cards):**
- Satisfacción: 3.4/5 (moderada)
- Abandono: 18% (moderado)
- Empleabilidad: 70% (variable)
- Autoeficacia: 4.0/10 (media)
- Programas: 170

**Gráficas:**
1. **Pie Chart: Distribución por Centro**
2. **Bar Chart Horizontal: Top 5 Titulaciones**

**Recomendaciones:**
```
🟡 ACCIÓN RECOMENDADA: MEJORAR INCREMENTALMENTE

• Benchmarking con Cluster 1: Identificar gaps
• Mejoras en satisfacción de estudiantes (es leverage principal)
• Revisión de apoyo estudiantil y tutoría
• Programa piloto: "Mejora en 90 días" con 10 programas
• Monitoreo trimestral de progreso

[Botón: Benchmarking vs Cluster 1] [Botón: Plan mejora 90 días]
```

---

#### CLUSTER 3: RIESGO/BAJO RENDIMIENTO 🔴

**Descripción:**
> 127 programas (26.3%) con bajo desempeño e indicadores críticos. Requieren intervención urgente. Algunos son nuevos programas, otros tienen dificultades estructurales.

**Métricas (5 mini-cards):**
- Satisfacción: 2.8/5 (baja) 🚨
- Abandono: 28% (alto) 🚨
- Empleabilidad: 58% (baja) 🚨
- Autoeficacia: 3.2/10 (muy baja) 🚨
- Programas: 127

**Gráficas:**
1. **Pie Chart: Distribución por Centro**
2. **Bar Chart Horizontal: Top 5 Titulaciones**

**Recomendaciones:**
```
🔴 ACCIÓN RECOMENDADA: INTERVENCIÓN URGENTE

• Diagnóstico especial: Identificar causas por programa
• Listar 127 programas: Clasificar por tipo de problema
• Intervención intensiva de apoyo académico
• Rediseño curricular focado en empleabilidad
• Asignación de "mentores" de Cluster 1
• Revisión de viabilidad de algunos programas

TIMELINE: Estas mejoras requieren 6-12 meses para resultados

[Botón: Descargar lista 127 programas] [Botón: Plan intervención]
```

---

## 4. PESTAÑA 3: BÚSQUEDA DE PROGRAMA

### 4.1 Objetivo
Permitir coordinadores encontrar su programa y ver dónde está en el sistema.

### 4.2 Layout

```
┌──────────────────────────────────────────────────────────────────────────┐
│                                                                            │
│  BUSCAR MI PROGRAMA:                                                      │
│  ┌────────────────────────────────────────────────────────────────────┐  │
│  │ 🔍 Escribir nombre, código o titulación...                     │  │
│  └────────────────────────────────────────────────────────────────────┘  │
│  ⚡ Búsqueda en vivo: Resultados mientras escribes                       │
│                                                                            │
│  O SELECCIONAR:                                                           │
│  Centro: [Dropdown▼]  Titulación: [Dropdown▼]  [Filtrar]              │
│                                                                            │
│  ───────────────────────────────────────────────────────────────────────│
│                                                                            │
│  RESULTADO: [NOMBRE PROGRAMA COMPLETO]                                   │
│  Código: XXX | Centro: YYYYY | Titulación: ZZZZZ                        │
│                                                                            │
│  ┌─────────────────────────────────────────────────────────────────┐    │
│  │                        📍 POSICIÓN EN SISTEMA                    │    │
│  │                                                                    │    │
│  │  Cluster: [🥇 1 - EXCELENCIA] | Performance: 6.7/10            │    │
│  │                                                                    │    │
│  │  Comparación vs:                                                  │    │
│  │  • Tu Cluster: [Satisfacción 3.9 | Abandono 10%]              │    │
│  │  • Tu Titulación: [Satisfacción 3.8 | Abandono 9%]            │    │
│  │  • Promedio UPV: [Satisfacción 3.3 | Abandono 17%]            │    │
│  └─────────────────────────────────────────────────────────────────┘    │
│                                                                            │
│  ┌─────────────────────────────────────────────────────────────────┐    │
│  │              📊 MÉTRICAS DETALLADAS                              │    │
│  │                                                                    │    │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │    │
│  │  │ Satisfacción │  │ Tasa Abandono│  │ Empleabilid. │          │    │
│  │  │    3.9 / 5   │  │    10 %      │  │    82 %      │          │    │
│  │  │              │  │              │  │              │          │    │
│  │  │ Posición: ✅ │  │ Posición: ✅ │  │ Posición: ✅ │          │    │
│  │  │ (Arriba del  │  │ (Abajo del   │  │ (Arriba del  │          │    │
│  │  │  promedio)   │  │  promedio)   │  │  promedio)   │          │    │
│  │  └──────────────┘  └──────────────┘  └──────────────┘          │    │
│  │                                                                    │    │
│  │  ┌──────────────┐  ┌──────────────┐                             │    │
│  │  │ Autoeficacia │  │   Evolución  │                             │    │
│  │  │   5.2 / 10   │  │   2020-2024  │                             │    │
│  │  │              │  │              │                             │    │
│  │  │ Posición: ✅ │  │   Micro-line │                             │    │
│  │  │ (Arriba del  │  │   chart      │                             │    │
│  │  │  promedio)   │  │              │                             │    │
│  │  └──────────────┘  └──────────────┘                             │    │
│  └─────────────────────────────────────────────────────────────────┘    │
│                                                                            │
│  ┌─────────────────────────────────────────────────────────────────┐    │
│  │              🎯 BENCHMARKING                                     │    │
│  │                                                                    │    │
│  │  Comparar con:                                                    │    │
│  │  1. Top 3 en tu Cluster                                         │    │
│  │  2. Top 3 en tu Titulación                                      │    │
│  │  3. Cluster 1 Ingeniería (modelo)                               │    │
│  │                                                                    │    │
│  │  [Tabla comparativa con 5 filas × 5 columns]                   │    │
│  └─────────────────────────────────────────────────────────────────┘    │
│                                                                            │
│  ┌─────────────────────────────────────────────────────────────────┐    │
│  │              💡 RECOMENDACIONES PERSONALIZADAS                   │    │
│  │                                                                    │    │
│  │  [Textos y acciones específicas según el programa]              │    │
│  │                                                                    │    │
│  │  Si está en Cluster 1:                                           │    │
│  │    ✅ "Programa de excelencia. Mantener estándares."            │    │
│  │    → [Ver otros top programas en tu titulación]                 │    │
│  │                                                                    │    │
│  │  Si está en Cluster 3:                                           │    │
│  │    🔴 "Requiere intervención. Priorizar mejoras."              │    │
│  │    → [Ver plan de intervención]                                 │    │
│  │    → [Benchmarking con Cluster 1]                               │    │
│  └─────────────────────────────────────────────────────────────────┘    │
│                                                                            │
│  [Botón: Descargar Reporte PDF] [Botón: Compartir]                      │
│                                                                            │
└──────────────────────────────────────────────────────────────────────────┘
```

### 4.3 Especificaciones de Funcionalidad

#### Búsqueda
- **Autocomplete:** Mientras escribe, mostrar coincidencias
- **Campos de búsqueda:** Nombre programa, Código, Titulación
- **Resultados múltiples:** Si hay ambigüedad, mostrar lista
- **Ranking:** Top 1 resultado por defecto

#### Comparación
- **Benchmarking automático:**
  - Si Cluster 1: Mostrar vs promedio UPV
  - Si Cluster 2: Mostrar vs Cluster 1 + UPV
  - Si Cluster 3: Mostrar vs Cluster 1 + Titulación + UPV

#### Indicadores Visuales
- ✅ Verde si está ARRIBA del benchmark
- 🟡 Amarillo si está IGUAL
- ❌ Rojo si está ABAJO

#### Evolución Mini-Chart
- Línea con 5 puntos (2020-2024)
- Mostrar tendencia (↑ ↓ →)
- Tooltip con año/valor

---

## 5. PESTAÑA 4: ANÁLISIS TEMPORAL

### 5.1 Objetivo
Entender evolución 2020-2024: tendencias, cambios, impacto COVID.

### 5.2 Layout

```
┌──────────────────────────────────────────────────────────────────────────┐
│  FILTROS TEMPORALES:                                                     │
│  Período: [2020-2024 default] | Seleccionar años: [Checkboxes]         │
│  Agrupar por: [Centro ▼] [Titulación ▼] [Cluster ▼] [Todos]           │
├──────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│  ┌──────────────────────────────────────────────────────────────────┐   │
│  │  1. SERIES TEMPORALES 4 INDICADORES (2020-2024)               │   │
│  │     Líneas con marcadores, anotación COVID                      │   │
│  │     (600×400)                                                    │   │
│  └──────────────────────────────────────────────────────────────────┘   │
│                                                                            │
│  ┌──────────────────────────────────────────────────────────────────┐   │
│  │  2. CAMBIOS RESUMIDOS (Tabla interactiva)                      │   │
│  │                                                                   │   │
│  │  Indicador     │ 2020  │ 2024  │ Cambio │ % Cambio │ Estado   │   │
│  │  ────────────────────────────────────────────────────────────   │   │
│  │  Satisfacción  │ 7.0   │ 7.1   │ +0.1   │ +1.4%    │ ✅ OK   │   │
│  │  Abandono      │17.8%  │17.2%  │ -0.6pp │ -3.4%    │ ✅ OK   │   │
│  │  Autoeficacia  │ 4.2   │ 4.0   │ -0.2   │ -4.8%    │ 🔴 ALRT│   │
│  │  Empleabilid. │70.2%  │71.5%  │ +1.3pp │ +1.9%    │ ✅ OK   │   │
│  └──────────────────────────────────────────────────────────────────┘   │
│                                                                            │
│  ┌──────────────────────────────────────────────────────────────────┐   │
│  │  3. VARIABILIDAD TEMPORAL (σ por año)                           │   │
│  │     5 líneas: dispersión de cada indicador                      │   │
│  │     Muestra divergencia +18%                                     │   │
│  │     (400×300)                                                    │   │
│  └──────────────────────────────────────────────────────────────────┘   │
│                                                                            │
│  ┌──────────────────────────────────────────────────────────────────┐   │
│  │  4. EVOLUCIÓN POR CENTROS (Top 5)                              │   │
│  │     2×2 subplots, líneas por centro, 4 indicadores             │   │
│  │     (600×400)                                                    │   │
│  └──────────────────────────────────────────────────────────────────┘   │
│                                                                            │
│  ┌──────────────────────────────────────────────────────────────────┐   │
│  │  HALLAZGOS PRINCIPALES:                                          │   │
│  │  • COVID fue temporal: Crisis 2020-2021, recuperación 2021-2024 │   │
│  │  • Variabilidad crece +18%: Programas divergen                  │   │
│  │  • Autoeficacia baja -4.8%: ALERTA de futuro abandono          │   │
│  │  • Centro Ingeniería lidera mejoras                             │   │
│  │  • Empleabilidad mejora lentamente +1.9%                        │   │
│  └──────────────────────────────────────────────────────────────────┘   │
│                                                                            │
└──────────────────────────────────────────────────────────────────────────┘
```

### 5.3 Gráficas Específicas

#### Gráfica 1: Series Temporales (Formato detallado)
- **Imagen base:** 01_tendencias_principales.png
- **Interactividad:** 
  - Selector de indicadores (mostrar/ocultar)
  - Tooltip año-por-año
  - Zoom en 2020-2021 para COVID detail
  - Export a PNG/SVG

#### Gráfica 2: Cambios (Tabla interactiva)
- **Datos dinámicos:** Que se actualice si hay filtros aplicados
- **Colores por estado:** Verde OK, Naranja Ojo, Rojo Alerta
- **Sort:** Click en header para ordenar

#### Gráfica 3: Variabilidad
- **Imagen base:** 02_variabilidad_temporal.png
- **Interpretación clara:** "Líneas que suben = divergencia aumenta"

#### Gráfica 4: Evolución Centros
- **Imagen base:** 03_evolucion_por_centros.png
- **Interactividad:** Seleccionar/deseleccionar centros
- **Colores diferenciados por centro**

---

## 6. PESTAÑA 5: COMPARATIVA TITULACIONES

### 6.1 Objetivo
Visualizar desempeño relativo de titulaciones y estratificaciones.

### 6.2 Layout

```
┌──────────────────────────────────────────────────────────────────────────┐
│  VISTA: [Todos] [Top 10] [Bottom 10] [Por Centro]                       │
│  Ordenar por: [Performance Score ▼]                                      │
├──────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│  ┌─────────────────────────────────────────────────────────────────┐    │
│  │  RANKING DE TITULACIONES (Tabla interactiva)                  │    │
│  │                                                                  │    │
│  │  # │ Titulación          │ Score │ Satisfac │ Abandon │ Empleab │  │
│  │──────────────────────────────────────────────────────────────── │  │
│  │ 1  │ Ingeniería          │ 6.8   │ 7.3/10  │ 9%     │ 86%     │  │
│  │ 2  │ Ing. Técnica        │ 6.6   │ 7.2/10  │ 10%    │ 84%     │  │
│  │ 3  │ Informática         │ 6.5   │ 7.1/10  │ 11%    │ 83%     │  │
│  │... │ ...                 │ ...   │ ...     │ ...    │ ...     │  │
│  │ 125│ Humanidades Básic.  │ 4.0   │ 6.2/10  │ 35%    │ 58%     │  │
│  │                                                                  │    │
│  │ [Exportar como CSV] [Descargar PDF]                             │    │
│  └─────────────────────────────────────────────────────────────────┘    │
│                                                                            │
│  ┌──────────────────────────┬──────────────────────────────────────┐   │
│  │                          │                                      │   │
│  │  TOP 5 TITULACIONES      │  BOTTOM 5 TITULACIONES             │   │
│  │  (Score 6.3-6.8)         │  (Score 4.0-4.3)                   │   │
│  │                          │                                      │   │
│  │  Bar chart horizontal    │  Bar chart horizontal               │   │
│  │  Colores verdes          │  Colores rojos                      │   │
│  │                          │                                      │   │
│  │  (300×200 cada)          │  (300×200 cada)                     │   │
│  └──────────────────────────┴──────────────────────────────────────┘   │
│                                                                            │
│  ┌─────────────────────────────────────────────────────────────────┐    │
│  │  ANÁLISIS COMPARATIVO: INGENIERÍA vs HUMANIDADES              │    │
│  │                                                                  │    │
│  │  Métrica           │ Ingeniería  │ Humanidades │ Brecha          │    │
│  │  ────────────────────────────────────────────────────────────  │    │
│  │  Performance       │ 6.7         │ 4.1         │ +2.6 (65%) 🔴  │    │
│  │  Empleabilidad     │ 85%         │ 58%         │ +27 p.p. 🔴    │    │
│  │  Abandono          │ 9%          │ 35%         │ +26 p.p. 🔴    │    │
│  │  Satisfacción      │ 7.3/10      │ 6.2/10      │ +1.1 (18%) 🟡  │    │
│  │  Autoeficacia      │ 4.6/10      │ 3.7/10      │ +0.9 (24%) 🔴  │    │
│  │                                                                  │    │
│  │  🔴 Diferencias GRANDES y MEDIBLES                             │    │
│  │  Requieren estrategias diferenciadas                            │    │
│  └─────────────────────────────────────────────────────────────────┘    │
│                                                                            │
│  ┌─────────────────────────────────────────────────────────────────┐    │
│  │  RECOMENDACIONES POR TITULACIÓN                                │    │
│  │                                                                  │    │
│  │  INGENIERÍA: ✅ Modelo, mantener y documentar                  │    │
│  │  HUMANIDADES: 🔴 Rediseño urgente, baja empleabilidad          │    │
│  │  CIENCIAS: 🟡 Mejora incremental                               │    │
│  └─────────────────────────────────────────────────────────────────┘    │
│                                                                            │
└──────────────────────────────────────────────────────────────────────────┘
```

### 6.3 Especificaciones

#### Tabla Principal
- **Fuente:** desempeño_titulaciones.csv
- **Columns:** Titulación, Score, Satisfacción, Abandono, Empleabilidad, Cluster, Centro
- **Sort:** Click en header, múltiple nivel
- **Filter:** Búsqueda en vivo en nombre titulación
- **Color coding:** Rows con Score:
  - Verde si > 6.0
  - Amarillo si 4.5-6.0
  - Rojo si < 4.5

#### Gráficas Comparativas
1. **Bar chart Top 5:** Ordenado por Score, colores verdes
2. **Bar chart Bottom 5:** Ordenado por Score, colores rojos
3. **Tabla comparativa:** Ingeniería vs Humanidades, 5 indicadores
4. **Trend lines:** Top vs Bottom, cómo evoluciona 2020-2024

---

## 7. ESPECIFICACIONES DE COLORES

### 7.1 Paleta Corporativa

```
PRIMARIOS (Clusters):
  • Cluster 1 (Excelencia):  #2ecc71 (Verde)
  • Cluster 2 (Medio):       #f39c12 (Amarillo/Naranja)
  • Cluster 3 (Riesgo):      #e74c3c (Rojo)

ACENT (Indicadores):
  • Satisfacción:            #3498db (Azul)
  • Abandono:                #e74c3c (Rojo)
  • Autoeficacia:            #f39c12 (Naranja) ⚠️
  • Empleabilidad:           #2ecc71 (Verde)

ESTADOS:
  • ✅ Positivo:             #27ae60 (Verde oscuro)
  • 🟡 Atención:             #f39c12 (Naranja)
  • ⚠️ Crítico:              #e74c3c (Rojo)
  • ℹ️ Información:           #3498db (Azul)

FONDOS:
  • Card positiva:           #ebf5fb (Azul claro)
  • Card atención:           #fef5e7 (Amarillo claro)
  • Card crítica:            #fadbd8 (Rojo claro)
  • Fondo página:            #f8f9fa (Gris muy claro)

TEXTO:
  • Principal:               #2c3e50 (Gris oscuro)
  • Secundario:              #7f8c8d (Gris medio)
  • Labels:                  #34495e (Gris-azul)

HEATMAP (Correlaciones):
  • Rojo (positivo fuerte):  #d73027
  • Rojo claro:              #fee090
  • Blanco (neutral):        #ffffbf
  • Azul claro:              #91bfdb
  • Azul (negativo fuerte):  #4575b4
```

### 7.2 Aplicación

```
Satisfacción:
  • Línea chart: #3498db
  • KPI card: Azul + blanco
  • Background: #f0f7ff

Abandono:
  • Línea chart: #e74c3c
  • KPI card: Rojo + blanco
  • Background: #ffe0e0

Autoeficacia (⚠️ ALERTA SIEMPRE):
  • Línea chart: #f39c12 (naranja)
  • KPI card: Rojo (#e74c3c) con badge "ALERTA"
  • Background: #ffe0b2
  • Efecto: Parpadeo suave o pulso

Empleabilidad:
  • Línea chart: #2ecc71
  • KPI card: Verde + blanco
  • Background: #f0fff4
```

---

## 8. FUENTES DE DATOS

### 8.1 Archivos CSV Base

```
1. panel_maestro_UPV_LIMPIO.csv (Base principal)
   Estructura: 483 filas × 16 columnas
   
   Columnas numéricas:
   • satisfaccion_alumnos
   • satisfaccion_profesores
   • satisfaccion_promedio
   • tasa_abandono
   • tasa_permanencia
   • autoeficacia_3_anos
   • porcentaje_no_desempleados
   • porcentaje_desempleados
   
   Columnas categóricas:
   • CURSO
   • TITULACION
   • CENTRO
   • COD_RUCT
   • año
   • nivel_autoeficacia
   • nivel_empleabilidad

2. kmeans_clusters.csv (Resultados clustering)
   • Programa ID / Nombre
   • cluster (0, 1, 2 → remap a 1, 2, 3)
   • Métricas resumen

3. desempeño_titulaciones.csv (Ranking titulaciones)
   • Titulación
   • performance_score
   • satisfaccion_promedio
   • tasa_abandono
   • empleabilidad
   • cluster
   • centro

4. series_temporal_principal.csv
   • año (2020-2024)
   • satisfaccion_promedio
   • tasa_abandono
   • autoeficacia_3_anos
   • porcentaje_no_desempleados

5. correlations_matrix.csv (11×11)
   • Matriz Pearson completa

6. pca_scores.csv
   • PC1, PC2 para cada programa
   • cluster assignment
```

### 8.2 Actualizaciones

- **Frecuencia:** Anual (después de cada año académico)
- **Formato:** CSV + JSON export para API
- **Versionamiento:** Guardar histórico (dashboard_2024.csv, dashboard_2025.csv)
- **QA:** Validación automática: no NaN en numéricas, counts expectedos

---

## 9. FILTROS GLOBALES

### 9.1 Ubicación
Lado izquierdo, siempre visible en desktop. Modal/drawer en mobile.

### 9.2 Especificación

```
FILTRO 1: CENTRO
  Tipo: Multi-select dropdown
  Opciones: [Ingeniería] [Ciencias] [Humanidades] [Administrativo] [Otros]
  Default: [Todos seleccionados]
  Aplicación: Todas las pestañas
  Efecto: Actualizar todas gráficas instantáneamente

FILTRO 2: CLUSTER
  Tipo: Checkboxes (3 opciones)
  Opciones: [✓ Cluster 1 - Excelencia] [✓ Cluster 2 - Medio] [✓ Cluster 3 - Riesgo]
  Default: Todos seleccionados
  Aplicación: Todas excepto Pestaña 2 (que tiene selector específico)
  Efecto: Refiltra datos

FILTRO 3: TITULACIÓN
  Tipo: Multi-select dropdown + búsqueda
  Opciones: [125+ titulaciones alfabético]
  Default: [Todos]
  Aplicación: Principales (no buscar individual)
  Efecto: Filtro secundario

FILTRO 4: PERÍODO (Temporal)
  Tipo: Range slider o dual input
  Opciones: [2020] ←→ [2024]
  Default: [2020-2024]
  Aplicación: Pestaña 4 (Análisis Temporal)
  Efecto: Recompute series

BOTÓN: RESET
  Acción: Volver a default (todos seleccionados)
  Ubicación: Abajo de filtros
```

### 9.3 Comportamiento

- **Filtros independientes:** Pueden combinarse (AND logic)
- **Actualización instantánea:** No requiere botón apply
- **State preservation:** Al cambiar pestañas, mantener filtros
- **URL query params:** Para compartibilidad (ej: ?center=Ingenieria&cluster=1)

---

## 10. INTERACTIVIDADES

### 10.1 Hover Interactivities

```
Gráficas línea/scatter:
  • Mostrar tooltip con valores exactos
  • Destacar punto/línea
  • Cambiar cursor a pointer
  • Mostrar nombre elemento si aplica

Heatmap:
  • Destacar fila y columna
  • Mostrar valor en tooltip
  • Cambiar opacidad elemento

Bar charts:
  • Destacar barra
  • Mostrar valor en tooltip
  • Color más intenso
```

### 10.2 Click Interactivities

```
KPI Cards:
  • Click en satisfacción → Pestaña 4
  • Click en abandono → Pestaña 3 (búsqueda por abandono alto)
  • Click en autoeficacia → Modal con análisis detallado
  • Click en empleabilidad → Pestaña 5

Scatter PCA:
  • Click en punto → Pestaña 3 (busca ese programa)
  • Double-click → Zoom en cluster

Heatmap:
  • Click en celda → Scatter bivariante popup

Tabla (Ranking titulaciones):
  • Click en fila → Detalle titulación (modal)
  • Click en programa → Pestaña 3

Leyenda gráficas:
  • Click en item leyenda → Mostrar/ocultar serie
  • Shift+click → Aislar serie
```

### 10.3 Drag Interactivities

```
Línea temporal (si aplica):
  • Drag en rango para zoom
  • Doble-click para reset zoom

Filtro período (Pestaña 4):
  • Slider dual para range start/end
```

### 10.4 Export Interactivities

```
En cada gráfica/tabla:
  • Icono PNG: Descarga gráfica como imagen 300 DPI
  • Icono CSV: Descarga datos subyacentes
  • Icono PDF: Genera reporte PDF con contexto
  • Icono Share: Link compartible con filtros aplicados
```

---

## 📋 CHECKLIST FINAL

### Antes del Lanzamiento

```
FUNCIONALIDAD:
  ☐ Todos los 6 MUST-HAVE gráficas cargadas y funcionales
  ☐ KPIs actualizándose dinámicamente
  ☐ Filtros globales funcionan en todas pestañas
  ☐ Búsqueda de programa con autocomplete
  ☐ Benchmarking personalizado por programa
  ☐ Exportación PNG/CSV/PDF
  ☐ Responsive: desktop + tablet + mobile

DATOS:
  ☐ Validación: 0 NaN en numéricas
  ☐ Rango: Valores dentro esperado
  ☐ Sumas: Cluster assignments = 483 programas
  ☐ Correlaciones: Rango [-1, +1]
  ☐ Clustering: 100% programas asignados a cluster
  ☐ Titulaciones: 125+ presentes en ranking

DISEÑO:
  ☐ Paleta colores consistente
  ☐ Tipografía legible (sans-serif, > 12px body)
  ☐ Espaciado uniforme (8/16px grid)
  ☐ Contraste WCAG AA (4.5:1 mínimo)
  ☐ Iconos consistentes

PERFORMANCE:
  ☐ Carga inicial < 3 segundos
  ☐ Respuesta filtros < 500ms
  ☐ Sin lag en interactividades
  ☐ Memory usage razonable (< 500MB)

USABILIDAD:
  ☐ Manual de usuario PDF
  ☐ Tooltips en elementos complejos
  ☐ Errores en lenguaje natural
  ☐ Botones > 44px clickeables
  ☐ Atajos teclado (alt+número para pestaña)

SEGURIDAD:
  ☐ Sin datos sensibles exponibles
  ☐ Autenticación si requiere (no público)
  ☐ HTTPS (si es web)
  ☐ Validación servidor (no solo cliente)

TESTING:
  ☐ Probado por coordinadores (feedback UX)
  ☐ Probado en Chrome, Firefox, Safari, Edge
  ☐ Probado en mobile (iOS + Android)
  ☐ Probado con datos históricos (año anterior)
  ☐ Prueba de carga (múltiples usuarios simultáneos)
```

---

## 📞 SOPORTE Y MANTENIMIENTO

### Support Equipo IT
- Contacto: [Email IT]
- Issues: [Link repositorio]
- SLA: 24 horas respuesta

### Actualizaciones
- Anuales: Después ciclo académico
- Hotfix: Si discrepancias en datos
- Mejoras: Roadmap basado en feedback

### Entrenamiento
- Video tutorial (10 min): "Cómo usar el dashboard"
- Sesión en vivo para directivos (30 min)
- Guía PDF descargable
- Soporte email: dashboard@upv.es

---

**Documento preparado:** 24 de octubre de 2024  
**Última revisión:** 24 de octubre de 2024  
**Estado:** Listo para desarrollo
