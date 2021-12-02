import "../css/SearchBar.css";
import React from "react";

const SearchBar = (props) => {
  const { updateFiltered } = props;
  return (
    <div className="search-bar">
      <form
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <input
          placeholder={"Enter employee name"}
          className={"search-bar-input"}
          onChange={(evt) => {
            updateFiltered(evt.target.value);
          }}
          type="text"
        ></input>
      </form>
    </div>
  );
};

export default SearchBar;
