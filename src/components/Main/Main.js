import React from 'react';
import './Main.css';
import Animal from '../Animal/Animal.js';
import animals from '../../data.js';
import background from '../../background.png';

export default function Main() {
  console.log(animals);
  return (
    <main style={{ backgroundImage: `url('${background}')` }}>
      {animals.map((animal) => (
        <Animal key={animal.name} prop={animal} />
      ))}
      ;
    </main>
  );
}
