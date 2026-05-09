import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProjectCardCreator from './projectCardCreator/ProjectCardCreator';

export default function ProjectLoader() {
  const [isLoading, setIsLoading] = useState(true);

  const [list, setList] = useState({
    projects: [{
      id: 1,
      title: 'TSP Distance Calculator',
      text: 'CCC',
      url: 'https://carla-de-beer.github.io/TSP-distance-calculator/',
      footerClass: 'Genetic Algorithm',
      footerLanguage: 'JavaScript',
    }],
  });

  useEffect(() => {
    setIsLoading(true);
    axios.get('json/projectData.json')
      .then((response) => {
        setList(response.data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return null;

  return <ProjectCardCreator projectContent={list.projects} />;
}
