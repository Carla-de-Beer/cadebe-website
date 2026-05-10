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

function SkillTag({ title, lastUsed, years, version }: Readonly<SkillItem>) {
  const tooltip = [version, `Last used: ${lastUsed}`, `${years} yr${years === 1 ? '' : 's'}`]
    .filter(Boolean)
    .join(' · ');
  return (
    <span className="skill-tag" title={tooltip}>
      {title}
    </span>
  );
}

function SkillCategory({ category, items, color }: Readonly<SkillGroup>) {
  return (
    <div className="skill-category" style={{ '--tag-color': color } as React.CSSProperties}>
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
      <div className="skills-wrapper">
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
              In my professional work, I&apos;ve gained practical experience with modern
              technologies, including a variety of programming languages, tools, and frameworks. I
              use these skills in collaborative, real-world projects to help deliver robust and
              maintainable solutions.
            </p>
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
