import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Employees from './components/Employees/Employees';
import 'semantic-ui-css/semantic.min.css';
import axios from 'axios';

class App extends Component {

  state={
    employees: []
  }

  async componentDidMount(){
    // 50 Dummy Employees from Random User Generator API
    const res = await axios.get("https://randomuser.me/api/?results=50");

    this.setState({ employees: res.data.results })
    console.log(this.state.employees)
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
