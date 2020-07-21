import React from 'react';
import { Link } from 'react-router-dom';

import footerLogo from '../../images/footerLogo.png';
import './Footer.scss';

const Footer = () => (
  <div className="footer">
    <div className="top">
      <div className="left">
        <div className="left-left">
          <div className="footer-title">O NAMA</div>
          <div className="footer-link"><Link to="/">O NAMA</Link></div>
          <div className="footer-link"><Link to="/">ADVOKATI</Link></div>
          <div className="footer-link"><Link to="/">OBLASTI</Link></div>
          <div className="footer-link"><Link to="/">KONTAKT</Link></div>
        </div>
        <div className="left-right">
          <div className="footer-title">KONTAKT</div>
          <div className="footer-link"><Link to="/">ADRESA</Link></div>
          <div className="footer-link"><Link to="/">EMAIL</Link></div>
          <div className="footer-link"><Link to="/">TELEFON1</Link></div>
          <div className="footer-link"><Link to="/">TELEFON1</Link></div>
        </div>
      </div>
      <div className="mid">
        <div className="logo">
          <img src={footerLogo} alt="logo" />
        </div>
      </div>
      <div className="right">
        <div className="right-left">
          <div className="footer-title">PARTNERI</div>
          <div className="footer-link"><Link to="/">PARTNER 1</Link></div>
          <div className="footer-link"><Link to="/">PARTNER 1</Link></div>
          <div className="footer-link"><Link to="/">PARTNER 1</Link></div>
          <div className="footer-link"><Link to="/">PARTNER 1</Link></div>
        </div>
        <div className="right-right">
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
