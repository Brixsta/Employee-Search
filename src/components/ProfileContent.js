import React from "react";
import "../css/ProfileContent.css";
import EmployeeMetricsTable from "./EmployeeMetricsTable";

const ProfileContent = () => {
  return (
    <div className="profile-content">
      <div className="profile-picture"></div>
      <h1>EMployee Name</h1>
      <EmployeeMetricsTable />
    </div>
  );
};

export default ProfileContent;
