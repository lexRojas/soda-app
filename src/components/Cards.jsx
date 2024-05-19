import React from "react";
import plato from '../images/plato1.png'


const Cards = () => {
  return (
    <div className="card">
        <p class="cardHeading">Bigoron de costilla ahumada </p>
        <img src={plato} alt="plato 1" />
        <button class="acceptButton">Ver mas</button>
      </div>
  );
};

export default Cards;
