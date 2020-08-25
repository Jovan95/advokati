import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import t from 'translate';
import PropTypes from 'prop-types';
import ContactUsForm from '../../ContactUsForm/ContactUsForm';
import MapView from '../../Map/MapViewContact';


import email from '../../../images/email.png';
import './ContactPage.scss';

const ContactPage = () => {
  const contactRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: contactRef.current.offsetTop - 20, behavior: 'smooth' });
  }, []);

  return (
    <div className="contact-page">
      <div className="container">
        <div className="width-container">
          <div ref={contactRef} className="gray-title">{t('homepage.contact.title')}</div>
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
                  <div className="text-title">{t('homepage.contact.comp')}</div>
                  <div className="text-descrip">Milos Lekic</div>
                  <div className="text-title">{t('homepage.contact.address')}</div>
                  <div className="text-descrip">Bulevar Oslobodjenja 115, 11 000 Beograd</div>
                  <div className="text-title">{t('homepage.contact.phone')}</div>
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
                  <MapView />
                </div>
              </div>
            </div>
            <div className="right">
              <div className="form-about">
                <div className="form-title">{t('homepage.contact.write')}</div>
                <div className="form-descrip">{t('homepage.contact.write_about')}</div>
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
