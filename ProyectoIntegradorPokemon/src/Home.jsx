import { useState } from "react";
import "./Home.css";
import Header from "./Componentes/Header/Header";
import Browser from "./Componentes/Browser/Browser";
import Visualize from "./Componentes/Visualize/Visualize";
import pokeData from "./PokeData";

function Home() {
  const [pokemones, setPokemones] =
    useState(pokeData); /* Porque es necesario esto? */
  const [pokemonesFiltrados, setPokemonesFiltrados] = useState(pokeData);

  function filtro(searchValue) {
    const filtered = pokemones.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setPokemonesFiltrados(filtered);
  }

  function ordenarNumerico() {
    const sortered = pokemones.sort((a, b) => {
      if (a.id < b.id) {
        return -1;
      }
      if (a.id > b.id) {
        return 1;
      }
      return 0;
    });
    setPokemonesFiltrados([...sortered]);
  }

  function ordenarAlfabetico() {
    const sortered = [...pokemones].sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    console.log(sortered, pokemones);
    setPokemonesFiltrados(sortered);
  }

  return (
    <div className="home">
      <Header
        ordenarNumerico={ordenarNumerico}
        pokemones={pokemonesFiltrados}
        ordenarAlfabetico={ordenarAlfabetico}
      />
      <div className="browsercentrado">
        <Browser filtro={filtro} />
      </div>
      <Visualize pokemones={pokemonesFiltrados} />
    </div>
  );
}

export default Home;
