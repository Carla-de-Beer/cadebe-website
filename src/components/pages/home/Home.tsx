import React from 'react';
import Card from 'react-bootstrap/Card';
import Header from '../../header/Header';
import Banner from '../../banner/Banner';

import './Home.scss';
import '../../../style/_fonts.scss';

import photo from '../../../assets/images/shared/photo-packing-circles.jpg';

export default function Home() {
  return (
    <div>
      <Header pageType="home" />
      <div className="home-wrapper">
        <div className="mt-4" />
        <div className="text-fields box mt-xl-5 mt-lg-5 mt-md-5 mt-4">
          <div>
            <div className="mt-4">
              <img
                src={photo}
                style={{ maxWidth: '100%' }}
                alt="Portrait"
              />
            </div>
            <div className="theme-color">
              <p>
                <strong>#cadebe</strong> : RGB(202, 222, 190)
              </p>
            </div>
            <div className="mt-4">
              <Banner title="WELCOME" />
            </div>
            <div>
              <Card className="card-tile" style={{ width: '80%' }}>
                <Card.Body>
                  <Card.Title />
                  <Card.Text>
                    I&apos;m Carla de Beer, a software engineer involved in
                    web development and machine learning.
                    <br />
                    <br />
                    What started off as an experiment in uploading content to AWS S3 and
                    integrating an SSL certificate with AWS CloudFront,
                    has morphed into a proper website.
                    This website showcases some of my own development work from the past few years,
                    as well as news and blog updates.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
