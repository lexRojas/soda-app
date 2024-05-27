import React, { useState } from "react";
import Cards from "./Cards";
import Dialog from "./Dialog";

const CardsContent = () => {
  const [DialogoAbierto, setDialogoAbierto] = useState(false);

  return (
    <div>
      <p>Menu del día</p>
      <div className="card-content">
        <Cards
          DialogoAbierto={DialogoAbierto}
          setDialogoAbierto={setDialogoAbierto}
          foto="plato3"
          titulo="Cevice Pescado o Mixto-Camarón"
          plato_del_dia
        />
        <Cards
          DialogoAbierto={DialogoAbierto}
          setDialogoAbierto={setDialogoAbierto}
          foto="plato1"
          titulo="Vigorón de costilla ahumada"
        />
        <Cards
          DialogoAbierto={DialogoAbierto}
          setDialogoAbierto={setDialogoAbierto}
          foto="plato2"
          titulo="Rice and Beans"
        />
      </div>
      <Dialog
        DialogoAbierto={DialogoAbierto}
        setDialogoAbierto={setDialogoAbierto}
      />
    </div>
  );
};

export default CardsContent;
