//@flow
import React from 'react';

import { AREA_UNITS } from '../../constants/units';

type Props = {
  value: number | string,
  unit: string,
  className?: string,
}

const AreaUnits = ({ value, unit, className, ...rest }: Props) => {
  switch (unit) {
    case AREA_UNITS.METERS_SQUARED:
      return (
        <span {...rest} className={className}>
          {value}
          m&sup2;
        </span>
      );
    case AREA_UNITS.SQUARE_FOOT:
    default:
      return (
        <span {...rest} className={className}>
          {value} sq ft
        </span>
      );
  }
};

AreaUnits.defaultProps = {
  unit: AREA_UNITS.SQUARE_FOOT,
};

export default AreaUnits;
