import React from "react";
import "./Browser.css";
import Search from "/Imagenes/Search.svg";

function Browser(props) {
  const search = (event) => {
    props.filtro(event.target.value);
  };

  return (
    <div className="browserContainer">
      <img className="lupa" src={Search} alt="" />
      <input
        className="barraBusqueda"
        type="search"
        placeholder="Buscar..."
        onChange={search}
      />
    </div>
  );
}

export default Browser;
