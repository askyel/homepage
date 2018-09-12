import React, { Component } from 'react';
import hayes from './img/backgrounds/hayes.jpg'
import feathers from './img/backgrounds/feathers.jpg'
import globe from './img/backgrounds/globe.jpg'
import resume from './Resume_ArielSkyeLevy.pdf'

class Home extends Component {
  backgrounds = [hayes, feathers, globe]
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
            <li><a href={resume}>Resume</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
