// src/components/home/home.tsx

import React, { useState, useEffect } from 'react';
import marvelApi  from '../../utils/marvelApi';
import { Comic } from '../../types/marvelTypes';

const Home: React.FC = () => {
  const [comics, setComics] = useState<any>([]);

  useEffect(() => {
    const fetchComics = async () => {
      try {
        const fetchedComics = await marvelApi.getComics();
        setComics(fetchedComics);
      } catch (error) {
        console.error('Error fetching comics:', error);
      }
    };

    fetchComics();
  }, []);

  return (
    <div>
      <h1>Marvel Comics Catalog</h1>
      {comics.map((comic:Comic) => (
        <div key={comic.id}>
          <h2>{comic.title}</h2>
          <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.title} />
        </div>
      ))}
    </div>
  );
};

export default Home;
