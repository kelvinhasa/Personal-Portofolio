import React, { useState, useEffect } from 'react';
import AnimalGallery from '../components/home/AnimalGallery';
import axios from 'axios';
import '../components/home/HomePage.css';

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
      <h1>PET EXPO</h1>
      <img src='/pets-img.jpg' width={350} height={300}/>
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
