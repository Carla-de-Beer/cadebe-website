import React from 'react';
import './Footer.scss';

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="footer-wrapper">
      <div className="footer-style mt-4 ml-5 mr-5">
        <p className="pt-4 footer-text typewriter-text">Carla de Beer | cadebe.dev</p>
        <p className="footer-text">October 2020</p>
        <div className="mt-4 ml-5 mr-5">
          <p className="footer-style pb-5 pt-3 footer-text-small mb-lg-2" style={{ marginTop: '290px' }}>
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
