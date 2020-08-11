import React from 'react';
import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import './ImageLoader.scss';

const ImageLoader = ({ className, src, alt }) => (
  <LazyLoadImage effect="blur" className={className} src={src} alt={alt} />
);

ImageLoader.defaultProps = {
  className: '',
  alt: '',
};

ImageLoader.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
  alt: PropTypes.string,
};

export default ImageLoader;
