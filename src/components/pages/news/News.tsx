import React from 'react';
import Card from 'react-bootstrap/Card';

import Header from '../../header/Header';
import Banner from '../../banner/Banner';
import PageSize from '../../../util/Enums';

import './News.scss';

import awsCert from '../../../assets/images/aws-certificate.png';
import awsCertManager from '../../../assets/images/aws-image.png';

export default class News extends React.Component {
    setLayoutDesktop = () => (
      <div className="news-wrapper">
        {this.setCommon()}

        <div className="mt-xl-4 mt-lg-4 mt-md-4 mt-2">
          <div className="row" style={{ height: '100%' }}>
            <div className="col-6 mt-xl-4 mt-lg-4 mt-md-4 mt-4" style={{ paddingRight: '10px' }}>
              <div className="block-1">
                {this.makeCard1()}
              </div>
              <div className="mt-3 block-2">
                {this.makeCard2()}
              </div>
            </div>
            <div className="col mt-xl-4 mt-lg-4 mt-md-4 mt-4" style={{ paddingLeft: 0, marginLeft: '-10px' }}>
              <div className="ml-3 block-3">
                {this.makeCard3()}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <div className="row">
            <div className="col ml-3 block-4">
              {this.makeCard4()}
            </div>
            <div className="col ml-3 block-4">
              {this.makeCard5()}
            </div>
            <div className="col ml-3 block-4 mr-3">
              {this.makeCard6()}
            </div>
          </div>
        </div>
      </div>
    );

    setLayoutTablet = () => (
      <div className="news-wrapper">
        {this.setCommon()}

        <div className="mt-5">
          <div className="row">
            <div className="col">
              <div className="block-mobile">
                {this.makeCard1()}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3" style={{ backgroundColor: 'lightyellow' }}>
          <div className="row">
            <div className="col ml-3 mr-3 block-mobile">
              {this.makeCard2()}
            </div>
          </div>
        </div>

        <div className="mt-3">
          <div className="row">
            <div className="col ml-3 block-4">
              {this.makeCard3()}
            </div>
            <div className="col ml-3 mr-3 block-4">
              {this.makeCard4()}
            </div>
          </div>
        </div>

        <div className="mt-3">
          <div className="row">
            <div className="col ml-3 block-4">
              {this.makeCard5()}
            </div>
            <div className="col ml-3 mr-3 block-4">
              {this.makeCard6()}
            </div>
          </div>
        </div>
      </div>
    );

    setLayoutMobile = () => (
      <div className="news-wrapper">
        {this.setCommon()}

        <div className="mt-5">
          <div className="row">
            <div className="col">
              <div className="block-mobile">
                {this.makeCard1()}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3">
          <div className="row">
            <div className="col">
              <div className="block-mobile">
                {this.makeCard2()}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3">
          <div className="row">
            <div className="col">
              <div className="block-mobile">
                {this.makeCard3()}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3">
          <div className="row">
            <div className="col">
              <div className="block-mobile">
                {this.makeCard4()}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3">
          <div className="row">
            <div className="col">
              <div className="block-mobile">
                {this.makeCard5()}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3">
          <div className="row">
            <div className="col">
              <div className="block-mobile">
                {this.makeCard6()}
              </div>
            </div>
          </div>
        </div>

      </div>
    );

    setCommon = () => (
      <div>
        <Banner title="NEWS & BLOG" />
        <div className="mt-4">
          <div className="card-tile text-fields" style={{ width: '80%' }}>
            <div className="text-fields mt-5">
              {window.innerWidth.valueOf() >= PageSize.SMALL
                ? <p className="high-light-1">Software Development • Machine Learning</p> : (
                  <div>
                    <p className="high-light-1">Software Development</p>
                    <p className="high-light-1">Machine Learning</p>
                  </div>
                )}
            </div>
            <div className="card-tile text-fields mt-5" style={{ width: '80%' }}>
              <p>
                Development news and blog stories relating to software development,
                including Java, Spring Framework, Python, Cloud Computing, TensorFlow
                and machine learning.
              </p>
            </div>
          </div>
        </div>
      </div>
    );

    setPageLayout() {
      if (window.innerWidth.valueOf() <= PageSize.SMALL) {
        return this.setLayoutMobile();
      }
      if (window.innerWidth.valueOf() > PageSize.SMALL && window.innerWidth.valueOf() < PageSize.LARGE) {
        return this.setLayoutTablet();
      }
      return this.setLayoutDesktop();
    }

    makeCard1 = () => (
      <a
        className="no-link"
        href="https://github.com/Carla-de-Beer/spring-boot-projects/tree/master/aop-demo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Card className="p-3 news-card">
          <Card.Body>
            <Card.Title>
              AOP and the Spring Framework
            </Card.Title>
            <Card.Subtitle className="mt-3 sub-title">11 OCTOBER 2020</Card.Subtitle>
            <Card.Text className="mt-3">
              Aspect Oriented Programming (AOP) has been around for a while
              but has always felt inaccessible, partly due to the opaque-sounding terminology.
              Actually, it is quite simple and a really powerful tool.
              I built a demo example using the SpringFramework,
              and illustrated the terminology with practical explanations.
              Doing is understanding!
            </Card.Text>
          </Card.Body>
        </Card>
      </a>
    )

    makeCard2 = () => (
      <a
        className="no-link"
        href="https://www.youracclaim.com/badges/e5bb66e2-78bc-4be1-820e-df7963b8e410?source=linked_in_profile"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Card className="p-3 news-card">
          <Card.Body>
            <Card.Title>
              AWS Developer Associate Certification
            </Card.Title>
            <Card.Subtitle className="mt-3 sub-title">23 SEPTEMBER 2020</Card.Subtitle>
            <Card.Text className="mt-3">
              Passed the AWS Developer Associate Examination.
            </Card.Text>
            <Card.Img className="mt-3" src={awsCert} alt="Project Image" />
          </Card.Body>
        </Card>
      </a>
    )

    makeCard3 = () => (
      <a
        className="no-link"
        href="https://medium.com/@carla.debeer.uk/creating-a-static-website-with-aws-s3-and-cloudfront-963e9825028a"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Card className="p-3 news-card">
          <Card.Body>
            <Card.Title>
              Creating a ReactJS Static Website with AWS S3 and
              CloudFront
            </Card.Title>
            <Card.Subtitle className="mt-3 sub-title">2 SEPTEMBER 2020</Card.Subtitle>
            <Card.Text className="mt-3">
              There are numerous online articles that describe how to configure AWS S3 in
              order to host a static website. In fact S3 makes this quite easy.
              However, many of these articles do not necessarily follow best practices,
              especially in terms of security requirements.
              And there are also a number of gotchas along the way to keep an eye on.
              I built a simple React JS website and deployed it onto AWS. This is how I did it.
            </Card.Text>
            {(window.innerWidth.valueOf() <= PageSize.SMALL || window.innerWidth.valueOf() > PageSize.LARGE)
                    && <Card.Img className="mt-3" src={awsCertManager} alt="AWS" />}
          </Card.Body>
        </Card>
      </a>
    )

    makeCard4 = () => (
      <a
        className="no-link"
        href="https://cadebe.dev"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Card className="p-3 news-card">
          <Card.Body>
            <Card.Title>
              Website Live
            </Card.Title>
            <Card.Subtitle className="mt-3 sub-title">31 JULY 2020</Card.Subtitle>
            <Card.Text className="mt-3">
              <span className="highlighted-text">cadebe.dev</span>
              {' '}
              went live today!
              <br />
              <br />
              What started off as an experiment on how to upload content to AWS S3 and
              integrating an SSL certificate with AWS CloudFront, gradually morphed into a
              website.
            </Card.Text>
          </Card.Body>
        </Card>
      </a>
    )

    makeCard5 = () => (
      <a
        className="no-link"
        href="https://www.coursera.org/account/accomplishments/specialization/certificate/54T2J5Z5KWCN"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Card className="p-3 news-card">
          <Card.Body>
            <Card.Title>
              DeepLearning.AI Tensorflow Developer Coursera Certification
            </Card.Title>
            <Card.Subtitle className="mt-3 sub-title">13 APRIL 2020</Card.Subtitle>
            <Card.Text className="mt-3" as="div">
              <p className="inner-text">
                Completed all 4 courses of the
                DeepLearning.AI Tensorflow Developer Professional Certificate program:
              </p>
              <ul className="inner-text">
                <li>
                  Introduction to TensorFlow for Artificial Intelligence, Machine Learning,
                  and Deep Learning
                </li>
                <li>Convolutional Neural Networks in TensorFlow</li>
                <li>Natural Language Processing in TensorFlow</li>
                <li>Sequences, Time Series and Prediction</li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
      </a>
    )

    makeCard6 = () => (
      <a
        className="no-link"
        href="https://medium.com/@carla.debeer.uk/essential-anaconda-setup-kit-4b7e1fb803fc"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Card className="p-3 news-card">
          <Card.Body>
            <Card.Title>
              Essential Unix-based Anaconda Setup Guide
            </Card.Title>
            <Card.Subtitle className="mt-3 sub-title">8 FEBRUARY 2020</Card.Subtitle>
            <Card.Text className="mt-3">
              This article describes the essential steps required for installing Anaconda and
              creating a conda environment on a Unix-based OS.
            </Card.Text>
          </Card.Body>
        </Card>
      </a>
    )

    render() {
      return (
        <div>
          <Header pageType="news" />
          {this.setPageLayout()}
        </div>
      );
    }
}
