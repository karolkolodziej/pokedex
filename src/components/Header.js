import React from "react";
import "./Header.css";

export const Header = () => {
  return (
    <div className="headerLogo">
      <h2 class="ui header">
        <img src={require("../images/pokeLogo.png")} />
        <div class="content">
          Pokedex
          <div class="sub header">Cach them all</div>
        </div>
      </h2>
    </div>
  );
};
