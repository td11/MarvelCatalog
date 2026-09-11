import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

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


