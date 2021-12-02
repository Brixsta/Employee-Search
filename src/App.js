import React from "react";
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
          age: 58,
          department: "Finance",
          title: "CEO",
          email: "Joe_Exotic@corp.com",
          phoneNumber: "(287)-321-0213",
          hireDate: "January 9, 2004",
        },
        {
          name: "John Finlay",
          age: 58,
          department: "Accounting",
          title: "Director of Corporate Accounting",
          email: "John_Finaly@corp.com",
          phoneNumber: "(498)-132-9988",
          hireDate: "February 19, 2014",
        },
        {
          name: "Travis Maldonado",
          age: 58,
          department: "Marketing",
          title: "Director of Marketing",
          email: "Travis_Maldonado@corp.com",
          phoneNumber: "(913)-139-1111",
          hireDate: "September 21, 2020",
        },
        {
          name: "Carol Baskin",
          age: 60,
          department: "Human Resources",
          title: "Human Resources Specialist I",
          email: "Carol_Baskin@corp.com",
          phoneNumber: "(676)-333-3232",
          hireDate: "March 4, 2018",
        },
        {
          name: "Jeff Lowe",
          age: 56,
          department: "Finance",
          title: "CFO",
          email: "Jeff_Lowe@corp.com",
          phoneNumber: "(101)-913-3004",
          hireDate: "December 16, 2016",
        },
        {
          name: "Bhagavan Antle",
          age: 61,
          department: "Accounting",
          title: "Senior Auditor",
          email: "Bhagavan_Antle@corp.com",
          phoneNumber: "(424)-126-1593",
        },
        {
          name: "Tim Stark",
          age: 42,
          department: "IT",
          title: "IT Specialist I",
          email: "Tim_Stark@corp.com",
          phoneNumber: "(312)-309-9831",
        },
        {
          name: "John Reinke",
          age: 48,
          department: "Legal",
          title: "Paralegal III",
          email: "John_Reinke@corp.com",
          phoneNumber: "(981)-131-3333",
        },
        {
          name: "Kelci Saffery",
          age: 35,
          department: "Marketing",
          title: "Advertising Executive",
          email: "Kelci_Saffery@corp.com",
          phoneNumber: "(503)-231-8848",
        },
        {
          name: "Don Lewis",
          age: 64,
          department: "Accounting",
          title: "Staff Accountant",
          email: "Don_Lewis@corp.com",
          phoneNumber: "(613)-676-8390",
        },
        {
          name: "Howard Baskin",
          age: 68,
          department: "IT",
          title: "IT Specialist II",
          email: "Howard_Baskin@corp.com",
          phoneNumber: "(143)-444-1616",
        },
      ],
      filtered: null,
      displayProfile: false,
    };

    this.updateFiltered = this.updateFiltered.bind(this);
    this.displayEmployeesProfile = this.displayEmployeesProfile.bind(this);
    this.backToEmployeeSearch = this.backToEmployeeSearch.bind(this);
  }

  updateFiltered(value) {
    value = value.toLowerCase();
    const employees = this.state.employees;
    const filtered = employees.filter((person) =>
      person.name.slice(0, value.length).match(value)
    );

    this.setState({ filtered: filtered });
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

  render() {
    return (
      <div className="wrapper">
        {this.state.displayProfile === false && (
          <div className="container">
            <EmployeeSearchHeader updateFiltered={this.updateFiltered} />
            <EmployeeList
              employees={this.state.employees}
              filtered={this.state.filtered}
              displayEmployeesProfile={this.displayEmployeesProfile}
            />
            <EmployeeSearchFooter />
          </div>
        )}
        {this.state.displayProfile && (
          <Profile backToEmployeeSearch={this.backToEmployeeSearch} />
        )}
      </div>
    );
  }
}

export default App;
