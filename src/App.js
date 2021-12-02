import React from "react";
import { v4 as uuidv4 } from "uuid";
import "./css/App.css";
import EmployeeList from "./components/EmployeeList";
import EmployeeSearchHeader from "./components/EmployeeSearchHeader";
import EmployeeSearchFooter from "./components/EmployeeSearchFooter";
import Profile from "./components/Profile";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      employees: [
        {
          name: "Joe Exotic",
          id: uuidv4(),
          age: 58,
          department: "Finance",
          title: "CEO",
          email: "Joe_Exotic@corp.com",
          phoneNumber: "(287)-321-0213",
          hireDate: "January 9, 2004",
        },
        {
          name: "John Finlay",
          id: uuidv4(),
          age: 58,
          department: "Accounting",
          title: "Director of Corporate Accounting",
          email: "John_Finaly@corp.com",
          phoneNumber: "(498)-132-9988",
          hireDate: "February 19, 2014",
        },
        {
          name: "Travis Maldonado",
          id: uuidv4(),
          age: 58,
          department: "Marketing",
          title: "Director of Marketing",
          email: "Travis_Maldonado@corp.com",
          phoneNumber: "(913)-139-1111",
          hireDate: "September 21, 2020",
        },
        {
          name: "Carol Baskin",
          id: uuidv4(),
          age: 60,
          department: "Human Resources",
          title: "Human Resources Specialist I",
          email: "Carol_Baskin@corp.com",
          phoneNumber: "(676)-333-3232",
          hireDate: "March 4, 2018",
        },
        {
          name: "Jeff Lowe",
          id: uuidv4(),
          age: 56,
          department: "Finance",
          title: "CFO",
          email: "Jeff_Lowe@corp.com",
          phoneNumber: "(101)-913-3004",
          hireDate: "December 16, 2016",
        },
        {
          name: "Bhagavan Antle",
          id: uuidv4(),
          age: 61,
          department: "Accounting",
          title: "Senior Auditor",
          email: "Bhagavan_Antle@corp.com",
          phoneNumber: "(424)-126-1593",
          hireDate: "August 31, 2015",
        },
        {
          name: "Tim Stark",
          id: uuidv4(),
          age: 42,
          department: "IT",
          title: "IT Specialist I",
          email: "Tim_Stark@corp.com",
          phoneNumber: "(312)-309-9831",
          hireDate: "June 15, 2021",
        },
        {
          name: "John Reinke",
          id: uuidv4(),
          age: 48,
          department: "Legal",
          title: "Paralegal III",
          email: "John_Reinke@corp.com",
          phoneNumber: "(981)-131-3333",
          hireDate: "April 19, 2008",
        },
        {
          name: "Kelci Saffery",
          id: uuidv4(),
          age: 35,
          department: "Marketing",
          title: "Advertising Executive",
          email: "Kelci_Saffery@corp.com",
          phoneNumber: "(503)-231-8848",
          hireDate: "April 5, 2019",
        },
        {
          name: "Don Lewis",
          id: uuidv4(),
          age: 64,
          department: "Accounting",
          title: "Staff Accountant",
          email: "Don_Lewis@corp.com",
          phoneNumber: "(613)-676-8390",
          hireDate: "August 10, 2020",
        },
        {
          name: "Howard Baskin",
          id: uuidv4(),
          age: 68,
          department: "IT",
          title: "IT Specialist II",
          email: "Howard_Baskin@corp.com",
          phoneNumber: "(143)-444-1616",
          hireDate: "May 1, 2011",
        },
      ],
      filtered: null,
      displayProfile: false,
      targetEmployee: null,
      searchBarText: "",
    };

    this.updateFiltered = this.updateFiltered.bind(this);
    this.displayEmployeesProfile = this.displayEmployeesProfile.bind(this);
    this.backToEmployeeSearch = this.backToEmployeeSearch.bind(this);
    this.grabEmployeeData = this.grabEmployeeData.bind(this);
    this.updateSearchBarText = this.updateSearchBarText.bind(this);
  }

  updateFiltered(value) {
    value = value.toLowerCase();
    const employees = this.state.employees;
    const filtered = employees.filter((person) =>
      person.name.slice(0, value.length).match(value)
    );

    this.setState({ filtered: filtered });
  }

  updateSearchBarText(value) {
    this.setState({ searchBarText: value });
  }

  componentDidMount() {
    // make all employee names lowercase
    let employees = this.state.employees;

    for (let i = 0; i < employees.length; i++) {
      employees[i].name = employees[i].name.toLowerCase();
    }
    this.setState({ employees: employees });
  }

  displayEmployeesProfile() {
    this.setState({ displayProfile: true });
  }

  backToEmployeeSearch() {
    this.setState({ displayProfile: false });
  }

  grabEmployeeData(value) {
    const employees = this.state.employees;

    employees.forEach((employee) => {
      if (employee.id === value.target.id) {
        this.setState({ targetEmployee: employee });
      }
    });
  }

  render() {
    return (
      <div className="wrapper">
        {this.state.displayProfile === false && (
          <div className="container">
            <EmployeeSearchHeader
              updateSearchBarText={this.updateSearchBarText}
              updateFiltered={this.updateFiltered}
              searchBarText={this.state.searchBarText}
            />
            <EmployeeList
              grabEmployeeData={this.grabEmployeeData}
              employees={this.state.employees}
              filtered={this.state.filtered}
              displayEmployeesProfile={this.displayEmployeesProfile}
            />
            <EmployeeSearchFooter />
          </div>
        )}
        {this.state.displayProfile && (
          <Profile
            targetEmployee={this.state.targetEmployee}
            backToEmployeeSearch={this.backToEmployeeSearch}
          />
        )}
      </div>
    );
  }
}

export default App;
