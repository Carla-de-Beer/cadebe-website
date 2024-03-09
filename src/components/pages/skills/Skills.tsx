import React, { Component } from 'react';
import { Card, ProgressBar } from 'react-bootstrap';

import './Skills.scss';
import '../../../style/_fonts.scss';
import Banner from '../../banner/Banner';
import Header from '../../header/Header';

import PageSize from '../../../utils/enums';

export default
class Skills extends Component<any, any> {
  setPageLayout() {
    if (window.innerWidth.valueOf() <= PageSize.MEDIUM) {
      return this.setLayoutMobile();
    }
    return this.setLayoutDesktop();
  }

  setLayoutMobile = () => (
    <div>
      <Header pageType="home" />
      <div className="skills-wrapper">
        <div className="text-fields box">
          <div>
            <div data-cy="skills-banner-mobile">
              <Banner title="Skills" />
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );

  setLayoutDesktop = () => (
    <div>
      <Header pageType="skills" />
      <div className="skills-wrapper">
        <div className="text-fields box">
          <div>
            <div data-cy="skills-banner-desktop">
              <Banner title="SKILLS" />
            </div>
            <div className="mt-4">
              <div className="card-tile text-fields" style={{ width: '80%' }}>
                <div className="text-fields mt-5">
                  { window.innerWidth.valueOf() >= PageSize.SMALL
                    ? <p className="high-light-1">Experience • Technical Skills</p> : (
                      <div>
                        <p className="high-light-1">Experience</p>
                        <p className="high-light-1">Technical Skills</p>
                      </div>
                    ) }
                </div>
                <div className="card-tile text-fields mt-5" style={{ width: '80%' }}>
                  <p>
                    Over the course of my professional career I have accumulated
                    a wealth of experience in contemporary technologies.
                    From mastering various programming languages, tools,
                    and frameworks to applying them in hands-on projects and professional settings,
                    I&apos;ve honed my skills to deliver high-quality solutions.
                    With a passion for staying abreast of the latest industry trends,
                    I&apos;m always eager to tackle new challenges and push the boundaries of
                    what&apos;s possible in the ever-evolving tech landscape.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-xl-5 mt-lg-4 mt-md-4 mt-2">
          <div className="col ml-3 mr-3 block-4">
            <div className="row">
              <Card className="p-3 skills-outer-card" style={{ marginRight: '50px' }}>
                <Card.Body>
                  <Card.Title style={{ marginBottom: '20px' }}>Programming Languages</Card.Title>
                  { this.makeStandardCard(
                    'Java',
                    '2024',
                    85,
                    8,
                    'Version: 21',
                  ) }
                  { this.makeStandardCard(
                    'C++',
                    '2014',
                    55,
                    1,
                    'Version: C++11',
                  ) }
                  { this.makeStandardCard(
                    'Python',
                    '2023',
                    60,
                    4,
                    'Version: 3',
                  ) }
                  { this.makeStandardCard(
                    'SQL',
                    '2023',
                    60,
                    8,
                    'Version: ANSI',
                  ) }
                  { this.makeStandardCard(
                    'JavaScript',
                    '2023',
                    80,
                    8,
                    'Version: ES6',
                  ) }
                  { this.makeStandardCard(
                    'TypeScript',
                    '2023',
                    75,
                    4,
                    'Version: 21',
                  ) }
                  { this.makeStandardCard(
                    'Shell Scripting',
                    '2024',
                    70,
                    4,
                    'Version: bash',
                  ) }
                  { this.makeStandardCard(
                    'Assembler',
                    '2014',
                    60,
                    1,
                    'x86',
                  ) }
                  { this.makeStandardCard(
                    'MATLAB',
                    '2015',
                    60,
                    2,
                    'Version: 15',
                  ) }
                </Card.Body>
              </Card>

              <Card className="p-3 skills-outer-card-2">
                <Card.Body>
                  <Card.Title style={{ marginBottom: '20px' }}>DevOps</Card.Title>
                  { this.makeStandardCard(
                    'GitHub Actions',
                    '2023',
                    80,
                    1,
                  ) }
                  { this.makeStandardCard(
                    'GitLab CI/CD',
                    '2024',
                    60,
                    1,
                  ) }
                  { this.makeStandardCard(
                    'Docker',
                    '2024',
                    80,
                    4,
                    'Version: 24',
                  ) }
                  { this.makeStandardCard(
                    'OpenShift',
                    '2024',
                    55,
                    1,
                    'Version: 4',
                  ) }
                  { this.makeStandardCard(
                    'Kustomize',
                    '2024',
                    70,
                    1,
                    'Version: 5',
                  ) }
                  { this.makeStandardCard(
                    'Terraform',
                    '2023',
                    80,
                    1,
                    'Version: 1',
                  ) }
                  { this.makeStandardCard(
                    'ELK Stack',
                    '2024',
                    60,
                    1,
                    'Version: 8',
                  ) }
                  { this.makeStandardCard(
                    'SonarQube',
                    '2022',
                    60,
                    3,
                  ) }
                  { this.makeStandardCard(
                    'Linux',
                    '2024',
                    80,
                    8,
                    'Version: Ubuntu/Debian/CentOS',
                  ) }
                </Card.Body>
              </Card>
            </div>
            <div className="row">
              <Card className="p-3 skills-outer-card-2" style={{ marginTop: '30px' }}>
                <Card.Body>
                  <Card.Title style={{ marginBottom: '20px' }}>Backend Development</Card.Title>
                  { this.makeStandardCard(
                    'Spring Framework (Spring Boot, Spring AOP, Spring Actuator, Spring Security, Spring Rest, Spring MVC, Spring Testing)',
                    '2024',
                    85,
                    4,
                    'Version: 6',
                  ) }
                  { this.makeStandardCard(
                    'Maven',
                    '2024',
                    70,
                    8,
                    'Version: 3',
                  ) }
                  <div style={{ marginBottom: '305px' }}>
                    { this.makeStandardCard(
                      'Flask',
                      '2023',
                      85,
                      4,
                      'Version: 3',
                    ) }
                  </div>
                </Card.Body>
              </Card>

              <Card className="p-3 skills-outer-card" style={{ marginTop: '30px', marginLeft: '30px' }}>
                <Card.Body>
                  <Card.Title style={{ marginBottom: '20px' }}>Web Development</Card.Title>
                  { this.makeStandardCard(
                    'Angular',
                    '2023',
                    75,
                    4,
                    'Version: 12',
                  ) }
                  { this.makeStandardCard(
                    'React',
                    '2024',
                    60,
                    4,
                    'Version: 17',
                  ) }
                  { this.makeStandardCard(
                    'RESTful Web Services',
                    '2024',
                    85,
                    8,
                  ) }
                  { this.makeStandardCard(
                    'Markup Languages (HTML, XML)',
                    '2023',
                    85,
                    8,
                  ) }
                  { this.makeStandardCard(
                    'Data Formats (YAML, JSON)',
                    '2023',
                    85,
                    8,
                  ) }
                  { this.makeStandardCard(
                    'SCSS',
                    '2024',
                    70,
                    8,
                  ) }
                </Card.Body>
              </Card>
            </div>
            <div className="row">
              <Card className="p-3 skills-outer-card" style={{ marginTop: '30px' }}>
                <Card.Body>
                  <Card.Title style={{ marginBottom: '20px' }}>Database Technologies</Card.Title>
                  { this.makeStandardCard(
                    'MySQL',
                    '2023',
                    65,
                    4,
                    'Version: 8',
                  ) }
                  { this.makeStandardCard(
                    'ElasticSearch',
                    '2023',
                    65,
                    1,
                    'Version: 8',
                  ) }
                  { this.makeStandardCard(
                    'Hibernate',
                    '2024',
                    65,
                    4,
                    'Version: 6',
                  ) }
                  { this.makeStandardCard(
                    'FlyWay',
                    '2023',
                    60,
                    1,
                    'Version: 9',
                  ) }
                  <div style={{ marginBottom: '321px' }}>
                    { this.makeStandardCard(
                      'Liquibase',
                      '2023',
                      60,
                      3,
                      'Version: 4',
                    ) }
                  </div>
                </Card.Body>
              </Card>

              <Card className="p-3 skills-outer-card-2" style={{ marginTop: '30px', marginLeft: '30px' }}>
                <Card.Body>
                  <Card.Title style={{ marginBottom: '20px' }}>Software Development</Card.Title>
                  { this.makeStandardCard(
                    'Object-Oriented Programming',
                    '2024',
                    80,
                    8,
                  ) }
                  { this.makeStandardCard(
                    'Design Patterns',
                    '2023',
                    70,
                    8,
                  ) }
                  { this.makeStandardCard(
                    'Clean Code Development',
                    '2024',
                    80,
                    8,
                  ) }
                  { this.makeStandardCard(
                    'Trunk-Based Development',
                    '2023',
                    85,
                    1,
                  ) }
                  { this.makeStandardCard(
                    'Test-Driven Development',
                    '2023',
                    85,
                    2,
                  ) }
                  { this.makeStandardCard(
                    'Agile Methodologies',
                    '2024',
                    85,
                    8,
                  ) }
                  { this.makeStandardCard(
                    'Pair Programming',
                    '2024',
                    85,
                    4,
                  ) }
                  { this.makeStandardCard(
                    'Version Control (Git, SVN)',
                    '2024',
                    85,
                    8,
                  ) }
                </Card.Body>
              </Card>
            </div>
            <div className="row">
              <Card className="p-3 skills-outer-card-2" style={{ marginTop: '30px' }}>
                <Card.Body>
                  <Card.Title style={{ marginBottom: '20px' }}>Testing and Quality Assurance</Card.Title>
                  { this.makeStandardCard(
                    'JUnit / Mockito',
                    '2024',
                    85,
                    4,
                    'Version: 5',
                  ) }
                  { this.makeStandardCard(
                    'Spock',
                    '2020',
                    85,
                    1,
                    'Version: 2',
                  ) }
                  { this.makeStandardCard(
                    'Cucumber',
                    '2023',
                    85,
                    1,
                    'Version: 7',
                  ) }
                  { this.makeStandardCard(
                    'JMeter',
                    '2023',
                    70,
                    1,
                  ) }
                  { this.makeStandardCard(
                    'Jest',
                    '2023',
                    85,
                    3,
                    'Version: 28',
                  ) }
                  { this.makeStandardCard(
                    'Cypress',
                    '2023',
                    85,
                    4,
                    'Version: 12',
                  ) }
                  { this.makeStandardCard(
                    'Continuous Integration / Continuous Deployment (CI / CD)',
                    '2024',
                    85,
                    4,
                  ) }
                </Card.Body>
              </Card>

              <Card className="p-3 skills-outer-card" style={{ marginTop: '30px', marginLeft: '30px' }}>
                <Card.Body>
                  <Card.Title style={{ marginBottom: '20px' }}>Other Skills</Card.Title>
                  { this.makeStandardCard(
                    'AWS',
                    '2024',
                    80,
                    3,
                  ) }
                  { this.makeStandardCard(
                    'Machine Learning (TensorFlow, scikit-learn)',
                    '2023',
                    80,
                    8,
                  ) }
                  { this.makeStandardCard(
                    'Data Manipulation (Pandas, NumPy)',
                    '2023',
                    70,
                    4,
                  ) }
                  <div style={{ marginBottom: '322px' }}>
                    { this.makeStandardCard(
                      'Data Visualization (Matplotlib)',
                      '2023',
                      70,
                      4,
                    ) }
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  makeStandardCard =
      (title: string, lastUsed: string, level: number, years: number, version?: string) => (
        <Card className="p-1 skills-card">
          <Card.Body>
            <Card.Title className="sub-title-tech">{ title }</Card.Title>
            <Card.Subtitle className="mt-2 sub-title">
              {version && (
              <p className="sub-title">
                { version }
                {' '}
                •
                {' '}
                Last used:
                {' '}
                { lastUsed }
                {' '}
                •
                {' '}
                Experience in years:
                {' '}
                { years }
              </p>
              )}
              {!version && (
              <p className="sub-title">
                Last used:
                {' '}
                { lastUsed }
                {' '}
                •
                {' '}
                Experience in years:
                {' '}
                { years }
              </p>
              )}
            </Card.Subtitle>
            <Card.Text className="mt-3" />
            { (window.innerWidth.valueOf() <= PageSize.SMALL
              || window.innerWidth.valueOf() > PageSize.LARGE)}
            <ProgressBar now={level} />
          </Card.Body>
        </Card>
      );

  render() {
    return (
      <div>
        {this.setPageLayout()}
      </div>
    );
  }
}
