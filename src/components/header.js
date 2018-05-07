import React from 'react';
import Link from 'gatsby-link';
import logo from '../img/logos/cc_logo-text.png';
import './header.scss';

const Header = ({ siteTitle }) => (
  <div className="header">
    <div className="header-menu" />
    <div className="header-logo">
      <Link className="header-logo-link" to="/">
        <img alt="Logo" className="header-logo-image" src={logo} />
      </Link>
    </div>
  </div>
);

export default Header;
