import React from "react";
import { connect } from "react-redux";

import { ListElement } from "./ListElement";
import { fetchListAction } from "../actions/fetchListAction";
import { SearchBar } from "./SearchBar";

class PokeList extends React.Component {
  componentDidMount() {
    this.props.fetchListAction();
  }

  renderList() {
    return this.props.pokeList.map(element => {
      let number = element.url.split("/")[6];

      return (
        <div key={number}>
          <ListElement
            name={element.name}
            key={number}
            image={`https://pokeres.bastionbot.org/images/pokemon/${number}.png`}
          />
        </div>
      );
    });
  }

  render() {
    console.log(this.props);
    return (
      <div className="ui placeholder segment">
        <SearchBar />
        <div>{this.renderList()} </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { pokeList: state.pokeList };
};

export default connect(mapStateToProps, { fetchListAction })(PokeList);
