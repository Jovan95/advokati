import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { LAWYERS } from 'constants/lawyers';
import { AREAS, OPTIONS } from 'constants/areas';
import MapView from '../../Map/MapView';
import CarouselSlider from '../../Carousel/CarouselSlider';
import ImageLoader from '../../ImageLoader/ImageLoader';

import Milos from '../../../images/Milos.png';
import homepage from '../../../images/homepage.png';
import arrow from '../../../images/arrow.png';
import email from '../../../images/email.png';
import './HomePage.scss';

const HomePage = () => {
  const [activeLawyerPosition] = useState(LAWYERS[0].position);
  const [activeArea, setActiveArea] = useState(AREAS[0].id);

  const activeTab = AREAS.find(({ id }) => id === activeArea);
  const aboutUsRef = useRef(null);

  const scrollToAboutUs = () => {
    window.scrollTo({ top: aboutUsRef.current.offsetTop - 20, behavior: 'smooth' });
  };

  return (
    <div className="homepage">
      <div className="header-area">
        <div className="left">
          <div className="lines">
            <div className="long-line" />
            <div className="long-line" />
            <div className="long-line" />
            <div className="long-line" />
            <div className="long-line" />
          </div>
          <div className="text">
            <div className="header-title">miloš lekić</div>
            <div className="header-about">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
          </div>
          <div onClick={scrollToAboutUs} className="arrow" />
        </div>
        <div className="right">
          <ImageLoader className="header-image" src={homepage} alt="homepage" />
          <div className="box" />
        </div>
      </div>

      <div ref={aboutUsRef} className="about-us">
        <div className="width-container">
          <div className="title">o nama</div>
          <div className="about-us-flex">
            <div className="text">
              Advokat Milos Lekić rođen je 10.12.1981. godine u Beogradu. Završio je osnovnu i srednju školu u Beogradu. 2000 godine upisuje Pravni fakultet u Beogradu a koji završava 2005 godine. i nakon završetka osnovnih studija edukaciju i usavršavanje nastavlja na Univerzitetu Berkley USA i u drugim obrazovnim institucijama u Sjedinjenim američkim državama gde je i magistrirao na trgovinskom pravu u međunarodnom poslovanju 2008 godine. Bio je najmladji advokat koji je ikada postupao-branio pred Višim sudom u Beogradu-posebno odeljenje Višeg suda okrivljene od osnivanja specijalnog suda u Beogradu 2003 godine za krivična dela iz oblasti privrednog kriminala. Advokaturom se bavi od 2009 godine te je član advokatske komore Beograda i advokatske komore Srbije.
            </div>
            <div className="text">
              Advokat Miloš Lekić poseduje potrebne Sertifikate i Licence za odbranu maloletnih lica u postupcima u Republici Srbiji, za zastupanje oštećenih maloletnih lica a može postupati u svim krivičnim, parničnim, vanparničnim, upravnim i drugim predmetima i u svim drugim oblastima advokatskog rada u Republici Srbiji. Advokatska kancelarija Miloša Lekića danas ima još tri stalno zaposlena advokata te četiri advokatska pripravnika. Advokatska kancelarija je danas specijalizovana za pružanje usluga iz oblasti privrednog, korporativnog prava kao i prava iz oblasti ustavnih garancija fizičkih lica kao pojedinaca te njihove zaštite u ostvarivanju navedenih prava pred domaćim I međunarodnim sudovima.
            </div>
            <div className="line-text">
              <div className="hor-line" />
              <div className="hor-line" />
              <div className="mid">
                <div className="mid-left">
                  <div className="text">
                    Takođe zastupnici smo, i zastupali pravna lica (Zastava automobili ad u stečaju, Magnohrom doo u stečaju, Jugoeksport korporacija u stečaju deoničarsko društvo, Prvi maj Pirot ad u stečaju, Elektroporcelan ad u stečaju, Pobeda Promet ad u stečaju, BD agro ad u stečaju PKB voćarske plantaže u stečaju) i drugih posebnih pravnih subjekata ...
                  </div>
                </div>
                <div className="mid-right">
                  <div className="med-hor-line" />
                  <div className="button-wrapper">
                    <Link className="button" to="/">SAZNAJ VISE</Link>
                    <div className="small-hor-line" />
                  </div>
                  <div className="med-hor-line" />
                </div>
              </div>
              <div className="hor-line" />
              <div className="hor-line" />
            </div>
          </div>
        </div>
      </div>

      <div className="our-team">
        <div className="yellow-box" />
        <div className="width-container">
          <div className="title">naš tim</div>
          <div className="content-wrapper">
            <CarouselSlider>
              {
                LAWYERS.map(({
                  id, position, img, name, area, lawyerTitle,
                }) => (
                  <div className="content" key={`lawyer-${id}`}>
                    <div className={position === 'top' ? 'single-lawyer-reverse' : 'single-lawyer'}>
                      <div className="top">
                        <div className="ver-line" />
                        <div className="ver-line" />
                        <div className="ver-line" />
                      </div>
                      <div className="mid">
                        <div className="name">{name}</div>
                        <div className="lawyer-title">{lawyerTitle}</div>
                        <div className="area">
                          Oblast/Ekspertiza:
                          {area}
                        </div>
                      </div>
                      <div className="bot">
                        <div className="lawyer-image">
                          <ImageLoader src={require(`images/${img}`)} alt={img} /> {/* eslint-disable-line */}
                        </div>
                      </div>
                    </div>
                    <div className="long-line" />
                  </div>
                ))
              }
            </CarouselSlider>
          </div>
        </div>
      </div>

      <div className="areas">
        <div className="width-container">
          <div className="title">ekspertize/oblasti</div>
          <div className="content-wrapper">
            <div className="top">
              <div className="left">
                <div className="lines">
                  <div className="short-hor-line" />
                  <div className="short-hor-line" />
                  <div className="short-hor-line" />
                  <div className="short-hor-line" />
                </div>
                <Select
                  options={OPTIONS.options}
                  onChange={(item) => {
                    setActiveArea(item.value);
                  }}
                  className="homepage-select"
                  placeholder="PRETRAZI PO OBLASTI"
                  classNamePrefix="react-select"
                />
                <div className="tabs">
                  {
                    AREAS.map(({ id, title }) => (
                      <div
                        id={id}
                        key={`tab-${id}`}
                        className={id === activeArea ? 'tab active' : 'tab'}
                        onClick={() => { setActiveArea(id); }}
                      >
                        <div className="area-title">
                          {title}
                        </div>
                        <img className="arrow-right" src={arrow} alt="arrow" />
                      </div>
                    ))
                  }
                </div>
              </div>
              <div className="right">
                <div className="text">{ activeTab.text }</div>
                <div className="right-button">
                  {
                    activeTab.text2 ? (
                      <div className="text2">{activeTab.text2}</div>
                    )
                      :
                      (
                        <div className="lines">
                          <div className="medium-hor-line" />
                          <div className="medium-hor-line" />
                        </div>
                      )
                  }
                  <div className="button-wrapper">
                    <div className="button">
                      <Link to="/">SAZNAJ VISE</Link>
                    </div>
                    <div className="line" />
                  </div>
                  <div className="medium-hor-line" />
                </div>
              </div>
            </div>
            <div className="bottom">
              <div className="long-line" />
            </div>
          </div>
        </div>
      </div>

      <div className="contact">
        <div className="big-yellow-box" />
        <div className="width-container">
          <div className="title">kontakt</div>
          <div className="content-wrapper">
            <div className="long-line" />
            <div className="text-lines-area">
              <div className="text">
                <div className="text-item">
                  <div className="item-title">ime firme</div>
                  <div className="item-about">Milos Lekic</div>
                </div>
                <div className="text-item">
                  <div className="item-title">adresa</div>
                  <div className="item-about">Bulevar Oslobodjenja 115, 11 000 Beograd </div>
                </div>
                <div className="text-item">
                  <div className="item-title">kontakt telefon</div>
                  <div className="item-about">011 32 12 123</div>
                </div>
                <div className="text-item">
                  <div className="item-title">e-mail</div>
                  <div className="item-about"><ImageLoader src={email} alt="email" /></div>
                </div>
              </div>
              <div className="lines">
                <div className="small-line" />
                <div className="small-line" />
                <div className="small-line" />
              </div>
            </div>
            <div className="long-line" />
            <div className="long-line" />
            <div className="long-line" />
            <div className="map-lines-area">
              <div className="lines">
                <div className="small-line" />
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
        </div>
      </div>
    </div>
  );
};
HomePage.propTypes = {};

export default HomePage;
