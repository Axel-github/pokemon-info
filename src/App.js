import React from "react";
import getPokemons from "./api/getPokemons";
import PokemonDataGrid from "./components/PokemonDataGrid";
// import { getPokemons } from "./api/getPokemons"

function App() {
  const pokemon = {
    name: 'Pikachu',
    url: 'Electric Mouse',
  }

  const pokemons_mock = [pokemon, pokemon, pokemon]

  return (
    <div>

      <PokemonDataGrid pokemons={pokemons_mock} />

    </div>
  );
};

export default App;


// todo layout компонент, в который встраиваются др компоненты 
// API папка, файл с запросом для импорта 
// Axios для запросов 
// компоненты по папкам
// Header 
// src папка -> images; icons 
// модалка: через порталы  
// consts in src отдельным файлом. ИМеновать большими через _ 
// class -> func 



//