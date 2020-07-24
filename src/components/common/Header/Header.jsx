import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


import headerLogo from '../../../images/headerLogo.png';
import './Header.scss';

const Header = () => {
  const pageUrl = window.location.href;
  const route = pageUrl.substr(pageUrl.lastIndexOf('/') + 1);
  console.log(route);

  return (
    <div className="header">
      <div className="content-wrapper">
        <div className={route === '' && 'about-us' ? 'nav-wrapper' : 'nav-wrapper-gray'}>
          <Link to="/" className="nav-item"><img className="headerLogo" src={headerLogo} alt="headerLogo" /></Link>
          <Link to="/about-us" className="nav-item">o nama</Link>
          <Link to="/lawyers" className="nav-item">advokati</Link>
          <Link to="/" className="nav-item">oblasti</Link>
          <Link to="/" className="nav-item">kontakt</Link>
          {
            route !== '' && 'about-us' && (
            <div className="line-wrapper">
              <div className="small-line" />
              <div className="small-line" />
              <div className="small-line" />
              <div className="small-line" />
              <div className="small-line" />
              <div className="small-line" />
              <div className="small-line" />
            </div>
            )
          }
          <Link to="/" className="nav-item">en|srb</Link>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {};

export default Header;
