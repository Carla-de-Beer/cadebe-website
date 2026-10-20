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
        <div className="col-11" />
        <div className="mt-2 col-1">
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
              href="/skills"
              className={
                pageType === 'skills' ? 'nav-text link-high-light-mobile' : 'nav-text link'
              }
            >
              Skills
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
    <div className="mt-4 nav-bar-large">
      <Link to="/" className={pageType === 'home' ? 'nav-text link-high-light' : 'nav-text link'}>
        Home
      </Link>
      <Link
        to="/projects"
        className={pageType === 'projects' ? 'nav-text link-high-light' : 'nav-text link'}
      >
        Projects
      </Link>
      <Link
        to="/skills"
        className={pageType === 'skills' ? 'nav-text link-high-light' : 'nav-text link'}
      >
        Skills
      </Link>
      <Link
        to="/news"
        className={pageType === 'news' ? 'nav-text link-high-light' : 'nav-text link'}
      >
        News
      </Link>
      <Link
        to="/about"
        className={pageType === 'about' ? 'nav-text link-high-light' : 'nav-text link'}
      >
        About
      </Link>
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
