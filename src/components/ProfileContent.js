import React from "react";
import "../css/ProfileContent.css";
import EmployeeMetricsTable from "./EmployeeMetricsTable";

const ProfileContent = (props) => {
  const { targetEmployee } = props;
  const name = targetEmployee.name
    .split(" ")
    .map((i) => i[0].toUpperCase() + i.slice(1))
    .join(" ");
  const photoName = name.split(" ").join("_");

  return (
    <div className="profile-content">
      <div
        style={{ backgroundImage: `url("/images/${photoName}_profile.jpg")` }}
        className="profile-picture"
      ></div>
      <h1>{name}</h1>
      <EmployeeMetricsTable name={name} targetEmployee={targetEmployee} />
    </div>
  );
};

export default ProfileContent;
