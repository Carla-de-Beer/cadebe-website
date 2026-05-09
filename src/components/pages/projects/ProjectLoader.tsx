import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProjectCardCreator from './projectCardCreator/ProjectCardCreator';
import { ProjectItem } from '../../../model/ProjectDataProps';

export default function ProjectLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const [list, setList] = useState<{ projects: ProjectItem[] }>({
    projects: [
      {
        id: 1,
        title: 'TSP Distance Calculator',
        text: 'CCC',
        url: 'https://carla-de-beer.github.io/TSP-distance-calculator/',
        footerClass: 'Genetic Algorithm',
        footerLanguage: 'JavaScript',
      },
    ],
  });

  useEffect(() => {
    setIsLoading(true);
    axios
      .get('json/projectData.json')
      .then((response) => {
        setList(response.data);
        setIsLoading(false);
      })
      .catch(() => {
        setHasError(true);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return null;
  if (hasError) return null;

  return <ProjectCardCreator projectContent={list.projects} />;
}
