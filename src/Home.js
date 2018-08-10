import React, { Component } from 'react';
import hayes from './hayes.jpg'
import feathers from './feathers.jpg'
import sutro from './sutro.jpg'
import boston from './boston.jpg'
import leaves from './leaves.jpg'
import branches from './branches.jpg'
import globe from './globe.jpg'
import fishing from './fishing.jpg'
import fountain from './fountain.jpg'
import newyork from './newyork.jpg'

class Home extends Component {
  backgrounds = [hayes, feathers, sutro, boston, leaves, branches, globe, fishing, fountain, newyork];
  image = this.backgrounds[Math.floor(Math.random()*this.backgrounds.length)];
  backgroundStyle = {
    background: `linear-gradient(to right, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.9) ), url('./${this.image}')`,
    backgroundSize: "cover",
    overflow: "hidden"
  };

  render() {
    return (
      <div className="home page" style={this.backgroundStyle}>
        <div className="home-hero">
          <h1>Ariel</h1>
          <h1>Skye</h1>
          <h1>Levy</h1>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#contact">Contact</a></li>
            <li>Resume</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
