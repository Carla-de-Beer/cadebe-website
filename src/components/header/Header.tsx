import React from 'react';
import { Link } from 'react-router-dom';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

import './Header.scss';

import logo from '../../assets/images/logo.png';

export default class Header extends React.Component {
    setHeaderLayoutMobile = () => (
      <div className="mt-4">
        <div className="row mr-3">
          <div className="col-lg-2 col-md-2 col-3">
            <img className="logo ml-1" src={logo} width="60" height="60" alt="logo" />
          </div>
          <div className="col-lg-7 col-md-7 col-6">
            <p className="mt-3 nav-text" style={{ color: '#31ccfd' }}>cadebe.dev</p>
          </div>
          <div className="mt-2 col-lg-3 col-md-3 col-3">
            <DropdownButton className="menu-button float-right" title="Menu" style={{ margin: 'none' }}>
              <Dropdown.Item href="/">Home</Dropdown.Item>
              <Dropdown.Item href="/projects">Projects</Dropdown.Item>
              <Dropdown.Item href="/news">News</Dropdown.Item>
              <Dropdown.Item href="/about">About</Dropdown.Item>
            </DropdownButton>
          </div>
        </div>
      </div>
    )

    setHeaderLayoutLarge = () => (
      <div className="mt-4">
        <div className="row">
          <div className="col-4">
            <div className="row">
              <div className="col-lg-3 ml-1">
                <img className="logo" src={logo} width="60" height="60" alt="logo" />
              </div>
              <div className="col-lg-5">
                <p className="nav-text mt-3" style={{ color: '#31ccfd' }}>cadebe.dev</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mt-3">
            <div className="row">
              <div className="col-lg-3">
                <Link to="/" className="nav-text link"> Home </Link>
              </div>
              <div className="col-lg-3">
                <Link to="/projects" className="nav-text link"> Projects </Link>
              </div>
              <div className="col-lg-3">
                <Link to="/news" className="nav-text link">News </Link>
              </div>
              <div className="col-lg-3">
                <Link to="/about" className="nav-text link"> About </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4" />
        </div>
      </div>
    )

    setNavHeader = () => {
      if (window.innerWidth.valueOf() < 1024) {
        return this.setHeaderLayoutMobile();
      }
      return this.setHeaderLayoutLarge();
    };

    render() {
      return (
        <div className="header-wrapper">
          {this.setNavHeader()}
        </div>
      );
    }
}
