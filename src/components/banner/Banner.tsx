import React from 'react';
import { BannerProps } from '../../model/BannerProps';

import './Banner.scss';

export default function Banner({ title }: BannerProps) {
  return (
    <div className="banner-wrapper text-fields" style={{ paddingTop: '30px' }}>
      <p className="mt-2 high-light">{title}</p>
    </div>
  );
}
