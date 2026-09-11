import React, { useState, useEffect } from 'react';
import { Header } from './components/Header/Header';
import { MarvelCatalog } from './components/MarvelCatalog/MarvelCatalog';
import { Footer } from './components/Footer/Footer';
import './css/index.css';

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    return localStorage.getItem('marvel_dark_mode') !== 'false';
  });

  const [favorites, setFavorites] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem('marvel_favorites');
      return saved ? JSON.parse(saved) : [1009368, 1009220]; // Iron Man & Spider-Man preseleccionados
    } catch {
      return [1009368, 1009220];
    }
  });

  const [showFavoritesOnly, setShowFavoritesOnly] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem('marvel_dark_mode', darkMode.toString());
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('marvel_favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (id: number) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <div className={darkMode ? "dark" : "light"}>
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        favoritesCount={favorites.length}
        showFavoritesOnly={showFavoritesOnly}
        onToggleShowFavorites={() => setShowFavoritesOnly(prev => !prev)}
      />
      <MarvelCatalog
        favorites={favorites}
        onToggleFavorite={toggleFavorite}
        showFavoritesOnly={showFavoritesOnly}
        setShowFavoritesOnly={setShowFavoritesOnly}
      />
      <Footer />
    </div>
  );
}

export default App;

