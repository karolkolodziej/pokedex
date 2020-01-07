import React from "react";

export const SearchBar = () => {
  return (
    <div className="ui icon input">
      <input type="text" placeholder="Search..." />
      <i className="inverted circular search link icon" />
    </div>
  );
};
