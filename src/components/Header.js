import React from "react";
import "./Header.css";

export const Header = () => {
  return (
    <div className="headerLogo">
      <h2 className="ui header">
        <img src={require("../images/pokeLogo.png")} />
        <div className="content">
          Pokedex
          <div className="sub header">Cach them all</div>
        </div>
      </h2>
    </div>
  );
};
