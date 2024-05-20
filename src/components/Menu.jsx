import React from "react";

let textoWS = 'Para ordenar el plato del día, por favor '
let hreftWS = "https://wa.me/50662058851?text="+ textoWS 

const Menu = () => {
  return (
    <div>
      <div class="button">
        {/* <span>Ordenar !</span>         */}
        <a className="span-text" href={hreftWS}   target="_blank" rel="noreferrer"> Ordenar Plato del día !</a>

      </div>
    </div>
  );
};

export default Menu;
