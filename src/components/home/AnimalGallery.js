import React from 'react';
import AnimalCard from './AnimalCard';

const AnimalGallery = ({ animals }) => (
  <div style={{display:"flex",gap:30,padding: 30,flexWrap:"wrap",}}>
    {animals.map(animal => (
      <AnimalCard key={animal.id} animal={animal} />
    ))}
  </div>
);

export default AnimalGallery;
