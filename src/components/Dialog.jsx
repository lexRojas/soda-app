import React from "react";

const Dialog = (props) => {

const {DialogoAbierto , setDialogoAbierto} = props;

const cerrar = () => {
  setDialogoAbierto(false)
}



 if (DialogoAbierto) {
   return (
    <div className="dialogo-container">
      <div className="dialogo">
        <h1>Titulo</h1>
        <p>FFk geqlrgrlo r gerggergekrgeg</p>
        <p>FFk geqlrgrlo r gerggergekrgeg</p>
        <p>FFk geqlrgrlo r gerggergekrgeg</p>
        <p>FFk geqlrgrlo r gerggergekrgeg</p>
        <p>FFk geqlrgrlo r gerggergekrgeg</p>
        <p>FFk geqlrgrlo r gerggergekrgeg</p>
        <p>FFk geqlrgrlo r gerggergekrgeg</p>
        <div>
        <button onClick={cerrar}> Cerrar </button>
      </div>
      </div>
      
    </div>
  );
}else{
  return (
    <></>
  );
}

};

export default Dialog;
