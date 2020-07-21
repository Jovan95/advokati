import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
// import PropTypes from 'prop-types';
import logo from '../../images/logo.png';
import homepage from '../../images/homepage.png';
import './HomePage.scss';

const HomePage = () => (
  <div className="homepage">
    <div className="header">
      <div className="header-left">
        <div className="logo">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <div className="grid-item">
          <Link to="/">O nama</Link>
        </div>
        <div className="grid-item">
          <Link to="/">Advokati</Link>
        </div>
        <div className="grid-item">
          <Link to="/">Oblasti</Link>
        </div>
        <div className="grid-item">
          <Link to="/">Kontakt</Link>
        </div>
        <div className="grid-item" />
        <div className="grid-item">
          eng|srb
        </div>
        <div className="grid-item">
          <div className="title">MILOS LEKIC</div>
          <p className="title-about">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div className="header-right">
        <div className="image">
          <img src={homepage} className="header-img" alt="homepage" />
        </div>
        <div className="box" />
      </div>
    </div>

    <Footer />
  </div>
);

HomePage.propTypes = {};

export default HomePage;
