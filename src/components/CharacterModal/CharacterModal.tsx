import React from "react";
import './CharacterModal.css';

export function CharacterModal({ character, imgSrc, onClose }: {
  character: any,
  imgSrc: string,
  onClose: () => void
}) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>{character.name}</h2>
        <img src={imgSrc} alt={character.name} />
        <p>{character.description || "Sin descripción"}</p>
      </div>
    </div>
  );
}
