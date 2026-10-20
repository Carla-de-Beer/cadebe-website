import React from 'react';

import Header from '../../header/Header';
import Banner from '../../banner/Banner';

import './About.scss';
import photo from '../../../assets/images/about/photo-packing-circles.jpg';

export default function About() {
  return (
    <div>
      <Header pageType="about"/>
      <div className="about-wrapper pb-3" data-cy="about-banner">
        <Banner title="ABOUT"/>
        <div className="mt-4">
          <div className="card-tile text-fields content-width">
            <div className="text-fields mt-5">
              <p className="high-light-1">Who • What</p>
            </div>
          </div>
        </div>
        <div className="text-fields card-tile content-width mt-5">
          <p>
            I&apos;m Carla de Beer, a software engineer with over ten years of experience in backend
            and full‑stack web development, cloud architecture and applied machine learning. I
            design and deliver enterprise‑grade applications end to end, from backend services to
            cloud infrastructure.
          </p>
          <div className="mt-4 pt-2">
            <img src={photo} className="portrait" alt="Circle packing artwork by Carla de Beer"/>
          </div>
          <p className="caption-text">
            Circle packing: exploring patterns in complex systems — one of the ways I think about
            software, data and AI.
          </p>
          <div className="pull-quote-wrapper mt-4">
            <blockquote className="pull-quote">
              A recurring theme in my work is making complex systems understandable
            </blockquote>
          </div>
          <div className="two-column-text mt-2">
            <p>
              Over the years I&apos;ve built robust, scalable systems across various industries,
              often in highly regulated environments. I have a deep understanding of the full
              software development lifecycle – from planning and architecture through
              implementation, deployment and long‑term maintenance. My work is driven by a
              commitment to building high‑quality software and designing applications that are
              robust and future‑proof.
            </p>
            <p style={{breakAfter: 'column'}}>
              My core expertise lies in Java, the Spring Framework and AWS, supported by
              certifications as an Oracle Certified Professional and Spring Certified Professional,
              among others. I also work hands‑on with DevOps technologies and practices, using
              container orchestration, CI/CD pipelines and observability tooling to improve
              reliability and delivery speed. While Java and Spring are my mainstays, I remain
              pragmatic and choose the tools that best fit each problem. Beyond day‑to‑day project
              work, I share my experience through online articles on web development and software
              engineering. A recurring theme in my work is making complex systems understandable –
              sometimes through visualisations, sometimes through robust APIs and automation, and
              sometimes through clear documentation and communication.
            </p>
            <p>
              Alongside this, I have a long‑standing interest in artificial intelligence and machine
              learning – topics I explored in depth during my bachelor&apos;s and master&apos;s
              studies. I continue to expand my knowledge in these fields and enjoy applying these
              technologies to real‑world problems, using a range of frameworks to distil meaning
              from complex data. I now focus on generative AI and its impact on how we design, build
              and operate software systems, using agentic GenAI tools and AI coding assistants to
              streamline workflows - from prototyping and refactoring to documentation, testing and
              knowledge sharing - so GenAI is introduced where it delivers real value without
              compromising reliability or maintainability.
            </p>
            <p>
              If you&apos;d like to get in touch, you can reach me via{' '}
              <a
                className="typewriter-text"
                rel="noopener noreferrer"
                href="https://twitter.com/cadebe_"
                target="_blank"
              >
                X
              </a>
              {' or '}
              <a
                className="typewriter-text"
                rel="noopener noreferrer"
                href="https://de.linkedin.com/in/carla-de-beer"
                target="_blank"
              >
                LinkedIn
              </a>
              {'. My writing on software engineering, cloud and AI can be found on '}
              <a
                className="typewriter-text"
                rel="noopener noreferrer"
                href="https://medium.com/@carla.de.beer"
                target="_blank"
              >
                Medium
              </a>
              {/* eslint-disable-next-line react/jsx-curly-brace-presence */}
              {'.'}
            </p>
          </div>
          <div className="theme-note mt-4">
            <span className="colour-swatch" aria-hidden="true"/>
            <strong className="theme-code">
              {/* eslint-disable-next-line react/jsx-curly-brace-presence */}
              {'#cadebe'}
              <span className="theme-note-rgb theme-note-desktop">
                {' (RGB 202, 222, 190)'}
              </span>
            </strong>
            <br className="theme-note-break"/>
            <span className="theme-note-desktop theme-note-second-line">
              {/* eslint-disable-next-line react/jsx-curly-brace-presence */}
              {'This pistachio accent colour, like the domain name, is derived from my initials.'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
