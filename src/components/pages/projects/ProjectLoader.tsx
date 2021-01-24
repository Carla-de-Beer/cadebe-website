import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProjectCardCreator from './projectCardCreator/ProjectCardCreator';

export default function ProjectLoader() {
  const [isLoading, setIsLoading] = useState(false);

  const [list, setProjects] = useState({
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
        setProjects(response.data);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading && <ProjectCardCreator projectContent={list.projects} />}
      {!isLoading && (
        <ProjectCardCreator projectContent={list.projects} />
      )}
    </>
  );
}
