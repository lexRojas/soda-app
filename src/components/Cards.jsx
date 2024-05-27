import React from "react";


const platosID = require.context('../images/platos',true); 




const Cards = (props) => {


  const vermas = () =>{

    if(!DialogoAbierto){
      setDialogoAbierto(true);  
    }
  }
  
  const { DialogoAbierto,setDialogoAbierto, foto , titulo, plato_del_dia} = props


    console.log(foto)
    console.log(`./${foto}.png`)
    console.log(platosID)
    return (
    <div className="card">
        <p className="cardHeading">{titulo} </p>
        {plato_del_dia? <p className="cardSubHeading">PLATO DEL DIA </p>:<></>}
        <img src={platosID(`./${foto}.png`)} alt={foto} />
        <button 
          className="acceptButton" 
          onClick={vermas}
        >Ver mas</button>
      </div>
  );
};

export default Cards;
