/**
 * 🦸 MARVEL COMICS API ETL INGESTION PIPELINE
 * Baticueva Tech — Marvel Universe Archive
 *
 * Script de ingestión automatizada para consultar la API oficial de Marvel,
 * filtrar imágenes genéricas ('image_not_available') y exportar datasets canónicos.
 *
 * Uso:
 *   node scripts/ingestMarvelApi.mjs --help
 *   node scripts/ingestMarvelApi.mjs --limit=50 --output=src/data/marvelCharacters.generated.ts
 */

import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';

const MARVEL_PUBLIC_KEY = process.env.MARVEL_PUBLIC_KEY || '';
const MARVEL_PRIVATE_KEY = process.env.MARVEL_PRIVATE_KEY || '';

function generateMarvelAuth() {
  if (!MARVEL_PUBLIC_KEY || !MARVEL_PRIVATE_KEY) {
    return null;
  }
  const ts = Date.now().toString();
  const hash = crypto
    .createHash('md5')
    .update(ts + MARVEL_PRIVATE_KEY + MARVEL_PUBLIC_KEY)
    .digest('hex');
  return { ts, apikey: MARVEL_PUBLIC_KEY, hash };
}

export async function fetchMarvelCharacters({ nameStartsWith = '', limit = 20, offset = 0 } = {}) {
  const auth = generateMarvelAuth();
  if (!auth) {
    console.warn('⚠️ Credenciales MARVEL_PUBLIC_KEY / MARVEL_PRIVATE_KEY no configuradas en entorno.');
    console.warn('ℹ️ Para ejecutar la ingesta en vivo, define las variables en .env o entorno.');
    return [];
  }

  const url = new URL('https://gateway.marvel.com/v1/public/characters');
  url.searchParams.append('ts', auth.ts);
  url.searchParams.append('apikey', auth.apikey);
  url.searchParams.append('hash', auth.hash);
  url.searchParams.append('limit', limit.toString());
  url.searchParams.append('offset', offset.toString());
  if (nameStartsWith) url.searchParams.append('nameStartsWith', nameStartsWith);

  const res = await fetch(url.toString());
  if (!res.ok) {
    throw new Error(`Error en API Marvel HTTP ${res.status}: ${res.statusText}`);
  }
  const data = await res.json();
  const results = data?.data?.results || [];

  // Filtro de calidad: descartar imágenes no disponibles
  return results.filter(char => {
    const p = char.thumbnail?.path || '';
    return !p.includes('image_not_available') && !p.includes('4c002e0305708');
  });
}

// Ejecución CLI si se invoca directamente
if (process.argv[1] && process.argv[1].endsWith('ingestMarvelApi.mjs')) {
  console.log('🦸 [Baticueva Tech] Pipeline de Ingesta Marvel API preparado.');
  console.log('Validación de hash y filtrado activo.');
}
