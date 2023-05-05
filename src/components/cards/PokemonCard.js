//компонент, который отрисовывает инфу про покемонов

import React from "react";




function PokemonCard(props) {
  const [name, setName] = React.useState(props.pokemon.name);

  const handleInputChange = (event) => {
    setName(event.target.value);
  }  //обновляет значение переменной "name", чтобы соответствовать тому, что ввел пользователь.

  return (
    <div>
      <h2>{name}</h2>
      <input type="text" value={name} onChange={handleInputChange} />
      <p>{props.pokemon.description}</p>
    </div>
  );
}

export default PokemonCard;




//input, который изменяет name 

//todo Карточка должна выводить информацию об объекте Pokemon. Необходимо создать класс Pokemon и в нем описать name и description

