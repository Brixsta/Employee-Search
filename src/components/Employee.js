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
  const { grabEmployeeData } = props;
  const { id } = props;

  return (
    <li
      onClick={(evt) => {
        displayEmployeesProfile();
        grabEmployeeData(evt);
      }}
      className="employee-list-item"
      id={id}
    >
      <Avatar id={id} name={props.name} />
      <span id={id} className={"employee-name"}>
        {name}
      </span>
      <span id={id} className={"employee-title"}>
        {title}
      </span>
    </li>
  );
};

export default Employee;
