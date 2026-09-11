import { useEffect, useState, useMemo } from "react";
import { MARVEL_CHARACTERS_DATA, MarvelCharacter, MarvelTeam } from "../data/marvelCharacters";

export type { MarvelCharacter, MarvelTeam, MarvelPowerGrid } from "../data/marvelCharacters";

export function useMarvelCharacters(
  searchQuery: string = "",
  selectedTeam: MarvelTeam | 'all' = 'all',
  limit: number = 20,
  offset: number = 0
) {
  const [characters, setCharacters] = useState<MarvelCharacter[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  // Filtrado reactivo de alta velocidad sobre el catálogo
  const filteredData = useMemo(() => {
    let result = MARVEL_CHARACTERS_DATA;

    // Filtro por bando / equipo
    if (selectedTeam !== 'all') {
      result = result.filter(char => char.team === selectedTeam);
    }

    // Filtro por búsqueda de texto (nombre, identidad secreta o poderes)
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(char =>
        char.name.toLowerCase().includes(q) ||
        char.realName.toLowerCase().includes(q) ||
        char.description.toLowerCase().includes(q) ||
        char.powers.some(p => p.toLowerCase().includes(q))
      );
    }

    return result;
  }, [searchQuery, selectedTeam]);

  useEffect(() => {
    setLoading(true);

    const apiBase = import.meta.env.VITE_API_BASE;

    // Si se especifica una API externa personalizada, se intenta consultar
    if (apiBase) {
      const url = new URL(`${apiBase}/api/characters`);
      url.searchParams.append('limit', limit.toString());
      url.searchParams.append('offset', offset.toString());
      if (searchQuery) url.searchParams.append('nameStartsWith', searchQuery);

      fetch(url.toString())
        .then(res => {
          if (!res.ok) throw new Error('Error fetching characters');
          return res.json();
        })
        .then(data => {
          if (data?.data?.results?.length > 0) {
            setCharacters(data.data.results);
            setTotalCount(data.data.total || data.data.results.length);
          } else {
            // Fallback elegante a datos locales
            applyLocalData();
          }
          setLoading(false);
        })
        .catch(() => {
          // Fallback a catálogo local en caso de error de red o servidor caído
          applyLocalData();
          setLoading(false);
        });
    } else {
      // Funcionamiento 100% autónomo y offline
      applyLocalData();
      setLoading(false);
    }

    function applyLocalData() {
      setTotalCount(filteredData.length);
      const paginated = filteredData.slice(offset, offset + limit);
      setCharacters(paginated);
    }
  }, [searchQuery, selectedTeam, limit, offset, filteredData]);

  return { characters, totalCount, loading };
}
