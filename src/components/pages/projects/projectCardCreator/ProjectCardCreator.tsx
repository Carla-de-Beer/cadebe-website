import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { getLayoutSize } from '../../../../utils/pageSize';
import Banner from '../../../banner/Banner';
import Header from '../../../header/Header';
import { ProjectDataProps, ProjectItem } from '../../../../model/ProjectDataProps';

import './ProjectCardCreator.scss';

import TSPImage from '../../../../assets/images/projects/TSP.gif';
import ISSImage from '../../../../assets/images/projects/ISS.png';
import som from '../../../../assets/images/projects/shape-mapping.gif';
import selfOrganising from '../../../../assets/images/projects/self-organising.png';
import awsBedrockTextToImage from '../../../../assets/images/projects/birdie-laptop.png';
import landscapeClassifierCnn from '../../../../assets/images/projects/cnn.png';
import cartoonsPhotos from '../../../../assets/images/projects/cartoons-photos.png';
import cartoonsPhotosFlask from '../../../../assets/images/projects/cartoons-photos-flask.png';
import svmKaggle from '../../../../assets/images/projects/SVM-dataset.png';
import autoencoderMushroomDataset from '../../../../assets/images/projects/mushroom-autoencoder.png';
import imageSegmentation from '../../../../assets/images/projects/image-segmentation.png';
import naive from '../../../../assets/images/projects/naive-bayes.png';
import dummy from '../../../../assets/images/shared/dummy.png';

function bindImages(id: number) {
  const alt = 'Project Image';
  switch (id) {
    case 0:
      return <Card.Img className="image-container" src={TSPImage} alt={alt} />;
    case 1:
      return <Card.Img className="image-container" src={ISSImage} alt={alt} />;
    case 2:
      return <Card.Img className="image-container" src={som} alt={alt} />;
    case 3:
      return <Card.Img className="image-container" src={selfOrganising} alt={alt} />;
    case 4:
      return <Card.Img className="image-container" src={awsBedrockTextToImage} alt={alt} />;
    case 5:
      return <Card.Img className="image-container" src={landscapeClassifierCnn} alt={alt} />;
    case 6:
      return <Card.Img className="image-container" src={cartoonsPhotos} alt={alt} />;
    case 7:
      return <Card.Img className="image-container" src={cartoonsPhotosFlask} alt={alt} />;
    case 8:
      return <Card.Img className="image-container" src={svmKaggle} alt={alt} />;
    case 9:
      return <Card.Img className="image-container" src={autoencoderMushroomDataset} alt={alt} />;
    case 10:
      return <Card.Img className="image-container" src={imageSegmentation} alt={alt} />;
    case 11:
      return <Card.Img className="image-container" src={naive} alt={alt} />;
    default:
      return <Card.Img className="image-container" src={dummy} alt={alt} />;
  }
}

function makeCard(item: ProjectItem) {
  return (
    <a className="no-link" href={item.url} target="_blank" rel="noopener noreferrer">
      <Card className="card-style">
        {bindImages(item.id)}
        <Card.Body className="text-container">
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>
            {/* eslint-disable-next-line react/no-danger */}
            <div className="dangerous" dangerouslySetInnerHTML={{ __html: item.text }} />
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">
            {item.footerClass} • {item.footerLanguage}
          </small>
        </Card.Footer>
      </Card>
    </a>
  );
}

function ProjectCommon() {
  return (
    <div data-cy="projects-banner">
      <Banner title="PROJECTS" />
      <div className="mt-4">
        <div className="card-tile text-fields" style={{ width: '80%' }}>
          <div className="text-fields mt-5">
            <p className="high-light-1">Machine Learning • Swarm Intelligence</p>
            <p className="high-light-1">Data Visualisation • Image Processing</p>
            <p className="high-light-1">Mathematics</p>
          </div>
          <div className="card-tile text-fields mt-5" style={{ width: '80%' }}>
            <p>
              This collection showcases a selection of my code-based projects from the past few
              years.
            </p>
            <p>
              While my day-to-day work focuses on Java development for enterprise software, these
              projects highlight my broader interests. Many explore machine learning and my
              curiosity for uncovering patterns in data. Others experiment with making the invisible
              visible through visualisations and different ways of presenting information, extending
              beyond traditional software development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LayoutMobile({ projectContent }: ProjectDataProps) {
  const rows = projectContent.map((item, i) => (
    <div
      className="mt-3"
      key={item.id}
      style={i === projectContent.length - 1 ? { marginBottom: '-15px' } : {}}
    >
      <Row className={i === 0 ? 'g-0 mt-sm-4 mt-md-4' : 'g-0 mt-sm-3 mt-md-3'}>
        <Col>{makeCard(item)}</Col>
      </Row>
    </div>
  ));

  return (
    <div className="pb-3">
      <Header pageType="projects" />
      <div className="projects-wrapper">
        <ProjectCommon />
        <div className="mt-lg-2 mt-md-2 mt-2 pt-lg-2 pt-md-2 pt-3 project-card">{rows}</div>
      </div>
    </div>
  );
}

function LayoutDesktop({ projectContent }: ProjectDataProps) {
  const rows = [];
  for (let i = 0; i < projectContent.length; i += 2) {
    const left = projectContent[i];
    const right = projectContent[i + 1];
    rows.push(
      <div key={left.id} style={{ display: 'flex', gap: '1rem', width: '100%' }}>
        <div style={{ flex: 1 }} className="project-card">
          {makeCard(left)}
        </div>
        {right && (
          <div style={{ flex: 1 }} className="project-card">
            {makeCard(right)}
          </div>
        )}
      </div>,
    );
  }

  return (
    <div className="pb-5">
      <Header pageType="projects" />
      <div className="projects-wrapper">
        <ProjectCommon />
        <div
          className="mt-4 pt-2"
          style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
          {rows}
        </div>
      </div>
    </div>
  );
}

export default function ProjectCardCreator({ projectContent }: ProjectDataProps) {
  const layout = getLayoutSize();
  if (layout === 'mobile' || layout === 'tablet') {
    return <LayoutMobile projectContent={projectContent} />;
  }
  return <LayoutDesktop projectContent={projectContent} />;
}
