import React, { Component } from 'react';
import TitlePanel from './TitlePanel';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="page">
          <h1>Ariel Skye Levy</h1>
        </div>
        <div className="page">
          <TitlePanel
            name="MIT"
            theme="#800000"
            dates="September 2016 – June 2020"
            location="Cambridge, MA"
          />
          <div className="content-panel">
            <p>{"Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?"}</p>
          </div>
        </div>
        <div className="page">
          <div className="content-panel">
            <p>{"Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?"}</p>
          </div>
          <TitlePanel
            name="Apollo"
            theme="#112b49"
            dates="May 2018 – August 2018"
            location="San Francisco, CA"
          />
        </div>
      </div>
    );
  }
}

export default App;
