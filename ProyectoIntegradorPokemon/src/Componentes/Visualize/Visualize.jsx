import React from "react";
import "./Visualize.css";
import { Link } from "react-router-dom";

function Visualize(props) {
  return (
    <div className="visualize-container">
      {props.pokemones.map((unPoke) => {
        return (
          <Link to={`/${unPoke.id}`} className="decorationjuiira">
            <div className="cardgrid" id={unPoke.types[0]}>
              <p className="idCard">#{unPoke.id}</p>
              <img src={unPoke.imagen} alt={unPoke.name} />
              <div className={`bg-${unPoke.types[0]}`}>
                <p className="nameCard" id="nombre-pokemon">
                  {unPoke.name}
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Visualize;
