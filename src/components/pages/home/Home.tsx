import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

import './Home.scss';
import '../../../style/_fonts.scss';
import Banner from '../../banner/Banner';
import Header from '../../header/Header';

import photoImageSeg from '../../../assets/images/home/result-image-seg.jpg';
import photoImageDotScreen from '../../../assets/images/home/result-dot-screen.jpg';
import photoImageThreshold from '../../../assets/images/home/result-threshold.jpg';
import photoImageVoronoi from '../../../assets/images/home/result-voronoi.jpg';
import PageSize from '../../../utils/enums';

const sizeRatio = '40%';
const sizeRatioMobile = '80%';

export default class Home extends Component<any, any> {
  setPageLayout() {
    if (window.innerWidth.valueOf() <= PageSize.MEDIUM) {
      return this.setLayoutMobile();
    }
    return this.setLayoutDesktop();
  }

  setBody = () => (
    <div>
      <Card className="card-tile" style={{ width: '80%' }}>
        <Card.Body>
          <Card.Title />
          <div className="two-column-text">
            <p style={{ breakAfter: 'column' }}>
              I&apos;m
              {' '}
              <strong>Carla de Beer</strong>
              , a software engineer specialising in web development
              and machine learning.
              <br />
              <br />
              What began as a small experiment – hosting content on AWS S3 and wiring up SSL
              with AWS CloudFront – has grown into this fully fledged website, built and iterated
              on as I deepened my experience with AWS and picked up a few certifications along
              the way.
            </p>
            <p>
              <strong>This is my digital realm:</strong>
              {' '}
              a space where I share selected projects,
              experiments, and thoughts from the past few years.
              <br />
              <br />
              Here you&apos;ll find examples of my work in Java, Spring, AWS, and machine learning,
              along with news and blog posts on software engineering, cloud, and AI. Have a look
              around, explore the projects, and follow along as I keep learning, building, and
              visualising the &ldquo;invisible&rdquo; in code and data.
            </p>
          </div>
        </Card.Body>
      </Card>
    </div>
  );

  setLayoutMobile = () => (
    <div>
      <Header pageType="home" />
      <div className="home-wrapper">
        <div className="text-fields box">
          <div>
            <div data-cy="welcome-banner-mobile">
              <Banner title="WELCOME" />
            </div>
            <br />
            <div className="images">
              <img
                src={photoImageSeg}
                style={{ maxWidth: sizeRatioMobile }}
                alt="Portrait"
              />
            </div>
            <div className="images">
              <img
                src={photoImageVoronoi}
                style={{ maxWidth: sizeRatioMobile }}
                alt="Portrait"
              />
            </div>
            <div className="images">
              <img
                src={photoImageThreshold}
                style={{ maxWidth: sizeRatioMobile }}
                alt="Portrait"
              />
            </div>
            <div className="images">
              <img
                src={photoImageDotScreen}
                style={{ maxWidth: sizeRatioMobile }}
                alt="Portrait"
              />
              <p className="caption-text">
                Image Processing Studies
              </p>
              <p className="caption-text-mobile">
                Top: Image Segmentation, Voronoi Tessellation.
              </p>
              <p className="caption-text-mobile">
                Bottom: Circle Packing, Thresholding, Dot-Screening.
                Built with Processing.
              </p>
            </div>
            <br />
            {this.setBody()}
          </div>
        </div>
      </div>
    </div>
  );

  setLayoutDesktop = () => (
    <div>
      <Header pageType="home" />
      <div className="home-wrapper">
        <div className="text-fields box">
          <div>
            <div data-cy="welcome-banner-desktop">
              <Banner title="WELCOME" />
            </div>
            <br />
            <br />
            <div className="images">
              <img
                src={photoImageSeg}
                style={{ maxWidth: sizeRatio }}
                alt="Portrait"
              />
              <img
                src={photoImageVoronoi}
                style={{ maxWidth: sizeRatio }}
                alt="Portrait"
              />
            </div>
            <br />
            <div className="images">
              <img
                src={photoImageThreshold}
                style={{ maxWidth: sizeRatio }}
                alt="Portrait"
              />
              <img
                src={photoImageDotScreen}
                style={{ maxWidth: sizeRatio }}
                alt="Portrait"
              />
              <div>
                <p className="caption-text">
                  Image Processing Studies | Top: Image Segmentation, Voronoi Tessellation.
                  Bottom: Circle Packing, Thresholding, Dot-Screening.
                  Built with Processing.
                </p>
              </div>
            </div>
            {this.setBody()}
          </div>
        </div>
      </div>
    </div>
  );

  render() {
    return (
      <div>
        {this.setPageLayout()}
      </div>
    );
  }
}
