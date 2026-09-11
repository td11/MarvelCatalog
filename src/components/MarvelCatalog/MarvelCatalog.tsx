import React, { useState, useMemo } from "react";
import { useMarvelCharacters, MarvelCharacter, MarvelTeam } from "../../hooks/useMarvelCharacters";
import { MarvelImage } from "../MarvelImage/MarvelImage";
import { CharacterModal } from "../CharacterModal/CharacterModal";
import {
  Search,
  X,
  Heart,
  LayoutGrid,
  Film,
  SlidersHorizontal,
  Flame,
  Shield,
  Zap,
  Sword,
  Sparkles,
  ArrowRight
} from "lucide-react";
import './MarvelCatalog.css';

interface MarvelCatalogProps {
  favorites: number[];
  onToggleFavorite: (id: number) => void;
  showFavoritesOnly: boolean;
  setShowFavoritesOnly: (show: boolean) => void;
}

type SortOption = 'default' | 'name-asc' | 'strength-desc' | 'intelligence-desc' | 'fighting-desc';

const TEAMS_FILTER: { id: MarvelTeam | 'all'; label: string; icon: string }[] = [
  { id: 'all', label: 'Todos', icon: '⚡' },
  { id: 'avengers', label: 'Vengadores', icon: '🛡️' },
  { id: 'spider-verse', label: 'Spider-Verse', icon: '🕷️' },
  { id: 'x-men', label: 'X-Men', icon: '🧬' },
  { id: 'cosmic', label: 'Cósmico', icon: '🌌' },
  { id: 'villains', label: 'Villanos', icon: '😈' },
  { id: 'street', label: 'Street Level', icon: '🥊' },
];

export function MarvelCatalog({
  favorites,
  onToggleFavorite,
  showFavoritesOnly,
  setShowFavoritesOnly,
}: MarvelCatalogProps) {
  const [search, setSearch] = useState<string>("");
  const [selectedTeam, setSelectedTeam] = useState<MarvelTeam | 'all'>('all');
  const [sortBy, setSortBy] = useState<SortOption>('default');
  const [viewMode, setViewMode] = useState<'grid' | 'strip'>('grid');
  const [selectedCharacter, setSelectedCharacter] = useState<MarvelCharacter | null>(null);

  // Consulta el catálogo mediante hook resiliente (soporta backend y offline local)
  const { characters: baseCharacters, loading } = useMarvelCharacters(search, selectedTeam, 50, 0);

  // Filtrado reactivo adicional para favoritos y ordenación
  const displayedCharacters = useMemo(() => {
    let result = [...baseCharacters];

    if (showFavoritesOnly) {
      result = result.filter(c => favorites.includes(c.id));
    }

    switch (sortBy) {
      case 'name-asc':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'strength-desc':
        result.sort((a, b) => (b.stats?.strength || 0) - (a.stats?.strength || 0));
        break;
      case 'intelligence-desc':
        result.sort((a, b) => (b.stats?.intelligence || 0) - (a.stats?.intelligence || 0));
        break;
      case 'fighting-desc':
        result.sort((a, b) => (b.stats?.fightingSkills || 0) - (a.stats?.fightingSkills || 0));
        break;
      default:
        break;
    }

    return result;
  }, [baseCharacters, showFavoritesOnly, favorites, sortBy]);

  const getHeroImg = (char: MarvelCharacter): string => {
    if (char.comicCover && char.comicCover !== '/images/generic_marvel_image.jpg') {
      return char.comicCover;
    }
    if (char.thumbnail?.path) {
      return `${char.thumbnail.path}/portrait_incredible.${char.thumbnail.extension || 'jpg'}`;
    }
    return char.comicCover || '/images/generic_marvel_image.jpg';
  };

  const handleResetFilters = () => {
    setSearch("");
    setSelectedTeam('all');
    setShowFavoritesOnly(false);
    setSortBy('default');
  };

  return (
    <div className="marvel-catalog-wrapper">
      {/* Hero Banner Cinematográfico */}
      <section className="marvel-hero-banner">
        <div className="marvel-hero-content">
          <div className="marvel-banner-pill">
            <Sparkles size={14} className="text-yellow-400" />
            <span>BASE DE DATOS CLASIFICADA — NIVEL SHIELD 10</span>
          </div>
          <h1 className="marvel-hero-headline">ARCHIVOS DEL UNIVERSO MARVEL</h1>
          <p className="marvel-hero-subheadline">
            Enciclopedia oficial con Power Grids de combate, linajes, identidades secretas
            y cómics históricos de los héroes y villanos más determinantes del multiverso.
          </p>

          {/* Métricas destacadas del Hero */}
          <div className="marvel-hero-stats">
            <div className="hero-stat-card">
              <span className="stat-number">16</span>
              <span className="stat-label">Héroes & Villanos</span>
            </div>
            <div className="hero-stat-card">
              <span className="stat-number">6</span>
              <span className="stat-label">Power Grids</span>
            </div>
            <div className="hero-stat-card">
              <span className="stat-number">{favorites.length}</span>
              <span className="stat-label">Favoritos Guardados</span>
            </div>
          </div>
        </div>
      </section>

      {/* Barra de Control, Búsqueda y Filtros */}
      <section className="marvel-control-panel">
        <div className="marvel-control-inner">
          {/* Fila Superior: Buscador y Vistas */}
          <div className="marvel-search-row">
            <div className="marvel-search-box">
              <Search size={18} className="marvel-search-icon" />
              <input
                type="text"
                placeholder="Buscar por nombre, identidad secreta o poder (ej: nanotecnología, Logan, Peter)..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="marvel-search-input"
              />
              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="marvel-search-clear"
                  aria-label="Limpiar búsqueda"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            <div className="marvel-view-controls">
              {/* Selector de Orden */}
              <div className="marvel-sort-wrap">
                <SlidersHorizontal size={15} />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="marvel-sort-select"
                >
                  <option value="default">Orden original</option>
                  <option value="name-asc">Nombre (A - Z)</option>
                  <option value="strength-desc">Mayor Fuerza</option>
                  <option value="intelligence-desc">Mayor Inteligencia</option>
                  <option value="fighting-desc">Mayor Combate</option>
                </select>
              </div>

              {/* Botón modo cuadrícula vs tira */}
              <div className="marvel-view-modes">
                <button
                  type="button"
                  className={`marvel-view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                  onClick={() => setViewMode('grid')}
                  title="Vista Cuadrícula"
                >
                  <LayoutGrid size={16} />
                </button>
                <button
                  type="button"
                  className={`marvel-view-btn ${viewMode === 'strip' ? 'active' : ''}`}
                  onClick={() => setViewMode('strip')}
                  title="Vista Cómic Strip Horizontal"
                >
                  <Film size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Fila Inferior: Filtros de Bandos / Equipos */}
          <div className="marvel-teams-bar">
            {TEAMS_FILTER.map(t => (
              <button
                key={t.id}
                type="button"
                className={`marvel-team-chip ${selectedTeam === t.id && !showFavoritesOnly ? 'active' : ''}`}
                onClick={() => {
                  setSelectedTeam(t.id);
                  if (showFavoritesOnly) setShowFavoritesOnly(false);
                }}
              >
                <span>{t.icon}</span>
                <span>{t.label}</span>
              </button>
            ))}

            {/* Chip de Favoritos */}
            <button
              type="button"
              className={`marvel-team-chip fav-chip ${showFavoritesOnly ? 'active' : ''}`}
              onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
            >
              <Heart size={14} className={favorites.length > 0 ? "fill-current text-red-500" : ""} />
              <span>Mis Favoritos ({favorites.length})</span>
            </button>
          </div>
        </div>
      </section>

      {/* Grid de Personajes o Strip */}
      <main className="marvel-characters-section">
        {loading ? (
          <div className="marvel-empty-state">
            <div className="marvel-spinner"></div>
            <p>Accediendo a la base de datos de SHIELD...</p>
          </div>
        ) : displayedCharacters.length === 0 ? (
          <div className="marvel-empty-state">
            <Flame size={48} className="text-red-500 mb-3" />
            <h3>No se encontraron personajes</h3>
            <p>No hay registros coincidentes con los filtros o la búsqueda actual.</p>
            <button
              type="button"
              onClick={handleResetFilters}
              className="marvel-reset-btn"
            >
              Restablecer Filtros
            </button>
          </div>
        ) : (
          <div className={viewMode === 'grid' ? 'marvel-cards-grid' : 'marvel-comic-strip'}>
            {displayedCharacters.map((char) => {
              const isFav = favorites.includes(char.id);
              const imgSrc = getHeroImg(char);

              return (
                <article
                  key={char.id}
                  className="marvel-hero-card"
                  onClick={() => setSelectedCharacter(char)}
                >
                  {/* Imagen y badges flotantes */}
                  <div className="marvel-card-media">
                    <MarvelImage
                      src={imgSrc}
                      alt={char.name}
                      className="marvel-card-img"
                    />

                    {/* Team Badge */}
                    <div className="marvel-card-team-badge">
                      <span>{char.teamLabel || 'Marvel'}</span>
                    </div>

                    {/* Favorite Button */}
                    <button
                      type="button"
                      className={`marvel-card-fav-btn ${isFav ? 'is-fav' : ''}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleFavorite(char.id);
                      }}
                      title={isFav ? "Quitar de favoritos" : "Guardar en favoritos"}
                    >
                      <Heart size={16} className={isFav ? "fill-current" : ""} />
                    </button>
                  </div>

                  {/* Información Principal */}
                  <div className="marvel-card-body">
                    <div className="marvel-card-header">
                      <h3 className="marvel-card-name">{char.name}</h3>
                      {char.realName && (
                        <p className="marvel-card-realname">{char.realName}</p>
                      )}
                    </div>

                    <p className="marvel-card-desc">
                      {char.description.length > 115
                        ? `${char.description.slice(0, 115)}...`
                        : char.description}
                    </p>

                    {/* Mini Stats Bar (Power Grid preview: Fuerza, Inteligencia, Combate) */}
                    {char.stats && (
                      <div className="marvel-card-stats-row">
                        <div className="mini-stat">
                          <span className="mini-stat-name">Fuerza</span>
                          <div className="mini-stat-bar">
                            <div
                              className="mini-stat-fill fill-red"
                              style={{ width: `${(char.stats.strength / 7) * 100}%` }}
                            />
                          </div>
                          <span className="mini-stat-num">{char.stats.strength}</span>
                        </div>
                        <div className="mini-stat">
                          <span className="mini-stat-name">Intelecto</span>
                          <div className="mini-stat-bar">
                            <div
                              className="mini-stat-fill fill-blue"
                              style={{ width: `${(char.stats.intelligence / 7) * 100}%` }}
                            />
                          </div>
                          <span className="mini-stat-num">{char.stats.intelligence}</span>
                        </div>
                        <div className="mini-stat">
                          <span className="mini-stat-name">Combate</span>
                          <div className="mini-stat-bar">
                            <div
                              className="mini-stat-fill fill-yellow"
                              style={{ width: `${(char.stats.fightingSkills / 7) * 100}%` }}
                            />
                          </div>
                          <span className="mini-stat-num">{char.stats.fightingSkills}</span>
                        </div>
                      </div>
                    )}

                    {/* Tags de Poderes Principales */}
                    {char.powers && char.powers.length > 0 && (
                      <div className="marvel-card-powers">
                        {char.powers.slice(0, 2).map((power, idx) => (
                          <span key={idx} className="mini-power-tag">
                            <Zap size={11} />
                            {power}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Botón de acción ver ficha */}
                    <div className="marvel-card-footer">
                      <span className="marvel-card-action">
                        Ficha Oficial <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </main>

      {/* Modal de Detalle Completo */}
      {selectedCharacter && (
        <CharacterModal
          character={selectedCharacter}
          imgSrc={getHeroImg(selectedCharacter)}
          isFavorite={favorites.includes(selectedCharacter.id)}
          onToggleFavorite={onToggleFavorite}
          onClose={() => setSelectedCharacter(null)}
        />
      )}
    </div>
  );
}

