import React from 'react';

import './Skills.scss';
import Banner from '../../banner/Banner';
import Header from '../../header/Header';
import { getLayoutSize } from '../../../utils/pageSize';

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

const skillGroups: SkillGroup[] = [
  {
    category: 'Programming Languages & Frameworks',
    color: '#dce8fb',
    items: [
      { title: 'Java (SE)', lastUsed: '2026', level: 4, years: 10 },
      { title: 'JavaScript', lastUsed: '2024', level: 4, years: 10 },
      { title: 'TypeScript', lastUsed: '2024', level: 3, years: 5 },
      { title: 'Python', lastUsed: '2024', level: 3, years: 6 },
      { title: 'Shell Scripting (bash, sh)', lastUsed: '2024', level: 3, years: 6 },
      { title: 'Assembler (x86)', lastUsed: '2014', level: 3, years: 1 },
      { title: 'MATLAB', lastUsed: '2015', level: 3, years: 2 },
      { title: 'C++', lastUsed: '2014', level: 3, years: 1 },
    ],
  },
  {
    category: 'Backend Technologies',
    color: '#d6ede8',
    items: [
      { title: 'Spring Framework', lastUsed: '2026', level: 4, years: 6 },
      { title: 'Spring Boot', lastUsed: '2026', level: 4, years: 6 },
      { title: 'Spring AOP/AspectJ', lastUsed: '2026', level: 4, years: 6 },
      { title: 'Spring Thymeleaf', lastUsed: '2023', level: 4, years: 3 },
      { title: 'Spring Batch', lastUsed: '2026', level: 4, years: 2 },
      { title: 'Hibernate ORM', lastUsed: '2026', level: 3, years: 4 },
      { title: 'Hibernate Search', lastUsed: '2026', level: 3, years: 3 },
      { title: 'Hibernate Envers', lastUsed: '2026', level: 3, years: 3 },
      { title: 'Flask (Python)', lastUsed: '2024', level: 4, years: 2 },
      { title: 'OpenAPI', lastUsed: '2026', level: 4, years: 3 },
      { title: 'Apache Camel', lastUsed: '2020', level: 4, years: 1 },
    ],
  },
  {
    category: 'Database Technologies',
    color: '#fde8d6',
    items: [
      { title: 'PostgreSQL', lastUsed: '2026', level: 4, years: 4 },
      { title: 'MySQL', lastUsed: '2023', level: 3, years: 2 },
      { title: 'Elasticsearch / Opensearch', lastUsed: '2026', level: 4, years: 3 },
      { title: 'Redis', lastUsed: '2024', level: 3, years: 1 },
    ],
  },
  {
    category: 'Frontend Technologies',
    color: '#f0e6fb',
    items: [
      { title: 'Angular', lastUsed: '2023', level: 3, years: 4 },
      { title: 'React', lastUsed: '2026', level: 3, years: 4 },
      { title: 'HTML', lastUsed: '2026', level: 4, years: 10 },
      { title: 'CSS/SCSS', lastUsed: '2024', level: 3, years: 10 },
      { title: 'RxJS', lastUsed: '2023', level: 4, years: 3 },
      { title: 'npm', lastUsed: '2026', level: 4, years: 4 },
      { title: 'Jest', lastUsed: '2023', level: 4, years: 3 },
    ],
  },
  {
    category: 'Runtime Environment',
    color: '#e8f0dc',
    items: [
      { title: 'Kubernetes', lastUsed: '2024', level: 4, years: 3 },
      { title: 'Docker', lastUsed: '2024', level: 4, years: 5 },
      { title: 'OpenShift', lastUsed: '2024', level: 4, years: 3 },
      { title: 'Unix / Linux', lastUsed: '2024', level: 4, years: 10 },
    ],
  },
  {
    category: 'IAM & Security',
    color: '#fde8e8',
    items: [
      { title: 'Spring Security', lastUsed: '2024', level: 4, years: 4 },
      { title: 'Keycloak', lastUsed: '2024', level: 3, years: 2 },
    ],
  },
  {
    category: 'Cloud Platforms',
    color: '#dce8fb',
    items: [
      { title: 'AWS', lastUsed: '2025', level: 4, years: 5 },
      { title: 'GCP', lastUsed: '2024', level: 3, years: 1 },
    ],
  },
  {
    category: 'Markup & Data Formats',
    color: '#fdf6d6',
    items: [
      { title: 'YAML', lastUsed: '2026', level: 4, years: 10 },
      { title: 'JSON', lastUsed: '2026', level: 4, years: 10 },
      { title: 'XML', lastUsed: '2023', level: 4, years: 10 },
      { title: 'UML', lastUsed: '2026', level: 4, years: 10 },
    ],
  },
  {
    category: 'Testing & Engineering Practices',
    color: '#d6ede8',
    items: [
      { title: 'JUnit / Mockito', lastUsed: '2026', level: 4, years: 6 },
      { title: 'Spock Framework', lastUsed: '2020', level: 4, years: 1 },
      { title: 'Jest', lastUsed: '2023', level: 3, years: 3 },
      { title: 'Cypress (End-to-End Testing)', lastUsed: '2025', level: 4, years: 4 },
      {
        title: 'Continuous Integration / Continuous Delivery',
        lastUsed: '2026',
        level: 4,
        years: 5,
      },
      { title: 'Software Metrics', lastUsed: '2026', level: 4, years: 4 },
    ],
  },
  {
    category: 'Tools',
    color: '#e8e8f0',
    items: [
      // Build & dependency management
      { title: 'Apache Maven', lastUsed: '2026', level: 4, years: 10 },
      { title: 'JFrog Artifactory', lastUsed: '2026', level: 4, years: 1 },
      { title: 'OpenRewrite', lastUsed: '2026', level: 3, years: 1 },
      { title: 'Renovate Bot', lastUsed: '2026', level: 3, years: 1 },
      // Database migration
      { title: 'Liquibase', lastUsed: '2026', level: 3, years: 3 },
      { title: 'Flyway', lastUsed: '2023', level: 3, years: 1 },
      // Infrastructure & CI
      { title: 'Terraform', lastUsed: '2024', level: 4, years: 1 },
      { title: 'Jenkins', lastUsed: '2022', level: 1, years: 3 },
      // API & quality
      { title: 'OpenAPI', lastUsed: '2026', level: 4, years: 4 },
      { title: 'SonarQube', lastUsed: '2022', level: 3, years: 3 },
      // Version control
      { title: 'Git', lastUsed: '2026', level: 4, years: 10 },
      { title: 'GitHub Actions', lastUsed: '2026', level: 4, years: 2 },
      { title: 'GitLab CI/CD', lastUsed: '2026', level: 4, years: 1 },
      { title: 'Subversion', lastUsed: '2020', level: 3, years: 3 },
      // Project management
      { title: 'Atlassian Jira / Confluence', lastUsed: '2024', level: 4, years: 6 },
      // IDEs & editors
      { title: 'IntelliJ IDEA', lastUsed: '2026', level: 4, years: 10 },
      { title: 'JetBrains PyCharm', lastUsed: '2023', level: 4, years: 3 },
      { title: 'Jupyter Notebooks', lastUsed: '2023', level: 4, years: 4 },
      { title: 'Anaconda', lastUsed: '2023', level: 4, years: 3 },
      { title: 'Microsoft Visual Studio', lastUsed: '2026', level: 5, years: 2 },
      { title: 'Eclipse', lastUsed: '2020', level: 3, years: 4 },
    ],
  },
  {
    category: 'Artificial Intelligence',
    color: '#fde8f5',
    items: [
      { title: 'Machine Learning', lastUsed: '2026', level: 4, years: 10 },
      { title: 'Generative AI', lastUsed: '2026', level: 4, years: 1 },
      { title: 'Prompt Engineering', lastUsed: '2026', level: 4, years: 1 },
      { title: 'RAG Architecture', lastUsed: '2024', level: 4, years: 1 },
      { title: 'Deep Learning', lastUsed: '2023', level: 3, years: 3 },
      { title: 'Feature Engineering', lastUsed: '2023', level: 3, years: 3 },
      { title: 'Amazon Bedrock', lastUsed: '2024', level: 4, years: 1 },
      { title: 'Spring AI', lastUsed: '2025', level: 3, years: 1 },
      { title: 'Claude Code', lastUsed: '2026', level: 3, years: 1 },
      { title: 'MCP', lastUsed: '2026', level: 3, years: 1 },
      { title: 'pandas', lastUsed: '2023', level: 4, years: 4 },
      { title: 'scikit-learn', lastUsed: '2023', level: 3, years: 4 },
      { title: 'TensorFlow / Keras', lastUsed: '2023', level: 4, years: 4 },
    ],
  },
  {
    category: 'Software Engineering Practices',
    color: '#fdf6d6',
    items: [
      { title: 'Web Development', lastUsed: '2026', level: 4, years: 10 },
      { title: 'Object-Oriented Programming', lastUsed: '2026', level: 4, years: 10 },
      { title: 'Design Patterns', lastUsed: '2026', level: 4, years: 10 },
      { title: 'Agile Software Development', lastUsed: '2026', level: 4, years: 10 },
      { title: 'Trunk-Based Development', lastUsed: '2026', level: 4, years: 2 },
      { title: 'Test-Driven Development (TDD)', lastUsed: '2026', level: 4, years: 3 },
      { title: 'Pair Programming', lastUsed: '2026', level: 4, years: 10 },
      { title: 'Clean Code Development', lastUsed: '2026', level: 4, years: 10 },
      { title: 'Code Review', lastUsed: '2026', level: 4, years: 10 },
    ],
  },
];

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
            <div className="card-tile text-fields" style={{ width: '80%' }}>
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
          <div className="card-tile text-fields mt-5" style={{ width: '80%' }}>
            <p>
              In my professional work, I’ve gained practical experience with modern technologies,
              including a variety of programming languages, tools, and frameworks. I use these
              skills in collaborative, real-world projects to help deliver robust and maintainable
              solutions.
            </p>
          </div>
          <div className="mt-xl-4 mt-lg-4 mt-md-4 mt-4 pt-2 skills-grid">
            {skillGroups.map((group) => (
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
