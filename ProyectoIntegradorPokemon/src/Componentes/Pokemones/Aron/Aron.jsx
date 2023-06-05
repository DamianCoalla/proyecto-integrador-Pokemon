import React from "react";
import "./Aron.css";
import flechita from "/Imagenes/arrow-left.svg";
import pokeData from "../../../PokeData";
import { Link, useParams } from "react-router-dom";
import Weight from "/Imagenes/Weight.svg";
import height from "/Imagenes/Height.svg";

function Aron() {
  const { id } = useParams();
  const pokemon = pokeData.find((pokemon) => pokemon.id === id);

  return (
    <div className={`tarjeta bg-${pokemon.types[0]}`} id={pokemon.types[0]}>
      <header className="header-container">
        <div className="bloque1">
          <Link to={"/"}>
            <button className="boton-flecha">
              <img src={flechita} alt="" />
            </button>
          </Link>
          <h2 className="nombre-pokemon">{pokemon.name}</h2>
        </div>

        <div className="bloque2">
          <p className="pokemon-id">#{pokemon.id}</p>
        </div>
      </header>
      <div className="background-imagen"></div>
      <img
        className="imagen-pokemon"
        src={pokemon.imagen}
        alt="imagen pokemon"
      />

      <main className="main-container">
        <section className="tipos">
          <div className={`texto tipoContenedor bg-${pokemon.types[0]}`}>
            {" "}
            {pokemon.types[0]}
          </div>
          {pokemon.types[1] ? (
            <div className={`texto tipoContenedor bg-${pokemon.types[1]}`}>
              {pokemon.types[1]}
            </div>
          ) : null}
        </section>

        {/* About */}

        <section className="aboutContenedor">
          <h4 className="about">About</h4>

          {/* div1 */}

          <div className="weight abaoutContenedor_divs">
            <img src={Weight} alt="" />
            <div className="texto">{pokemon.weight}</div>
          </div>
          <span className="texto1 weight-texto">Weight</span>

          {/* div2 */}

          <div className="height abaoutContenedor_divs ">
            <img src={height} alt="" />
            <div className="texto">{pokemon.height}</div>
          </div>
          <span className="texto1 height-texto">Height</span>

          {/* div3 */}

          <div className="moves abaoutContenedor_divs">
            <p className="texto">
              {pokemon.abilities[0]} {pokemon.abilities[1]}
            </p>
          </div>
          <span className="texto1 moves-texto"> Moves</span>
        </section>

        {/* Fin de about */}

        {/* Pokemon descripcion */}
        <article className="articulo-descripcion">
          <p className="texto">{pokemon.description}</p>
        </article>

        {/* Base Stats */}

        <section className="section-stats">
          <h2 className="titulo-stats">Base Stats</h2>

          <div>
            {/* Div HP */}
            <div className="stats-flex">
              <p className="texto-atributo cajatexto">HP</p>
              <p className="texto">{pokemon.stats.HP}</p>
              <progress
                className="progreso"
                value={pokemon.stats.HP}
                max="200"
              ></progress>
            </div>

            {/* Div ATK */}

            <div className="stats-flex">
              <p className="texto-atributo cajatexto">ATK</p>
              <p className="texto">{pokemon.stats.ATK}</p>
              <progress
                className="progreso"
                value={pokemon.stats.ATK}
                max="200"
              ></progress>
            </div>

            {/* Div DEF */}

            <div className="stats-flex">
              <p className="texto-atributo cajatexto">DEF</p>
              <p className="texto">{pokemon.stats.DEF}</p>
              <progress
                className="progreso"
                value={pokemon.stats.DEF}
                max="200"
              ></progress>
            </div>

            {/* Div SATK */}

            <div className="stats-flex">
              <p className="texto-atributo cajatexto">SATK</p>
              <p className="texto">{pokemon.stats.SATK}</p>
              <progress
                className="progreso"
                value={pokemon.stats.SATK}
                max="200"
              ></progress>
            </div>

            {/* Div SDEF */}

            <div className="stats-flex">
              <p className="texto-atributo cajatexto">SDEF</p>
              <p className="texto">{pokemon.stats.SDEF}</p>
              <progress
                className="progreso"
                value={pokemon.stats.SDEF}
                max="200"
              ></progress>
            </div>

            {/* Div SPD */}

            <div className="stats-flex">
              <p className="texto-atributo cajatexto">SPD</p>
              <p className="texto">{pokemon.stats.SPD}</p>
              <progress
                className="progreso"
                value={pokemon.stats.SPD}
                max="200"
              ></progress>
            </div>
          </div>
          <div className="stats"></div>
        </section>
      </main>
    </div>
  );
}

export default Aron;
