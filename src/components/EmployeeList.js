import Employee from "./Employee";
import "../css/EmployeeList.css";
import React from "react";

const EmployeeList = (props) => {
  const { employees } = props;
  const { filtered } = props;
  const { displayEmployeesProfile } = props;
  const { grabEmployeeData } = props;

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
                displayEmployeesProfile={displayEmployeesProfile}
                grabEmployeeData={grabEmployeeData}
                id={person.id}
                key={person.id}
              />
            );
          })
        : filtered.map((person) => {
            return (
              <Employee
                name={person.name}
                title={person.title}
                displayEmployeesProfile={displayEmployeesProfile}
                grabEmployeeData={grabEmployeeData}
                id={person.id}
                key={person.id}
              />
            );
          })}
    </ul>
  );
};

export default EmployeeList;
