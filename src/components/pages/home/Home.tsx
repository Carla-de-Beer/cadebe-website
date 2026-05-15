import React from 'react';
import Card from 'react-bootstrap/Card';

import './Home.scss';
import '../../../style/_fonts.scss';
import Banner from '../../banner/Banner';
import Header from '../../header/Header';
import { getLayoutSize } from '../../../utils/pageSize';

import photoImageSeg from '../../../assets/images/home/result-image-seg.jpg';
import photoImageDotScreen from '../../../assets/images/home/result-dot-screen.jpg';
import photoImageThreshold from '../../../assets/images/home/result-threshold.jpg';
import photoImageVoronoi from '../../../assets/images/home/result-voronoi.jpg';

const sizeRatio = '40%';
const sizeRatioMobile = '80%';

function HomeBody() {
  return (
    <div>
      <Card className="card-tile content-width">
        <Card.Body>
          <div className="pull-quote-wrapper mt-4">
            <blockquote className="pull-quote">
              This is my digital space: a place to share selected projects, experiments and thoughts
              from the past few years
            </blockquote>
          </div>
          <div className="two-column-text">
            <p style={{ breakAfter: 'column' }}>
              I&apos;m <strong>Carla de Beer</strong>, a software engineer with over ten years of
              experience in backend and full‑stack web development. I specialise in designing and
              implementing enterprise‑grade applications, with a focus on Java/Spring, cloud‑native
              architectures and DevOps practices. I&apos;ve worked across domains such as logistics,
              geospatial information systems, financial services and data protection and compliance,
              often in highly regulated environments.
              <br />
              <br />
              What began as a small experiment – hosting content on AWS S3 and wiring up SSL with
              AWS CloudFront – has grown into this fully fledged website, expanded as I deepened my
              experience with AWS and picked up a few certifications along the way.
            </p>
            <p>
              This is my digital space: a place to share selected projects, experiments and thoughts
              from the past few years. Here you&apos;ll find examples of my work in Java, Spring,
              AWS and machine learning, along with news and blog posts on software engineering,
              cloud and AI – a snapshot of what I&apos;ve been building, exploring and visualising
              in code and data.
            </p>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

function LayoutMobile() {
  return (
    <div>
      <Header pageType="home" />
      <div className="home-wrapper pb-3">
        <div className="text-fields box">
          <div>
            <div data-cy="welcome-banner-mobile">
              <Banner title="WELCOME" />
            </div>
            <div className="text-fields mt-5">
              <p className="high-light-1">Software Engineering • Backend Development</p>
              <p className="high-light-1">Cloud • Machine Learning</p>
            </div>
            <div className="card-tile text-fields content-width mt-5">
              <p>
                A personal space for software engineering, cloud architecture and applied machine
                learning – built and iterated over the years.
              </p>
            </div>
            <div className="mt-4 pt-2" />
            <div className="images">
              <img
                src={photoImageSeg}
                style={{ maxWidth: sizeRatioMobile }}
                alt="K-nearest neighbour segmentation"
              />
            </div>
            <div className="images">
              <img
                src={photoImageVoronoi}
                style={{ maxWidth: sizeRatioMobile }}
                alt="Voronoi tessellation study"
              />
            </div>
            <div className="images">
              <img
                src={photoImageThreshold}
                style={{ maxWidth: sizeRatioMobile }}
                alt="Thresholding processing study"
              />
            </div>
            <div className="images">
              <img
                src={photoImageDotScreen}
                style={{ maxWidth: sizeRatioMobile }}
                alt="Dot-screening processing study"
              />
              <p className="caption-text">Image Processing Studies</p>
              <p className="caption-text-mobile">
                Image Segmentation (1,2) &middot; Voronoi Tessellation (3,4)
              </p>
              <p className="caption-text-mobile">
                Circle Packing (5) &middot; Thresholding (6,7) &middot; Dot-Screening (8).
                <br />
                Exploring patterns in complex systems – one of the ways I think about software, data
                and AI.
              </p>
              <p className="caption-text-mobile">Built with Processing.</p>
            </div>
            <HomeBody />
          </div>
        </div>
      </div>
    </div>
  );
}

function LayoutDesktop() {
  return (
    <div>
      <Header pageType="home" />
      <div className="home-wrapper pb-3">
        <div className="text-fields box">
          <div>
            <div data-cy="welcome-banner-desktop">
              <Banner title="WELCOME" />
            </div>
            <div className="text-fields mt-5">
              <p className="high-light-1">Software Engineering • Backend Development</p>
              <p className="high-light-1">Cloud • Machine Learning</p>
            </div>
            <div className="card-tile text-fields content-width mt-5">
              <p>
                A personal space for software engineering, cloud architecture and applied machine
                learning – built and iterated over the years.{' '}
              </p>
            </div>
            <div className="mt-4 pt-2" />
            <div className="images">
              <img
                src={photoImageSeg}
                style={{ maxWidth: sizeRatio }}
                alt="K-nearest neighbour segmentation"
              />
              <img
                src={photoImageVoronoi}
                style={{ maxWidth: sizeRatio }}
                alt="Voronoi tessellation study"
              />
            </div>
            <div className="images">
              <img
                src={photoImageThreshold}
                style={{ maxWidth: sizeRatio }}
                alt="Thresholding processing study"
              />
              <img
                src={photoImageDotScreen}
                style={{ maxWidth: sizeRatio }}
                alt="Dot-screening processing study"
              />
              <p className="caption-text">
                Image Processing Studies | Image Segmentation (1,2) &middot; Voronoi Tessellation
                (3,4) &middot; Circle Packing (5) &middot; Thresholding (6,7) &middot;
                Dot-Screening(8).
                <br />
                Exploring patterns in complex systems – one of the ways I think about software, data
                and AI.
                <br />
                Built with Processing.
              </p>
            </div>
            <div className="mt-4">
              <HomeBody />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const layout = getLayoutSize();
  return (
    <div>{layout === 'mobile' || layout === 'tablet' ? <LayoutMobile /> : <LayoutDesktop />}</div>
  );
}
