import React from 'react';
import './Footer.scss';

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="footer-wrapper">
      <div className="footer-background">
        <p className="pt-5 footer-text typewriter-text">Carla de Beer | cadebe.dev</p>
        <p className="footer-text">August 2020</p>
        <p className="pb-3 footer-text-small mb-lg-2" style={{ marginTop: '200px' }}>
          Built with React and
          deployed on AWS •
          {' '}
          {year}
        </p>
      </div>
    </div>
  );
}
