import React, { useState } from 'react';
import { MARVEL_SAGAS, MarvelSaga } from '../../data/marvelSagas';
import { BookOpen, Search, Sparkles, Calendar, Users, Award, Zap } from 'lucide-react';
import './SagasExplorer.css';

interface SagasExplorerProps {
  onSelectCharacterName?: (name: string) => void;
}

export const SagasExplorer: React.FC<SagasExplorerProps> = ({ onSelectCharacterName }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBadge, setSelectedBadge] = useState<string>('all');

  const badges = ['all', ...Array.from(new Set(MARVEL_SAGAS.map(s => s.badge)))];

  const filteredSagas = MARVEL_SAGAS.filter(saga => {
    const matchesSearch =
      saga.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      saga.synopsis.toLowerCase().includes(searchTerm.toLowerCase()) ||
      saga.mainCharacters.some(c => c.toLowerCase().includes(searchTerm.toLowerCase())) ||
      saga.year.toString().includes(searchTerm);

    const matchesBadge = selectedBadge === 'all' || saga.badge === selectedBadge;

    return matchesSearch && matchesBadge;
  });

  return (
    <div className="sagas-explorer-wrapper">
      {/* Banner Sagas */}
      <section className="sagas-hero-banner">
        <div className="sagas-banner-pill">
          <Sparkles size={14} className="text-yellow-400" />
          <span>LÍNEAS TEMPORALES & CRISIS MULTIVERSALES</span>
        </div>
        <h2 className="sagas-headline">SAGAS & EVENTOS HISTÓRICOS</h2>
        <p className="sagas-subheadline">
          Explora los cómics determinantes, crossovers cósmicos y cataclismos que moldearon y reiniciaron
          la continuidad del Universo Marvel a lo largo de las décadas.
        </p>

        {/* Buscador & Filtros de Sagas */}
        <div className="sagas-filter-bar">
          <div className="sagas-search-box">
            <Search size={18} className="sagas-search-icon" />
            <input
              type="text"
              placeholder="Buscar saga por título, personaje o año (ej: Thanos, 2015, Civil War)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="sagas-search-input"
            />
          </div>

          <div className="sagas-badge-pills">
            {badges.map(b => (
              <button
                key={b}
                type="button"
                className={`sagas-badge-btn ${selectedBadge === b ? 'active' : ''}`}
                onClick={() => setSelectedBadge(b)}
              >
                {b === 'all' ? 'Todos los Eventos' : b}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid de Sagas */}
      <div className="sagas-grid">
        {filteredSagas.map(saga => (
          <article key={saga.id} className="saga-card">
            <div
              className="saga-card-header"
              style={{ background: saga.bannerGradient }}
            >
              <div className="saga-header-top">
                <span className="saga-badge">{saga.badge}</span>
                <span className="saga-year">
                  <Calendar size={13} /> {saga.year}
                </span>
              </div>
              <h3 className="saga-title">{saga.title}</h3>
            </div>

            <div className="saga-card-body">
              <p className="saga-synopsis">{saga.synopsis}</p>

              {/* Impacto */}
              <div className="saga-impact-box">
                <div className="saga-impact-title">
                  <Zap size={14} className="text-amber-400" />
                  <span>Impacto Canónico</span>
                </div>
                <p className="saga-impact-desc">{saga.impact}</p>
              </div>

              {/* Protagonistas */}
              <div className="saga-section">
                <div className="saga-section-header">
                  <Users size={14} />
                  <span>Personajes Clave:</span>
                </div>
                <div className="saga-characters-tags">
                  {saga.mainCharacters.map((charName, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => onSelectCharacterName?.(charName)}
                      className="saga-char-tag"
                      title={`Ver ficha de ${charName}`}
                    >
                      {charName}
                    </button>
                  ))}
                </div>
              </div>

              {/* Cómics Esenciales */}
              <div className="saga-section">
                <div className="saga-section-header">
                  <BookOpen size={14} />
                  <span>Ediciones & Números Esenciales:</span>
                </div>
                <ul className="saga-issues-list">
                  {saga.keyIssues.map((issue, idx) => (
                    <li key={idx} className="saga-issue-item">
                      <Award size={12} className="text-red-400" />
                      <span>{issue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>

      {filteredSagas.length === 0 && (
        <div className="sagas-empty">
          <p>No se encontraron eventos ni sagas que coincidan con la búsqueda.</p>
        </div>
      )}
    </div>
  );
};
