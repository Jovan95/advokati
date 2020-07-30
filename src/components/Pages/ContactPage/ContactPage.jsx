import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ContactUsForm from '../../ContactUsForm/ContactUsForm';


import email from '../../../images/email.png';
import './ContactPage.scss';

const ContactPage = () => {
  console.log('Hello!');

  return (
    <div className="contact-page">
      <div className="container">
        <div className="width-container">
          <div className="gray-title">kontakt</div>
        </div>
      </div>

      <div className="width-container">
        <div className="content-wrapper">
          <div className="long-line" />
          <div className="middle">
            <div className="left">
              <div className="top">
                <div className="lines">
                  <div className="small-line" />
                  <div className="small-line" />
                  <div className="small-line" />
                  <div className="small-line" />
                </div>
                <div className="text-about">
                  <div className="text-title">ime firme</div>
                  <div className="text-descrip">Milos Lekic</div>
                  <div className="text-title">adresa</div>
                  <div className="text-descrip">Bulevar Oslobodjenja 115, 11 000 Beograd</div>
                  <div className="text-title">kontakt telefon</div>
                  <div className="text-descrip">011 32 12 123</div>
                  <div className="text-title">e-mail</div>
                  <div><img className="text-img" src={email} alt="email" /></div>
                </div>
              </div>
              <div className="med-line" />
              <div className="bottom">
                <div className="lines">
                  <div className="small-line" />
                  <div className="small-line" />
                  <div className="small-line" />
                  <div className="small-line" />
                </div>
                <div className="map">
                  <h1>MAP</h1>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="form-about">
                <div className="form-title">pisite nam</div>
                <div className="form-descrip">Stojimo vam na raspolaganju za sva dodatna pitanja</div>
              </div>
              <div className="contact-us">
                <ContactUsForm />
              </div>
            </div>
          </div>
          <div className="bot">
            <div className="long-line" />
            <div className="long-line" />
          </div>
        </div>
      </div>
    </div>
  );
};

ContactPage.propTypes = {};

export default ContactPage;
