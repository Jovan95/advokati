import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import t from 'translate';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { LAWYERS, OPTIONS } from '../../../constants/Lawyers';
import ImageLoader from '../../ImageLoader/ImageLoader';

import './LawyerPage.scss';

const LawyerPage = () => {
  const [area, setArea] = useState([]);
  const [activeTitle, setActiveTitle] = useState('');

  const activeFieldLawyers = LAWYERS.filter(lawyer => lawyer.value.indexOf(area) >= 0);

  return (
    <div className="lawyer-page">

      <div className="container">
        <div className="width-container">
          <div className="gray-title">{ t('lawyers.title') }</div>
          <Select
            options={OPTIONS.options}
            onChange={(item) => {
              setArea(item.value);
              setActiveTitle(item.label);
            }}
            placeholder={t('lawyers.select')}
            classNamePrefix="react-select"
          />
        </div>
      </div>

      <div className="width-container">
        <div className="area-title">
          {activeTitle}
        </div>
        <div className={activeFieldLawyers.length < 4 ? 'lawyers-container around' : 'lawyers-container'}>
          {
            (area.length === 0 ? LAWYERS : activeFieldLawyers).map(({
              name, lawyerTitle, id, img, area,
            },
            ) => (
              <div key={id} className="single-lawyer">
                <div className="small-lines">
                  <div className="line" />
                  <div className="line" />
                  <div className="line" />
                  <div className="line" />
                  <div className="line" />
                  <div className="line" />
                </div>

                <div className="middle">
                  <ImageLoader className="lawyer-img" src={require(`images/${img}`)} alt={img} /> {/* eslint-disable-line */}
                  <div className="lawyer-about">
                    <div className="name">
                      {name}
                    </div>
                    {lawyerTitle}
                    <div className="area">{t('homepage.team.area')}</div>
                    {area}
                  </div>
                </div>
                
                <div className="small-lines">
                  <div className="line" />
                  <div className="line" />
                  <div className="line" />
                  <div className="line" />
                  <div className="line" />
                  <div className="line" />
                </div>
              </div>
            ))
          }
        </div>
      </div>

    </div>
  );
};

LawyerPage.propTypes = {};

export default LawyerPage;
