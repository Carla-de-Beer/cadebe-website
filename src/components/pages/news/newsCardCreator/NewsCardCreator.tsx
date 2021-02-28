import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import PageSize from '../../../../utils/enums';
import Banner from '../../../banner/Banner';
import Header from '../../../header/Header';

import './NewsCardCreator.scss';

import awsCert from '../../../../assets/images/news/aws-certificate.png';
import awsCertManager from '../../../../assets/images/news/aws-image.png';

export default class NewsCardCreator extends Component<INewsDataProps, INewsDataState> {
  constructor(props: INewsDataState) {
    super(props);

    this.state = {
      newsContent: props.newsContent,
    };
  }

  setCommon = () => (
    <div>
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
          <div className="mt-xl-4 mt-lg-4 mt-md-4 mt-2">
            <div className="mt-5">
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
          </div>

          <div className="row" style={{ height: '100%' }}>
            <div className="col-6 mt-3" style={{ paddingRight: '10px' }}>
              <div className="block-1">
                { this.makeStandardCard(
                  newsContent[5].url,
                  newsContent[5].title,
                  newsContent[5].subTitle,
                  newsContent[5].text,
                ) }
              </div>
              <div className="mt-3 block-2">
                { this.makeStandardCard(
                  newsContent[4].url,
                  newsContent[4].title,
                  newsContent[4].subTitle,
                  newsContent[4].text,
                  newsContent[4].id,
                ) }
              </div>
            </div>
            <div
              className="col mt-3"
              style={{
                paddingLeft: 0,
                marginLeft: '-10px',
              }}
            >
              <div className="ml-3 block-3">
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
              <div className="col ml-3 block-4">
                { this.makeStandardCard(
                  newsContent[2].url,
                  newsContent[2].title,
                  newsContent[2].subTitle,
                  newsContent[2].text,
                ) }
              </div>
              <div className="col ml-3 block-4">
                { this.makeStandardCard(
                  newsContent[1].url,
                  newsContent[1].title,
                  newsContent[1].subTitle,
                  newsContent[1].text,
                ) }
              </div>
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
      case 4:
        return (<Card.Img className="mt-3" src={awsCertManager} alt={alt} />);
      case 5:
        return (<Card.Img className="mt-3" src={awsCert} alt={alt} />);
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
