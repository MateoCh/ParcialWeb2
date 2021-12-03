import React from 'react';
import logo from './logo.svg';
import './App.css';
import Joke from "./components/joke";
import ListadoPeliculas from './components/listadoPeliculas';

function App() {
  return (
    <div className="App">
      <h1>PWA Sample</h1>
      <ListadoPeliculas />
    </div>
  );
}

export default App;
