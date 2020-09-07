import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Employees from './components/Employees/Employees';
import Search from './components/Search/Search'
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
        <Search />
        <Employees employees={this.state.employees} />
      </div>
    );
  }
}

export default App;
