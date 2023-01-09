import React from 'react';

import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main.js';
import background from './background.png';
import Animal from './components/Animal/Animal';

function App() {
  return (
    <div className="App">
      <Header />
      <Main className="main" />
      <Footer />
    </div>
  );
}

export default App;
