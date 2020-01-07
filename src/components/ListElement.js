import React from "react";

export const ListElement = props => {
  const { name, image } = props;
  return (
    <div className="ui middle aligned selection list">
      <div className="item">
        <img className="ui avatar image" src={image} alt={name} />
        <div className="content">
          <div className="header">{name}</div>
        </div>
      </div>
    </div>
  );
};
