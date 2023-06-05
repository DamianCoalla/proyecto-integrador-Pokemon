import React from "react";
import { useState } from "react";
import Pokeball from "/Imagenes/Pokeball.png";
import "./Header.css";
import Arrow from "/Imagenes/Arrow.svg";
export default function Header(props) {
  const [boton, setBoton] = useState(false);

  function handleClick() {
    setBoton(!boton);
  }

  const onClickSorterN = () => {
    props.ordenarNumerico();

    setBoton(!boton);
  };

  const onClickSorterA = () => {
    props.ordenarAlfabetico();

    setBoton(!boton);
  };

  return (
    <div className="contenedor-header">
      <div className="texto-logo">
        <img className="imgPokeball" src={Pokeball} alt="imagen de pokeball" />
        <h1>Pokédex</h1>
      </div>
      <div>
        <form className={boton ? "modal" : "no-modal"}>
          <p className="texto-modal">Sorted by:</p>
          <div className="contenedor-sort">
            <input
              className="input-sort"
              type="radio"
              name="nombre"
              id="nombre"
              onClick={onClickSorterA}
            />
            <label htmlFor="nombre" className="texto-modal">
              Nombre
            </label>
            <br />

            <input
              className="input-sort"
              type="radio"
              name="id"
              id="id"
              onClick={onClickSorterN}
            />
            <label htmlFor="id" className="texto-modal">
              ID
            </label>
          </div>
        </form>
        <button
          onClick={handleClick}
          className={`botonFiltro ${boton && "esconder-boton"}`}
        >
          <span className="numeral">#</span>
          <img className="arrow" src={Arrow} alt="Boton flecha" />
        </button>
      </div>
    </div>
  );
}
