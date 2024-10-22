import React from 'react';

function ComicList({ comics }) {
  return (
    <ul>
      {comics.map(comic => (
        <li key={comic.id}>
          <h2>{comic.title}</h2>
          <p>{comic.description}</p>
        </li>
      ))}
    </ul>
  );
}

export default ComicList;
