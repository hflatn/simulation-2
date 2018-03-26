import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import login from "./components/auth view/authview.js"
import routes from './router.js'

class App extends Component {
  render() {
    return (
      <div>
       { routes }
      </div>
    );
  }
}

export default App;
