import PropTypes from 'prop-types';
import React from 'react';

import Specimen from '../Specimen/Specimen';
import css from './Swatch.module.css';

const Swatch = ({ className, name, hex, rgb, variable }) => (
  <Specimen
    classNames={{
      root: className,
    }}
    name={name}
    attributes={[hex, rgb, variable]}
  >
    <div className={css.color} style={{ backgroundColor: rgb }} />
  </Specimen>
);

Swatch.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  hex: PropTypes.string,
  rgb: PropTypes.string,
  variable: PropTypes.string,
};

export default Swatch;
