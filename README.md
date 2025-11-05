# MarvelCatalog

Proyecto formativo que muestra un catálogo de personajes Marvel con frontend en React + Vite y backend en Node.js/Express.

---

## Requisitos previos

- Node.js (v16+ recomendado)
- npm o yarn
- Acceso a terminal o consola

---

## Instalación

Clona el repositorio:

git clone https://tu-repo-url.git
cd MarvelCatalog


---

## Backend

1. Entra a la carpeta backend (o donde esté el servidor):

cd backend


2. Instala dependencias:

npm install


3. Arranca el backend (por defecto en puerto 3001):

npm run dev


---

## Frontend

1. Abre una nueva terminal y navega a la carpeta del frontend:

cd frontend


2. Instala dependencias:

npm install


3. Arranca el proyecto React + Vite:

npm run dev


4. Abre el navegador en la dirección que muestre (por defecto `http://localhost:5173`)

---

## Variables de entorno

No olvides configurar las variables de entorno si usas `.env`. Para desarrollo suele bastar con:

VITE_API_BASE=http://localhost:3001


---

## Uso

- En la web puedes buscar personajes, navegar entre ellos con el carousel horizontal, y ver detalles en modal.
- El backend provee los datos via API REST y sirve las imágenes desde `/images`

---

## Estructura básica del proyecto

MarvelCatalog/
├─ backend/
│ ├─ index.js (Servidor Express y api)
│ └─ marvelData.js (Datos)
├─ frontend/
│ ├─ src/
│ │ ├─ components/
│ │ ├─ hooks/
│ │ ├─ css/
│ │ ├─ App.tsx
│ │ └─ main.tsx
│ ├─ package.json
│ └─ vite.config.js
├─ .gitignore
└─ README.md

---

## Uso de Marvel api key (En un futuro)

Marvel public key
d26310aa64bd024c14efa9c7d0dfa3f2


---

## Licencia

Proyecto formativo personal. No comercial.
