import React, { useState } from "react";

export const Search = ({ onSearchValue }) => {
  const [searchInput, setsearchInput] = useState("");
  const inputhandler = (val) => {
    onSearchValue(val);
    setsearchInput(val);
  };
  return (
    <input
      type="text"
      className="form-control"
      value={searchInput}
      onChange={(e) => inputhandler(e.target.value)}
      placeholder="Search Here"
    />
  );
};
