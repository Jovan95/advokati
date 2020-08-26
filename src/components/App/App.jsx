import React, { Component, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { connect, Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../../i18n/i18n';
import HomePage from '../Pages/HomePage/HomePage';
import AboutUsPage from '../Pages/AboutUsPage/AboutUsPage';
import LawyerPage from '../Pages/LawyerPage/LawyerPage';
import AreasPage from '../Pages/AreasPage/AreasPage';
import ContactPage from '../Pages/ContactPage/ContactPage';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import Footer from '../common/Footer/Footer';
import Header from '../common/Header/Header';
import ModalRoot from '../Modals/ModalRoot';
import Page404 from '../Page404/Page404';

import './App.scss';

const App = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <div className="app">
        <Header />
        <Suspense fallback={<div className="loader-between-pages" />}>
          <ScrollToTop>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/about-us" component={AboutUsPage} />
              <Route exact path="/lawyers" component={LawyerPage} />
              <Route exact path="/areas" component={AreasPage} />
              <Route exact path="/contact" component={ContactPage} />
              <Route path="*" component={Page404} />
            </Switch>
          </ScrollToTop>
        </Suspense>
        <Footer />

        <ModalRoot />
      </div>
    </BrowserRouter>
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;
