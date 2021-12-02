import "../css/Employee.css";
import Avatar from "./Avatar";
import React from "react";

const Employee = (props) => {
  // capitalize first letter of firstName and first letter of lastName
  const name = props.name
    .split(" ")
    .map((i) => i[0].toUpperCase() + i.slice(1))
    .join(" ");

  const { title } = props;
  const { displayEmployeesProfile } = props;

  return (
    <li onClick={displayEmployeesProfile} className="employee-list-item">
      <Avatar name={props.name} />
      <span className={"employee-name"}>{name}</span>
      <span className={"employee-title"}>{title}</span>
    </li>
  );
};

export default Employee;
