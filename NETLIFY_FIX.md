# 🔧 Solución: Error de Build en Netlify

## ❌ Problema
```
npm error Could not read package.json: Error: ENOENT
```

## ✅ Solución Aplicada
Se agregó un `netlify.toml` en la **raíz del repositorio** con la configuración correcta:

```toml
[build]
  base = "dashboard-frontend"
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## 📋 Próximos Pasos

### OPCIÓN 1: Forzar Redeploy Automático (RECOMENDADO)

1. Ve a tu dashboard en Netlify: https://app.netlify.com/
2. Selecciona tu site "upv-dashboard"
3. Ve a "Deploys" (arriba a la izquierda)
4. Haz clic en el botón **"Trigger deploy"** → "Deploy site"
5. Espera 2-5 minutos a que se complete

### OPCIÓN 2: Trigger Manual desde Git

El push ya se hizo, Netlify debería detectarlo automáticamente:

```bash
# Ya completado:
git add netlify.toml
git commit -m "Fix: Agregar netlify.toml en raíz con base directory"
git push origin GPR-21-Diseño-del-dashboard
```

Si Netlify no detecta automáticamente, usa OPCIÓN 1.

## 🔍 Verificación

Una vez que el deploy se complete:

1. ✓ Ve a https://upv-dashboard.netlify.app (o tu URL)
2. ✓ Verifica que carga la página
3. ✓ Comprueba que el CSV carga datos
4. ✓ Prueba las 5 pestañas
5. ✓ Expande las tarjetas en "Todas las Carreras"

## 📊 Estado del Archivo

```
✓ netlify.toml en raíz: /netlify.toml
✓ netlify.toml en dashboard: /dashboard-frontend/netlify.toml (mantener)
✓ .gitignore: /dashboard-frontend/.gitignore
✓ package.json: /dashboard-frontend/package.json
```

## 🆘 Si sigue fallando

Si después de forzar el redeploy sigue fallando:

1. Revisa los logs en Netlify (Deploys → Ver logs)
2. Busca errores como:
   - `Could not read package.json` → netlify.toml mal configurado
   - `npm ERR! 404` → Falta dependencia (ejecuta `npm install` localmente)
   - Otro error → Cópialo y comparte

## ✅ Cambios Realizados

```bash
# Archivo creado/modificado:
netlify.toml (en raíz del repo)

# Contenido clave:
base = "dashboard-frontend"  # ← IMPORTANTE: Le dice a Netlify dónde buscar
```

¡El fix está listo! 🚀
