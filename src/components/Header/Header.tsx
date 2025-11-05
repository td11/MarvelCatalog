import React from "react";
import marvelLogo from '../../assets/img/marvel-header.png';
import './Header.css';

export function Header({ darkMode, setDarkMode }: { darkMode: boolean; setDarkMode: (v: boolean) => void }) {
  return (
    <header className="header">
      <img
        src={marvelLogo}
        alt="Marvel Logo"
        className="logo-img"
      />
      <button
        className="mode-toggle"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "☀️ Modo claro" : "🌙 Modo oscuro"}
      </button>
    </header>
  );
}
