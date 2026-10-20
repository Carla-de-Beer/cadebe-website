import React from 'react';
import NewsCardCreator from './newsCardCreator/NewsCardCreator';
import newsData from '../../../data/newsData.json';
import { NewsItem } from '../../../model/NewsDataProps';

export default function NewsLoader() {
  return <NewsCardCreator newsContent={newsData.news as NewsItem[]} />;
}
