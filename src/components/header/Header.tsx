import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import PageSize from '../../utils/enums';

import './Header.scss';

import logo from '../../assets/images/shared/logo.png';
import menu from '../../assets/icons/menu.svg';

export default class Header extends React.Component<IHeaderProps, IHeaderState> {
  constructor(props: IHeaderProps) {
    super(props);

    const { pageType } = this.props;

    this.state = {
      pageType,
    };
  }

    setHeaderLayoutMobile = (pageType: string) => (
      <div className="mt-xl-5 mt-lg-4 mt-md-3 mt-3">
        <div className="row mr-3">
          <div className="col-lg-2 col-md-2 col-3">
            <Link to="/">
              <img className="logo" src={logo} width="60" height="60" alt="Logo" />
            </Link>
          </div>
          <div className="col-lg-9 col-md-9 col-7">
            <Link to="/">
              <p className="mt-3 nav-text logo-accent">cadebe.dev</p>
            </Link>
          </div>
          <div className="mt-2 col-lg-1 col-md-1 col-2 pl-lg-5 pl-md-4 pl-4">
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
              <Dropdown.Item
                href="/"
                className={pageType === 'home' ? 'nav-text link-high-light' : 'nav-text link'}
              >
                Home
              </Dropdown.Item>
              <Dropdown.Item
                href="/projects"
                className={pageType === 'projects' ? 'nav-text link-high-light' : 'nav-text link'}
              >
                Projects
              </Dropdown.Item>
              <Dropdown.Item
                href="/skills"
                className={pageType === 'skills' ? 'nav-text link-high-light' : 'nav-text link'}
              >
                Skills
              </Dropdown.Item>
              <Dropdown.Item
                href="/news"
                className={pageType === 'news' ? 'nav-text link-high-light' : 'nav-text link'}
              >
                News
              </Dropdown.Item>
              <Dropdown.Item
                href="/about"
                className={pageType === 'about' ? 'nav-text link-high-light' : 'nav-text link'}
              >
                About
              </Dropdown.Item>
            </DropdownButton>
          </div>
        </div>
      </div>
    );

    setHeaderLayoutLarge = () => (
      <div className="mt-4">
        <div className="row">
          <div className="col-4">
            <div className="row">
              <div className="col-lg-3">
                <Link to="/">
                  <img className="logo" src={logo} width="60" height="60" alt="Logo" />
                </Link>
              </div>
              <div className="col-lg-5">
                <Link to="/">
                  <p className="mt-3 nav-text logo-accent">cadebe.dev</p>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 ml-4">
            { this.navbar() }
          </div>
          <div className="col-lg-4" />
        </div>
      </div>
    );

  navbar = () => (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/skills">Skills</Nav.Link>
            <Nav.Link href="/news">News</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

    setNavHeader = () => {
      const { pageType } = this.state;

      if (window.innerWidth.valueOf() < PageSize.LARGE) {
        return this.setHeaderLayoutMobile(pageType);
      }
      return this.setHeaderLayoutLarge();
    };

    render() {
      return (
        <div className="header-wrapper">
          { this.setNavHeader() }
        </div>
      );
    }
}
