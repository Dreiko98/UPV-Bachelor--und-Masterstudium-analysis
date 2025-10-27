# 🚀 Guía Paso a Paso: Deploy en Netlify

## **PASO 1: Preparar Git (Si es la primera vez)**

```bash
cd dashboard-frontend
git init
git add .
git commit -m "Dashboard UPV - Versión inicial"
```

## **PASO 2: Crear cuenta en GitHub**

1. Ve a https://github.com/signup
2. Crea una cuenta (o usa la existente si ya tienes)
3. Confirma tu email

## **PASO 3: Crear repositorio en GitHub**

1. Ve a https://github.com/new
2. Nombre: `upv-dashboard` (o el que prefieras)
3. Descripción: "Dashboard Panel Maestro UPV"
4. Selecciona: Public o Private (como prefieras)
5. Click "Create repository"

## **PASO 4: Subir código a GitHub**

Después de crear el repositorio, GitHub te mostrará comandos. Ejecuta:

```bash
cd /ruta/a/dashboard-frontend

git branch -M main
git remote add origin https://github.com/TU_USUARIO/upv-dashboard.git
git push -u origin main
```

Reemplaza `TU_USUARIO` con tu nombre de usuario de GitHub.

## **PASO 5: Crear cuenta en Netlify**

1. Ve a https://app.netlify.com/signup
2. Selecciona "GitHub" para conectar directamente
3. Autoriza Netlify para acceder a tu GitHub
4. Completa los datos de tu cuenta

## **PASO 6: Deployear en Netlify**

### Opción A: Automático (RECOMENDADO)

1. En Netlify, haz clic en "Add new site"
2. Selecciona "Import an existing project"
3. Conecta con GitHub
4. Selecciona el repositorio `upv-dashboard`
5. **Configuración automática:**
   - Build command: `npm run build` (ya detectado)
   - Publish directory: `dist` (ya detectado)
6. Click "Deploy site"

### Opción B: Manual con Netlify CLI

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Hacer login
netlify login

# Deploy
cd dashboard-frontend
netlify deploy --prod --dir=dist --auth YOUR_TOKEN
```

## **PASO 7: Verificar el Deploy**

1. Espera 2-5 minutos a que se complete
2. Netlify te dará una URL tipo: `https://upv-dashboard.netlify.app`
3. Abre la URL y verifica que todo funciona

## **PASO 8: Cambios futuros**

Cada vez que hagas cambios:

```bash
git add .
git commit -m "Descripción de cambios"
git push origin main
```

Netlify automáticamente detectará los cambios y hará un nuevo deploy.

---

## ✅ Checklist Antes de Deployear

- [ ] El servidor local funciona (`npm run dev`)
- [ ] No hay errores en la consola del navegador
- [ ] El archivo `panel_maestro_UPV_LIMPIO.csv` está en `public/`
- [ ] Todos los datos cargan correctamente
- [ ] Las 5 pestañas funcionan sin errores
- [ ] El archivo `netlify.toml` está en la raíz de `dashboard-frontend/`

---

## 🆘 Solución de Problemas

### "El CSV no carga en Netlify"
→ Verifica que `panel_maestro_UPV_LIMPIO.csv` esté en `public/`

### "La página muestra error 404"
→ Asegúrate de que está el `netlify.toml` configurado correctamente

### "El build falla"
→ Revisa los logs en Netlify (Dashboard → Deploys → Ver logs)

### "Las tarjetas no se expanden"
→ Compila localmente con `npm run build` y prueba con `npm run preview`

---

## 📊 URL de tu Dashboard

Después del deploy, compartible en:
`https://upv-dashboard.netlify.app` (cambia el nombre según tu deploy)
