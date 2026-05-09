import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { getLayoutSize } from '../../utils/pageSize';
import { HeaderProps } from '../../model/HeaderProps';

import './Header.scss';
import menu from '../../assets/icons/menu.svg';

function HeaderLayoutMobile({ pageType }: HeaderProps) {
  return (
    <div className="mt-xl-5 mt-lg-4 mt-md-3 mt-3">
      <div className="row me-3">
        <div className="col-lg-2 col-md-2 col-3">
          <Link to="/">
            {/* <img className="logo" src={logo} width="60" height="60" alt="Logo" /> */}
          </Link>
        </div>
        <div className="col-lg-9 col-md-9 col-7" />
        <div className="mt-2 col-lg-1 col-md-1 col-2 ps-lg-5 ps-md-4 ps-4">
          <DropdownButton
            align="end"
            className="menu-button"
            style={{ width: '50%' }}
            title={
              <img
                src={menu}
                alt="Menu"
                style={{ width: '30px', height: '30px', opacity: '0.5' }}
              />
            }
          >
            <Dropdown.Item
              href="/"
              className={pageType === 'home' ? 'nav-text link-high-light-mobile' : 'nav-text link'}
            >
              Home
            </Dropdown.Item>
            <Dropdown.Item
              href="/projects"
              className={
                pageType === 'projects' ? 'nav-text link-high-light-mobile' : 'nav-text link'
              }
            >
              Projects
            </Dropdown.Item>
            <Dropdown.Item
              href="/news"
              className={pageType === 'news' ? 'nav-text link-high-light-mobile' : 'nav-text link'}
            >
              News
            </Dropdown.Item>
            <Dropdown.Item
              href="/about"
              className={pageType === 'about' ? 'nav-text link-high-light-mobile' : 'nav-text link'}
            >
              About
            </Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
    </div>
  );
}

function HeaderLayoutLarge({ pageType }: HeaderProps) {
  return (
    <div className="mt-4">
      <div className="row">
        <div className="col-4">
          <div className="row">
            <div className="col-lg-3">
              <Link to="/">
                {/* <img className="logo" src={logo} width="60" height="60" alt="Logo" /> */}
              </Link>
            </div>
            <div className="col-lg-5" />
          </div>
        </div>
        <div className="col-lg-4 mt-3">
          <div className="row text-center">
            <div className="col-lg-3">
              <Link
                to="/"
                className={pageType === 'home' ? 'nav-text link-high-light' : 'nav-text link'}
              >
                Home
              </Link>
            </div>
            <div className="col-lg-3">
              <Link
                to="/projects"
                className={pageType === 'projects' ? 'nav-text link-high-light' : 'nav-text link'}
              >
                Projects
              </Link>
            </div>
            <div className="col-lg-3">
              <Link
                to="/news"
                className={pageType === 'news' ? 'nav-text link-high-light' : 'nav-text link'}
              >
                News
              </Link>
            </div>
            <div className="col-lg-3">
              <Link
                to="/about"
                className={pageType === 'about' ? 'nav-text link-high-light' : 'nav-text link'}
              >
                About
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-4" />
      </div>
    </div>
  );
}

export default function Header({ pageType }: HeaderProps) {
  const layout = getLayoutSize();
  return (
    <div className="header-wrapper">
      {layout === 'mobile' || layout === 'tablet' ? (
        <HeaderLayoutMobile pageType={pageType} />
      ) : (
        <HeaderLayoutLarge pageType={pageType} />
      )}
    </div>
  );
}
