import React, { PropTypes } from 'react';

import css from './ImageOverlayCard.css';

const ImageOverlayCard = ({ children, image }) => (
  <div
    className={ css.root }
    style={ { backgroundImage: `url(${image})` } }
  >
    <div className={ css.inner }>
      { children }
    </div>
  </div>
);

ImageOverlayCard.propTypes = {
  children: PropTypes.node.isRequired,
  image: PropTypes.string.isRequired,
};

export default ImageOverlayCard;