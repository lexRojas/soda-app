import React, { useState } from "react";
import Cards from "./Cards";
import Dialog from "./Dialog";

const CardsContent = () => {
  const [DialogoAbierto, setDialogoAbierto] = useState(false);
  const [menu, setMenu] = useState(null);
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
          setMenu={setMenu}
        />
        <Cards
          DialogoAbierto={DialogoAbierto}
          setDialogoAbierto={setDialogoAbierto}
          foto="plato1"
          titulo="Vigorón de costilla ahumada"
          setMenu={setMenu}
        />
        <Cards
          DialogoAbierto={DialogoAbierto}
          setDialogoAbierto={setDialogoAbierto}
          foto="plato2"
          titulo="Rice and Beans"
          setMenu={setMenu}
        />
      </div>
      <Dialog
        DialogoAbierto={DialogoAbierto}
        setDialogoAbierto={setDialogoAbierto}
        menu = {menu}
      />
    </div>
  );
};

export default CardsContent;
