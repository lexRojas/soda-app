import React from "react";

let textoWS = 'Por favor deseo ordenar el vigoron '
let hreftWS = "https://wa.me/50685326755?text="+ textoWS 

const Menu = () => {
  return (
    <div>
      <div class="button">
        {/* <span>Ordenar !</span>         */}
        <a href={hreftWS}   target="_blank" rel="noreferrer"> Ordenar !</a>

      </div>
    </div>
  );
};

export default Menu;
