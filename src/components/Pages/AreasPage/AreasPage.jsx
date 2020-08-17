import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AREAS } from 'constants/areas';
import PropTypes from 'prop-types';

import arrow from '../../../images/arrow.png';
import './AreasPage.scss';

const AreasPage = () => {
  const [activeArea, setActiveArea] = useState(AREAS[0].id);
  const activeTab = AREAS.find(({ id }) => id === activeArea);

  const {
    id,
    text,
    text2,
    areaAbout,
    work,
    help,
  } = activeTab;

  return (
    <div className="areas-page">
      <div className="container">
        <div className="width-container">
          <div className="gray-title">ekspertize/oblasti</div>
        </div>
      </div>

      <div className="width-container">
        <div className="content-wrapper">
          <div className="left">
            <div className="top">
              <div className="lines">
                <div className="small-line" />
                <div className="small-line" />
                <div className="small-line" />
                <div className="small-line" />
              </div>
              <div className="links">
                {
                  AREAS.map(({ id }) => (
                    <div
                      id={id}
                      key={`link-${id}`}
                      className={id === activeArea ? 'link active' : 'link'}
                      onClick={() => { setActiveArea(id); }}
                    >
                      Oblast {id}
                      <img className="arrow-right" src={arrow} alt="arrow" />
                    </div>
                  ))
                }
              </div>
            </div>
            <div className="bottom">
              <div className="medium-line" />
              <div className="medium-line" />
              <div className="medium-line" />
              <div className="medium-line" />
            </div>
          </div>
          <div className="right">
            <div className="right-title">oblast {id}</div>
            <div className="section">
              <div className="section-title">o oblasti</div>
              <div className="section-about">
                {areaAbout}
              </div>
            </div>
            <div className="section">
              <div className="section-title">sta radimo</div>
              <div className="section-about">
                {work}
              </div>
            </div>
            <div className="section">
              <div className="section-title">kako mozemo da pomognemo</div>
              <div className="section-about">
                {help}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

AreasPage.propTypes = {};

export default AreasPage;
