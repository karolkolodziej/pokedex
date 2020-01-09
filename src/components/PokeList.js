import React from "react";
import { connect } from "react-redux";

import { imageAPI } from "../constants/constatns";
import { ListElement } from "./ListElement";
import { fetchListAction } from "../actions/fetchListAction";
import { fetchSinglePokemonAction } from "../actions/fetchSinglePokemonAction";
import "./PokeList.css";

class PokeList extends React.Component {
  componentDidMount() {
    this.props.fetchListAction();
  }

  renderList() {
    return this.props.pokeList.map(element => {
      let number = element.url.split("/")[6];

      return (
        <div
          onClick={() => this.props.fetchSinglePokemonAction(number)}
          key={number}
        >
          <ListElement
            name={element.name}
            key={number}
            image={`${imageAPI}${number}.png`}
          />
        </div>
      );
    });
  }

  render() {
    return (
      <div className="pokeList">
        <div className="ui placeholder segment">
          <div>{this.renderList()} </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    pokeList: state.pokeList,
    pokemonDetail: state.pokemonDetail
  };
};

export default connect(mapStateToProps, {
  fetchListAction,

  fetchSinglePokemonAction
})(PokeList);
