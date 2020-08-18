import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';


import headerLogo from '../../../images/headerLogo.png';
import './Header.scss';

const Header = ({ location: { pathname } }) => {
  const [checked, setChecked] = useState(false);
  const closeMenu = () => { if (checked) setChecked(false); };

  const changeChecked = () => {
    setChecked(!checked);
  };
  return (
    <div className={`header ${checked ? 'open' : ''}`}>


      <div className="content-wrapper">

        <input className="menu-btn" onChange={() => {}} type="checkbox" id="menu-btn" checked={checked} />
        <label className="menu-icon" htmlFor="menu-btn" onClick={changeChecked}><span className="navicon" /></label>

        <div className={pathname === '/' || pathname === '/about-us' ? 'nav-wrapper' : 'nav-wrapper-gray'}>
          <Link onClick={closeMenu} to="/" className="nav-item"><img className="headerLogo" src={headerLogo} alt="headerLogo" /></Link>
          <Link onClick={closeMenu} to="/about-us" className={pathname === '/about-us' ? 'nav-item active' : 'nav-item'}>o nama</Link>
          <Link onClick={closeMenu} to="/lawyers" className={pathname === '/lawyers' ? 'nav-item active' : 'nav-item'}>advokati</Link>
          <Link onClick={closeMenu} to="/areas" className={pathname === '/areas' ? 'nav-item active' : 'nav-item'}>oblasti</Link>
          <Link onClick={closeMenu} to="/contact" className={pathname === '/contact' ? 'nav-item active' : 'nav-item'}>kontakt</Link>
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
