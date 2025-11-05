const express = require('express');
const cors = require('cors');
const marvelData = require('./data/marvelData');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Servir imágenes públicas
app.use('/images', express.static('public/images'));

// Endpoint personajes
app.get('/api/characters', (req, res) => {
  const { nameStartsWith, limit = 20, offset = 0 } = req.query;

  let results = marvelData;
  if (nameStartsWith) {
    results = results.filter(char =>
      char.name.toLowerCase().startsWith(nameStartsWith.toLowerCase())
    );
  }

  const start = parseInt(offset, 10);
  const end = start + parseInt(limit, 10);
  const paginatedResults = results.slice(start, end);

  res.json({ data: { results: paginatedResults } });
});

app.listen(PORT, () => {
  console.log(`API backend corriendo en http://localhost:${PORT}`);
});
