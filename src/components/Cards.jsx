import React, { useState } from "react";
import Dialog from "./Dialog";


const platosID = require.context('../images/platos',true); 




const Cards = (props) => {
  const [visible, setVisible] = useState(false)

  const vermas = () =>{
    setVisible(!visible)
    console.log(visible)
  
  }
  
  const {foto , titulo} = props


    console.log(foto)
    console.log(`./${foto}.png`)
    console.log(platosID)
    return (
    <div className="card">
        <p className="cardHeading">{titulo} </p>
        <img src={platosID(`./${foto}.png`)} alt={foto} />
        <button 
          className="acceptButton" 
          onClick={vermas}
        >Ver mas</button>

        {visible?<Dialog/>:<></>}


      </div>
  );
};

export default Cards;
