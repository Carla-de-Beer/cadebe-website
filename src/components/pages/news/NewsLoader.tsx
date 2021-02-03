import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsCardCreator from './newsCardCreator/NewsCardCreator';

export default function NewsLoader() {
  const [isLoading, setIsLoading] = useState(false);

  const [list, setNews] = useState({
    news: [{
      id: 1,
      title: 'XXXEssential Unix-based Anaconda Setup Guide',
      subTitle: '8 FEBRUARY 2020',
      text: 'This article describes the essential steps required for installing Anaconda and creating a conda environment on a Unix-based OS.',
      url: 'https://medium.com/@carla.debeer.uk/essential-anaconda-setup-kit-4b7e1fb803fc',
    }],
  });

  useEffect(() => {
    setIsLoading(true);
    axios.get('json/newsData.json')
      .then((response) => {
        setNews(response.data);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading && <NewsCardCreator newsContent={list.news} />}
      {!isLoading && (
        <NewsCardCreator newsContent={list.news} />
      )}
    </>
  );
}
