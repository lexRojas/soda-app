import React, { useState } from "react";
import { useForm } from "react-hook-form";


const Dialog = (props) => {
  const { DialogoAbierto, setDialogoAbierto, menu } = props;
  const [contador, setContador] = useState(1);

  const {register, handleSubmit } = useForm();
                   


  function construirMensajeWS(name, address) {
    let texto = "";


    texto = "*DETALLE DE LA ORDEN:* "  ;
    texto += " \n";
    texto += "\t Plato: " + menu + " \n";
    texto += "\t Cantidad: " + contador + " \n";
    texto += "\t Nombre: " + name + " \n";
    texto += "\t Direccion: " + address + " \n";

    return texto;
  }

  

  const cerrar = () => {
    setDialogoAbierto(false);
  };

  const enviar = (data) => {
    const {name, address} = data;
    window.location.href= "https://wa.me/50662058851?text=" + construirMensajeWS(name, address);
    setDialogoAbierto(false);  
  }



  const click_mas = () => {
    let c = contador;
    c++;

    if (c > 20) {
      alert(
        "REvisa tu pedido en caso de requerir más unidades, te recomendamos llamar al proveedor"
      );
    } else {
      setContador(c);
    }
  };

  const click_menos = () => {
    let c = contador;
    c--;

    if (c < 1) {
      alert("No se puede ordenar menos de 1");
    } else {
      setContador(c);
    }
  };

  if (DialogoAbierto) {
    return (
      <div className="dialogo-container">
        <div className="dialogo">
          <div className="dialogo-encabezado">
            <span>Detalle de tu orden</span>
          </div>
          <div >
            <form className="dialogo-cuerpo" >
              <span id="digito">{contador}</span>

              <div onClick={click_mas} id="boton-mas">
                +
              </div>
              <div onClick={click_menos} id="boton-menos">
                -
              </div>

              <input
                id="nombre"
                type="text"
                placeholder="Digite su nombre"
                {...register('name')}
              />
              <input
                id="direccion"
                type="text"
                placeholder="Digite su dirección"
                {...register('address')}
              />
            </form>
          </div>
          <div className="dialogo-botones">
            <button onClick={handleSubmit(enviar)}> Ordenar </button>
            
            
            <button onClick={cerrar}> Cerrar </button>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default Dialog;
