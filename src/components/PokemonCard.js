import React from "react";




function PokemonCard(props) {
  const pokemon = props.pokemon;
  return (
    <div>
      <h2>{pokemon.name}</h2>
      <p>{pokemon.description}</p>
    </div>
  );
}

export default PokemonCard;




//todo Карточка должна выводить информацию об объекте Pokemon. Необходимо создать класс Pokemon и в нем описать name и description

