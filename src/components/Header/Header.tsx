import React from "react";
import marvelLogo from '../../assets/img/marvel-header.png';
import { Sun, Moon, Heart, Sparkles, BookOpen } from "lucide-react";
import './Header.css';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (v: boolean) => void;
  favoritesCount?: number;
  showFavoritesOnly?: boolean;
  onToggleShowFavorites?: () => void;
}

export function Header({
  darkMode,
  setDarkMode,
  favoritesCount = 0,
  showFavoritesOnly = false,
  onToggleShowFavorites,
}: HeaderProps) {
  return (
    <header className="marvel-header">
      <div className="marvel-header-inner">
        {/* Marca Marvel */}
        <div className="marvel-brand-wrap">
          <img
            src={marvelLogo}
            alt="Marvel Logo"
            className="marvel-logo-img"
          />
          <div className="marvel-brand-text">
            <span className="marvel-brand-badge">BATICUEVA FACTORY</span>
            <span className="marvel-brand-sub">ARCHIVOS DEL UNIVERSO MARVEL</span>
          </div>
        </div>

        {/* Acciones del Header */}
        <div className="marvel-header-actions">
          {/* Botón de filtro rápido de Favoritos */}
          {onToggleShowFavorites && (
            <button
              className={`marvel-header-fav-btn ${showFavoritesOnly ? 'active' : ''}`}
              onClick={onToggleShowFavorites}
              title={showFavoritesOnly ? "Mostrar todos los personajes" : "Mostrar solo favoritos"}
            >
              <Heart
                size={16}
                className={favoritesCount > 0 ? "text-red-500 fill-current" : ""}
              />
              <span className="fav-label">Favoritos</span>
              <span className="fav-count-badge">{favoritesCount}</span>
            </button>
          )}

          {/* Toggle Modo Oscuro / Claro */}
          <button
            className="marvel-mode-toggle"
            onClick={() => setDarkMode(!darkMode)}
            title={darkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
            aria-label="Cambiar tema visual"
          >
            {darkMode ? (
              <>
                <Sun size={17} className="text-yellow-400" />
                <span className="mode-label">Claro</span>
              </>
            ) : (
              <>
                <Moon size={17} className="text-blue-300" />
                <span className="mode-label">Oscuro</span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

