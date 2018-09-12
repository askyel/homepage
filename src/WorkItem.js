import React, { Component } from 'react';

class WorkItem extends Component {
  outlineStyle = {
    "-webkit-text-stroke-width": "0.1px",
    "-webkit-text-stroke-color": "black"
  };

  style = this.props.outline
    ? {color: this.props.theme, ...this.outlineStyle}
    : {color: this.props.theme}

  render() {
    return (
      <div className="work-item">
        <div className="work-item-header">
          <img className="work-item-logo" src={this.props.logo} />
          <a href={this.props.link}><h3 style={this.style}>{this.props.name}</h3></a>
        </div>
        <div className="work-item-subheader">
          {this.props.subheader}
        </div>
        <div className="work-item-content">
          {this.props.content}
        </div>
      </div>
    );
  }
}

export default WorkItem;
