import React from "react";


const platosID = require.context('../images/platos',true); 




const Cards = (props) => {

  const { DialogoAbierto,setDialogoAbierto,setMenu, foto , titulo, plato_del_dia} = props

  const vermas = () =>{

    if(!DialogoAbierto){
      setDialogoAbierto(true);  
      setMenu(titulo);
    }
  }
  
  



    return (
    <div className="card">
        <p className="cardHeading">{titulo} </p>
        {plato_del_dia? <p className="cardSubHeading">PLATO DEL DIA </p>:<></>}
        <img src={platosID(`./${foto}.png`)} alt={foto} />
        <button 
          className="acceptButton" 
          onClick={vermas}
        >Ordenar</button>
      </div>
  );
};

export default Cards;
