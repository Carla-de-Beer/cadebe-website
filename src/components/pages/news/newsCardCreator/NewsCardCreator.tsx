import React from 'react';
import Card from 'react-bootstrap/Card';
import Banner from '../../../banner/Banner';
import Header from '../../../header/Header';
import { getLayoutSize, LayoutSize } from '../../../../utils/pageSize';
import { NewsDataProps, NewsItem } from '../../../../model/NewsDataProps';

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

function bindImages(id: number | undefined) {
  const alt = 'News Image';
  switch (id) {
    case 3:
      return <Card.Img className="mt-3 aws-image" src={awsCertManager} alt={alt} />;
    case 4:
      return <Card.Img className="mt-3 aws-badge" src={awsDeveloperCertC01} alt={alt} />;
    case 7:
      return <Card.Img className="mt-3 oracle-badge" src={oracleBadge11} alt={alt} />;
    case 8:
      return <Card.Img className="mt-3 oracle-badge" src={oracleBadge17} alt={alt} />;
    case 10:
      return <Card.Img className="mt-3 badge-hashicorp" src={hashicorpTerraformBadge} alt={alt} />;
    case 11:
      return <Card.Img className="mt-3 aws-badge" src={awsSolutionsArchitectCert} alt={alt} />;
    case 12:
      return <Card.Img className="mt-3 badge-spring" src={springCert} alt={alt} />;
    case 13:
      return <Card.Img className="mt-3 aws-cert" src={awsDeveloperCertC02} alt={alt} />;
    case 14:
      return <Card.Img className="mt-3 gcp-ace-cert" src={gcpCertACE} alt={alt} />;
    case 15:
      return (
        <Card.Img className="mt-3 aws-ai-practitioner-cert" src={awsAiPractitionerCert} alt={alt} />
      );
    case 16:
      return <Card.Img className="mt-3 ckad-cert" src={ckadCert} alt={alt} />;
    case 17:
      return <Card.Img className="mt-3 isaqb-cert" src={isaqbCert} alt={alt} />;
    default:
      return null;
  }
}

function makeStandardCard(item: NewsItem, layout: LayoutSize) {
  return (
    <a className="no-link" href={item.url} target="_blank" rel="noopener noreferrer">
      <Card className="p-3 news-card">
        <Card.Body className="card-body-flex">
          <div>
            <Card.Title>{item.title}</Card.Title>
            <Card.Subtitle className="mt-3 sub-title">{item.subTitle}</Card.Subtitle>
            <Card.Text as="div" className="mt-3">
              {/* eslint-disable-next-line react/no-danger */}
              <div className="dangerous" dangerouslySetInnerHTML={{ __html: item.text }} />
            </Card.Text>
          </div>
          {(layout === 'mobile' || layout === 'desktop') && (
            <div className="card-image-bottom">{bindImages(item.id)}</div>
          )}
        </Card.Body>
      </Card>
    </a>
  );
}

function NewsCommon({ layout }: Readonly<{ layout: LayoutSize }>) {
  return (
    <div data-cy="news-banner">
      <Banner title="NEWS & BLOG" />
      <div className="mt-4">
        <div className="card-tile text-fields" style={{ width: '80%' }}>
          <div className="text-fields mt-5">
            {layout === 'mobile' ? (
              <div>
                <p className="high-light-1">Software Engineering</p>
                <p className="high-light-1">Machine Learning</p>
              </div>
            ) : (
              <p className="high-light-1">Software Engineering • Machine Learning</p>
            )}
          </div>
          <div className="card-tile text-fields mt-5" style={{ width: '80%' }}>
            <p>
              Development news and blog stories on software engineering, including Java, Spring
              Framework, Python, cloud computing, and much more. I also list certification exams I
              have passed, which I treat as a gateway into new technologies – a way to build a
              solid, hands‑on foundation and internalise best practices, rather than a box‑ticking
              exercise.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LayoutDesktop({ newsContent, layout }: Readonly<NewsDataProps & { layout: LayoutSize }>) {
  if (newsContent.length <= 1) {
    return (
      <div className="news-wrapper">
        <NewsCommon layout={layout} />
      </div>
    );
  }

  const rows = [];
  for (let i = newsContent.length - 1; i >= 0; i -= 2) {
    const left = newsContent[i];
    const right = i - 1 >= 0 ? newsContent[i - 1] : null;
    rows.push(
      <div key={left.id} style={{ display: 'flex', gap: '1rem', width: '100%' }}>
        <div style={{ flex: 1 }}>{makeStandardCard(left, layout)}</div>
        {right && <div style={{ flex: 1 }}>{makeStandardCard(right, layout)}</div>}
      </div>,
    );
  }

  return (
    <div className="news-wrapper">
      <NewsCommon layout={layout} />
      <div className="mt-4 pt-2" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {rows}
      </div>
    </div>
  );
}

function LayoutTablet({ newsContent, layout }: Readonly<NewsDataProps & { layout: LayoutSize }>) {
  if (newsContent.length <= 1) {
    return (
      <div className="news-wrapper">
        <NewsCommon layout={layout} />
      </div>
    );
  }

  const items = [...newsContent].reverse().map((item) => (
    <div key={item.id} style={{ width: '100%' }}>
      {makeStandardCard(item, layout)}
    </div>
  ));

  return (
    <div className="news-wrapper">
      <NewsCommon layout={layout} />
      <div className="mt-4 pt-2" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {items}
      </div>
    </div>
  );
}

function LayoutMobile({ newsContent, layout }: Readonly<NewsDataProps & { layout: LayoutSize }>) {
  if (newsContent.length <= 1) {
    return (
      <div className="news-wrapper">
        <NewsCommon layout={layout} />
      </div>
    );
  }

  const items = [...newsContent]
    .reverse()
    .map((item) => <div key={item.id}>{makeStandardCard(item, layout)}</div>);

  return (
    <div className="news-wrapper">
      <NewsCommon layout={layout} />
      <div className="mt-4 pt-2" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {items}
      </div>
    </div>
  );
}

export default function NewsCardCreator({ newsContent }: NewsDataProps) {
  const layout = getLayoutSize();
  return (
    <div>
      <Header pageType="news" />
      {layout === 'mobile' && <LayoutMobile newsContent={newsContent} layout={layout} />}
      {layout === 'tablet' && <LayoutTablet newsContent={newsContent} layout={layout} />}
      {layout === 'desktop' && <LayoutDesktop newsContent={newsContent} layout={layout} />}
    </div>
  );
}
