import React, { PropTypes } from 'react';
import cx from 'classnames';

import css from './ImageOverlayCard.css';

const ImageOverlayCard = ({ children, image, className, ...rest }) => (
  <div
    { ...rest }
    className={ cx(css.root, className) }
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
  className: PropTypes.string,
};

export default ImageOverlayCard;