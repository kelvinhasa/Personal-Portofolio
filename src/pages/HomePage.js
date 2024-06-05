import React, { useState, useEffect } from 'react';
import AnimalGallery from '../components/AnimalGallery';
import axios from 'axios';

const HomePage = () => {
  const [animals, setAnimals] = useState([]);
  const [type, setType] = useState('dogs');

  useEffect(() => {
    axios.get(`https://freetestapi.com/api/v1/${type}`)
      .then(response => setAnimals(response.data))
      .catch(error => console.error(error));
  }, [type]);

  return (
    <div>
      <h1>Welcome to PET EXPO</h1>
      <div>
        <button onClick={() => setType('dogs')}>Dogs</button>
        <button onClick={() => setType('cats')}>Cats</button>
        <button onClick={() => setType('birds')}>Birds</button>
      </div>
      <AnimalGallery animals={animals} />
    </div>
  );
};

export default HomePage;
