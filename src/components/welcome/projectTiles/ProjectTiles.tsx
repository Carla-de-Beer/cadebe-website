import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import CardColumns from 'react-bootstrap/CardDeck';
import './ProjectTiles.scss';

import TSPImage from '../../../assets/images/TSP.gif';
import ISSImage from '../../../assets/images/ISS.png';
import earthquakeImage from '../../../assets/images/earthquake.png';
import naive from '../../../assets/images/naive-bayes.png';
import som from '../../../assets/images/SOM.png';
import matrix from '../../../assets/images/matrix-1.png';
import selfOrganising from '../../../assets/images/self-organising.png';
import polar from '../../../assets/images/polar.png';

export default class ProjectCard extends React.Component {
    render() {
        return (
            <CardColumns className="project-tiles-wrapper">
                <Row className='m-lg-5 box'>
                    <Col>
                        <Card className="p-4">
                            <Card.Img variant="bottom" src={som} alt="Project image"/>
                            <Card.Body>
                                <Card.Title>Shape Mapping</Card.Title>
                                <Card.Text>
                                    This project demonstrates how a self-organising map (SOM), a type of artificial
                                    neural network also known as a Kohonen map, maps a randomised 2D mesh over a 3D
                                    point cloud.
                                </Card.Text>
                                <Button variant="light" href="https://vimeo.com/54726553" target="_blank">
                                    Project Link</Button>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Self-Organising Map</small>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="p-4">
                            <Card.Img src={selfOrganising} alt="Project image"/>
                            <Card.Body>
                                <Card.Title>Self-Organising Structure</Card.Title>
                                <Card.Text>
                                    Randomised autonomous agents self-organise to build a structured pattern based on
                                    their ability to seek out a target and to adjust their velocity and acceleration
                                    accordingly.
                                </Card.Text>
                                <Button variant="light" href="https://vimeo.com/85047354" target="_blank">
                                    Project Link</Button>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Boids</small>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="p-4">
                            <Card.Img variant="bottom" src={earthquakeImage} alt="Project image"/>
                            <Card.Body>
                                <Card.Title>Earthquake Data Visualisation</Card.Title>
                                <Card.Text>
                                    Visualisation of earthquake data by means of a Mercator projection. Data obtained
                                    from the US Geological Survey website and the map from MapBox.
                                </Card.Text>
                                <Button variant="light"
                                        href="https://github.com/Carla-de-Beer/p5js-projects/tree/master/earthquake-data-visualisation"
                                        target="_blank">
                                    Project Link</Button>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Data Visualisation</small>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
                <Row className='ml-lg-5 mr-lg-5 mb-lg-5 box'>
                    <Col>
                        <Card className="p-4">
                            <Card.Img src={TSPImage} alt="Project image"/>
                            <Card.Body>
                                <Card.Title>TSP Distance Calculator</Card.Title>
                                <Card.Text>
                                    This project demonstrates the use of a genetic algorithm to find an optimised
                                    solution to the Travelling Salesman Problem. The program dynamically reads in city
                                    data from a file and calculates the shortest distance it can find, linking all
                                    cities. The actual physical distance on the route, calculated as the Haversine
                                    distance, is also shown. Specifiable genetic algorithm parameters include the
                                    crossover rate, mutation rate, population size, max. no. iterations and elitism
                                    generation gap.
                                </Card.Text>
                                <Button variant="light" href="https://carla-de-beer.github.io/TSP-distance-calculator/"
                                        target="_blank">
                                    Project Link</Button>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Genetic Algorithm</small>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="p-4">
                            <Card.Img src={ISSImage} alt="Project image"/>
                            <Card.Body>
                                <Card.Title>ISS Tracker</Card.Title>
                                <Card.Text>
                                    A real-time 2D tracker for the International Space Station.
                                </Card.Text>
                                <Button variant="light" href="https://carla-de-beer.github.io/ISS-tracker/"
                                        target="_blank">
                                    Project Link</Button>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Data Visualisation</small>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
                <Row className='ml-lg-5 mr-lg-5 mb-lg-5 box'>
                    <Col>
                        <Card className="p-4">
                            <Card.Img src={matrix} alt="Project image"/>
                            <Card.Body>
                                <Card.Title>Neural Network Matrix Visualisation</Card.Title>
                                <Card.Text>
                                    Artificial neural networks operate on a highly non-linear model and are typically
                                    described as "black boxes". This project is an attempt to peer into the black box
                                    model by visualising the weight changes affecting the hidden neurons, as well as the
                                    hidden neuron matrices themselves. A simple three-layer feedforward neural network
                                    was set up to differentiate between two classes of images: cartoons and photographs.
                                    From this study it became clear that there appears to be a general visual pattern to
                                    the hidden matrices of each of the image sets provided.
                                </Card.Text>
                                <Button variant="light"
                                        href="https://vimeo.com/152473776"
                                        target="_blank">Project Link</Button>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Neural Network</small>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="p-4">
                            <Card.Img src={naive} alt="Project image"/>
                            <Card.Body>
                                <Card.Title>Naive Bayesian Text Classifier</Card.Title>
                                <Card.Text>
                                    A naive Bayesian text classifier that classifies input text into one of two
                                    categories: either a BUSINESS article or a SPORT article.
                                </Card.Text>
                                <Button variant="light"
                                        href="https://github.com/Carla-de-Beer/naive-bayesian-text-classifier"
                                        target="_blank">
                                    Project Link</Button>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Machine Learning</small>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="p-4">
                            <Card.Img src={polar} alt="Project image"/>
                            <Card.Body>
                                <Card.Title>CNN Landscape Classifier</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                                <Button variant="light"
                                        href="https://github.com/Carla-de-Beer/convolutional-neural-network-landscape-classifier"
                                        target="_blank">
                                    Project Link</Button>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Convolutional Neural Network</small>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </CardColumns>
        )
    }
}