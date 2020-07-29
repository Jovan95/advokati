import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { aboutUs } from 'constants/aboutUs';

import aboutUsImg from '../../images/aboutUsImg.png';
import './AboutUs.scss';

const AboutUs = () => (
  <div className="about-us">
    <div className="header-area">
      <div className="links-area">
        <div className="long-line" />
        <div className="text-line-area">
          <div className="lines">
            <div className="medium-line" />
            <div className="medium-line" />
            <div className="medium-line" />
          </div>
          <div className="text">o nama</div>
        </div>
        <div className="long-line" />
      </div>
      <div className="about-us-img">
        <img className="about-img" src={aboutUsImg} alt="aboutUs" />
      </div>
    </div>
  </div>
);

AboutUs.propTypes = {};

export default AboutUs;
