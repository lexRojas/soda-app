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
        <div className="dialogo-encabezado">
          <span>Detalle de tu orden</span>
        </div>
        <div className="dialogo-cuerpo">

                <span id="digito">0</span>

                <button id='boton-mas'>+</button>
                <button id='boton-menos'>-</button>

                <input id='nombre' type="text" placeholder="Digite su nombre"/>
                <input id='direccion' type="text" placeholder="Digite su dirección"/>

        </div>
        <div className="dialogo-botones">
        <button onClick={cerrar}> Ordenar </button>
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
