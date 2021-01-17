import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Banner from '../../banner/Banner';
import Header from '../../header/Header';
import PageSize from '../../../utils/enums';

import './Projects.scss';

import TSPImage from '../../../assets/images/projects/TSP.gif';
import ISSImage from '../../../assets/images/projects/ISS.png';
import naive from '../../../assets/images/projects/naive-bayes.png';
import som from '../../../assets/images/projects/SOM.png';
import matrix from '../../../assets/images/projects/matrix-1.png';
import mushroomAutoencoder from '../../../assets/images/projects/mushroom-autoencoder.png';
import mushroomGraph from '../../../assets/images/projects/mushroom-val-loss.png';
import selfOrganising from '../../../assets/images/projects/self-organising.png';
import cnn from '../../../assets/images/projects/cnn.png';
import imageSegmentation from '../../../assets/images/projects/image-segmentation.png';
import letterFrequencies from '../../../assets/images/projects/letter-frequencies.png';
import fourier from '../../../assets/images/projects/FourierTransformHeart.gif';

export default class Projects extends React.Component {
  setPageLayout() {
    if (window.innerWidth.valueOf() <= PageSize.MEDIUM) {
      return this.setLayoutMobile();
    }

    return this.setLayoutDesktop();
  }

    makeCard1 = () => (
      <a
        className="no-link"
        href="https://carla-de-beer.github.io/TSP-distance-calculator/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Card className="card-style">
          <Card.Img src={TSPImage} alt="Project Image" />
          <Card.Body>
            <Card.Title>TSP Distance Calculator</Card.Title>
            <Card.Text>
              This project demonstrates the use of a genetic algorithm to find an
              optimised solution to the Travelling Salesman Problem.
              The program dynamically reads in city
              data from a file and calculates the shortest distance it can find, linking all
              cities. The actual physical distance on the route, calculated as the Haversine
              distance, is also shown. Specifiable genetic algorithm parameters include
              the crossover rate, mutation rate, population size,
              max. no. iterations and elitism generation gap.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              Genetic Algorithm
              {' '}
              •
              {' '}
              JavaScript
            </small>
          </Card.Footer>
        </Card>
      </a>
    )

    makeCard2 = () => (
      <a
        className="no-link"
        href="https://carla-de-beer.github.io/ISS-tracker/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Card className="card-style">
          <Card.Img src={ISSImage} alt="Project Image" />
          <Card.Body>
            <Card.Title>ISS Tracker</Card.Title>
            <Card.Text>
              A real-time 2D tracker for the International Space Station.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              Data Visualisation
              {' '}
              •
              {' '}
              JavaScript
            </small>
          </Card.Footer>
        </Card>
      </a>
    )

    makeCard3 = () => (
      <a
        className="no-link"
        href="https://github.com/Carla-de-Beer/convolutional-neural-network-landscape-classifier"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Card className="card-style">
          <Card.Img src={cnn} alt="Project Image" />
          <Card.Body>
            <Card.Title>CNN Landscape Classifier</Card.Title>
            <Card.Text>
              A convolutional neural network built with TensorFlow/Keras to allow for landscape
              classification based on one of three categories: desert, forest and polar.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              Convolutional Neural Network
              {' '}
              •
              {' '}
              TensorFlow
            </small>
          </Card.Footer>
        </Card>
      </a>
    )

    makeCard4 = () => (
      <a
        className="no-link"
        href="https://vimeo.com/152473776"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Card className="card-style">
          <Card.Img src={matrix} alt="Project Image" className="centred-image" />
          <Card.Body>
            <Card.Title>Neural Network Matrix Visualisation</Card.Title>
            <Card.Text>
              Artificial neural networks operate on a highly non-linear model and are
              typically described as &quot;black boxes&quot;.
              This project is an attempt to peer
              into the black box model by visualising the weight changes
              affecting the hidden neurons, as well as the hidden neuron matrices themselves.
              A simple three-layer feedforward neural network was set up to differentiate
              between two classes of images: cartoons and photographs.
              From this study it became clear that there appears to be a general visual pattern
              to the hidden matrices of each of the image sets provided.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              Feed-Forward Neural Network
              {' '}
              •
              {' '}
              Java
            </small>
          </Card.Footer>
        </Card>
      </a>
    )

    makeCard5 = () => (
      <a
        className="no-link"
        href="https://github.com/Carla-de-Beer/tensorflow-2.x-projects/tree/master/autoencoder/mushroom-dataset-autoencoder"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Card className="card-style">
          <Card.Img src={mushroomAutoencoder} alt="Project Image" className="centred-image" />
          <Card.Body>
            <Card.Title>Autoencoder for Dimensionality Reduction</Card.Title>
            <Card.Text>
              This is a demo project that shows how an autoencoder, built with TensorFlow-Keras,
              can be used to graphically represent high-dimensional data into a 2D or 3D space
              for visualisation. The project uses the multivariate Mushroom Dataset.
              It consists of mushroom dimensions and appearances and classifies them as being either
              edible or poisonous. The autoencoder shows that the two classes,
              when reduced to a 2-dimensional space, are not linearly separable.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              Autoencoder
              {' '}
              •
              {' '}
              TensorFlow-Keras
            </small>
          </Card.Footer>
        </Card>
      </a>
    )

    makeCard6 = () => (
      <a
        className="no-link"
        href="https://github.com/Carla-de-Beer/tensorflow-2.x-projects/tree/master/dff/classifier/mushroom-dataset-classifier"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Card className="card-style">
          <Card.Img src={mushroomGraph} alt="Project Image" />
          <Card.Body>
            <Card.Title>Deep Neural Network Binary Classifier</Card.Title>
            <Card.Text>
              This is a demo project that shows how a deep neural network,
              built with TensorFlow-Keras, can be used as a binary classifier.
              The project uses the multivariate Mushroom Dataset that was previously analysed with
              the autoencoder. Despite the linearly inseparable nature of the high-dimensional data
              (as shown via the autoencoder study), the classifier has a high accuracy rate
              and has few difficulties in making an relatively accurate classification.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              Deep Neural Network
              {' '}
              •
              {' '}
              TensorFlow-Keras
            </small>
          </Card.Footer>
        </Card>
      </a>
    )

    makeCard7 = () => (
      <a
        className="no-link"
        href="https://github.com/Carla-de-Beer/naive-bayes-text-classifier"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Card className="card-style">
          <Card.Img src={naive} alt="Project Image" />
          <Card.Body>
            <Card.Title>Naive Bayes Text Classifier</Card.Title>
            <Card.Text>
              A Naive Bayes Text Classifier that classifies input text into one of two
              categories: either a BUSINESS article or a SPORT article.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              Bayes Classifier
              {' '}
              •
              {' '}
              JavaScript
            </small>
          </Card.Footer>
        </Card>
      </a>
    )

    makeCard8 = () => (
      <a
        className="no-link"
        href="https://github.com/Carla-de-Beer/python-projects/tree/master/python-scripts/letter-frequency-calculator"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Card className="card-style">
          <Card.Img variant="bottom" src={letterFrequencies} alt="Project Image" />
          <Card.Body>
            <Card.Title>Letter Frequency Calculator</Card.Title>
            <Card.Text>
              A Python program that reads in a set of text files and calculates
              the frequency occurrences of each alphabet letter,
              where the alphabet letters are listed in descending order of frequency.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              Data Visualisation
              {' '}
              •
              {' '}
              Python
            </small>
          </Card.Footer>
        </Card>
      </a>
    )

    makeCard9 = () => (
      <a
        className="no-link"
        href="https://vimeo.com/54726553"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Card className="card-style">
          <Card.Img variant="bottom" src={som} alt="Project Image" />
          <Card.Body>
            <Card.Title>Shape Mapping</Card.Title>
            <Card.Text>
              This project demonstrates how a self-organising map (SOM), a type of artificial
              neural network also known as a Kohonen map, maps a randomised 2D mesh
              over a 3D point cloud.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              Self-Organising Map
              {' '}
              •
              {' '}
              Processing
            </small>
          </Card.Footer>
        </Card>
      </a>
    )

    makeCard10 = () => (
      <a
        className="no-link"
        href="https://vimeo.com/85047354"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Card className="card-style">
          <Card.Img src={selfOrganising} alt="Project Image" />
          <Card.Body>
            <Card.Title>Self-Organising Structure</Card.Title>
            <Card.Text>
              Randomised autonomous agents self-organise to build a structured pattern
              based on their ability to seek out a target and to adjust their velocity
              and acceleration accordingly.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              Boids
              {' '}
              •
              {' '}
              Processing
            </small>
          </Card.Footer>
        </Card>
      </a>
    )

    makeCard11 = () => (
      <a
        className="no-link"
        href="https://github.com/Carla-de-Beer/processing-projects/tree/master/fourier-transformations/FourierTransformHeart"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Card className="card-style">
          <Card.Img variant="bottom" src={fourier} alt="Project Image" />
          <Card.Body>
            <Card.Title>Discrete Fourier Transformation of a Heart Curve</Card.Title>
            <Card.Text>
              Discrete Fourier Transformation with epicycles using a heart curve as
              input.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              Mathematical Transform
              {' '}
              •
              {' '}
              Processing
            </small>
          </Card.Footer>
        </Card>
      </a>
    )

    makeCard12 = () => (
      <a
        className="no-link"
        href="https://github.com/Carla-de-Beer/processing-projects/tree/master/image-processing/ImageSegmentationKNN"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Card className="card-style">
          <Card.Img src={imageSegmentation} alt="Project Image" />
          <Card.Body>
            <Card.Title>Image Segmentation with K-Nearest Neighbour</Card.Title>
            <Card.Text>
              An image segmentation example using the k-nearest neighbour algorithm.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              Image Segmentation
              {' '}
              •
              {' '}
              Processing
            </small>
          </Card.Footer>
        </Card>
      </a>
    )

    setCommon = () => (
      <div>
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
            This is a selection of my own projects
            I have worked on over the past few years.
            Whilst most of my regular work involves Java development,
            these projects reflect my interest beyond the world of enterprise development,
            and usually contain a strong focus on machine learning.
            In the search for finding patterns,
            many of these project often also endevour to make the
            invisible visible via various means.
          </p>
        </div>
      </div>
    )

    setLayoutMobile = () => (
      <div className="pb-3">
        <Header pageType="projects" />
        <div className="projects-wrapper">
          {this.setCommon()}
          <div className="mt-lg-2 mt-md-2 mt-2 pt-lg-2 pt-md-2 pt-3 project-card">
            <div className="mt-3">
              <Row className="mt-sm-4 mt-md-4">
                <Col>
                  {this.makeCard1()}
                </Col>
              </Row>
            </div>
            <div className="mt-3">
              <Row className="mt-sm-3 mt-md-3">
                <Col>
                  {this.makeCard2()}
                </Col>
              </Row>
            </div>
            <div className="mt-3">
              <Row className="mt-sm-3 mt-md-3">
                <Col>
                  {this.makeCard3()}
                </Col>
              </Row>
            </div>
            <div className="mt-3">
              <Row className="mt-sm-3 mt-md-3">
                <Col>
                  {this.makeCard4()}
                </Col>
              </Row>
            </div>
            <div className="mt-3">
              <Row className="mt-sm-3 mt-md-3">
                <Col>
                  {this.makeCard5()}
                </Col>
              </Row>
            </div>
            <div className="mt-3">
              <Row className="mt-sm-3 mt-md-3">
                <Col>
                  {this.makeCard6()}
                </Col>
              </Row>
            </div>
            <div className="mt-3">
              <Row className="mt-sm-3 mt-md-3">
                <Col>
                  {this.makeCard7()}
                </Col>
              </Row>
            </div>
            <div className="mt-3">
              <Row className="mt-sm-3 mt-md-3">
                <Col>
                  {this.makeCard8()}
                </Col>
              </Row>
            </div>
            <div className="mt-3">
              <Row className="mt-sm-3 mt-md-3">
                <Col>
                  {this.makeCard9()}
                </Col>
              </Row>
            </div>
            <div className="mt-3">
              <Row className="mt-sm-3 mt-md-3">
                <Col>
                  {this.makeCard10()}
                </Col>
              </Row>
            </div>
            <div className="mt-3">
              <Row className="mt-sm-3 mt-md-3">
                <Col>
                  {this.makeCard11()}
                </Col>
              </Row>
            </div>
            <div className="mt-3">
              <Row className="mt-sm-3 mt-md-3" style={{ marginBottom: '-15px' }}>
                <Col>
                  {this.makeCard12()}
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    )

    setLayoutDesktop = () => (
      <div className="pb-5">
        <Header pageType="projects" />
        <div className="projects-wrapper">
          {this.setCommon()}
          <div className="mt-xl-4 mt-lg-4 mt-md-4 mt-4 pt-2 project-card">
            <Row>
              <Col className="project-card left-card">
                {this.makeCard1()}
              </Col>
              <Col className="project-card right-card">
                {this.makeCard2()}
              </Col>
            </Row>
            <div className="project-card mt-5">
              <Row className="project-card">
                <Col className="project-card left-card">
                  {this.makeCard3()}
                </Col>
                <Col className="project-card right-card">
                  {this.makeCard4()}
                </Col>
              </Row>
            </div>
            <div className="project-card mt-5">
              <Row className="project-card">
                <Col className="project-card left-card">
                  {this.makeCard5()}
                </Col>
                <Col className="project-card right-card">
                  {this.makeCard6()}
                </Col>
              </Row>
            </div>
            <div className="project-card mt-5">
              <Row className="project-card">
                <Col className="project-card left-card">
                  {this.makeCard7()}
                </Col>
                <Col className="project-card right-card">
                  {this.makeCard8()}
                </Col>
              </Row>
            </div>
            <div className="project-card mt-5">
              <Row className="project-card">
                <Col className="project-card left-card">
                  {this.makeCard9()}
                </Col>
                <Col className="project-card right-card">
                  {this.makeCard10()}
                </Col>
              </Row>
            </div>
            <div className="project-card mt-5">
              <Row className="project-card">
                <Col className="project-card left-card">
                  {this.makeCard11()}
                </Col>
                <Col className="project-card right-card">
                  {this.makeCard12()}
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    )

    render() {
      return (
        this.setPageLayout()
      );
    }
}
