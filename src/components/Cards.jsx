import React, { useState } from "react";



const platosID = require.context('../images/platos',true); 




const Cards = (props) => {
  const [visible, setVisible] = useState(false)

// eslint-disable-next-line
  const vermas = () =>{
    setVisible(!visible)
    console.log(visible)
  
  }
  
  const {foto , titulo, plato_del_dia} = props


    console.log(foto)
    console.log(`./${foto}.png`)
    console.log(platosID)
    return (
    <div className="card">
        <p className="cardHeading">{titulo} </p>
        {plato_del_dia? <p className="cardSubHeading">PLATO DEL DIA </p>:<></>}
        <img src={platosID(`./${foto}.png`)} alt={foto} />
        {/* <button 
          className="acceptButton" 
          onClick={vermas}
        >Ver mas</button>

        {visible?<Dialog/>:<></>} */}


      </div>
  );
};

export default Cards;
