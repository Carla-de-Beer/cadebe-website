import React from 'react';

import './Footer.scss';

import Badge from 'react-bootstrap/Badge';
import linkedIn from '../../assets/icons/Linkedin_1.svg';
import gitHub from '../../assets/icons/Github_1.svg';
import twitter from '../../assets/icons/Twitter_1.svg';

export default class Footer extends React.Component {
    setNavHeader = () => {
      if (window.innerWidth.valueOf() < 1024) {
        return (
          <div>
            <Badge className="badge badge-pill badge-secondary">Machine Learning</Badge>
            <br />
            <Badge className="badge badge-pill badge-secondary">Software Engineering</Badge>
            <br />
            <Badge className="badge badge-pill badge-secondary">Backend Development</Badge>
            <br />
            <Badge className="badge badge-pill badge-secondary">Fullstack Development</Badge>
          </div>
        );
      }
      return (
        <div>
          <Badge className="badge badge-pill badge-secondary">Machine Learning</Badge>
          <Badge className="badge badge-pill badge-secondary ml-2">Software Engineering</Badge>
          <Badge className="badge badge-pill badge-secondary ml-2">Backend Development</Badge>
          <Badge className="badge badge-pill badge-secondary ml-2">Fullstack Development</Badge>
        </div>
      );
    };

    render() {
      const date = new Date();
      const year = date.getFullYear();
      return (
        <div className="footer-wrapper">
          <div className="footer-style mt-5">
            <p className="pt-4 footer-text typewriter-text">Carla de Beer | cadebe.dev</p>
            <p className="footer-text">November 2020</p>
            <div className="text-fields mt-5">
              <a href="https://twitter.com/cadebe_" target="_blank" rel="noopener noreferrer">
                <img src={twitter} width="25px" height="25px" alt="Icon" />
              </a>
              <a
                className="ml-2"
                href="https://www.linkedin.com/in/carla-de-beer/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedIn} width="25px" height="25px" alt="Icon" />
              </a>
              <a
                className="ml-2"
                href="https://github.com/Carla-de-Beer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={gitHub} width="25px" height="25px" alt="Icon" />
              </a>
            </div>
            <div className="text-fields" style={{ marginTop: '90px' }}>
              {this.setNavHeader()}
            </div>
            <div>
              <p className="footer-style pb-5 pt-3 footer-text-small mb-lg-2" style={{ marginTop: '50px' }}>
                Built with React and
                deployed on AWS
                {' '}
                •
                {' '}
                {year}
              </p>
            </div>
          </div>
        </div>
      );
    }
}
