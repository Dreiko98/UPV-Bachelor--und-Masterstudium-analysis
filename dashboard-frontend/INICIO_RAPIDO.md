# 🚀 Inicio Rápido - Dashboard UPV

## ¡Bienvenido! Aquí te mostramos cómo empezar

### 📋 Requisitos Previos

- **Node.js** 16+ (verificar con `node --version`)
- **npm** 7+ (verificar con `npm --version`)
- Terminal/Consola

### 🎯 Pasos Rápidos (2 minutos)

#### 1️⃣ Instalar Dependencias
```bash
cd dashboard-frontend
npm install
```
Esto descargará ~527 paquetes necesarios (~400MB)

#### 2️⃣ Iniciar el Servidor de Desarrollo
```bash
npm run dev
```

La terminal mostrará:
```
VITE v5.0.0  ready in 342 ms

➜  Local:   http://localhost:5173/
➜  press h to show help
```

**El navegador se abrirá automáticamente** con el dashboard.

#### 3️⃣ ¡Listo!
Ya puedes explorar el dashboard. Cualquier cambio que hagas en los archivos se actualizará automáticamente (Hot Reload).

---

## 📊 Conoce el Dashboard

### Secciones Disponibles

| Sección | Descripción |
|---------|-------------|
| **📈 Indicadores Clave** | 4 KPIs principales con tendencias |
| **📅 Análisis Temporal** | Evolución 2020-2024 de indicadores |
| **🎯 Clusters** | Segmentación de titulaciones (Excelencia, Intermedio, Riesgo) |
| **🏆 Ranking** | Top 10 titulaciones por satisfacción |

### ¡Interactúa con las Gráficas!

- **Hover**: Pasa el ratón para ver detalles
- **Zoom**: Arrastra para zoomar en una zona
- **Descargar**: Botón de camera en la esquina superior derecha
- **Expandir**: Click en "Ver Insight y Conclusiones"

---

## 🛠️ Comandos Disponibles

```bash
# Desarrollo (con auto-reload)
npm run dev

# Compilar para producción
npm run build

# Previsualizar la compilación de producción
npm run preview
```

---

## 📁 Estructura de Archivos Importante

```
dashboard-frontend/
├── src/
│   ├── components/          # Componentes reutilizables
│   ├── pages/               # Páginas (Dashboard.tsx)
│   ├── types/               # Definiciones TypeScript
│   ├── utils/               # Funciones (dataLoader.ts)
│   └── styles/              # CSS global
├── package.json             # Dependencias
├── vite.config.ts          # Configuración Vite
├── tailwind.config.js      # Configuración Tailwind
└── README.md               # Documentación completa
```

---

## 🔄 Datos y Actualizaciones

### Ubicación de Datos

Los datos se cargan desde archivos CSV en:
```
../data_analysis/
├── panel_maestro_UPV_LIMPIO.csv
├── series_temporal_principal.csv
├── kmeans_clusters.csv
└── desempeño_titulaciones.csv
```

### Actualizar Datos

1. Reemplaza los archivos CSV en `../data_analysis/`
2. Recarga el navegador (Ctrl+R o Cmd+R)
3. Los datos nuevos se cargarán automáticamente

---

## 🎨 Personalización

### Cambiar Colores

Edita `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#3B82F6',    // Azul
      success: '#10B981',    // Verde (Excelencia)
      warning: '#F59E0B',    // Naranja (Intermedio)
      danger: '#EF4444',     // Rojo (Riesgo)
    }
  }
}
```

### Agregar Nueva Métrica

1. Edita `src/types/index.ts` para agregar la interfaz
2. Crea componente en `src/components/`
3. Importa en `src/pages/Dashboard.tsx`

---

## ⚠️ Solución de Problemas

### ❌ "npm: command not found"
**Solución**: Instala Node.js desde https://nodejs.org/

### ❌ "Cannot find module '@/types'"
**Solución**: Ejecuta `npm install` nuevamente

### ❌ "Port 5173 is already in use"
**Solución**: 
```bash
npm run dev -- --port 3000  # Usa puerto 3000 en su lugar
```

### ❌ Las gráficas no cargan datos
**Solución**: 
- Verifica que los archivos CSV existan en `../data_analysis/`
- Abre la consola (F12) para ver errores
- Revisa que los nombres de columnas coincidan

---

## 📚 Documentación Completa

Lee `README.md` para:
- Tech stack detallado
- Estructura de datos
- Configuración avanzada
- Próximas características

---

## 💡 Tips y Trucos

### Para Desarrolladores

```bash
# Terminal 1: Servidor de desarrollo
npm run dev

# Terminal 2: Ver cambios en tiempo real
npm run build -- --watch

# Limpiar caché
rm -rf node_modules/.vite
```

### Extensiones VS Code Recomendadas
- **ES7+ React/Redux/React-Native snippets**
- **Tailwind CSS IntelliSense**
- **Prettier**
- **TypeScript Vue Plugin**

### Debugging
- Abre DevTools: `F12`
- Console: Ver errores y logs
- Network: Monitorear cargas de datos
- Debugger: Pausar ejecución

---

## 🎓 Próximos Pasos

Después de familiarizarte:

1. **Estudia el código**: Empieza con `src/pages/Dashboard.tsx`
2. **Crea tu componente**: Prueba haciendo un pequeño cambio visual
3. **Agrega una métrica**: Añade un KPI nuevo
4. **Integra API**: Reemplaza CSV con datos de servidor

---

## 🚀 Deploy en Producción

```bash
# 1. Compilar
npm run build

# 2. El resultado está en 'dist/' 
# 3. Sube 'dist/' a tu servidor web (Netlify, Vercel, AWS, etc.)
```

---

## 📞 Soporte

- **Documentación**: Ver `README.md`
- **Errores TypeScript**: Revisa `tsconfig.json`
- **Estilos**: Consulta `tailwind.config.js`

---

## ✅ Checklist de Inicio

- [ ] Node.js y npm instalados
- [ ] `npm install` completado
- [ ] `npm run dev` ejecutándose
- [ ] Dashboard visible en navegador
- [ ] Gráficas cargando correctamente
- [ ] Puedes expandir "Ver Insights"

¡Si todo está en ✅, ¡Estás listo para empezar! 🎉

---

**Disfruta explorando los datos. ¡Bienvenido al Panel Maestro UPV! 📊**
