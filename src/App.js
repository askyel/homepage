import React, { Component } from 'react';
import About from './About';
import Work from './Work';
import Home from './Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <div className="content">
          <About />
          <Work />
          <div className="section" id="contact">
            <h2>Contact</h2>
            <ul>
              <li>Email</li>
              <li>Linkedin</li>
              <li>Github</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
