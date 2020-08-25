import React, { useState, useRef, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import t from 'translate';
import { setLang } from '../../../services/translationService';


import headerLogo from '../../../images/headerLogo.png';
import './Header.scss';

const Header = ({ location: { pathname } }) => {
  const scrollPos = useRef(0);
  const visible = useRef(true);
  const [visibleState, setVisibleState] = useState(true);

  const [checked, setChecked] = useState(false);

  const changeChecked = () => { setChecked(!checked); };
  const closeMenu = () => { if (checked) setChecked(false); };

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 650) {
        let currentScrollPos = window.pageYOffset;
        console.log('scroll-cur:', currentScrollPos, 'scroll:', scrollPos);
        if (currentScrollPos < 0) currentScrollPos = 0;

        const newVisible = scrollPos.current >= currentScrollPos;

        visible.current = newVisible;
        scrollPos.current = currentScrollPos;

        if (newVisible !== visible) setVisibleState(newVisible);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <div className="header">


      <div className={`content-wrapper ${!visibleState ? 'hidden' : ''} ${checked ? 'open' : ''}`}>
        <Link onClick={closeMenu} to="/" className="nav-item"><img className="headerLogo" src={headerLogo} alt="headerLogo" /></Link>

        <input className="menu-btn" onChange={() => {}} type="checkbox" id="menu-btn" checked={checked} />
        <label className="menu-icon" htmlFor="menu-btn" onClick={changeChecked}><span className="navicon" /></label>

        <div className={pathname === '/' || pathname === '/about-us' ? 'nav-wrapper' : 'nav-wrapper-gray'}>
          <Link onClick={closeMenu} to="/about-us" className={pathname === '/about-us' ? 'nav-item active' : 'nav-item'}>{t('common.title')}</Link>
          <Link onClick={closeMenu} to="/lawyers" className={pathname === '/lawyers' ? 'nav-item active' : 'nav-item'}>{t('header.lawyers')}</Link>
          <Link onClick={closeMenu} to="/areas" className={pathname === '/areas' ? 'nav-item active' : 'nav-item'}>{t('header.areas')}</Link>
          <Link onClick={closeMenu} to="/contact" className={pathname === '/contact' ? 'nav-item active' : 'nav-item'}>{t('header.contact')}</Link>
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
          <div className="lng-switch">
            <span className="lng" onClick={() => { setLang('en'); }}>en</span>
            <span>|</span>
            <span className="lng" onClick={() => { setLang('rs'); }}>srb</span>
          </div>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  location: PropTypes.object.isRequired,
};

export default withRouter(Header);
