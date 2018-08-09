import React, { Component } from 'react';
import './TitlePanel.css';

class TitlePanel extends Component {
  render() {
    return (
      <div className="title-panel-container" style={{backgroundColor: this.props.theme}}>
        <div className="title-panel">
          <div className="title-panel-header">
            <img className="title-panel-image" src={this.props.image} />
            <h1>{this.props.name}</h1>
          </div>
          <div className="title-panel-description">
            <div className="title-panel-dates">{this.props.dates}</div>
            <div className="title-panel-location">{this.props.location}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default TitlePanel;
