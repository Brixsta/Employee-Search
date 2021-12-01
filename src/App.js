import React from 'react';
import './css/App.css'
import EmployeeList from './components/EmployeeList';
import Header from './components/Header';
import Avatar from './components/Avatar';

class App extends React.Component {
  constructor () {
    super();


    this.state = {
      employees: 
      [
        {name: 'Joe Exotic', age: 58, phoneNumber: "(503)-676-1513", avatar: <img src='../images/joe_exotic.jpg'></img>}, {name: 'Carol Baskin', age: 60, phoneNumber: "(503)-676-1513"}, 
        {name: 'Jeff Lowe', age: 56, phoneNumber: "(503)-676-1513"}, {name: 'Bhagavan Antle', age: 61, phoneNumber: "(503)-676-1513"},
        {name: 'Tim Stark', age: 42, phoneNumber: "(503)-676-1513"}, {name: 'John Reinke', age: 48, phoneNumber: "(503)-676-1513"},
        {name: 'Kelci Saffery', age: 35, phoneNumber: "(503)-676-1513"}, {name: 'Don Lewis', age: 64, phoneNumber: "(503)-676-1513"}
      ],
      filtered: null
    }
    
    this.updateFiltered = this.updateFiltered.bind(this);
  }

  updateFiltered (value) {
    value = value.toLowerCase();
    const employees = this.state.employees;
    const filtered = employees.filter(person => person.name.slice(0,value.length).match(value));

    this.setState({filtered: filtered})
  }

  componentDidMount () {
    // make all employee names lowercase
    let employees = this.state.employees;

    for(let i=0; i<employees.length; i++) {
      employees[i].name = employees[i].name.toLowerCase();
    }
    this.setState({employees: employees});
  }

  render () {
    return (
      <div className="wrapper">
        <div className="container">
          <Header 
          updateFiltered={this.updateFiltered}
          />
          
          <EmployeeList 
          employees={this.state.employees}
          filtered={this.state.filtered}
          />
        </div>
      </div>
    );
  }
}

export default App;
