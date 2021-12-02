import React from "react";
import "../css/EmployeeMetricsTable.css";

const EmployeeMetricsTable = () => {
  return (
    <table className={"employee-metrics-table"}>
      <tr>
        <th>Name</th>
        <th>Title</th>
        <th>Department</th>
      </tr>
      <tr>
        <td>Some Name</td>
        <td>Some Title</td>
        <td>Some Department</td>
      </tr>
      <tr>
        <th>Phone Number</th>
        <th>Email</th>
        <th>Hire Date</th>
      </tr>
      <tr>
        <td>Some Phone NUmber</td>
        <td>Some Email</td>
        <td>Some Date</td>
      </tr>
    </table>
  );
};

export default EmployeeMetricsTable;
