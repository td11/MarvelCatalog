import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

test('Marvel characters data integrity', () => {
  const content = fs.readFileSync('src/data/marvelCharacters.ts', 'utf8');
  
  // Verify 16 characters exist in data
  assert.ok(content.includes('id: 1009368'), 'Iron Man present');
  assert.ok(content.includes('id: 1009220'), 'Spider-Man present');
  assert.ok(content.includes('id: 1009610'), 'Captain America present');
  assert.ok(content.includes('id: 1009664'), 'Thor present');
  assert.ok(content.includes('id: 1009189'), 'Hulk present');
  assert.ok(content.includes('id: 1009546'), 'Black Widow present');
  assert.ok(content.includes('id: 1009718'), 'Wolverine present');
  assert.ok(content.includes('id: 1009282'), 'Doctor Strange present');
  assert.ok(content.includes('id: 1009562'), 'Scarlet Witch present');
  assert.ok(content.includes('id: 1009187'), 'Black Panther present');
  assert.ok(content.includes('id: 1009268'), 'Deadpool present');
  assert.ok(content.includes('id: 1009652'), 'Thanos present');
  assert.ok(content.includes('id: 1009407'), 'Loki present');
  assert.ok(content.includes('id: 1010338'), 'Captain Marvel present');
  assert.ok(content.includes('id: 1009262'), 'Daredevil present');
  assert.ok(content.includes('id: 1010788'), 'Venom present');

  // Verify no internal tokens or leaked bot handles
  assert.ok(!content.includes('batcaveiacompanybot'), 'No internal telegram bot handle in marvel data');
  assert.ok(!content.includes('T007'), 'No internal task tokens in marvel data');
});

test('Vercel configuration exists and has rewrite', () => {
  const vercelConfig = JSON.parse(fs.readFileSync('vercel.json', 'utf8'));
  assert.ok(Array.isArray(vercelConfig.rewrites), 'Rewrites array exists');
  assert.equal(vercelConfig.rewrites[0].destination, '/index.html');
});

test('Vite config base is root for Vercel', () => {
  const viteConfig = fs.readFileSync('vite.config.ts', 'utf8');
  assert.ok(viteConfig.includes("base: '/'"), "Vite base must be '/' to prevent blank page on root domains");
});

test('Thanos and Venom have unique and valid local covers', () => {
  const content = fs.readFileSync('src/data/marvelCharacters.ts', 'utf8');
  assert.ok(content.includes('comicCover: "/images/thanos-cover.png"'), 'Thanos has thanos-cover.png');
  assert.ok(content.includes('comicCover: "/images/venom-cover.png"'), 'Venom has venom-cover.png');
  assert.ok(fs.existsSync('public/images/thanos-cover.png'), 'thanos-cover.png exists on disk');
  assert.ok(fs.existsSync('public/images/venom-cover.png'), 'venom-cover.png exists on disk');
});
test('50 canonical Marvel characters and cover assets integrity', () => {
  const content = fs.readFileSync('src/data/marvelCharacters.ts', 'utf8');
  const idMatches = content.match(/id:\s*\d+/g);
  assert.equal(idMatches?.length, 50, 'Catalog contains exactly 50 canonical characters');

  // Verify all comic covers exist on disk
  const coverMatches = content.match(/comicCover:\s*"([^"]+)"/g) || [];
  assert.equal(coverMatches.length, 50, 'All 50 characters have comicCover defined');

  for (const match of coverMatches) {
    const relativePath = match.replace(/comicCover:\s*"/, '').replace('"', '');
    const diskPath = path.join('public', relativePath);
    assert.ok(fs.existsSync(diskPath), `Cover image exists on disk: ${diskPath}`);
  }
});

test('Marvel sagas dataset integrity', () => {
  const content = fs.readFileSync('src/data/marvelSagas.ts', 'utf8');
  assert.ok(content.includes('infinity-gauntlet'), 'Infinity Gauntlet present');
  assert.ok(content.includes('civil-war'), 'Civil War present');
  assert.ok(content.includes('secret-wars'), 'Secret Wars present');
  assert.ok(content.includes('planet-hulk'), 'Planet Hulk present');
  assert.ok(content.includes('house-of-m'), 'House of M present');
  assert.ok(content.includes('dark-phoenix'), 'Dark Phoenix present');
  assert.ok(content.includes('spider-verse'), 'Spider-Verse present');
  assert.ok(content.includes('born-again'), 'Born Again present');
});
