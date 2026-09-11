# 🦸 Marvel Universe Archive & Tactical Arena

Plataforma interactiva del Universo Marvel diseñada como showcase de ingeniería frontend y arquitectura de datos para el portfolio profesional de **Baticueva Tech**.

Desarrollada con **React 18 + TypeScript + Vite**, optimizada para despliegue serverless en **Vercel** (`marvel.baticuevatech.es`) con soporte offline PWA y 100% de assets canónicos verificados.

---

## ⚡ Características Principales

1. **Catálogo Canónico de 50 Personajes:**
   - Base de datos exhaustiva con identidades secretas, biografías, primera aparición en cómic y apariciones cinematográficas en el MCU.
   - **Marvel Power Grid Oficial (1 a 7):** Inteligencia, Fuerza, Velocidad, Resistencia, Proyección de Energía y Habilidades de Combate.
   - Filtrado instantáneo por facciones y equipos: Vengadores, Spider-Verse, X-Men, 4 Fantásticos, Guardianes de la Galaxia, Nivel Cósmico, Nivel Callejero y Villanos.
   - Ordenación multidimensional por atributos y persistencia reactiva de favoritos en LocalStorage.

2. **📖 Sagas & Eventos Multiversales:**
   - Explorador de los 8 macroeventos canónicos definitivos: *The Infinity Gauntlet*, *Civil War*, *Secret Wars*, *Planet Hulk / World War Hulk*, *House of M*, *The Dark Phoenix Saga*, *Spider-Verse* y *Daredevil: Born Again*.
   - Checklists de números esenciales, impacto histórico y navegación cruzada directa hacia las fichas de los protagonistas.

3. **⚔️ Versus Arena (Simulador Táctico 1 vs 1):**
   - Motor de combate probabilístico ponderado sobre el Power Grid oficial.
   - Duelos históricos preconfigurados y selección libre entre cualquier pareja de los 50 personajes.
   - Informes tácticos automatizados bajo protocolo de análisis militar de **S.H.I.E.L.D.**

4. **📲 PWA & Fichas Compartibles:**
   - Web App Manifest con instalación en pantalla de inicio (`standalone`).
   - Botón de compartir nativo (*Web Share API*) con fallback automático a copiado de enlace en portapapeles.
   - Integración fluida para transferir cualquier ficha abierta en modal directamente a la arena de combate.

5. **🛠️ Pipeline de Ingestión ETL (Marvel Comics API):**
   - Script automatizado en Node.js (`scripts/ingestMarvelApi.mjs`) con autenticación por hash MD5 y filtrado de calidad de imágenes no disponibles.

---

## 📁 Estructura del Proyecto

```
MarvelCatalog/
├── public/
│   ├── images/             # 50 portadas canónicas verificadas en disco
│   └── manifest.webmanifest # Manifiesto PWA para instalación móvil y desktop
├── scripts/
│   ├── ingestMarvelApi.mjs # Pipeline ETL para Marvel Comics API
│   └── build50Characters.cjs # Generador de datos tipados canónicos
├── src/
│   ├── components/
│   │   ├── CharacterModal/ # Modal cinemático con Power Grid y Share
│   │   ├── MarvelCatalog/  # Buscador, filtros y vistas grid/strip
│   │   ├── SagasExplorer/  # Navegador de sagas y macroeventos
│   │   └── VersusArena/    # Simulador táctico de combate 1 vs 1
│   ├── data/
│   │   ├── marvelCharacters.ts # Dataset tipado con 50 personajes
│   │   └── marvelSagas.ts      # Dataset de sagas canónicas
│   └── hooks/
│       └── useMarvelCharacters.ts # Hook reactivo resiliente
├── tests/
│   └── catalog.test.mjs    # Suite de validación de integridad (Node test runner)
└── vercel.json             # Reglas de enrutamiento SPA para Vercel
```

---

## 🚀 Puesta en Marcha Local

```bash
# 1. Clonar e instalar dependencias
npm install

# 2. Ejecutar suite de pruebas unitarias
npm test

# 3. Compilar para producción
npm run build

# 4. Servidor de desarrollo local
npm run dev
```

---

## 🛡️ Estándares Técnicos

- **Zero broken covers:** El 100% de los 50 personajes disponen de portadas dedicadas en `public/images/`.
- **Integridad de pruebas:** Validado automáticamente con `node --test tests/catalog.test.mjs`.
- **Licencia:** MIT — Diseñado por **Baticueva Tech**.
