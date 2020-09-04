import React, { useState, useRef, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import t from 'translate';
import { changeLanguage } from '../../../actions/generalActions';

import headerLogo from '../../../images/headerLogo.png';
import './Header.scss';

const Header = ({ location: { pathname }, changeLanguage, lang }) => {
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
      <div className={`content-wrapper ${!visibleState ? 'hidden' : ''} ${checked ? 'open' : ''} ${pathname === '/' || pathname === '/about-us' ? '' : 'gray'}`}>

        <Link onClick={closeMenu} to="/" className="nav-item"><img className="headerLogo" src={headerLogo} alt="headerLogo" /></Link>

        <input className="menu-btn" onChange={() => {}} type="checkbox" id="menu-btn" checked={checked} />
        <label className="menu-icon" htmlFor="menu-btn" onClick={changeChecked}><span className="navicon" /></label>

        <div className={`${pathname === '/' || pathname === '/about-us' ? 'nav-wrapper' : 'nav-wrapper-gray'} ${lang}`}>
          <Link onClick={closeMenu} to="/about-us" className={pathname === '/about-us' ? 'nav-item active' : 'nav-item'}>{t('common.title')}</Link>
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
            <span className={`lng ${lang === 'en' ? 'active' : ''}`} onClick={() => { changeLanguage('en'); }}>en</span>
            <span>|</span>
            <span className={`lng ${lang === 'rs' ? 'active' : ''}`} onClick={() => { changeLanguage('rs'); }}>srb</span>
          </div>
        </div>
      </div>

    </div>
  );
};

Header.propTypes = {
  location: PropTypes.object.isRequired,
  changeLanguage: PropTypes.func.isRequired,
  lang: PropTypes.string.isRequired,
};

const mapStateToProps = ({ general }) => ({
  lang: general.lang,
});

const mapDispatchToProps = {
  changeLanguage,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
