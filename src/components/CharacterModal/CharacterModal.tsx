import React, { useEffect, useState } from "react";
import { MarvelCharacter } from "../../hooks/useMarvelCharacters";
import { X, Shield, Zap, BookOpen, Film, Heart, Sparkles, Award, Share2, Check, Swords } from "lucide-react";
import './CharacterModal.css';

interface CharacterModalProps {
  character: MarvelCharacter;
  imgSrc: string;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
  onClose: () => void;
  onSelectForArena?: (character: MarvelCharacter) => void;
}

export const CharacterModal: React.FC<CharacterModalProps> = ({
  character,
  imgSrc,
  isFavorite,
  onToggleFavorite,
  onClose,
  onSelectForArena,
}) => {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: `${character.name} | Marvel Universe Archive`,
      text: `Descubre la ficha clasificada de ${character.name} (${character.realName || character.name}) con su Power Grid oficial y cómics clave.`,
      url: window.location.href,
    };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch {
        // Fallback a portapapeles si el usuario canceló
      }
    }
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(`${shareData.title}\n${shareData.text}\n${shareData.url}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };
  // Cerrar modal al presionar Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Evitar scroll del body mientras el modal está abierto
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const statLabels: Record<string, { label: string; icon: string }> = {
    intelligence: { label: "Inteligencia", icon: "🧠" },
    strength: { label: "Fuerza", icon: "💪" },
    speed: { label: "Velocidad", icon: "⚡" },
    durability: { label: "Resistencia", icon: "🛡️" },
    energyProjection: { label: "Energía", icon: "🔮" },
    fightingSkills: { label: "Combate", icon: "⚔️" },
  };

  return (
    <div className="comic-modal-overlay" onClick={onClose}>
      <div
        className="comic-modal-container"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {/* Botón cerrar */}
        <button
          className="comic-modal-close"
          onClick={onClose}
          aria-label="Cerrar modal"
        >
          <X size={20} />
        </button>

        <div className="comic-modal-grid">
          {/* Columna Izquierda: Portada / Póster */}
          <div className="comic-modal-media">
            <div className="comic-modal-img-frame">
              <img
                src={imgSrc}
                alt={character.name}
                className="comic-modal-img"
                onError={(e) => {
                  // Fallback a imagen genérica si falla
                  (e.target as HTMLImageElement).src = '/images/generic_marvel_image.jpg';
                }}
              />
              <div className="comic-stamp">ORIGINAL MARVEL ARCHIVE</div>
            </div>

            {/* Botón de Favorito */}
            <button
              type="button"
              onClick={() => onToggleFavorite(character.id)}
              className={`comic-modal-fav-btn ${isFavorite ? 'fav-active' : ''}`}
            >
              <Heart size={18} className={isFavorite ? 'fill-current' : ''} />
              <span>{isFavorite ? 'En tus Favoritos' : 'Añadir a Favoritos'}</span>
            </button>

            {/* Botón Compartir Ficha */}
            <button
              type="button"
              onClick={handleShare}
              className={`comic-modal-share-btn ${copied ? 'copied-active' : ''}`}
              title="Compartir o copiar enlace de esta ficha"
            >
              {copied ? <Check size={18} className="text-green-400" /> : <Share2 size={18} />}
              <span>{copied ? '¡Ficha Copiada!' : 'Compartir Ficha'}</span>
            </button>

            {/* Llevar a Versus Arena */}
            {onSelectForArena && (
              <button
                type="button"
                onClick={() => {
                  onSelectForArena(character);
                  onClose();
                }}
                className="comic-modal-arena-btn"
                title="Llevar a la arena de combate 1 vs 1"
              >
                <Swords size={18} />
                <span>Llevar a Versus Arena</span>
              </button>
            )}
          </div>

          {/* Columna Derecha: Contenido y Estadísticas */}
          <div className="comic-modal-info">
            {/* Header del personaje */}
            <div className="comic-modal-header">
              <div className="comic-team-badge">
                <Shield size={14} />
                <span>{character.teamLabel || 'Marvel Universe'}</span>
              </div>
              <h2 className="comic-hero-title">{character.name}</h2>
              {character.realName && (
                <p className="comic-real-name">
                  Identidad Secreta: <strong>{character.realName}</strong>
                </p>
              )}
            </div>

            {/* Primera aparición */}
            {character.firstAppearance && (
              <div className="comic-first-appearance">
                <BookOpen size={15} className="text-yellow-400" />
                <span>Primera aparición: <strong>{character.firstAppearance}</strong></span>
              </div>
            )}

            {/* Biografía / Sinopsis */}
            <div className="comic-section">
              <h4 className="comic-section-title">Biografía & Origen</h4>
              <p className="comic-bio-text">{character.biography || character.description}</p>
            </div>

            {/* Official Marvel Power Grid */}
            {character.stats && (
              <div className="comic-section">
                <h4 className="comic-section-title">Power Grid Oficial (1 a 7)</h4>
                <div className="comic-stats-grid">
                  {Object.entries(character.stats).map(([statKey, val]) => {
                    const meta = statLabels[statKey] || { label: statKey, icon: "⭐" };
                    const percentage = Math.min(100, Math.round((val / 7) * 100));
                    return (
                      <div key={statKey} className="comic-stat-row">
                        <div className="comic-stat-label">
                          <span>{meta.icon}</span>
                          <span>{meta.label}</span>
                          <span className="comic-stat-val">{val}/7</span>
                        </div>
                        <div className="comic-stat-bar-bg">
                          <div
                            className="comic-stat-bar-fill"
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Poderes Clave */}
            {character.powers && character.powers.length > 0 && (
              <div className="comic-section">
                <h4 className="comic-section-title">Poderes & Habilidades</h4>
                <div className="comic-powers-pills">
                  {character.powers.map((power, idx) => (
                    <span key={idx} className="comic-power-tag">
                      <Zap size={12} />
                      <span>{power}</span>
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Cómics destacados */}
            {character.notableComics && character.notableComics.length > 0 && (
              <div className="comic-section">
                <h4 className="comic-section-title">Cómics Esenciales</h4>
                <ul className="comic-bullets">
                  {character.notableComics.map((comic, idx) => (
                    <li key={idx}>📖 {comic}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Apariciones cinematográficas MCU */}
            {character.mcuAppearances && character.mcuAppearances.length > 0 && (
              <div className="comic-section">
                <h4 className="comic-section-title">Películas Destacadas</h4>
                <div className="comic-mcu-tags">
                  {character.mcuAppearances.map((movie, idx) => (
                    <span key={idx} className="comic-mcu-tag">
                      <Film size={12} />
                      <span>{movie}</span>
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
