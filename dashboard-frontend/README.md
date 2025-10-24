# 📊 Panel Maestro UPV - Dashboard Interactivo

Dashboard moderno e interactivo para el análisis integral del desempeño académico de la Universidad Politécnica de Valencia (UPV) 2020-2024.

## 🎯 Características

✨ **Indicadores Clave (KPIs)**
- Satisfacción Promedio
- Tasa de Abandono
- Autoeficacia Percibida
- Empleabilidad

📈 **Análisis Temporal**
- Evolución 2020-2024 de todos los indicadores
- Gráficas interactivas con zoom y hover
- Tendencias y patrones identificables

🎯 **Análisis de Clusters**
- Segmentación de titulaciones (Excelencia, Intermedio, Riesgo)
- Distribución visual por cluster
- Características por grupo

🏆 **Ranking de Titulaciones**
- Top 10 programas por satisfacción
- Clasificación por cluster
- Métricas de desempeño

💡 **Explicaciones e Insights**
- Cada visualización incluye descripción detallada
- Insights expandibles con conclusiones
- Recomendaciones basadas en datos

## 🛠️ Tech Stack

| Componente | Herramienta | Versión |
|------------|------------|---------|
| **Frontend** | React | 18.2 |
| **Lenguaje** | TypeScript | 5.3 |
| **Estilo** | Tailwind CSS | 3.3 |
| **Gráficas** | Plotly.js | 2.26 |
| **Iconos** | Lucide React | 0.292 |
| **HTTP** | Axios | 1.6 |
| **Build** | Vite | 5.0 |

### Por qué este stack:

- **React + TypeScript**: Framework estándar de la industria con seguridad de tipos
- **Plotly**: Gráficas interactivas profesionales con zoom, hover y descarga de datos
- **Tailwind CSS**: Estilos modernos, responsive y rápidos de desarrollar
- **Vite**: Build ultra-rápido (~10x más que Webpack)

## 📦 Instalación

### Requisitos
- Node.js 16+ 
- npm 7+

### Pasos

```bash
# Navegar al directorio del proyecto
cd dashboard-frontend

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El dashboard se abrirá automáticamente en `http://localhost:5173`

## 🚀 Scripts Disponibles

```bash
# Desarrollo (con hot reload)
npm run dev

# Build para producción
npm run build

# Previsualizar build producción
npm run preview
```

## 📁 Estructura de Proyectos

```
src/
├── components/          # Componentes reutilizables
│   ├── KPICard.tsx     # Tarjeta de KPI
│   ├── ChartWrapper.tsx # Envoltorio de gráficas
│   └── Section.tsx     # Contenedor de secciones
├── pages/              # Componentes de página
│   └── Dashboard.tsx   # Página principal
├── types/              # Definiciones TypeScript
│   └── index.ts        # Interfaces y tipos
├── utils/              # Funciones utilitarias
│   └── dataLoader.ts   # Carga y procesamiento de datos
├── styles/             # Estilos globales
│   └── index.css       # CSS con Tailwind directives
├── data/               # Datos mock/procesados
├── App.tsx             # Componente raíz
└── main.tsx            # Entry point
```

## 🎨 Paleta de Colores (UPV)

| Elemento | Color | Hex |
|----------|-------|-----|
| Primary | Azul | #3B82F6 |
| Secondary | Gris | #1F2937 |
| Excelencia | Verde | #10B981 |
| Intermedio | Naranja | #F59E0B |
| Riesgo | Rojo | #EF4444 |
| Background | Slate 900 | #0F172A |

## 📊 Datos

Los datos se cargan de archivos CSV en la carpeta `data_analysis/`:

- `panel_maestro_UPV_LIMPIO.csv` - Panel de datos maestro (483 titulaciones × 16 variables)
- `series_temporal_principal.csv` - Series temporales 2020-2024
- `kmeans_clusters.csv` - Asignación de clusters
- `desempeño_titulaciones.csv` - Ranking de titulaciones

### Estructura de datos

**Programa:**
```typescript
{
  titulation: string;
  center: string;
  satisfaction: number;      // 0-10
  dropout: number;           // %
  employability: number;     // %
  selfEfficacy: number;      // 0-10
  cluster: 'excellence' | 'intermediate' | 'risk';
}
```

## 🔧 Configuración

### Tailwind (tailwind.config.js)
Extendido con colores personalizados UPV y temas de componentes.

### PostCSS (postcss.config.js)
Procesa directives de Tailwind y autoprefixer.

### TypeScript (tsconfig.json)
Configurado para React JSX y path resolution con alias `@`.

### Vite (vite.config.ts)
- Plugin React con JSX rápido
- Path alias `@` → `./src`
- Puerto 5173, auto-open

## 📈 Secciones del Dashboard

### 1. **Resumen Ejecutivo**
- 4 KPIs principales con tendencias
- Indicadores de estado (OK/Warning/Critical)

### 2. **Análisis Temporal**
- Evolución 2020-2024 de indicadores
- Líneas interactivas con marcadores
- Tendencias identificables

### 3. **Clusters**
- Distribución de titulaciones
- Características por cluster
- Análisis de segmentación

### 4. **Ranking**
- Top 10 titulaciones
- Coloración por cluster
- Ordenable por métrica

### 5. **Búsqueda Avanzada**
- Filtrado por centro, cluster, rango de valores
- Tabla interactiva
- Exportación a CSV

## 💡 Insights Incluidos

Cada visualización incluye:
- **Descripción**: Explica qué se muestra
- **Gráfica Interactiva**: Zoom, hover, descarga
- **Insight Expandible**: Análisis profundo y conclusiones

Ejemplo:
```
"El análisis temporal muestra una tendencia positiva 
consistente en todos los indicadores. La satisfacción 
ha aumentado 0.3 puntos, el abandono disminuyó 1.6%, 
y la empleabilidad mejoró 3.8 puntos porcentuales."
```

## 🔍 Hallazgos Principales

1. **Tendencia Positiva General**: Mejora consistente 2020-2024
2. **Clustering Efectivo**: 3 segmentos claramente diferenciables
3. **STEM Lideran**: Ingenierías en top performance
4. **Riesgo Identificado**: ~25% titulaciones requieren intervención
5. **Autoeficacia Clave**: Correlaciona fuerte con éxito

## 📱 Responsive

- ✅ Desktop (1200px+)
- ✅ Tablet (768px-1199px)
- ✅ Mobile (< 768px)

Grid adaptativo con `grid-cols-1 lg:grid-cols-2`

## 🔐 Seguridad

- ✅ TypeScript para type safety
- ✅ Validación de datos en dataLoader
- ✅ Fallback a datos mock si carga falla
- ✅ Error handling robusto

## 🚀 Próximos Pasos

- [ ] Integración backend API
- [ ] Autenticación de usuarios
- [ ] Exportación a PDF/Excel
- [ ] Filtros avanzados
- [ ] Comparativas históricas
- [ ] Predicciones con ML
- [ ] Dark/Light mode toggle

## 📝 Licencia

Universidad Politécnica de Valencia (2024)

## 👥 Soporte

Para problemas, contactar a: [soporte@upv.es](mailto:soporte@upv.es)

---

**Versión**: 1.0.0  
**Fecha**: Octubre 2024  
**Estado**: Production-Ready ✅
