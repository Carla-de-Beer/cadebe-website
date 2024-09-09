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
        <div className="mt-5">
          <p className="text-fields high-light-1">Who • What</p>
        </div>
        <div className="text-fields card-tile mt-5" style={{ width: '80%' }}>
          <p>
            I&apos;m Carla de Beer,
            an experienced software engineer specialising in web development and machine learning.
            <br />
            <br />
            <div className="mt-4">
              <img
                src={photo}
                style={{ maxWidth: '100%' }}
                alt="Portrait"
              />
            </div>
            <div className="theme-color">
              <p>
                <strong>#cadebe</strong>
                {' '}
                : RGB(202, 222, 190)
              </p>
            </div>
            <br />
            <br />
            With over eight years in the industry,
            I&apos;ve focused on backend and full-stack web development,
            delivering robust solutions across diverse sectors.
            Proficient in Java, Spring Framework, Spring Boot, and AWS,
            I&apos;ve contributed to various projects,
            sharing insights through articles on web development and certification preparation.
            I am enthusiastic about learning new technologies and
            applying them to solve real-world problems.
            <br />
            <br />
            While Java and the Spring Framework are my mainstays,
            I remain adaptable, prioritising the most effective tools for each task.
            <br />
            <br />
            Beyond my professional work, I&apos;m passionate about machine learning,
            a journey I embarked on through my master&apos;s degree studies.
            I&apos;ve expanded my expertise through online courses and certifications,
            leveraging frameworks like TensorFlow and Keras
            to distill meaning from complex data.
            It is exactly this rationale that ties in with that of my
            own computational explorations: visualising the invisible.
            <br />
            <br />
            If you want to get in touch, you can reach me via &nbsp;
            <a
              className="typewriter-text"
              rel="noopener noreferrer"
              href="https://twitter.com/cadebe_"
              target="_blank"
            >
              X
            </a>
              &nbsp;or&nbsp;
            <a
              className="typewriter-text"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/carla-de-beer/"
              target="_blank"
            >
              LinkedIn
            </a>
            .
            <br />
            You can also find my online articles on &nbsp;
            <a
              className="typewriter-text"
              rel="noopener noreferrer"
              href="https://medium.com/@carla.debeer.uk"
              target="_blank"
            >
              Medium
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
