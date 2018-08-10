import React, { Component } from 'react';
import WorkItem from './WorkItem';
import apollo from './apollo.png';
import mit from './mit.gif'
import medialab from './medialab.jpg'
import rtr from './rtr.jpeg'
import brainpower from './brainpower.png'

class Work extends Component {
  render() {
    return (
      <div className="section" id="work">
        <h2>Work</h2>
        <WorkItem
          logo={mit}
          theme="#CC325C"
          name="MIT"
          content="Class of 2020"
        />
        <WorkItem
          logo={apollo}
          theme="#112b49ff"
          name="Apollo"
          content="Ask me about GraphQL."
        />
        <WorkItem
          logo={medialab}
          theme="#000000"
          name="MIT Media Lab"
          content="Data viz with react."
        />
        <WorkItem
          logo={rtr}
          theme="#F8EFEA"
          outline={true}
          name="Rent the Runway"
          content="Fairy godmother."
        />
        <WorkItem
          logo={brainpower}
          theme="#0A55D7"
          name="Brain Power"
          content="VR unlocking autism."
        />
      </div>
    );
  }
}

export default Work;
