import React from 'react';
import Badge from 'react-bootstrap/Badge';
import { getLayoutSize } from '../../utils/pageSize';

import './Footer.scss';

import linkedIn from '../../assets/icons/Linkedin.svg';
import gitHub from '../../assets/icons/Github.svg';
import twitter from '../../assets/icons/X.svg';

function FooterBadges() {
  const layout = getLayoutSize();
  if (layout === 'mobile') {
    return (
      <div>
        <Badge bg="secondary" pill>
          Software Engineering
        </Badge>
        <br />
        <Badge bg="secondary" pill>
          Cloud
        </Badge>
        <br />
        <Badge bg="secondary" pill>
          Backend Development
        </Badge>
        <br />
        <Badge bg="secondary" pill>
          Machine Learning
        </Badge>
      </div>
    );
  }
  return (
    <div>
      <Badge bg="secondary" pill>
        Software Engineering
      </Badge>
      <Badge bg="secondary" pill className="ms-2">
        Backend Development
      </Badge>
      <Badge bg="secondary" pill className="ms-2">
        Cloud
      </Badge>
      <Badge bg="secondary" pill className="ms-2">
        Machine Learning
      </Badge>
    </div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="footer-wrapper" data-cy="footer">
      <div className="footer-style mt-5">
        <p className="pt-4 footer-text typewriter-text">Carla de Beer | cadebe.dev</p>
        <p className="footer-text-2">Updated: May 2026</p>
        <div className="text-fields mt-5">
          <a href="https://twitter.com/cadebe_" target="_blank" rel="noopener noreferrer">
            <img src={twitter} width="25px" height="25px" alt="Icon" />
          </a>
          <a
            className="ms-2"
            href="https://www.linkedin.com/in/carla-de-beer/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedIn} width="25px" height="25px" alt="Icon" />
          </a>
          <a
            className="ms-2"
            href="https://github.com/Carla-de-Beer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={gitHub} width="25px" height="25px" alt="Icon" />
          </a>
        </div>
        <div className="text-fields" style={{ marginTop: '90px' }}>
          <FooterBadges />
        </div>
        <div>
          <p
            className="footer-style pb-5 pt-3 footer-text-small mb-lg-2"
            style={{ marginTop: '50px' }}
          >
            Built with React and deployed on AWS • {year}
          </p>
        </div>
      </div>
    </div>
  );
}
