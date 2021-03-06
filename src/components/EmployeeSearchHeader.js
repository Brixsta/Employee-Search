import "../css/EmployeeSearchHeader.css";
import EmployeeSearchTitle from "./EmployeeSearchTitle";
import SearchBar from "./SearchBar";
import React from "react";

const Header = (props) => {
  const { updateSearchBarText } = props;
  const { searchBarText } = props;

  return (
    <header className="employee-search-header">
      <EmployeeSearchTitle />
      <SearchBar
        updateSearchBarText={updateSearchBarText}
        updateFiltered={props.updateFiltered}
        searchBarText={searchBarText}
      />
    </header>
  );
};

export default Header;
