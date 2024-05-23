import React from "react";


const platosID = require.context('../images/platos',true); 



const Cards = (props) => {

  const {foto } = props


    console.log(foto)
    console.log(`./${foto}.png`)
    console.log(platosID)
    return (
    <div className="card">
        <p className="cardHeading">Vigorón de costilla ahumada </p>
        <img src={platosID(`./${foto}.png`)} alt={foto} />
        <button className="acceptButton">Ver mas</button>
      </div>
  );
};

export default Cards;
