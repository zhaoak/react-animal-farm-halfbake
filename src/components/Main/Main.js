import React from 'react';
import './Main.css';
import Animal from '../Animal/Animal.js';
import animals from '../../data.js';
import background from '../../background.png';

export default function Main() {
  console.log(Animal);
  return (
    <main style={{ backgroundImage: `url('${background}')` }}>
      <Animal prop={animals[1]} />
    </main>
  );
}
