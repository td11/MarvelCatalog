# Changelog

Todos los cambios notables de este proyecto se documentarán en este archivo según el estándar [SemVer](https://semver.org/).

---

## [1.1.0] - 2026-09-11

### 🚀 Novedades & Epic Portfolio Expansion
- **Ingesta ETL Marvel API (`MARVEL-001`):** Pipeline Node.js (`scripts/ingestMarvelApi.mjs`) con autenticación criptográfica MD5 y filtrado automático de imágenes huérfanas (`image_not_available`).
- **Expansión Canónica a 50 Personajes (`MARVEL-002`):** Catálogo ampliado con 50 héroes y villanos del multiverso, con Power Grids oficiales (1-7), biografías detalladas, identidades secretas, poderes, cómics esenciales y 100% de portadas dedicadas verificadas en `public/images/`.
- **Sagas & Macroeventos Marvel (`MARVEL-003`):** Nueva sección interactiva `SagasExplorer` con 8 sagas históricas (*Infinity Gauntlet, Civil War, Secret Wars, Planet Hulk, House of M, Dark Phoenix, Spider-Verse, Born Again*), checklists de números clave y enlaces a protagonistas.
- **Simulador Táctico Versus Arena 1 vs 1 (`MARVEL-004`):** Arena de combate con cálculo probabilístico de victoria basado en Power Grids ponderados, presets de duelos míticos e informes tácticos dinámicos bajo protocolo S.H.I.E.L.D.
- **Soporte PWA & Compartir Ficha (`MARVEL-005`):** Integración de `manifest.webmanifest`, Web Share API nativo con fallback a portapapeles, y atajo directo para exportar personajes desde el modal a la arena de combate.
- **Suite de Testing:** 6 pruebas unitarias de integridad de datos, rewrite de Vercel, ruta base de Vite y existencia de portadas en disco.

---

## [1.0.4] - 2026-09-11

### 🐛 Correcciones
- Corrección de rutas de imágenes locales para Thanos y Venom.
- Configuración de `base: '/'` en `vite.config.ts` y rewrites en `vercel.json` para despliegue en Vercel con subdominio personalizado.
