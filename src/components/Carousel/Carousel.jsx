import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Swiper from 'react-id-swiper';
import 'swiper/swiper.scss';

import './Carousel.scss';

const Carousel = ({
  children, spaceBetween, slidesPerView, breakpoints,
}) => {
  // const [swiper, updateSwiper] = useState(null);

  const swiperConfig = {
    spaceBetween,
    direction: 'horizontal',
    slidesPerView: 'auto',
    grabCursor: true,
    preventClicks: false,
    loop: true,
    autoplay: {
      delay: 9000,
      disableOnInteraction: false,
    },
    breakpoints,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  };

  // const goNext = () => {
  //   if (swiper !== null) {
  //     swiper.slideNext();
  //   }
  // };
  //
  // const goPrev = () => {
  //   if (swiper !== null) {
  //     swiper.slidePrev();
  //   }
  // };

  return (
    <section className="carousel">
      {/* { useChildren && <button type="button" className="swiper-button-prev swiper-button-black" onClick={goPrev} /> } */}

      <Swiper {...swiperConfig}>
        { children }
      </Swiper>

      {/* { useChildren && <button type="button" className="swiper-button-next swiper-button-black" onClick={goNext} /> } */}
    </section>
  );
};

Carousel.defaultProps = {
  children: null,
  spaceBetween: 40,
  slidesPerView: 1,
  breakpoints: {},
};

Carousel.propTypes = {
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

export default Carousel;
