import React from 'react';

import Header from '../../header/Header';
import Banner from '../../banner/Banner';

import './About.scss';

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
            As a software engineer with experience in developing web-based applications
            at enterprise level,
            I am comfortable working in both the front and back end of an application.
            Most of what I do is focused around the use of Java and the Spring Framework,
            although I do appreciate the flexibility that JavaScript and Python bring to the table.
            That said, I tend to be language-agnostic, favouring the use of the most suitable
            tool for the job.
            <br />
            <br />
            In addition to my professional work, I have a keen interest in the field of
            machine learning, a journey I embarked on through my master's degree studies.
            The advent of TensorFlow and Keras have made it so much easier and faster to
            create and test models.
            I am constantly amazed at the ability these frameworks provide to
            extract meaning from data,
            and in a way, visualising the invisible has been something of a passion for me.
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
            .
          </p>
        </div>
      </div>
    </div>

  );
}
