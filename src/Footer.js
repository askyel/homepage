import React, { Component } from 'react';
import email from './icons/email.png'
import linkedin from './icons/linkedin.png'
import github from './icons/github.png'
import medium from './icons/medium.png'
import photo from './icons/photo.png'

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-content">
          <div className="contact">
            <ul>
              <li><a href="mailto:aslevy@mit.edu"><img src={email} /></a></li>
              <li><a href="https://www.linkedin.com/in/ariel-skye-levy/"><img src={linkedin} /></a></li>
              <li><a href="https://github.com/askyel"><img src={github} /></a></li>
              <li><a href="https://photos.app.goo.gl/xfx6RbwrRPdjUrU56"><img src={photo} /></a></li>
            </ul>
          </div>
          <div className="copyright">&copy; 2018 Ariel Skye Levy</div>
        </div>
      </div>
    );
  }
}

export default Footer;
