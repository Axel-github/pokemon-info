//компонент, который отрисовывает инфу про покемонов

import React from "react";
import "./PokemonCard.css"




function PokemonCard(props) {
  const pokemon = props.pokemon;
  return (
    <div>
      <h2>{pokemon.name}</h2>
      <p>{pokemon.url}</p>
    </div>
  );
}

export default PokemonCard;

// const PokemonCard = ({ id, name, imageUrl }) => (
//   <div className="pokemon-card">
//     <div className="pokemon-image-container">
//       <img src={imageUrl} alt={name} />
//     </div>
//     <div className="pokemon-info">
//       <div className="pokemon-id">#{id}</div>
//       <div className="pokemon-name">{name}</div>
//     </div>
//   </div>
// );





