import React from "react";
import PokemonCard from "./PokemonCard";

function PokemonDataGrid(props) {
  // const { pokemons } = props;
  return (
    <div>
      {props.pokemons.map((pokemon) => (
        <PokemonCard pokemon={pokemon} />
      ))}
    </div>
  );
}

export default PokemonDataGrid;