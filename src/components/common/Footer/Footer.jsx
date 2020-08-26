import React from 'react';
import { Link } from 'react-router-dom';
import t from 'translate';

import headerLogo from '../../../images/headerLogo.png';
import './Footer.scss';

const Footer = () => (
  <div className="footer">

    <div className="top">
      <div className="flex">
        <div className="flex-column">
          <div className="footer-title">{t('common.title')}</div>
          <div className="footer-link"><Link to="/about-us">{t('common.title')}</Link></div>
          <div className="footer-link"><Link to="/lawyers">{t('header.lawyers')}</Link></div>
          <div className="footer-link"><Link to="/areas">{t('header.areas')}</Link></div>
          <div className="footer-link"><Link to="/contact">{t('header.contact')}</Link></div>
        </div>
        <div className="flex-column right">
          <div className="footer-title">{t('homepage.contact.title')}</div>
          <div className="footer-link"><Link to="/contact?true">{t('homepage.contact.address')}</Link></div>
          <div className="footer-link"><Link to="/contact?true">EMAIL</Link></div>
          <div className="footer-link"><Link to="/contact?true">{t('common.number')}</Link></div>
        </div>
      </div>

      <div className="mid">
        <div className="logo">
          <Link to="/"><img className="logo" src={headerLogo} alt="logo" /></Link>
        </div>
      </div>
      <div className="flex">
        <div className="flex-column">
          <div className="footer-title">PARTNERI</div>
          <div className="footer-link"><Link to="/">PARTNER 1</Link></div>
          <div className="footer-link"><Link to="/">PARTNER 1</Link></div>
          <div className="footer-link"><Link to="/">PARTNER 1</Link></div>
          <div className="footer-link"><Link to="/">PARTNER 1</Link></div>
        </div>
        <div className="flex-column right">
          <div className="footer-title">SOCIAL</div>
          <div className="footer-link"><Link to="/">SOCIAL1</Link></div>
          <div className="footer-link"><Link to="/">SOCIAL2</Link></div>
          <div className="footer-link"><Link to="/">SOCIAL3</Link></div>
          <div className="footer-link"><Link to="/">SOCIAL4</Link></div>
        </div>
      </div>
    </div>

    <div className="bottom">
      <div className="svarog">© svarogdev</div>
    </div>

  </div>
);

export default Footer;
