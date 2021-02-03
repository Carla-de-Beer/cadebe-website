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

  setLayoutDesktop() {
    const content = this.state.newsContent;
    let renderContent;

    if (content.length > 1) {
      renderContent = (
        <>
          <div className="mt-xl-4 mt-lg-4 mt-md-4 mt-2">
            <div className="row" style={{ height: '100%' }}>
              <div className="col-6 mt-xl-4 mt-lg-4 mt-md-4 mt-4" style={{ paddingRight: '10px' }}>
                <div className="block-1">
                  { this.makeStandardCard(
                    content[5].url,
                    content[5].title,
                    content[5].subTitle,
                    content[5].text,
                  ) }
                </div>
                <div className="mt-3 block-2">
                  { this.makeStandardCard(
                    content[4].url,
                    content[4].title,
                    content[4].subTitle,
                    content[4].text,
                    content[4].id,
                  ) }
                </div>
              </div>
              <div
                className="col mt-xl-4 mt-lg-4 mt-md-4 mt-4"
                style={{
                  paddingLeft: 0,
                  marginLeft: '-10px',
                }}
              >
                <div className="ml-3 block-3">
                  { this.makeStandardCard(
                    content[3].url,
                    content[3].title,
                    content[3].subTitle,
                    content[3].text,
                    content[3].id,
                  ) }
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <div className="row">
              <div className="col ml-3 block-4">
                { this.makeStandardCard(
                  content[2].url,
                  content[2].title,
                  content[2].subTitle,
                  content[2].text,
                ) }
              </div>
              <div className="col ml-3 block-4">
                { this.makeStandardCard(
                  content[1].url,
                  content[1].title,
                  content[1].subTitle,
                  content[1].text,
                ) }
              </div>
              <div className="col ml-3 block-4 mr-3">
                { this.makeStandardCard(
                  content[0].url,
                  content[0].title,
                  content[0].subTitle,
                  content[0].text,
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

  setLayoutTablet() {
    const content = this.state.newsContent;
    let renderContent;

    if (content.length > 1) {
      renderContent = (
        <div className="news-wrapper">
          { this.setCommon() }
          <div className="mt-5">
            <div className="row">
              <div className="col">
                <div className="block-mobile">
                  { this.makeStandardCard(
                    content[5].url,
                    content[5].title,
                    content[5].subTitle,
                    content[5].text,
                  ) }
                </div>
              </div>
            </div>
          </div>

          <div className="mt-3" style={{ backgroundColor: 'lightyellow' }}>
            <div className="row">
              <div className="col ml-3 mr-3 block-mobile">
                { this.makeStandardCard(
                  content[4].url,
                  content[4].title,
                  content[4].subTitle,
                  content[4].text,
                  content[4].id,
                ) }
              </div>
            </div>
          </div>

          <div className="mt-3">
            <div className="row">
              <div className="col ml-3 block-4">
                { this.makeStandardCard(
                  content[3].url,
                  content[3].title,
                  content[3].subTitle,
                  content[3].text,
                  content[3].id,
                ) }
              </div>
              <div className="col ml-3 mr-3 block-4">
                { this.makeStandardCard(
                  content[2].url,
                  content[2].title,
                  content[2].subTitle,
                  content[2].text,
                ) }
              </div>
            </div>
          </div>

          <div className="mt-3">
            <div className="row">
              <div className="col ml-3 block-4">
                { this.makeStandardCard(
                  content[1].url,
                  content[1].title,
                  content[1].subTitle,
                  content[1].text,
                ) }
              </div>
              <div className="col ml-3 mr-3 block-4">
                { this.makeStandardCard(
                  content[0].url,
                  content[0].title,
                  content[0].subTitle,
                  content[0].text,
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

  setLayoutMobile() {
    const content = this.state.newsContent;
    let renderContent;

    if (content.length > 1) {
      renderContent = (
        <>
          <div className="mt-5">
            <div className="row">
              <div className="col">
                <div className="block-mobile">
                  { this.makeStandardCard(
                    content[5].url,
                    content[5].title,
                    content[5].subTitle,
                    content[5].text,
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
                    content[4].url,
                    content[4].title,
                    content[4].subTitle,
                    content[4].text,
                    content[4].id,
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
                    content[3].url,
                    content[3].title,
                    content[3].subTitle,
                    content[3].text,
                    content[3].id,
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
                    content[2].url,
                    content[2].title,
                    content[2].subTitle,
                    content[2].text,
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
                    content[1].url,
                    content[1].title,
                    content[1].subTitle,
                    content[1].text,
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
                    content[0].url,
                    content[0].title,
                    content[0].subTitle,
                    content[0].text,
                  ) }
                </div>
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

  setPageLayout() {
    if (window.innerWidth.valueOf() <= PageSize.SMALL) {
      return this.setLayoutMobile();
    }
    if (window.innerWidth.valueOf() > PageSize.SMALL
      && window.innerWidth.valueOf() < PageSize.LARGE) {
      return this.setLayoutTablet();
    }
    return this.setLayoutDesktop();
  }

  bindImages = (id: number | undefined) => {
    const alt = 'News Image';

    switch (id) {
      case 1:
        return (<></>);
      case 2:
        return (<></>);
      case 3:
        return (<></>);
      case 4:
        return (<Card.Img className="mt-3" src={awsCertManager} alt={alt} />);
      case 5:
        return (<Card.Img className="mt-3" src={awsCert} alt={alt} />);
      case 6:
        return (<></>);
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
