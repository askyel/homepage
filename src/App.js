import React, { Component } from 'react';
import About from './About';
import Work from './Work';
import Home from './Home';
import Footer from './Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <div className="content">
          <About />
          <Work />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
