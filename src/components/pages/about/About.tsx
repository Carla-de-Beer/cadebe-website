import React from 'react';

import Header from '../../header/Header';
import Banner from '../../banner/Banner';

import './About.scss';
import photo from '../../../assets/images/about/photo-packing-circles.jpg';

export default function About() {
  return (
    <div>
      <Header pageType="about" />
      <div className="about-wrapper">
        <Banner title="ABOUT" />
        <div className="mt-5">
          <p className="text-fields high-light-1">Who • What</p>
        </div>
        <div className="text-fields card-tile mt-5" style={{ width: '80%' }}>
          <p>
            I&apos;m Carla de Beer,
            a software engineer involved in web development and machine learning.
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
            As a software engineer with experience in developing web-based applications,
            I am comfortable working in both the front and back end of an application.
            A lot of what I do is focused around the use of Java and the Spring Framework,
            often in conjunction with a front end framework such as Angular or React.
            That said, I tend to be language-agnostic, favouring the use of the most suitable
            tool for the job.
            <br />
            <br />
            In addition to my professional work, I have a keen interest in the field of
            machine learning, a journey I embarked on through my master&apos;s degree studies.
            The advent of TensorFlow and Keras have made it much easier and faster to
            create, train and test models.
            I am constantly amazed at these frameworks&apos; ability
            to easily extract meaning from complex data.
            It is exactly this rationale that ties in
            with that of my own computational explorations: visualising the invisible.
            <br />
            <br />
            If you want to get in touch, you can reach me via &nbsp;
            <a
              className="typewriter-text"
              rel="noopener noreferrer"
              href="https://twitter.com/cadebe_"
              target="_blank"
            >
              Twitter
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
          </p>
        </div>
      </div>
    </div>
  );
}
