import React from 'react';
import './Intro.scss';
import Card from 'react-bootstrap/Card';

import logo from '../../../assets/images/logo.png';

export default class Content extends React.Component {
  render() {
    return (
      <div className="content-wrapper">
        <div className="text-fields" style={{ paddingTop: '30px' }}>
          <div>
            <img src={logo} width="125" height="125" alt="logo" />
          </div>
          <p className="mt-3">Carla de Beer</p>
          <div className="mt-3" />
        </div>
        <div className="text-fields box" style={{ paddingTop: '30px' }}>
          <h1 className="mt-2">News</h1>
          <div className="mt-5">
            <Card className="card-tile" style={{ width: '80%' }}>
              <Card.Body>
                <Card.Title>Carla&apos;s Development Website is Online!</Card.Title>
                <Card.Text>
                  I&apos;m a software engineer involved in web development,
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
          </div>
          <div className="text-fields" style={{ paddingTop: '30px' }}>
            <h1 className="mt-2">Projects</h1>
          </div>
        </div>
      </div>
    );
  }
}
