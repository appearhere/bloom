import React, { PropTypes } from 'react';
import cx from 'classnames';

import css from './Card.css';

export const CardOuter = ({ children, image, className, ...rest }) => (
  <div
    { ...rest }
    className={ cx(css.root, className) }
    style={ { backgroundImage: `url(${image})` } }
  >
    { children }
  </div>
);

CardOuter.propTypes = {
  children: PropTypes.node.isRequired,
  image: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export const CardInner = ({ children }) => (
  <div className={ css.inner }>
    { children }
  </div>
);

CardInner.propTypes = {
  children: PropTypes.node.isRequired,
};

const Card = ({ children, ...rest }) => (
  <CardOuter { ...rest }>
    <CardInner>
      { children }
    </CardInner>
  </CardOuter>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;