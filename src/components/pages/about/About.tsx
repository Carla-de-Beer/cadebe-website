import React from 'react';

import './About.scss';
import Header from '../../header/Header';

export default function About() {
  return (
    <div>
      <Header pageType="about" />
      <div className="about-wrapper">
        <div className="text-fields" style={{ paddingTop: '30px' }}>
          <p className="mt-2 high-light">ABOUT</p>
        </div>
        <div className="card-tile text-fields" style={{ width: '80%' }}>
          <p>
            I&apos;m Carla de Beer, a software engineer involved in web development,
            machine learning, computational and generative design.
          </p>
        </div>
      </div>
    </div>

  );
}
