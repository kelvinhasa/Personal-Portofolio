import React from 'react';
import AnimalCard from './AnimalCard';

const AnimalGallery = ({ animals }) => (
  <div style={{display:"flex",gap:2,flexWrap:"wrap",}}>
    {animals.map(animal => (
      <AnimalCard key={animal.id} animal={animal} />
    ))}
  </div>
);

export default AnimalGallery;
