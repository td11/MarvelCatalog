import React, { useState } from 'react';
import { Header } from './components/Header/Header';
import { MarvelCatalog } from './components/MarvelCatalog/MarvelCatalog';
import { Footer } from './components/Footer/Footer';
import './css/index.css';

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  return (
    <div className={darkMode ? "dark" : "light"}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="main-content">
        <MarvelCatalog />
      </main>
      <Footer />
    </div>
  );
}

export default App;
