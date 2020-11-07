import React from 'react';

import './About.scss';

export default function About() {
  return (
    <div className="about-wrapper">
      <div className="text-fields" style={{ paddingTop: '30px' }}>
        <p className="mt-2 high-light">ABOUT</p>
      </div>
      <div className="card-tile text-fields" style={{ width: '80%' }}>
        <p>
          I&apos;m Carla de Beer, a software engineer involved in web development,
          machine learning, computational and generative design.
          What started off as an experiment on how to upload content to AWS S3 and
          integrating an SSL certificate with AWS CloudFront, seems to be morphing into a
          website.
          Good stuff coming soon!
          In the meanwhile, you can reach me on &nbsp;
          <a
            className="typewriter-text"
            rel="noopener noreferrer"
            href="https://twitter.com/cadebe_"
            target="_blank"
          >
            Twitter
          </a>
          .
        </p>
      </div>
    </div>
  );
}
