import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import PageSize from '../../../../utils/enums';
import Banner from '../../../banner/Banner';
import Header from '../../../header/Header';

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

export default class ProjectCardCreator extends Component<any, IProjectDataState> {
  constructor(props: IProjectDataState) {
    super(props);

    this.state = {
      projectContent: props.projectContent,
    };
  }

  setPageLayout() {
    const { projectContent } = this.state;
    if (window.innerWidth.valueOf() <= PageSize.MEDIUM) {
      return this.setLayoutMobile(projectContent);
    }

    return this.setLayoutDesktop(projectContent);
  }

  setCommon = () => (
    <div data-cy="projects-banner">
      <Banner title="PROJECTS" />
      <div className="text-fields mt-5">
        <p className="high-light-1">Machine Learning • Swarm Intelligence</p>
        <p className="high-light-1">Data Visualisation • Image Processing</p>
        <p className="high-light-1">Mathematics</p>
      </div>
      <div
        className="card-tile text-fields mt-5"
        style={{ width: '80%' }}
      >
        <p>
          This collection showcases a selection of my projects developed over the past few years.
        </p>
        <p>
          While my primary focus in day-to-day work revolves around
          Java development for enterprise-level software,
          these projects reveal my broader interests.
          Many of them delve into the realm of machine learning,
          reflecting my passion for uncovering patterns.
          Additionally, these endeavors often aim to reveal the invisible through various means,
          emphasising my exploration of visualisations and other
          dimensions beyond conventional software development.
        </p>
      </div>
    </div>
  );

  setLayoutMobile({ ...projectContent }) {
    const innerArray = [];
    const outerArray = [];

    if (Object.keys(projectContent).length > 1) {
      for (let i = 0; i < Object.keys(projectContent).length; i += 1) {
        innerArray.push(
          <Col>
            { this.makeCard(
              projectContent[i].id,
              projectContent[i].url,
              projectContent[i].title,
              projectContent[i].text,
              projectContent[i].footerClass,
              projectContent[i].footerLanguage,
            ) }
          </Col>,
        );
      }

      for (let i = 0; i < innerArray.length; i += 1) {
        if (i === 0) {
          outerArray.push(
            <div className="mt-3" key={projectContent[i].id}>
              <Row className="mt-sm-4 mt-md-4">
                { innerArray[i] }
              </Row>
            </div>,
          );
        } else if (i === innerArray.length - 1) {
          outerArray.push(
            <div className="mt-3" key={projectContent[i].id}>
              <Row className="mt-sm-3 mt-md-3" style={{ marginBottom: '-15px' }}>
                { innerArray[i] }
              </Row>
            </div>,
          );
        } else {
          outerArray.push(
            <div className="mt-3" key={projectContent[i].id}>
              <Row className="mt-sm-3 mt-md-3">
                { innerArray[i] }
              </Row>
            </div>,
          );
        }
      }
    }

    return (
      <div className="pb-3">
        <Header pageType="projects" />
        <div className="projects-wrapper">
          { this.setCommon() }
          <div className="mt-lg-2 mt-md-2 mt-2 pt-lg-2 pt-md-2 pt-3 project-card">
            { outerArray }
          </div>
        </div>
      </div>
    );
  }

  setLayoutDesktop({ ...projectContent }) {
    const innerArray = [];
    const outerArray = [];

    if (Object.keys(projectContent).length > 1) {
      for (let i = 0; i < Object.keys(projectContent).length; i += 1) {
        if (i % 2 === 0) {
          innerArray.push(
            <Col className="project-card left-card pb-5">
              { this.makeCard(
                projectContent[i].id,
                projectContent[i].url,
                projectContent[i].title,
                projectContent[i].text,
                projectContent[i].footerClass,
                projectContent[i].footerLanguage,
              ) }
            </Col>,
          );
        } else {
          innerArray.push(
            <Col className="project-card right-card pb-5">
              {this.makeCard(
                projectContent[i].id,
                projectContent[i].url,
                projectContent[i].title,
                projectContent[i].text,
                projectContent[i].footerClass,
                projectContent[i].footerLanguage,
              )}
            </Col>,
          );
        }
      }
    }

    for (let i = 0; i < innerArray.length; i += 2) {
      if (i < 2) {
        outerArray.push(
          <Row key={projectContent[i].id}>
            { innerArray[i] }
            { innerArray[i + 1] }
          </Row>,
        );
      } else {
        outerArray.push(
          <div className="project-card mt-4" key={projectContent[i].id}>
            <Row className="project-card">
              { innerArray[i] }
              { innerArray[i + 1] }
            </Row>
          </div>,
        );
      }
    }

    return (
      <div className="pb-5">
        <Header pageType="projects" />
        <div className="projects-wrapper">
          { this.setCommon() }
          <div className="mt-xl-4 mt-lg-4 mt-md-4 mt-4 pt-2 project-card">
            { outerArray }
          </div>
        </div>
      </div>
    );
  }

  bindImages = (id: number) => {
    const alt = 'Project Image';

    switch (id) {
      case 0:
        return (<Card.Img className="image-container" src={TSPImage} alt={alt} />);
      case 1:
        return (<Card.Img className="image-container" src={ISSImage} alt={alt} />);
      case 2:
        return (<Card.Img className="image-container" src={som} alt={alt} />);
      case 3:
        return (<Card.Img className="image-container" src={selfOrganising} alt={alt} />);
      case 4:
        return (<Card.Img className="image-container" src={awsBedrockTextToImage} alt={alt} />);
      case 5:
        return (<Card.Img className="image-container" src={landscapeClassifierCnn} alt={alt} />);
      case 6:
        return (<Card.Img className="image-container" src={cartoonsPhotos} alt={alt} />);
      case 7:
        return (<Card.Img className="image-container" src={cartoonsPhotosFlask} alt={alt} />);
      case 8:
        return (<Card.Img className="image-container" src={svmKaggle} alt={alt} />);
      case 9:
        return (<Card.Img className="image-container" src={autoencoderMushroomDataset} alt={alt} />);
      case 10:
        return (<Card.Img className="image-container" src={imageSegmentation} alt={alt} />);
      case 11:
        return (<Card.Img className="image-container" src={naive} alt={alt} />);
      default:
        return (<Card.Img className="image-container" src={dummy} alt={alt} />);
    }
  };

  makeCard(
    id: number,
    url: string,
    title: string,
    text: string,
    footerClass: string,
    footerLang: string,
  ) {
    return (
      <a
        className="no-link"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Card className="card-style">
          { this.bindImages(id) }
          <Card.Body className="text-container">
            <Card.Title>{ title }</Card.Title>
            <Card.Text>
              {/* eslint-disable-next-line react/no-danger */}
              <div className="dangerous" dangerouslySetInnerHTML={{ __html: text }} />
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              { footerClass }
              {' '}
              •
              {' '}
              { footerLang }
            </small>
          </Card.Footer>
        </Card>
      </a>
    );
  }

  render() {
    return (
      this.setPageLayout()
    );
  }
}
