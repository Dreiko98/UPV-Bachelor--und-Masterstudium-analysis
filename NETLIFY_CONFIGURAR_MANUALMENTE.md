# 🔧 Solución: Configurar Netlify Manualmente

## ⚠️ El Problema

Netlify no está detectando el archivo `netlify.toml` que creamos. Dice:
```
❯ Config file
   No config file was defined: using default values.
```

Esto sucede porque el archivo fue agregado después de conectar el repositorio a Netlify.

## ✅ Solución: Configurar Manualmente en la UI de Netlify

Necesitas entrar a la UI de Netlify y configurar los parámetros manualmente:

### PASO 1: Abre Netlify
Ve a: https://app.netlify.com/

### PASO 2: Ve a Site Settings
1. Selecciona tu site "upv-dashboard"
2. Haz clic en **"Site settings"** (arriba a la derecha)
3. En el menú izquierdo, busca **"Build & deploy"**
4. Haz clic en **"Build settings"**

### PASO 3: Edita la Configuración

En la sección **"Build settings"** verás campos como los de la imagen que compartiste. Llena así:

#### Base directory
```
dashboard-frontend
```
*(Esto le dice a Netlify dónde buscar el package.json)*

#### Build command
```
npm run build
```

#### Publish directory
```
dist
```

### PASO 4: Guarda los Cambios
Haz clic en **"Save"** (si hay un botón) o los cambios se guardan automáticamente.

### PASO 5: Fuerza un Redeploy
Una vez guardados los cambios:
1. Ve a **"Deploys"** (en el menú superior)
2. Haz clic en **"Trigger deploy"** → **"Deploy site"**
3. Espera 2-5 minutos

---

## 📋 Referencia Visual

Basado en la imagen que compartiste, los campos deben quedar así:

```
Runtime:                    [Select dropdown - deja como está]
Base directory:             dashboard-frontend
Package directory:          [Vacío - solo si es diferente]
Build command:              npm run build
Publish directory:          dist
Functions directory:        netlify/functions
Deploy log visibility:      Public logs (✓ recomendado)
Build status:               Active builds (✓)
```

---

## 🔍 Si Sigue Sin Funcionar

Después de guardar y hacer el redeploy, si sigue fallando:

1. **Verifica que el package.json está en dashboard-frontend:**
   ```bash
   cat dashboard-frontend/package.json | head -10
   ```
   Debe mostrar: `{ "name": ..., "scripts": { "build": ...`

2. **Verifica que tienes las dependencias instaladas:**
   ```bash
   cd dashboard-frontend
   npm install
   ```

3. **Prueba el build localmente:**
   ```bash
   cd dashboard-frontend
   npm run build
   ```
   Debe crear una carpeta `dist/`

---

## 💡 Alternativa: Si Prefieres que Netlify Lea el netlify.toml

Si el netlify.toml en la raíz tiene el contenido correcto pero Netlify no lo detecta, también puedes:

1. En Netlify UI, ir a Site settings → Build & deploy → Build settings
2. Hacer clic en **"Edit settings"** (si existe ese botón)
3. O directamente usar la CLI:
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod
   ```

---

## ✅ Checklist

- [ ] Base directory: `dashboard-frontend`
- [ ] Build command: `npm run build`
- [ ] Publish directory: `dist`
- [ ] Cambios guardados en Netlify
- [ ] Redeploy disparado
- [ ] Esperando resultado en Netlify

**Después de configurar en la UI y disparar el redeploy, cuéntame qué pasa.** 🎯
