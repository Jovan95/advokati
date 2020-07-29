import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


import headerLogo from '../../../images/headerLogo.png';
import './Header.scss';

const Header = ({ location: { pathname } }) => {
  console.log(pathname);
  return (
    <div className="header">
      <div className="content-wrapper">
        <div className={pathname === '/' || '/about-us' ? 'nav-wrapper' : 'nav-wrapper-gray'}>
          <Link to="/" className="nav-item"><img className="headerLogo" src={headerLogo} alt="headerLogo" /></Link>
          <Link to="/about-us" className="nav-item">o nama</Link>
          <Link to="/lawyers" className="nav-item">advokati</Link>
          <Link to="/areas" className="nav-item">oblasti</Link>
          <Link to="/contact" className="nav-item">kontakt</Link>
          {
            pathname !== '/' && '/about-us' && (
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

Header.propTypes = {
  location: PropTypes.object.isRequired,
};

export default withRouter(Header);
