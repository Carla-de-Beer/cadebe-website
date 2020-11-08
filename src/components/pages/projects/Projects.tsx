import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import CardColumns from 'react-bootstrap/CardDeck';

import './Projects.scss';

import TSPImage from '../../../assets/images/TSP.gif';
import ISSImage from '../../../assets/images/ISS.png';
import naive from '../../../assets/images/naive-bayes.png';
import som from '../../../assets/images/SOM.png';
import matrix from '../../../assets/images/matrix-1.png';
import selfOrganising from '../../../assets/images/self-organising.png';
import cnn from '../../../assets/images/cnn.png';
import imageSegmentation from '../../../assets/images/image-segmentation.png';
import letterFrequencies from '../../../assets/images/letter-frequencies.png';
import fourier from '../../../assets/images/FourierTransformHeart.gif';

export default function Projects() {
  return (
    <div className="projects-wrapper">
      <div className="text-fields mt-5">
        <p className="mt-2 high-light">PROJECTS</p>
      </div>
      <div className="card-tile text-fields mt-5" style={{ width: '80%' }}>
        <p>
          This is a selection of &quot;side-projects&quot; I have worked on over the past few years.
          Whilst most of my regular work involves Java development,
          these projects reflect my interest beyond the world of enterprise development,
          and usually contain a strong focus on machine learning.
          In the search for finding patterns, many of these project often also endevour to make the
          invisible visible via various means.
        </p>
      </div>
      <CardColumns className="mt-5">
        <Row>
          <Col className="mt-3 left-card">
            <Card className="p-3">
              <a
                href="https://carla-de-beer.github.io/TSP-distance-calculator/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card.Img src={TSPImage} alt="Project Image" />
              </a>
              <Card.Body>
                <Card.Title>TSP Distance Calculator</Card.Title>
                <Card.Text>
                  This project demonstrates the use of a genetic algorithm to find an optimised
                  solution to the Travelling Salesman Problem. The program dynamically reads in
                  city
                  data from a file and calculates the shortest distance it can find, linking all
                  cities. The actual physical distance on the route, calculated as the Haversine
                  distance, is also shown. Specifiable genetic algorithm parameters include the
                  crossover rate, mutation rate, population size, max. no. iterations and elitism
                  generation gap.
                </Card.Text>
                <Button
                  variant="light"
                  href="https://carla-de-beer.github.io/TSP-distance-calculator/"
                  target="_blank"
                >
                  GitHub
                </Button>
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
          </Col>
          <Col className="mt-3 right-card">
            <Card className="p-3">
              <a href="https://carla-de-beer.github.io/ISS-tracker/" target="_blank" rel="noopener noreferrer">
                <Card.Img src={ISSImage} alt="Project Image" />
              </a>
              <Card.Body>
                <Card.Title>ISS Tracker</Card.Title>
                <Card.Text>
                  A real-time 2D tracker for the International Space Station.
                </Card.Text>
                <Button
                  variant="light"
                  href="https://carla-de-beer.github.io/ISS-tracker/"
                  target="_blank"
                >
                  Web
                </Button>
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
          </Col>
        </Row>
        <Row>
          <Col className="mt-4">
            <Card className="p-3">
              <a href="https://vimeo.com/152473776" target="_blank" rel="noopener noreferrer">
                <Card.Img src={matrix} alt="Project Image" />
              </a>
              <Card.Body>
                <Card.Title>Neural Network Matrix Visualisation</Card.Title>
                <Card.Text>
                  Artificial neural networks operate on a highly non-linear model and are typically
                  described as &quot;black boxes&quot;. This project is an attempt to peer into the
                  black box model by visualising the weight changes affecting the hidden neurons,
                  as well as the hidden neuron matrices themselves. A simple three-layer
                  feedforward neural network was set up to differentiate between two classes
                  of images: cartoons and photographs. From this study it became clear that
                  there appears to be a general visual pattern to the hidden matrices of each
                  of the image sets provided.
                </Card.Text>
                <Button
                  variant="light"
                  href="https://vimeo.com/152473776"
                  target="_blank"
                >
                  Video
                </Button>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  Neural Network
                  {' '}
                  •
                  {' '}
                  Java
                </small>
              </Card.Footer>
            </Card>
          </Col>
          <Col className="mt-4 middle-card">
            <Card className="p-3">
              <a
                href="https://github.com/Carla-de-Beer/naive-bayesian-text-classifier"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card.Img src={naive} alt="Project Image" />
              </a>
              <Card.Body>
                <Card.Title>Naive Bayes Text Classifier</Card.Title>
                <Card.Text>
                  A Naive Bayes Text Classifier that classifies input text into one of two
                  categories: either a BUSINESS article or a SPORT article.
                </Card.Text>
                <Button
                  variant="light"
                  href="https://github.com/Carla-de-Beer/naive-bayesian-text-classifier"
                  target="_blank"
                >
                  GitHub
                </Button>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  Machine Learning
                  {' '}
                  •
                  {' '}
                  JavaScript
                </small>
              </Card.Footer>
            </Card>
          </Col>
          <Col className="mt-4">
            <Card className="p-3">
              <a
                href="https://github.com/Carla-de-Beer/convolutional-neural-network-landscape-classifier"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card.Img src={cnn} alt="Project Image" />
              </a>
              <Card.Body>
                <Card.Title>CNN Landscape Classifier</Card.Title>
                <Card.Text>
                  A convolutional neural network built with TensorFlow/Keras to allow for landscape
                  classification based on one of three categories: desert, forest and polar.
                </Card.Text>
                <Button
                  variant="light"
                  href="https://github.com/Carla-de-Beer/convolutional-neural-network-landscape-classifier"
                  target="_blank"
                >
                  GitHub
                </Button>
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
          </Col>
        </Row>
        <Row>
          <Col className="mt-4 left-card">
            <Card className="p-3">
              <a
                href="https://vimeo.com/54726553"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card.Img variant="bottom" src={som} alt="Project Image" />
              </a>
              <Card.Body>
                <Card.Title>Shape Mapping</Card.Title>
                <Card.Text>
                  This project demonstrates how a self-organising map (SOM), a type of artificial
                  neural network also known as a Kohonen map, maps a randomised 2D mesh over a 3D
                  point cloud.
                </Card.Text>
                <Button variant="light" href="https://vimeo.com/54726553" target="_blank">
                  Video
                </Button>
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
          </Col>
          <Col className="mt-4 right-card">
            <Card className="p-3">
              <a
                href="https://vimeo.com/85047354"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card.Img src={selfOrganising} alt="Project Image" />
              </a>
              <Card.Body>
                <Card.Title>Self-Organising Structure</Card.Title>
                <Card.Text>
                  Randomised autonomous agents self-organise to build a structured pattern based on
                  their ability to seek out a target and to adjust their velocity and acceleration
                  accordingly.
                </Card.Text>
                <Button variant="light" href="https://vimeo.com/85047354" target="_blank">
                  Video
                </Button>
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
          </Col>
        </Row>
        <Row>
          <Col className="mt-4">
            <Card className="p-3">
              <a
                href="https://github.com/Carla-de-Beer/processing-projects/tree/master/fourier-transformations/FourierTransformHeart"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card.Img variant="bottom" src={fourier} alt="Project Image" />
              </a>
              <Card.Body>
                <Card.Title>Discrete Fourier Transformation of a Heart Curve</Card.Title>
                <Card.Text>
                  Discrete Fourier Transformation with epicycles using a heart curve as input.
                </Card.Text>
                <Button
                  variant="light"
                  href="https://github.com/Carla-de-Beer/processing-projects/tree/master/fourier-transformations/FourierTransformHeart"
                  target="_blank"
                >
                  GitHub
                </Button>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  Fourier Transformation
                  {' '}
                  •
                  {' '}
                  Processing
                </small>
              </Card.Footer>
            </Card>
          </Col>
          <Col className="mt-4 middle-card">
            <Card className="p-3">
              <a
                href="https://github.com/Carla-de-Beer/processing-projects/tree/master/image-processing/ImageSegmentationKNN"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card.Img src={imageSegmentation} alt="Project Image" />
              </a>
              <Card.Body>
                <Card.Title>Image Segmentation with K-Nearest Neighbour</Card.Title>
                <Card.Text>
                  An image segmentation example using the k-nearest neighbour algorithm.
                </Card.Text>
                <Button
                  variant="light"
                  href="https://github.com/Carla-de-Beer/processing-projects/tree/master/image-processing/ImageSegmentationKNN"
                  target="_blank"
                >
                  GitHub
                </Button>
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
          </Col>
          <Col className="mt-4">
            <Card className="p-3">
              <a
                href="https://github.com/Carla-de-Beer/python-projects/tree/master/python-scripts/letter-frequency-calculator"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card.Img variant="bottom" src={letterFrequencies} alt="Project Image" />
              </a>
              <Card.Body>
                <Card.Title>Letter Frequency Calculator</Card.Title>
                <Card.Text>
                  A Python program that reads in a set of text files and calculates
                  the frequency occurrences of each alphabet letter,
                  where the alphabet letters are listed in descending order of frequency.
                </Card.Text>
                <Button
                  variant="light"
                  href="https://github.com/Carla-de-Beer/python-projects/tree/master/python-scripts/letter-frequency-calculator"
                  target="_blank"
                >
                  GitHub
                </Button>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  Fourier Transformation
                  {' '}
                  •
                  {' '}
                  Python
                </small>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </CardColumns>
    </div>
  );
}
