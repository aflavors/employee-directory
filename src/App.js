import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Employees from './components/Employees/Employees';
import 'semantic-ui-css/semantic.min.css';
import API from "./utils/API";

class App extends Component {

  state = {
    employees: [],
    filteredEmployees: []
  }

  async componentDidMount(){
    API.getEmp().then(results => {
      this.setState({ employees: results.data.results });
      console.log(this.state.employees)
    })
  }

  render(){
    return (
      <div>
        <Navbar />
        <Employees employees={this.state.employees} />
      </div>
    );
  }
}

export default App;
