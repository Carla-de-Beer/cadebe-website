import React from 'react';

import './Header.scss';
import { Link } from 'react-router-dom';

import logo from '../../../assets/images/logo.png';

export default function Header() {
  return (
    <div className="header-wrapper mt-4 ml-5 mr-5">
      <div className="row">
        <div className="col-4">

          <div className="row">
            <div className="col-3">
              <img className="logo" src={logo} width="60" height="60" alt="logo" />
            </div>
            <div className="col-5">
              <p className="nav-text mt-3" style={{ color: '#31ccfd' }}>cadebe.dev</p>
            </div>
          </div>
        </div>
        <div className="col-4 mt-3">
          <div className="row">
            <div className="col-3">
              <Link to="/" className="nav-text link"> Home </Link>
            </div>
            <div className="col-3">
              <Link to="/projects" className="nav-text link"> Projects </Link>
            </div>
            <div className="col-3">
              <Link to="/blog" className="nav-text link"> Blog/News </Link>
            </div>
            <div className="col-3">
              <Link to="/about" className="nav-text link"> About </Link>
            </div>
          </div>
        </div>
        <div className="col-4" />
      </div>
    </div>
  );
}
