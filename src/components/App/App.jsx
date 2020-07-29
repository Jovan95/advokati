import React, { Component, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { connect, Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import AboutUs from '../AboutUs/AboutUs';
import LawyerPage from '../LawyerPage/LawyerPage';
import Footer from '../common/Footer/Footer';
import Header from '../common/Header/Header';
import ModalRoot from '../Modals/ModalRoot';
import Page404 from '../Page404/Page404';

import './App.scss';
// import '../../common/icons/icons.scss';

// const SomeModuleRoutesLazy = lazy(() => import('../LargeComponentDir/LargeComponentRoot'));

const App = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <div className="app">
        <Suspense fallback={<div className="loader-between-pages" />}>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about-us" component={AboutUs} />
            <Route exact path="/lawyers" component={LawyerPage} />
            <Route path="*" component={Page404} />
          </Switch>
          <Footer />
        </Suspense>

        <ModalRoot />
      </div>
    </BrowserRouter>
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;
