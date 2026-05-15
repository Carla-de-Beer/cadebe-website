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
import handBlueLogo from '../../../../assets/images/news/hand-blue-logo.png';
import beanstalkImage from '../../../../assets/images/news/beanstalk.webp';

function bindImages(id: number | undefined) {
  switch (id) {
    case 3:
      return (
        <Card.Img className="mt-3 aws-image" src={awsCertManager} alt="AWS Certificate Manager" />
      );
    case 4:
      return (
        <Card.Img
          className="mt-3 aws-badge"
          src={awsDeveloperCertC01}
          alt="AWS Certified Developer Associate C01 badge"
        />
      );
    case 7:
      return (
        <Card.Img
          className="mt-3 oracle-badge"
          src={oracleBadge11}
          alt="Oracle Certified Professional Java 11 badge"
        />
      );
    case 8:
      return (
        <Card.Img
          className="mt-3 oracle-badge"
          src={oracleBadge17}
          alt="Oracle Certified Professional Java 17 badge"
        />
      );
    case 10:
      return (
        <Card.Img
          className="mt-3 badge-hashicorp"
          src={hashicorpTerraformBadge}
          alt="HashiCorp Terraform Associate badge"
        />
      );
    case 11:
      return (
        <Card.Img
          className="mt-3 aws-badge"
          src={awsSolutionsArchitectCert}
          alt="AWS Certified Solutions Architect Associate badge"
        />
      );
    case 12:
      return (
        <Card.Img
          className="mt-3 badge-spring"
          src={springCert}
          alt="Spring Certified Professional badge"
        />
      );
    case 13:
      return (
        <Card.Img
          className="mt-3 aws-cert"
          src={awsDeveloperCertC02}
          alt="AWS Certified Developer Associate C02 badge"
        />
      );
    case 14:
      return (
        <Card.Img
          className="mt-3 gcp-ace-cert"
          src={gcpCertACE}
          alt="Google Cloud Associate Cloud Engineer badge"
        />
      );
    case 15:
      return (
        <Card.Img
          className="mt-3 aws-ai-practitioner-cert"
          src={awsAiPractitionerCert}
          alt="AWS Certified AI Practitioner badge"
        />
      );
    case 16:
      return (
        <Card.Img
          className="mt-3 ckad-cert"
          src={ckadCert}
          alt="Certified Kubernetes Application Developer badge"
        />
      );
    case 17:
      return (
        <Card.Img
          className="mt-3 isaqb-cert"
          src={isaqbCert}
          alt="iSAQB Certified Professional for Software Architecture badge"
        />
      );
    case 141:
      return (
        <Card.Img className="mt-3 hand-blue-logo" src={handBlueLogo} alt="Article illustration" />
      );
    case 142:
      return (
        <Card.Img
          className="mt-3 article-image"
          src={beanstalkImage}
          alt="AWS Elastic Beanstalk article illustration"
        />
      );
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
        <div className="card-tile text-fields content-width">
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
          <div className="card-tile text-fields content-width mt-5">
            <p>
              News and blog posts featuring certification milestones, technical articles and
              practical takeaways from day‑to‑day software engineering work.
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
    <div className="news-wrapper pb-3">
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
    <div className="news-wrapper pb-3">
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
    <div className="news-wrapper pb-3">
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
