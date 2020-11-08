import React from 'react';

import './News.scss';

export default function News() {
  return (
    <div className="news-wrapper">
      <div className="text-fields" style={{ paddingTop: '30px' }}>
        <p className="mt-2 high-light">NEWS</p>
      </div>
      <div className="mt-4">
        <div className="card-tile text-fields" style={{ width: '80%' }}>
          <p>
            This page is currently under construction. News updates will appear soon!
          </p>
        </div>
      </div>
    </div>
  );
}
