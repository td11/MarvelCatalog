import React, { useState, useEffect, useRef } from "react";
import { useMarvelCharacters, MarvelCharacter } from "../../hooks/useMarvelCharacters";
import { MarvelImage } from "../MarvelImage/MarvelImage";
import { CharacterModal } from "../CharacterModal/CharacterModal";
import './MarvelCatalog.css';

export function MarvelCatalog() {
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(0);
  const [characters, setCharacters] = useState<MarvelCharacter[]>([]);
  const [selectedCharacter, setSelectedCharacter] = useState<MarvelCharacter | null>(null);
  const loadingRef = useRef(false);
  const limit = 6; // Haz los cards más grandes y muestra más en cada scroll
  const carouselContainerRef = useRef<HTMLDivElement>(null);

  // Fetch inicial y por scroll
  const { characters: fetched, loading } = useMarvelCharacters(search, limit, page * limit);

  useEffect(() => {
    if (page === 0) {
      setCharacters(fetched);
    } else {
      setCharacters(prev => [...prev, ...fetched]);
    }
    loadingRef.current = false;
  }, [fetched, page]);

  // Infinite scroll event en carousel-container
  useEffect(() => {
    const container = carouselContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      if (loadingRef.current) return;
      // Carga más cuando el usuario está al final
      if (container.scrollLeft + container.offsetWidth >= container.scrollWidth - 30) {
        loadingRef.current = true;
        setPage(prev => prev + 1);
      }
    };
    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setPage(0);
  };

  // URL dinámica para imagen
  const getImgSrc = (char: MarvelCharacter) =>
    char.comicCover
      ? `${window.location.protocol}//${window.location.hostname === '127.0.0.1' ? 'localhost' : window.location.hostname}:3001${char.comicCover}`
      : `${char.thumbnail.path}.${char.thumbnail.extension}`;

  return (
    <div className="main-content">
      <div className="catalog-header">
        <input
          type="text"
          className="search-bar"
          placeholder="Buscar personajes..."
          value={search}
          onChange={handleSearchChange}
        />
      </div>

      <div className="carousel-container" ref={carouselContainerRef}>
        {loading && page === 0 ? <p>Cargando...</p> : (
          characters.length === 0
            ? <p>No se encontraron personajes</p>
            : (
              <ul className="carousel-list">
                {characters.map((char: MarvelCharacter) => {
                  const imgSrc = getImgSrc(char);
                  const desc = char.description || "Sin descripción";
                  const showMore = desc.length > 100;
                  return (
                    <li key={char.id} className="carousel-card" onClick={() => setSelectedCharacter(char)}>
                      <MarvelImage src={imgSrc} alt={char.name} width={180} />
                      <h3>{char.name}</h3>
                      <p>
                        {/* {showMore ? desc.slice(0, 98) + '...' : desc} */}
                        {showMore && (
                          <button className="show-more-btn" onClick={e => { e.stopPropagation(); setSelectedCharacter(char); }}>
                            Mostrar más
                          </button>
                        )}
                      </p>
                    </li>
                  );
                })}
              </ul>
            )
        )}
      </div>

      {selectedCharacter && (
        <CharacterModal
          character={selectedCharacter}
          imgSrc={getImgSrc(selectedCharacter)}
          onClose={() => setSelectedCharacter(null)}
        />
      )}
    </div>
  );
}
