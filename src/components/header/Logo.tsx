import React from 'react';
import { Link } from 'react-router-dom';
import PageSize from '../../utils/enums';

import './Header.scss';

import logo from '../../assets/images/shared/logo.png';

export default class Logo extends React.Component<any, any> {
  setHeaderLayoutMobile = () => (
    <div className="mt-xl-5 mt-lg-4 mt-md-3 mt-3">
      <Link to="/">
        <img src={logo} width="60" height="60" alt="Logo" />
      </Link>
    </div>
  );

  setHeaderLayoutLarge = () => (
    <div className="mt-4">
      <Link to="/">
        <img src={logo} width="60" height="60" alt="Logo" />
      </Link>
    </div>
  );

  setNavHeader = () => {
    if (window.innerWidth.valueOf() < PageSize.LARGE) {
      return this.setHeaderLayoutMobile();
    }
    return this.setHeaderLayoutLarge();
  };

  render() {
    return (
      <>
        {this.setNavHeader()}
      </>
    );
  }
}
