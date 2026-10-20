import React from 'react';
import { Link } from 'react-router-dom';
import { getLayoutSize } from '../../utils/pageSize';

import './Header.scss';

import logo from '../../assets/images/shared/logo.png';

export default function Logo() {
  const layout = getLayoutSize();
  const className =
    layout === 'mobile' || layout === 'tablet' ? 'mt-xl-5 mt-lg-4 mt-md-3 mt-3' : 'mt-4';

  return (
    <div className={className}>
      <Link to="/">
        <img src={logo} width="60" height="60" alt="Logo" />
      </Link>
    </div>
  );
}
