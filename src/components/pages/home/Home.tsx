import React from 'react';
import Card from 'react-bootstrap/Card';

import './Home.scss';
import '../../../style/_fonts.scss';

import photo from '../../../assets/images/0.jpg';
import Header from '../../header/Header';

export default function Home() {
  return (
    <div>
      <Header pageType="home" />
      <div className="home-wrapper">
        <div className="mt-4" />
        <div className="text-fields box mt-xl-5 mt-lg-5 mt-md-5 mt-4">
          <div>
            <Card className="card-tile" style={{ width: '80%' }}>
              <Card.Body>
                <Card.Title />
                <Card.Text>
                  I&apos;m Carla de Beer, a software engineer involved in
                  web development and machine learning.
                  <br />
                  What started off as an experiment in uploading content to AWS S3 and
                  integrating an SSL certificate with AWS CloudFront,
                  has morphed into a proper website.
                </Card.Text>
              </Card.Body>
            </Card>
            <div className="mt-4">
              <img
                src={photo}
                style={{ maxWidth: '100%' }}
                alt="Portrait"
              />
            </div>
            <div className="text-fields ml-md-4 mr-md-4 pt-4">
              <p className="mt-2 high-light">WELCOME</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
