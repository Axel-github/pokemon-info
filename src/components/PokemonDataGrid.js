import React, { useState } from "react";
import PokemonCard from "./PokemonCard";

function PokemonDataGrid(props) {
  const [pokemons, setPokemons] = useState(props.pokemons);

  return (
    <div>
      {pokemons.map((pokemon) => (
        <PokemonCard pokemon={pokemon} />
      ))}
    </div>
  );
}

export default PokemonDataGrid;
