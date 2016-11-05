import React, { PropTypes } from 'react';
import cx from 'classnames';

import css from './Card.css';

const Card = ({ children, image, className, ...rest }) => (
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

Card.propTypes = {
  children: PropTypes.node.isRequired,
  image: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Card;