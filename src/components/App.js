import React from "react";

import PokeList from "./PokeList";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <div className="ui segment">
          <div className="ui two column very relaxed ">
            <PokeList />
          </div>
        </div>
        <div className="ui segment">
          <div className="ui two column very relaxed ">poke details</div>
        </div>
      </div>
    );
  }
}
