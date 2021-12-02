import "../css/SearchBar.css";
import React from "react";

const SearchBar = (props) => {
  const { updateFiltered } = props;
  const { updateSearchBarText } = props;
  const { searchBarText } = props;

  return (
    <div className="search-bar">
      <form
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <input
          value={searchBarText}
          placeholder={"Enter employee name"}
          className={"search-bar-input"}
          onChange={(evt) => {
            updateFiltered(evt.target.value);
            updateSearchBarText(evt.target.value);
          }}
          type="text"
        ></input>
      </form>
    </div>
  );
};

export default SearchBar;
