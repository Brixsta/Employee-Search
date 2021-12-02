import React from "react";
import "../css/ProfileHeader.css";

const ProfileHeader = (props) => {
  const { backToEmployeeSearch } = props;
  return (
    <header className="profile-header">
      <button
        onClick={() => {
          backToEmployeeSearch();
        }}
        className="back-to-employee-search-button"
      >
        GO BACK{" "}
      </button>
    </header>
  );
};

export default ProfileHeader;
