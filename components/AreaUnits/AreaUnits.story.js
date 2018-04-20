import React from 'react';
import { storiesOf } from '@storybook/react';
import AreaUnits from './AreaUnits';

import { AREA_UNITS } from '../../constants/units';

storiesOf('AreaUnits', module)
  .add('Square foot', () => <AreaUnits value="300" unit={AREA_UNITS.SQUARE_FOOT} />)
  .add('Meters squared', () => <AreaUnits value="300" unit={AREA_UNITS.METERS_SQUARED} />);
