import React from "react";

const Dialog = (props) => {

const {DialogoAbierto } = props;

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
        <button> Cerrar </button>
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
