import React from 'react';
import ProjectCardCreator from './projectCardCreator/ProjectCardCreator';
import projectData from '../../../data/projectData.json';
import { ProjectItem } from '../../../model/ProjectDataProps';

export default function ProjectLoader() {
  return <ProjectCardCreator projectContent={projectData.projects as ProjectItem[]} />;
}
