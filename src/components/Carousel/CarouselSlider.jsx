import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import './CarouselSlider.scss';

const CarouselSlider = ({
  children, spaceBetween, slidesPerView, breakpoints,
}) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1325 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1325, min: 650 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 650, min: 0 },
      items: 1,
    },
  };

  return (
    <section>
      {/* { useChildren && <button type="button" className="swiper-button-prev swiper-button-black" onClick={goPrev} /> } */}

      <Carousel className="carousel-slider" responsive={responsive}>
        {children}
      </Carousel>

      {/* { useChildren && <button type="button" className="swiper-button-next swiper-button-black" onClick={goNext} /> } */}
    </section>
  );
};

CarouselSlider.defaultProps = {
  children: null,
  spaceBetween: 40,
  slidesPerView: 1,
  breakpoints: {},
};

CarouselSlider.propTypes = {
  spaceBetween: PropTypes.number,
  slidesPerView: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  breakpoints: PropTypes.object,
};

export default CarouselSlider;
