import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import PageSize from '../../../../utils/enums';
import Banner from '../../../banner/Banner';
import Header from '../../../header/Header';

import './NewsCardCreator.scss';

import awsDeveloperCertC01 from '../../../../assets/images/news/AWS-DVA-C01.png';
import awsDeveloperCertC02 from '../../../../assets/images/news/AWS-DVA-C02.jpg';
import awsSolutionsArchitectCert from '../../../../assets/images/news/AWS-SAA-C03.png';
import awsAiPractitionerCert from '../../../../assets/images/news/AWS-AI1-C01.png';
import awsCertManager from '../../../../assets/images/news/aws-image.png';
import ckadCert from '../../../../assets/images/news/ckad.png';
import isaqbCert from '../../../../assets/images/news/iSAQB-CPSAFL.png';
import oracleBadge11 from '../../../../assets/images/news/ocp-java-11.jpg';
import oracleBadge17 from '../../../../assets/images/news/ocp-java-17.jpg';
import hashicorpTerraformBadge from '../../../../assets/images/news/hashicorp-terraform.png';
import springCert from '../../../../assets/images/news/spring-2024.png';
import gcpCertACE from '../../../../assets/images/news/gcp-ace.png';

export default class NewsCardCreator extends Component<INewsDataProps, INewsDataState> {
  constructor(props: INewsDataState) {
    super(props);

    this.state = {
      newsContent: props.newsContent,
    };
  }

  setCommon = () => (
    <div data-cy="news-banner">
      <Banner title="NEWS & BLOG" />
      <div className="mt-4">
        <div className="card-tile text-fields" style={{ width: '80%' }}>
          <div className="text-fields mt-5">
            { window.innerWidth.valueOf() >= PageSize.SMALL
              ? <p className="high-light-1">Software Development • Machine Learning</p> : (
                <div>
                  <p className="high-light-1">Software Development</p>
                  <p className="high-light-1">Machine Learning</p>
                </div>
              ) }
          </div>
          <div className="card-tile text-fields mt-5" style={{ width: '80%' }}>
            <p>
              Development news and blog stories relating to software development,
              including Java, Spring Framework, Python, Cloud Computing, TensorFlow
              and machine learning.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  setLayoutDesktop({ ...newsContent }) {
    let renderContent;

    if (Object.keys(newsContent).length > 1) {
      renderContent = (
        <div className="mt-3" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ width: '100%' }}>{ this.card(newsContent, 17) }</div>
          <div style={{ width: '100%' }}>{ this.card(newsContent, 16) }</div>
          <div style={{ width: '100%' }}>{ this.card(newsContent, 15) }</div>
          <div style={{ width: '100%' }}>{ this.card(newsContent, 14) }</div>
          <div style={{ width: '100%' }}>{ this.card(newsContent, 13) }</div>
          <div style={{ width: '100%' }}>{ this.card(newsContent, 12) }</div>
          <div style={{ width: '100%' }}>{ this.card(newsContent, 11) }</div>
          <div style={{ width: '100%' }}>{ this.card(newsContent, 10) }</div>
          <div style={{ width: '100%' }}>{ this.card(newsContent, 9) }</div>
          <div style={{ display: 'flex', gap: '1rem', width: '100%' }}>
            <div style={{ flex: 1 }}>{ this.card(newsContent, 8) }</div>
            <div style={{ flex: 1 }}>{ this.card(newsContent, 7) }</div>
          </div>
          <div style={{ width: '100%' }}>{ this.card(newsContent, 6) }</div>
          <div style={{ width: '100%' }}>{ this.card(newsContent, 5) }</div>
          <div style={{ width: '100%' }}>{ this.card(newsContent, 4) }</div>
          <div style={{ width: '100%' }}>{ this.card(newsContent, 3) }</div>
          <div style={{ width: '100%' }}>{ this.card(newsContent, 2) }</div>
          <div style={{ width: '100%' }}>{ this.card(newsContent, 1) }</div>
          <div style={{ width: '100%' }}>{ this.card(newsContent, 0) }</div>
        </div>
      );
    }

    return (
      <div className="news-wrapper">
        { this.setCommon() }
        { renderContent }
      </div>
    );
  }

  setLayoutTablet({ ...newsContent }) {
    let renderContent;

    if (Object.keys(newsContent).length > 1) {
      renderContent = (
        <div className="news-wrapper">
          { this.setCommon() }

          <div className="mt-3" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ width: '100%' }}>{ this.card(newsContent, 17) }</div>
            <div style={{ width: '100%' }}>{ this.card(newsContent, 16) }</div>
            <div style={{ width: '100%' }}>{ this.card(newsContent, 15) }</div>
            <div style={{ width: '100%' }}>{ this.card(newsContent, 14) }</div>
            <div style={{ width: '100%' }}>{ this.card(newsContent, 13) }</div>
            <div style={{ width: '100%' }}>{ this.card(newsContent, 12) }</div>
            <div style={{ width: '100%' }}>{ this.card(newsContent, 11) }</div>
            <div style={{ width: '100%' }}>{ this.card(newsContent, 10) }</div>
            <div style={{ width: '100%' }}>{ this.card(newsContent, 9) }</div>
            <div style={{ display: 'flex', gap: '1rem', width: '100%' }}>
              <div style={{ flex: 1 }}>{ this.card(newsContent, 8) }</div>
              <div style={{ flex: 1 }}>{ this.card(newsContent, 7) }</div>
            </div>
            <div style={{ width: '100%' }}>{ this.card(newsContent, 6) }</div>
            <div style={{ width: '100%' }}>{ this.card(newsContent, 5) }</div>
            <div style={{ width: '100%' }}>{ this.card(newsContent, 4) }</div>
            <div style={{ display: 'flex', gap: '1rem', width: '100%' }}>
              <div style={{ flex: 1 }}>{ this.card(newsContent, 3) }</div>
              <div style={{ flex: 1 }}>{ this.card(newsContent, 2) }</div>
            </div>
            <div style={{ display: 'flex', gap: '1rem', width: '100%' }}>
              <div style={{ flex: 1 }}>{ this.card(newsContent, 1) }</div>
              <div style={{ flex: 1 }}>{ this.card(newsContent, 0) }</div>
            </div>
          </div>
        </div>
      );
    }

    return (
      renderContent
    );
  }

  setLayoutMobile({ ...newsContent }) {
    const renderContent = [];

    if (Object.keys(newsContent).length > 1) {
      for (let i = Object.keys(newsContent).length - 1; i >= 0; i -= 1) {
        renderContent.push(
          <div key={i}>
            { this.makeStandardCard(
              newsContent[i].url,
              newsContent[i].title,
              newsContent[i].subTitle,
              newsContent[i].text,
              newsContent[i].id,
            ) }
          </div>,
        );
      }
    }

    return (
      <div className="news-wrapper">
        { this.setCommon() }
        <div className="mt-3" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          { renderContent }
        </div>
      </div>
    );
  }

  setPageLayout() {
    const { newsContent } = this.state;
    if (window.innerWidth.valueOf() <= PageSize.SMALL) {
      return this.setLayoutMobile(newsContent);
    }
    if (window.innerWidth.valueOf() > PageSize.SMALL
      && window.innerWidth.valueOf() < PageSize.LARGE) {
      return this.setLayoutTablet(newsContent);
    }

    return this.setLayoutDesktop(newsContent);
  }

  card = (newsContent: { [key: number]: any }, i: number) => this.makeStandardCard(
    newsContent[i].url,
    newsContent[i].title,
    newsContent[i].subTitle,
    newsContent[i].text,
    newsContent[i].id,
  );

  bindImages = (id: number | undefined) => {
    const alt = 'News Image';
    switch (id) {
      case 3:
        return (<Card.Img className="mt-3 aws-image" src={awsCertManager} alt={alt} />);
      case 4:
        return (<Card.Img className="mt-3 aws-badge" src={awsDeveloperCertC01} alt={alt} />);
      case 7:
        return (<Card.Img className="mt-3" src={oracleBadge11} alt={alt} />);
      case 8:
        return (<Card.Img className="mt-3" src={oracleBadge17} alt={alt} />);
      case 10:
        return (<Card.Img className="mt-3 badge-hashicorp" src={hashicorpTerraformBadge} alt={alt} />);
      case 11:
        return (<Card.Img className="mt-3 aws-badge" src={awsSolutionsArchitectCert} alt={alt} />);
      case 12:
        return (<Card.Img className="mt-3 badge-spring" src={springCert} alt={alt} />);
      case 13:
        return (<Card.Img className="mt-3 aws-cert" src={awsDeveloperCertC02} alt={alt} />);
      case 14:
        return (<Card.Img className="mt-3 gcp-ace-cert" src={gcpCertACE} alt={alt} />);
      case 15:
        return (<Card.Img className="mt-3 aws-ai-practitioner-cert" src={awsAiPractitionerCert} alt={alt} />);
      case 16:
        return (<Card.Img className="mt-3 ckad-cert" src={ckadCert} alt={alt} />);
      case 17:
        return (<Card.Img className="mt-3 isaqb-cert" src={isaqbCert} alt={alt} />);
      default:
        return null;
    }
  };

  makeStandardCard = (url: string, title: string, subTitle: string, text: string, id?: number) => (
    <a
      className="no-link"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Card className="p-3 news-card">
        <Card.Body>
          <Card.Title>{ title }</Card.Title>
          <Card.Subtitle className="mt-3 sub-title">{ subTitle }</Card.Subtitle>
          <Card.Text as="div" className="mt-3">
            {/* eslint-disable-next-line react/no-danger */}
            <div className="dangerous" dangerouslySetInnerHTML={{ __html: text }} />
          </Card.Text>
          { (window.innerWidth.valueOf() <= PageSize.SMALL
            || window.innerWidth.valueOf() > PageSize.LARGE)
          && this.bindImages(id) }
        </Card.Body>
      </Card>
    </a>
  );

  render() {
    return (
      <div>
        <Header pageType="news" />
        { this.setPageLayout() }
      </div>
    );
  }
}
