import video from "../videos/llamas.mp4";

import React from "react";

const Pie = () => {

  return (
    <div className="content-video">
       <video autoPlay muted loop id="background-video" >
        <source src={video} type="video/mp4"  />
      </video> 

      <p>Proyecto Aromas y Sabores &#174;</p>
      <p>Pertenece a:</p>
      <p>Andres Salazar Salazar & Jessica Avila Escalante</p>
      <p>Cariari Pococí Limón</p>
    </div>
  );
};

export default Pie;
