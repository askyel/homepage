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
              <li><img src={email} /></li>
              <li><img src={linkedin} /></li>
              <li><img src={github} /></li>
              <li><img src={medium} /></li>
              <li><img src={photo} /></li>
            </ul>
          </div>
          <div className="copyright">&copy; 2018 Ariel Skye Levy</div>
        </div>
      </div>
    );
  }
}

export default Footer;
