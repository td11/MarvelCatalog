import { useEffect, useState } from "react";

// read the API endpoint from Vite env var, with a sensible default for local dev
const BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3001/api/characters";

export interface MarvelCharacter {
  id: number;
  name: string;
  description?: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  comicCover?: string;
}

export function useMarvelCharacters(nameStartsWith?: string, limit: number = 3, offset: number = 0) {
  const [characters, setCharacters] = useState<MarvelCharacter[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);

    const url = new URL(BASE_URL);
    url.searchParams.append('limit', limit.toString());
    url.searchParams.append('offset', offset.toString());
    if (nameStartsWith) url.searchParams.append('nameStartsWith', nameStartsWith);

    fetch(url.toString())
      .then(res => {
        if (!res.ok) throw new Error('Error fetching characters');
        return res.json();
      })
      .then(data => {
        setCharacters(data.data.results);
        setLoading(false);
      })
      .catch(() => {
        setCharacters([]);
        setLoading(false);
      });

  }, [nameStartsWith, limit, offset]);

  return { characters, loading };
}
