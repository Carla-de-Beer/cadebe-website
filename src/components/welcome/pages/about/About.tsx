import React from 'react';
import Badge from 'react-bootstrap/Badge';

import './About.scss';
import Card from 'react-bootstrap/Card';

export default function About() {
  return (
    <div className="about-wrapper">
      <div className="text-fields" style={{ paddingTop: '30px' }}>
        <p className="mt-2 high-light">ABOUT</p>
      </div>
      <div className="card-tile text-fields" style={{ width: '80%' }}>
        <p>
          {' '}
          I&apos;m a software engineer involved in web development,
          machine learning, computational and generative design.
          What started off as an experiment on how to upload content to AWS S3 and
          integrating an SSL certificate with AWS CloudFront, seems to be morphing into a
          website.
          Good stuff coming soon!
          In the meanwhile, you can reach me on &nbsp;
        </p>
      </div>
      <div className="mt-4 text-fields">
        <Badge className="badge badge-pill badge-secondary">Software Engineering</Badge>
        <Badge className="badge badge-pill badge-secondary ml-2">Backend Development</Badge>
        <Badge className="badge badge-pill badge-secondary ml-2">Fullstack Development</Badge>
        <Badge className="badge badge-pill badge-secondary ml-2">Machine Learning</Badge>
      </div>
    </div>
  );
}
