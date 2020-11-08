import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import './Header.scss';

import logo from '../../assets/images/logo.png';
import menu from '../../assets/icons/menu.svg';

export default class Header extends React.Component {
    setHeaderLayoutMobile = () => (
      <div className="mt-4">
        <div className="row mr-3">
          <div className="col-lg-2 col-md-2 col-3">
            <img className="logo" src={logo} width="60" height="60" alt="Logo" />
          </div>
          <div className="col-lg-8 col-md-9 col-7">
            <p className="mt-3 nav-text" style={{ color: '#31ccfd' }}>cadebe.dev</p>
          </div>
          <div className="mt-2 col-lg-2 col-md-1 col-2">
            <DropdownButton
              menuAlign="right"
              className="menu-button"
              style={{
                width: '50%',
              }}
              title={(
                <img
                  src={menu}
                  alt="Menu"
                  style={{
                    width: '30px', height: '30px', opacity: '0.5',
                  }}
                />
                        )}
            >
              <Dropdown.Item>
                <Link to="/" className="nav-text link">Home</Link>
              </Dropdown.Item>
              <Dropdown.Item href="/projects">
                <Link to="/projects" className="nav-text link">Projects</Link>
              </Dropdown.Item>
              <Dropdown.Item href="/news">
                <Link
                  to="/news"
                  className="nav-text link"
                >
                  News
                </Link>
              </Dropdown.Item>
              <Dropdown.Item href="/about">
                <Link
                  to="/about"
                  className="nav-text link"
                >
                  About
                </Link>
              </Dropdown.Item>
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
              <div className="col-lg-3">
                <img className="logo" src={logo} width="60" height="60" alt="Logo" />
              </div>
              <div className="col-lg-5">
                <p className="nav-text mt-3" style={{ color: '#31ccfd' }}>cadebe.dev</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mt-3">
            <div className="row">
              <div className="col-lg-3">
                <Link to="/" className="nav-text link">Home</Link>
              </div>
              <div className="col-lg-3">
                <Link to="/projects" className="nav-text link">Projects</Link>
              </div>
              <div className="col-lg-3">
                <Link to="/news" className="nav-text link">News</Link>
              </div>
              <div className="col-lg-3">
                <Link to="/about" className="nav-text link">About</Link>
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
