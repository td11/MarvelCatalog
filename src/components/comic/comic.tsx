import React from 'react';

interface Props {
  comic: any;
}

const Comic: React.FC<Props> = ({ comic }) => {
  return (
    <div>
      <h2>{comic.title}</h2>
      <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.title} />
    </div>
  );
};

export default Comic;
