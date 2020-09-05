import React, { Component } from 'react';
import Navbar from './components/Navbar';
import 'semantic-ui-css/semantic.min.css';
import axios from 'axios';

class App extends Component {

  componentDidMount(){
    axios
      .get("https://randomuser.me/api/?results=50")
      .then(res => console.log(res.data));
  }

  render(){

    return (
    <div>
      <Navbar />
    </div>
  );
  }
}

export default App;
