import React from 'react';
import Card from 'react-bootstrap/Card';

import './Home.scss';
import '../../../style/_fonts.scss';

import photo from '../../../assets/images/0.jpg';

export default function Home() {
  return (
    <div className="home-wrapper">
      <div className="mt-4" />
      <div className="text-fields box mt-xl-5 mt-lg-5 mt-md-5 mt-4">
        <div>
          <Card className="card-tile" style={{ width: '80%' }}>
            <Card.Body>
              <Card.Title />
              <Card.Text>
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
              </Card.Text>
            </Card.Body>
          </Card>
          <div className="mt-4 ml-5 mr-5">
            <img
              src={photo}
              style={{ maxWidth: '100%' }}
              alt="photo"
            />
          </div>
          <div className="text-fields" style={{ paddingTop: '30px' }}>
            <p className="mt-2 high-light">WELCOME</p>
          </div>
        </div>
      </div>
    </div>
  );
}
