import React, { PropTypes } from 'react';
import cx from 'classnames';

import Specimen from '../Specimen/Specimen';
import Icon from '../../../components/Icon/Icon';

import css from './IconShowcase.css';

const renderFn = ({ value }) => <Icon name={ value } />;

renderFn.propTypes = {
  value: PropTypes.string,
};

const IconShowcase = ({ className, name, size, value, render }) => (
  <Specimen
    classNames={ {
      root: className,
      specimenContainer: cx(css.icon, css[size]),
    } }
    name={ name }
    attributes={ [value] }
  >
    { render({ value }) }
  </Specimen>
);

IconShowcase.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  render: PropTypes.func,
  size: PropTypes.oneOf(['large', 'regular']),
};

IconShowcase.defaultProps = {
  render: renderFn,
  size: 'regular',
};

export default IconShowcase;
