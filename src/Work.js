import React, { Component } from 'react';
import WorkItem from './WorkItem';
import apollo from './img/work/apollo.png';
import mit from './img/work/mit.gif'
import medialab from './img/work/medialab.jpg'
import rtr from './img/work/rtr.jpeg'
import brainpower from './img/work/brainpower.png'

class Work extends Component {
  render() {
    return (
      <div className="section" id="work">
        <h2>Work</h2>
        <WorkItem
          logo={mit}
          theme="#CC325C"
          name="Massacusetts Institute of Technology"
          subheader="Cambridge, MA"
          content={<div><p>I'm a junior majoring in Computer Science, otherwise known as Course 6-3. I'm also minoring in Data Science & Statistics and concentrating in Women's & Gender Studies.</p><p>Some of my favorite classes have been Design & Analysis of Algorithms, Elements of Software Construction, Interconnected Embedded Systems, Introduction to Machine Learning, Computational Media Design, and Woke Literature.</p><p>On campus I'm on the executive board of <a href="http://womenineecs.mit.edu/">Women in Electrical Engineering and Computer Science</a>, a counselor and unit leader for <a href="http://campkesem.org/">Camp Kesem</a>, and an officer in the MIT chapter of <a href="http://theta.mit.edu/">Kappa Alpha Theta</a>.</p></div>}
        />
        <WorkItem
          logo={apollo}
          theme="#112b49ff"
          name="Apollo / Meteor Development Group"
          link="https://www.apollographql.com/"
          subheader="San Francisco, CA"
          content={<div><p>During the summer of 2018 I worked as a Software Engineering Intern on the <a href="https://www.apollographql.com/engine/">Apollo Engine</a> team. Engine is an enterprise product that provides <a href="https://graphql.org/">GraphQL</a> schema insights, such as performance analysis and error tracking.</p><p>I contributed to the development of an entirely new frontend for Engine with React, Typescript, and of course Apollo and GraphQL.</p><p>I also added GraphQL schema evolution tracking with a new schema version comparison feature, through full-stack contributions to both the Engine frontend and backend schema services.</p><p>Check out the <a href="https://docs.google.com/presentation/d/1n_P4RcbMHoVZe7JRGcZIVe5s8E5SzITYfGCjqAWwtxg/edit?usp=sharing">presentation</a> I gave about the feature (with screenshots in place of the live demo).</p></div>} 
        />
        <WorkItem
          logo={medialab}
          theme="#000000"
          name="MIT Media Lab – Collective Learning Group"
          link="http://macro.media.mit.edu/"
          subheader="Cambridge, MA"
          content={<div><p>During my freshman spring and sophomore fall, I was as an undergraduate research associate with the Collective Learning Group in the MIT Media Lab.</p><p>I worked on the creation of a new project, a data visualization library in React called Replot.</p><p>I helped originate the project architecture and visual design.</p><p>I also built several of the first library components, such as the line and scatter plots, as well as underlying strucural components, like the axis and legends.</p></div>} 
        />
        <WorkItem
          logo={rtr}
          theme="#F8EFEA"
          outline={true}
          name="Rent the Runway"
          link="https://www.renttherunway.com/"
          subheader="New York, NY"
          content={<div><p>During the summer of 2017 I worked as a Software Engineering Intern on the Activation team of Rent the Runway Engineering.</p><p>I developed customer-facing website experiements to boost online user engagement and optimize the user experience from initial visit to checkout.</p><p>I collaborated with project managers, data scientists, and designers to turn insights on user data into new frontend features.</p><p>The two most successful experiements I developed were a price drop feature that highlighted time or location dependent sales and a landing page for traffic from social media advertisements that personalized product grid filtering.</p></div>} 
        />
        <WorkItem
          logo={brainpower}
          theme="#0A55D7"
          name="Brain Power"
          link="http://www.brain-power.com/"
          subheader="Cambridge, MA"
          content={<div><p>During the winter of 2017 I was the App Development Team Lead at a startup creating Augmented Reality technology for those challenged by autism.</p><p>I acted as a project manager for a game that communicated between Google Glass and Android mobile platforms, overseeing six developers and interfacing between the team and company executives.</p><p>After one month the game we created from scratch was in use by company customers.</p></div>}
        />
      </div>
    );
  }
}

export default Work;
