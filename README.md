# MarvelCatalog

Proyecto formativo que muestra un catálogo de personajes de Marvel.
Incluye frontend en **React + Vite** y backend en **Node.js / Express**.

---

## Requisitos previos

- Node.js v16+ (recomendado)
- npm o yarn
- Terminal o consola

---

## Instalación

Clona el repositorio:

```bash
git clone git@github.com:td11/MarvelCatalog.git
cd MarvelCatalog
```

---

## Backend

1. Entra en la carpeta del servidor:

```bash
cd backend
```

2. Instala dependencias:

```bash
npm install
```

3. Inicia el servidor (por defecto en http://localhost:3001):

```bash
npm run dev
```

---

## Frontend

1. Abre una nueva terminal y ve a la carpeta del frontend:

```bash
cd frontend
```

2. Instala dependencias:

```bash
npm install
```

3. Ejecuta el proyecto:

```bash
npm run dev
```

4. Abre el navegador en la dirección indicada (por defecto http://localhost:5173)

---

## Variables de entorno

Si usas `.env`, agrega en el frontend:

```env
VITE_API_BASE=http://localhost:3001
```

---

## Uso

- Busca y navega personajes mediante un carrusel horizontal.
- Visualiza detalles de cada personaje en un modal.
- El backend provee datos vía API REST y sirve imágenes desde `/images`.

---

## Estructura del proyecto

```
MarvelCatalog/
├─ backend/
│  ├─ index.js
│  └─ marvelData.js
│
├─ frontend/
│  ├─ src/
│  │  ├─ components/
│  │  ├─ hooks/
│  │  ├─ css/
│  │  ├─ App.tsx
│  │  └─ main.tsx
│  ├─ package.json
│  └─ vite.config.js
│
├─ .gitignore
└─ README.md
```

---

## Uso de Marvel API Key (futuro)

```
Public Key: d26310aa64bd024c14efa9c7d0dfa3f2
```

---

## Licencia

Proyecto formativo personal sin fines comerciales.
