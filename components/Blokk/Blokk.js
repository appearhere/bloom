import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';

import css from './Blokk.css';

const Blokk = ({ variant, length, className }) => (
  <span
    className={ cx(css.root, css[variant], className) }
    style={ {
      maxWidth: `${length}em`,
    } }
  />
);

Blokk.propTypes = {
  length: PropTypes.number,
  variant: PropTypes.oneOf(['light', 'dark']),
  className: PropTypes.string,
};

Blokk.defaultProps = {
  variant: 'light',
};

export default Blokk;
