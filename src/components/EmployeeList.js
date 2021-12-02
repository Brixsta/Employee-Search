import { v4 as uuidv4 } from "uuid";
import Employee from "./Employee";
import "../css/EmployeeList.css";
import React from "react";

const EmployeeList = (props) => {
  const { employees } = props;
  const { filtered } = props;
  const { displayEmployeesProfile } = props;

  employees.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    } else {
      return -1;
    }
  });

  return (
    <ul className={"employee-list"}>
      {filtered === null
        ? employees.map((person) => {
            return (
              <Employee
                name={person.name}
                title={person.title}
                avatar={person.avatar}
                displayEmployeesProfile={displayEmployeesProfile}
                key={uuidv4()}
              />
            );
          })
        : filtered.map((person) => {
            return (
              <Employee
                name={person.name}
                title={person.title}
                avatar={person.avatar}
                displayEmployeesProfile={displayEmployeesProfile}
                key={uuidv4()}
              />
            );
          })}
    </ul>
  );
};

export default EmployeeList;
