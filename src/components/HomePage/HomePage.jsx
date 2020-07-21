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
          <div className="title">MILOŠ LEKIĆ</div>
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

    <div className="about-us">
      <div className="width-container">
        <div className="about-us-title">O NAMA</div>
        <div className="about-us-flex">
          <div className="text">
            Rođen je 10.12.1981. godine u Beogradu. Završio je osnovnu i srednju školu u Beogradu. 2000 godine upisuje Pravni fakultet u Beogradu a koji završava 2005 godine. i nakon završetka osnovnih studija edukaciju i usavršavanje nastavlja na Univerzitetu Berkley USA i u drugim obrazovnim institucijama u Sjedinjenim američkim državama gde je i magistrirao na trgovinskom pravu u međunarodnom poslovanju 2008 godine. Bio je najmladji advokat koji je ikada postupao-branio pred Višim sudom u Beogradu-posebno odeljenje Višeg suda okrivljene od osnivanja specijalnog suda u Beogradu 2003 godine za krivična dela iz oblasti privrednog kriminala. Advokaturom se bavi od 2009 godine te je član advokatske komore Beograda i advokatske komore Srbije
          </div>
          <div className="text">
            Advokat Miloš Lekić poseduje potrebne Sertifikate i Licence za odbranu maloletnih lica u postupcima u Republici Srbiji, za zastupanje oštećenih maloletnih lica a može postupati u svim krivičnim, parničnim, vanparničnim, upravnim i drugim predmetima i u svim drugim oblastima advokatskog rada u Republici Srbiji. Advokatska kancelarija Miloša Lekića danas ima još tri stalno zaposlena advokata te četiri advokatska pripravnika. Advokatska kancelarija je danas specijalizovana za pružanje usluga iz oblasti privrednog, korporativnog prava kao i prava iz oblasti ustavnih garancija fizičkih lica kao pojedinaca te njihove zaštite u ostvarivanju navedenih prava pred domaćim I međunarodnim sudovima. Takođe zastupnici smo, i zastupali pravna lica (Zastava automobili ad u
          </div>
          <div className="line-text">
            <div className="top">
              <div className="hor-line" />
              <div className="hor-line" />
            </div>
            <div className="mid">
              <div className="mid-left">
                <div className="text">
                  stečaju, Magnohrom doo u stečaju, Jugoeksport korporacija u stečaju deoničarsko društvo, Prvi maj Pirot ad u stečaju, Elektroporcelan ad u stečaju, Pobeda Promet ad u stečaju, BD agro ad u stečaju PKB voćarske plantaže u stečaju) i drugih posebnih pravnih subjekata ...
                </div>
              </div>
              <div className="mid-right">
                <div className="button-wrapper">
                  <Link className="about-us-button" to="/">SAZNAJ VISE</Link>
                  <div className="small-hor-line" />
                </div>
              </div>
            </div>
            <div className="bot">
              <div className="hor-line" />
              <div className="hor-line" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
);

HomePage.propTypes = {};

export default HomePage;
