import React from "react";
import "../css/EmployeeMetricsTable.css";

const EmployeeMetricsTable = (props) => {
  const { targetEmployee } = props;
  const { name } = props;
  const title = targetEmployee.title;
  const department = targetEmployee.department;
  const phoneNumber = targetEmployee.phoneNumber;
  const email = targetEmployee.email;
  const hireDate = targetEmployee.hireDate;
  return (
    <table className={"employee-metrics-table"}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Title</th>
          <th>Department</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{name}</td>
          <td>{title}</td>
          <td>{department}</td>
        </tr>
      </tbody>
      <thead>
        <tr>
          <th>Phone Number</th>
          <th>Email</th>
          <th>Hire Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{phoneNumber}</td>
          <td>{email}</td>
          <td>{hireDate}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default EmployeeMetricsTable;
