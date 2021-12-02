import "../css/EmployeeSearchHeader.css";
import EmployeeSearchTitle from "./EmployeeSearchTitle";
import SearchBar from "./SearchBar";
import React from "react";

const Header = (props) => {
  return (
    <header className="employee-search-header">
      <EmployeeSearchTitle />
      <SearchBar updateFiltered={props.updateFiltered} />
    </header>
  );
};

export default Header;
