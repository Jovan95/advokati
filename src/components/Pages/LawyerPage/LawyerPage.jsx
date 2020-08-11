import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { LAWYERS, OPTIONS } from 'constants/lawyers';
import Select from 'react-select';

import './LawyerPage.scss';

const LawyerPage = () => {
  const [area, setArea] = useState([OPTIONS.options[0].value]);
  const [activeTitle, setActiveTitle] = useState('');

  const activeFieldLawyers = LAWYERS.filter(lawyer => lawyer.value.indexOf(area) >= 0);
  console.log(activeFieldLawyers);

  return (
    <div className="lawyer-page">
      <div className="container">
        <div className="width-container">
          <div className="gray-title">advokati</div>
          <Select
            options={OPTIONS.options}
            onChange={(item) => {
              setArea(item.value);
              setActiveTitle(item.label);
              console.log(item.value, 'areaId');
            }}
            placeholder="PRETRAZI PO OBLASTI"
          />
        </div>
      </div>

      <div className="width-container">
        <div className="area-title">
          {activeTitle}
        </div>
        <div className={activeFieldLawyers.length < 3 ? 'lawyers-container around' : 'lawyers-container'}>
          {
            activeFieldLawyers.map(({
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
                  <img className="lawyer-img" src={require(`images/${img}`)} alt={img} /> {/* eslint-disable-line */}
                  <div className="name">
                    {name}
                  </div>
                  {lawyerTitle}
                  <div className="area">oblast/ekspertiza</div>
                  {area}
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
