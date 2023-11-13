import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import PageSize from '../../../../utils/enums';
import Banner from '../../../banner/Banner';
import Header from '../../../header/Header';

import './NewsCardCreator.scss';

import awsCert from '../../../../assets/images/news/aws-certificate.png';
import awsCertManager from '../../../../assets/images/news/aws-image.png';
import oracleBadge11 from '../../../../assets/images/news/ocp-java-11.jpg';
import oracleBadge17 from '../../../../assets/images/news/ocp-java-17.jpg';
import hashicorpTerraformBadge from '../../../../assets/images/news/hashicorp-terraform.png';

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
        <>
          <div className="mt-xl-5 mt-lg-4 mt-md-4 mt-2">
            <div className="row">
              <div className="col ml-3 mr-3 block-4">
                { this.makeStandardCard(
                  newsContent[10].url,
                  newsContent[10].title,
                  newsContent[10].subTitle,
                  newsContent[10].text,
                  newsContent[10].id,
                ) }
              </div>
            </div>
          </div>

          <div className="mt-3">
            <div className="row">
              <div className="col ml-3 mr-3 block-4">
                { this.makeStandardCard(
                  newsContent[9].url,
                  newsContent[9].title,
                  newsContent[9].subTitle,
                  newsContent[9].text,
                ) }
              </div>
            </div>
          </div>

          <div className="mt-3">
            <div className="row">
              <div className="col ml-3 block-4">
                { this.makeStandardCard(
                  newsContent[8].url,
                  newsContent[8].title,
                  newsContent[8].subTitle,
                  newsContent[8].text,
                  newsContent[8].id,
                ) }
              </div>
              <div className="col ml-3 mr-3 block-4">
                { this.makeStandardCard(
                  newsContent[7].url,
                  newsContent[7].title,
                  newsContent[7].subTitle,
                  newsContent[7].text,
                  newsContent[7].id,
                ) }
              </div>
            </div>
          </div>

          <div className="mt-3">
            <div className="row">
              <div className="col ml-3 mr-3 block-4">
                { this.makeStandardCard(
                  newsContent[6].url,
                  newsContent[6].title,
                  newsContent[6].subTitle,
                  newsContent[6].text,
                ) }
              </div>
            </div>
          </div>

          <div className="mt-3">
            <div className="row">
              <div className="col ml-3 mr-3 block-4">
                { this.makeStandardCard(
                  newsContent[5].url,
                  newsContent[5].title,
                  newsContent[5].subTitle,
                  newsContent[5].text,
                ) }
              </div>
            </div>
          </div>

          <div className="mt-3">
            <div className="row">
              <div className="col ml-3 mr-3 block-4">
                { this.makeStandardCard(
                  newsContent[4].url,
                  newsContent[4].title,
                  newsContent[4].subTitle,
                  newsContent[4].text,
                  newsContent[4].id,
                ) }
              </div>
            </div>
          </div>

          <div className="mt-3">
            <div className="row">
              <div className="col ml-3 mr-3 block-4">
                { this.makeStandardCard(
                  newsContent[3].url,
                  newsContent[3].title,
                  newsContent[3].subTitle,
                  newsContent[3].text,
                  newsContent[3].id,
                ) }
              </div>
            </div>
          </div>

          <div className="mt-3">
            <div className="row">
              <div className="col ml-3 block-4 mr-3">
                { this.makeStandardCard(
                  newsContent[2].url,
                  newsContent[2].title,
                  newsContent[2].subTitle,
                  newsContent[2].text,
                ) }
              </div>
            </div>
          </div>

          <div className="mt-3">
            <div className="row">
              <div className="col ml-3 block-4 mr-3">
                { this.makeStandardCard(
                  newsContent[1].url,
                  newsContent[1].title,
                  newsContent[1].subTitle,
                  newsContent[1].text,
                ) }
              </div>
            </div>
          </div>

          <div className="mt-3">
            <div className="row">
              <div className="col ml-3 block-4 mr-3">
                { this.makeStandardCard(
                  newsContent[0].url,
                  newsContent[0].title,
                  newsContent[0].subTitle,
                  newsContent[0].text,
                ) }
              </div>
            </div>
          </div>
        </>
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

          <div className="mt-5">
            <div className="mt-3">
              <div className="row">
                <div className="col">
                  <div className="block-mobile">
                    { this.makeStandardCard(
                      newsContent[10].url,
                      newsContent[10].title,
                      newsContent[10].subTitle,
                      newsContent[10].text,
                      newsContent[10].id,
                    ) }
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-3">
              <div className="row">
                <div className="col">
                  <div className="block-mobile">
                    { this.makeStandardCard(
                      newsContent[9].url,
                      newsContent[9].title,
                      newsContent[9].subTitle,
                      newsContent[9].text,
                    ) }
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-3">
              <div className="row">
                <div className="col ml-3 block-4">
                  { this.makeStandardCard(
                    newsContent[8].url,
                    newsContent[8].title,
                    newsContent[8].subTitle,
                    newsContent[8].text,
                    newsContent[8].id,
                  ) }
                </div>
                <div className="col ml-3 mr-3 block-4">
                  { this.makeStandardCard(
                    newsContent[7].url,
                    newsContent[7].title,
                    newsContent[7].subTitle,
                    newsContent[7].text,
                    newsContent[7].id,
                  ) }
                </div>
              </div>
            </div>
            <div className="mt-3">
              <div className="row">
                <div className="col">
                  <div className="block-mobile">
                    { this.makeStandardCard(
                      newsContent[6].url,
                      newsContent[6].title,
                      newsContent[6].subTitle,
                      newsContent[6].text,
                    ) }
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-3">
            <div className="row">
              <div className="col">
                <div className="block-mobile">
                  { this.makeStandardCard(
                    newsContent[5].url,
                    newsContent[5].title,
                    newsContent[5].subTitle,
                    newsContent[5].text,
                  ) }
                </div>
              </div>
            </div>
          </div>

          <div className="mt-3">
            <div className="row">
              <div className="col ml-3 mr-3 block-mobile">
                { this.makeStandardCard(
                  newsContent[4].url,
                  newsContent[4].title,
                  newsContent[4].subTitle,
                  newsContent[4].text,
                  newsContent[4].id,
                ) }
              </div>
            </div>
          </div>

          <div className="mt-3">
            <div className="row">
              <div className="col ml-3 block-4">
                { this.makeStandardCard(
                  newsContent[3].url,
                  newsContent[3].title,
                  newsContent[3].subTitle,
                  newsContent[3].text,
                  newsContent[3].id,
                ) }
              </div>
              <div className="col ml-3 mr-3 block-4">
                { this.makeStandardCard(
                  newsContent[2].url,
                  newsContent[2].title,
                  newsContent[2].subTitle,
                  newsContent[2].text,
                ) }
              </div>
            </div>
          </div>

          <div className="mt-3">
            <div className="row">
              <div className="col ml-3 block-4">
                { this.makeStandardCard(
                  newsContent[1].url,
                  newsContent[1].title,
                  newsContent[1].subTitle,
                  newsContent[1].text,
                ) }
              </div>
              <div className="col ml-3 mr-3 block-4">
                { this.makeStandardCard(
                  newsContent[0].url,
                  newsContent[0].title,
                  newsContent[0].subTitle,
                  newsContent[0].text,
                ) }
              </div>
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
        if (i === Object.keys(newsContent).length - 1) {
          renderContent.push(
            <div className="mt-5">
              <div className="row">
                <div className="col">
                  <div className="block-mobile">
                    { this.makeStandardCard(
                      newsContent[i].url,
                      newsContent[i].title,
                      newsContent[i].subTitle,
                      newsContent[i].text,
                      newsContent[i].id,
                    ) }
                  </div>
                </div>
              </div>
            </div>,
          );
        } else {
          renderContent.push(
            <div className="mt-3">
              <div className="row">
                <div className="col">
                  <div className="block-mobile">
                    { this.makeStandardCard(
                      newsContent[i].url,
                      newsContent[i].title,
                      newsContent[i].subTitle,
                      newsContent[i].text,
                      newsContent[i].id,
                    ) }
                  </div>
                </div>
              </div>
            </div>,
          );
        }
      }
    }

    return (
      <div className="news-wrapper">
        { this.setCommon() }
        { renderContent }
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

  bindImages = (id: number | undefined) => {
    const alt = 'News Image';
    switch (id) {
      case 3:
        return (<Card.Img className="mt-3 aws-image" src={awsCertManager} alt={alt} />);
      case 4:
        return (<Card.Img className="mt-3 aws-image" src={awsCert} alt={alt} />);
      case 7:
        return (<Card.Img className="mt-3" src={oracleBadge11} alt={alt} />);
      case 8:
        return (<Card.Img className="mt-3" src={oracleBadge17} alt={alt} />);
      case 10:
        return (<Card.Img className="mt-3 badge-hashicorp" src={hashicorpTerraformBadge} alt={alt} />);
      default:
        return (<></>);
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
          <Card.Text className="mt-3">
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
