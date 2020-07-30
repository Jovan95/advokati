import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { aboutUs } from 'constants/aboutUs';

import aboutUsImg from '../../../images/aboutUsImg.png';
import './AboutUsPage.scss';

const AboutUsPage = () => {
  const {
    pageTitle,
    pageAbout,
    officeOwner,
    owner,
    text,
    text2,
    text3,
    text4,
    text5,
  } = aboutUs;

  return (
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
            <div className="arrow" />
          </div>
          <div className="long-line" />
        </div>
        <div className="about-us-img">
          <img className="about-img" src={aboutUsImg} alt="aboutUs" />
        </div>
      </div>

      <div className="width-container">
        <div className="page-about">
          <div className="page-title">{pageTitle}</div>
          <div className="title-about">{pageAbout}</div>
        </div>
        <div className="medium-line" />
        <div className="page-content">
          <div className="lines">
            <div className="small-line" />
            <div className="small-line" />
            <div className="small-line" />
            <div className="small-line" />
            <div className="small-line" />
            <div className="small-line" />
            <div className="small-line" />
            <div className="small-line" />
            <div className="small-line" />
            <div className="small-line" />
            <div className="small-line" />
            <div className="small-line" />
          </div>
          <div className="page-text">
            <div className="office-owner">{officeOwner}</div>
            <div className="owner">{owner}</div>
            <div className="text-content">{text}</div>
            <div className="text-content">{text2}</div>
            <div className="text-content">{text3}</div>
            <div className="text-content">{text4}</div>
            <div className="text-content">{text5}</div>
          </div>
        </div>
        <div className="medium-line" />
      </div>
    </div>
  );
};

AboutUsPage.propTypes = {};

export default AboutUsPage;
