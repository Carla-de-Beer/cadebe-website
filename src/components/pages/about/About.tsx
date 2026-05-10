import React from 'react';

import Header from '../../header/Header';
import Banner from '../../banner/Banner';

import './About.scss';
import photo from '../../../assets/images/about/photo-packing-circles.jpg';

export default function About() {
  return (
    <div>
      <Header pageType="about" />
      <div className="about-wrapper" data-cy="about-banner">
        <Banner title="ABOUT" />
        <div className="mt-4">
          <div className="card-tile text-fields" style={{ width: '80%' }}>
            <div className="text-fields mt-5">
              <p className="high-light-1">Who • What</p>
            </div>
          </div>
        </div>
        <div className="text-fields card-tile mt-5" style={{ width: '80%' }}>
          <p>
            I&apos;m Carla de Beer, an experienced software engineer specialising in web development
            and machine learning.
          </p>
          <div className="mt-xl-4 mt-lg-4 mt-md-4 mt-4 pt-2">
            <img src={photo} style={{ maxWidth: '100%' }} alt="Portrait" />
          </div>
          <div className="theme-color">
            <p>
              <strong>#cadebe</strong> : RGB(202, 222, 190)
            </p>
          </div>
          <div className="two-column-text mt-4">
            <p>
              With over ten years of professional experience as a software engineer, I have
              developed a strong expertise in backend and full-stack web development, delivering
              high-quality and scalable solutions for various industries and domains. I have a deep
              understanding of the entire software development lifecycle — from planning and
              architecture to deployment and maintenance.
            </p>
            <p style={{ breakAfter: 'column' }}>
              My expertise lies in Java, the Spring Framework, and AWS, with certifications as an
              Oracle Certified Professional and Spring Certified Professional. Additionally, I have
              hands-on experience with DevOps technologies, applying them in real-world projects to
              enhance efficiency and reliability. While Java and the Spring Framework are my
              mainstays, I remain adaptable, prioritising the most effective tools for each task.
              Beyond my core technical skills, I actively share my knowledge through online
              publications on web development and certification preparation.
            </p>
            <p>
              Alongside my professional work, I have a strong passion for artificial intelligence
              and machine learning — an area I explored extensively during my bachelor&apos;s and
              master&apos;s studies. I am continuously expanding my knowledge in AI, machine
              learning, and generative AI, aiming to apply these technologies to solve real-world
              problems, leveraging various frameworks to distill meaning from complex data. It is
              exactly this rationale that ties in with that of my own computational explorations:
              visualising the invisible.
            </p>
            <p>
              If you want to get in touch, you can reach me via{' '}
              <a
                className="typewriter-text"
                rel="noopener noreferrer"
                href="https://twitter.com/cadebe_"
                target="_blank"
              >
                X
              </a>{' '}
              or{' '}
              <a
                className="typewriter-text"
                rel="noopener noreferrer"
                href="https://de.linkedin.com/in/carla-de-beer"
                target="_blank"
              >
                LinkedIn
              </a>
              .<br />
              You can also find my online articles on{' '}
              <a
                className="typewriter-text"
                rel="noopener noreferrer"
                href="https://medium.com/@carla.de.beer"
                target="_blank"
              >
                Medium
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
