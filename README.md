# 🚀 Tutorial para trabajar con ramas en GitHub (integrado con Jira)

Este documento explica **qué son las ramas**, **cómo crearlas**, y **cómo usarlas con Jira** para que todos trabajemos de la misma forma en el proyecto.

---

## 🔹 1. Concepto básico: ¿qué es una rama?

* Una **rama (branch)** es una “copia” del código donde trabajamos sin romper lo que hay en la rama principal (**main**).
* Imagina que `main` es la “versión oficial” del proyecto.
* Cada vez que empezamos una tarea de Jira, creamos una **rama nueva** para esa tarea.
* Cuando terminamos, unimos esa rama a `main` con un **Pull Request (PR)**.

👉 Así evitamos que todos editemos el mismo código a la vez y nos pisemos los cambios.

---

## 🔹 2. Relación con Jira

* Cada tarea en Jira tiene un **ID único** (ejemplo: `GPR-4`).
* Ese ID lo usaremos en el **nombre de la rama** y en los **commits**.
* Así Jira sabe qué código pertenece a qué tarea y podemos ver los cambios directamente en la issue.

---

## 🔹 3. Flujo de trabajo paso a paso

### A) Crear una rama nueva

1. Mira tu tarea en Jira (ejemplo: **GPR-4 Extracción Tasa Abandono**).
2. Abre GitKraken o la terminal y escribe:

   ```bash
   git checkout main
   git pull origin main      # asegurarte de tener la última versión
   git checkout -b feature/GPR-4-extraccion-tasa-abandono
   ```

   👉 Esto crea una rama nueva llamada `feature/GPR-4-extraccion-tasa-abandono`.

---

### B) Trabajar en la rama

1. Haz tus cambios en el código.
2. Guarda y añade los cambios al commit:

   ```bash
   git add .
   git commit -m "GPR-4 extracción inicial de datos de abandono"
   ```

   ⚠️ Siempre pon el **ID de Jira (`GPR-4`) en el mensaje del commit**.

---

### C) Subir la rama a GitHub

1. Cuando tengas commits, súbelos a GitHub:

   ```bash
   git push origin feature/GPR-4-extraccion-tasa-abandono
   ```
2. Ahora tu rama ya está visible en GitHub y vinculada a Jira.

---

### D) Crear un Pull Request (PR)

1. Entra en GitHub → repo → pestaña **Pull Requests**.
2. Crea un **New Pull Request** desde tu rama hacia `main`.
3. En el título pon algo como:

   ```
   GPR-4: Extracción Tasa Abandono
   ```
4. Asigna revisores (otros compañeros del equipo).

👉 Cuando lo revisemos y aceptemos, se fusiona en `main`.

---

## 🔹 4. Naming convention (nombres de ramas)

Usaremos este formato:

```
feature/GPR-XX-descripcion-corta
bugfix/GPR-XX-descripcion-corta
hotfix/GPR-XX-descripcion-corta
```

Ejemplos:

* `feature/GPR-4-extraccion-tasa-abandono`
* `bugfix/GPR-10-arreglo-null-values`
* `hotfix/GPR-15-error-conexion-db`

---

## 🔹 5. Resumen rápido para tus compañeros

1. **Coger una tarea en Jira**.
2. **Crear rama** con el ID de Jira en el nombre.
3. **Trabajar → commit → push** (siempre con el ID de Jira en el mensaje).
4. **Pull Request en GitHub** → revisar → fusionar a `main`.

---

👉 Con este flujo, cada tarea en Jira tendrá asociada su rama, commits y PR en GitHub.
Todo quedará ordenado y se evitarán errores al trabajar en equipo.