import React from "react";

export const PokemonDetailsElement = props => {
  const { name, image, number, type1, type2, weight, height } = props;
  return (
    <div>
      <div className="ui card">
        <div className="image">
          <img src={image} alt="" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
          <div className="meta">
            <span className="date">Number: {number}</span>
          </div>
          <div className="description">
            Type: {type1} {type2}
          </div>
        </div>
        <div className="extra content">
          <div className="user icon"></div>
          Weight: {weight} Height: {height}
        </div>
      </div>
    </div>
  );
};
