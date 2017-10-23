import PropTypes from 'prop-types';
import React from 'react';

import { AREA_UNITS } from '../../constants/units';

const AreaUnits = ({ value, unit, className, ...rest }) => {
  switch (unit) {
    case AREA_UNITS.METERS_SQUARED: return (
      <span
        { ...rest }
        className={ className }
      >
        { value }
        m<sup>2</sup>
      </span>
    );
    case AREA_UNITS.SQUARE_FOOT:
    default: return (
      <span
        { ...rest }
        className={ className }
      >
        { value } sq ft
      </span>
    );
  }
};

AreaUnits.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  unit: PropTypes.string.isRequired,
  className: PropTypes.string,
};

AreaUnits.defaultProps = {
  unit: AREA_UNITS.SQUARE_FOOT,
};

export default AreaUnits;
