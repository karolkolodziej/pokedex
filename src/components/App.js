import React from "react";

import PokeList from "./PokeList";
import PokemonDetails from "./PokemonDetails";
import { Header } from "./Header";

import "./App.css";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <div className="headerLogo">
          <Header />
        </div>
        <div className="body">
          <PokeList />
          <PokemonDetails />
        </div>
      </div>
    );
  }
}
