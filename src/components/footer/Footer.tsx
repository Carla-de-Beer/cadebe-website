import React from 'react';
import Badge from 'react-bootstrap/Badge';

import './Footer.scss';

import linkedIn from '../../assets/icons/Linkedin_1.svg';
import gitHub from '../../assets/icons/Github_1.svg';
import twitter from '../../assets/icons/Twitter_1.svg';

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="footer-wrapper">
      <div className="footer-style mt-5 mr-md-4 mr-lg-3">
        <p className="pt-4 footer-text typewriter-text">Carla de Beer | cadebe.dev</p>
        <p className="footer-text">November 2020</p>
        <div className="text-fields mt-5">
          <a href="https://twitter.com/cadebe_" target="_blank" rel="noreferrer">
            <img src={twitter} width="25px" height="25px" alt="icon" />
          </a>
          <a className="ml-2" href="https://www.linkedin.com/in/carla-de-beer/" target="_blank" rel="noreferrer">
            <img src={linkedIn} width="25px" height="25px" alt="icon" />
          </a>
          <a className="ml-2" href="https://github.com/Carla-de-Beer" target="_blank" rel="noreferrer">
            <img src={gitHub} width="25px" height="25px" alt="icon" />
          </a>
        </div>
        <div className="text-fields" style={{ marginTop: '90px' }}>
          <Badge className="badge badge-pill badge-secondary">Software Engineering</Badge>
          <Badge className="badge badge-pill badge-secondary ml-2">Backend Development</Badge>
          <Badge className="badge badge-pill badge-secondary ml-2">Fullstack Development</Badge>
          <Badge className="badge badge-pill badge-secondary ml-2">Machine Learning</Badge>
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
