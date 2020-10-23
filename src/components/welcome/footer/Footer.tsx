import React from 'react';
import './Footer.scss';

export default class Footer extends React.Component {
  render() {
    const date = new Date();
    const year = date.getFullYear();
    return (
      <div className="footer-wrapper">
        <div className="footer-background">
          <div className="tag-style">
            <button type="button" className="mt-md-5 btn btn-info-local">Software Engineering</button>
            <button type="button" className="ml-md-2 mt-md-5 btn btn-info-local">Machine Learning</button>
            <button type="button" className="ml-md-2 mt-md-5 btn btn-info-local">
              Full-Stack Development
            </button>
            <button type="button" className="ml-md-2 mt-md-5 btn btn-info-local">
              Backend Development
            </button>
          </div>
          <p className="pt-5 footer-text typewriter-text">Carla de Beer | cadebe.dev</p>
          <p className="footer-text">August 2020</p>
          <p className="pb-3 footer-text-small mb-lg-2" style={{ marginTop: '120px' }}>
            Built with React and
            deployed on AWS •
            {' '}
            {year}
          </p>
        </div>
      </div>
    );
  }
}
