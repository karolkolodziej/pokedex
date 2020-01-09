import React from "react";
import { connect } from "react-redux";

import { fetchSinglePokemonAction } from "../actions/fetchSinglePokemonAction";
import { PokemonDetailsElement } from "./PokemonDetailsElement";
import { imageAPI } from "../constants/constatns";
import "./PokemonDetails.css";

class PokemonDetails extends React.Component {
  typeChecker() {}

  displayHelper() {
    if (this.props.pokemonDetail === null) {
      return "Please select POKEMON";
    } else {
      if (this.props.pokemonDetail.data.types[1] !== undefined) {
        let type = this.props.pokemonDetail.data.types[1].type.name;
        console.log(type);
      }
      return (
        <PokemonDetailsElement
          image={`${imageAPI}${this.props.pokemonDetail.data.id}.png`}
          name={this.props.pokemonDetail.data.forms[0].name}
          number={this.props.pokemonDetail.data.id}
          type1={this.props.pokemonDetail.data.types[0].type.name}
          weight={this.props.pokemonDetail.data.weight}
          height={this.props.pokemonDetail.data.height}
        />
      );
    }
  }

  render() {
    return (
      <div className="pokeDetail">
        <div>{this.displayHelper()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, {
  fetchSinglePokemonAction
})(PokemonDetails);
