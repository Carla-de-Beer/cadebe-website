import React from 'react';

import './Skills.scss';
import Banner from '../../banner/Banner';
import Header from '../../header/Header';
import { getLayoutSize } from '../../../utils/pageSize';
import skillsData from '../../../data/skillsData.json';

interface SkillItem {
  title: string;
  lastUsed: string;
  level: number;
  years: number;
  version?: string;
}

interface SkillGroup {
  category: string;
  items: SkillItem[];
  color: string;
}

function SkillTag({ title }: Readonly<SkillItem>) {
  return <span className="skill-tag">{title}</span>;
}

function SkillCategory({ category, items, color }: Readonly<SkillGroup>) {
  return (
    <div
      className={`skill-category${color === '#cadebe' ? ' accent-hover' : ''}`}
      style={{ '--tag-color': color } as React.CSSProperties}
    >
      <h3 className="skill-category-title">{category}</h3>
      <div className="skill-tag-cloud">
        {items.map((item) => (
          <SkillTag
            key={item.title}
            title={item.title}
            lastUsed={item.lastUsed}
            level={item.level}
            years={item.years}
            version={item.version}
          />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const layout = getLayoutSize();
  const isMobile = layout === 'mobile' || layout === 'tablet';

  return (
    <div>
      <Header pageType="skills" />
      <div className="skills-wrapper pb-3">
        <div className="text-fields box">
          <div data-cy={isMobile ? 'skills-banner-mobile' : 'skills-banner-desktop'}>
            <Banner title="SKILLS" />
          </div>
          <div className="mt-4">
            <div className="card-tile text-fields content-width">
              <div className="text-fields mt-5">
                {isMobile ? (
                  <div>
                    <p className="high-light-1">Experience</p>
                    <p className="high-light-1">Technical Skills</p>
                  </div>
                ) : (
                  <p className="high-light-1">Experience • Technical Skills</p>
                )}
              </div>
            </div>
          </div>
          <div className="card-tile text-fields mt-5 content-width">
            <p>
              I design and deliver enterprise‑grade applications end to end – from backend services
              and cloud infrastructure to intuitive, insight‑driven user interfaces. I draw on
              practical experience with modern programming languages, tools and frameworks to build
              robust, maintainable solutions in collaborative, real‑world projects.
            </p>
            <p className="high-light-1 mt-5">Highlights from recent projects</p>
            <ul className="highlights-list mt-4">
              <li>
                Setting up OpenSearch/Elasticsearch for efficient search in Spring Boot applications
              </li>
              <li>
                Designing and operating CI/CD pipelines on GitLab/OpenShift with automated tests and
                vulnerability scans
              </li>
              <li>Using Spring Batch for job‑oriented processing in enterprise systems</li>
              <li>Building event‑driven architectures with cloud pub/sub and message queues</li>
              <li>Implementing PKI‑based API authentication with TLS client certificates</li>
              <li>Rolling out Cypress end‑to‑end tests in containerised environments</li>
            </ul>
          </div>
          <div className="mt-4 pt-2 skills-grid">
            {(skillsData.skillGroups as SkillGroup[]).map((group) => (
              <SkillCategory
                key={group.category}
                category={group.category}
                items={group.items}
                color={group.color}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
