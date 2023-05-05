import React from "react";
import PokemonCard from "./components/PokemonCard";
import PokemonDataGrid from "./components/PokemonDataGrid";
import { Pokemon } from "./models/Pokemon";
function App() {
  const bulba = new Pokemon("Bulbasaur", "A strange seed was planted on its back at birth.");
  const pikachu = new Pokemon("Pikachu", "Электрическая мышь")

  const pokemons = [bulba, pikachu, pikachu, pikachu, pikachu]
  // const pokemonList = [
  //   { name: "Bulba" },
  //   { name: "Picachu" },

  // ];


  return (
    <div>
      <PokemonDataGrid pokemons={pokemons} />

    </div>
  );
};

// todo layout компонент, в который встраиваются др компоненты 
// API папка, файл с запросом для импорта 
// Axios для запросов 
// компоненты по папкам
// Header 
// src папка -> images; icons 
// модалка: через порталы  
// consts in src отдельным файлом. ИМеновать большими через _ 
// class -> func 

export default App;
