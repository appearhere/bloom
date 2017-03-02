import React from 'react';
import { render } from 'react-dom';

import AreaUnits from './AreaUnits';
import { AREA_UNITS } from '../../constants/units';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(
    <AreaUnits value={ 300 } unit={ AREA_UNITS.SQUARE_FOOT } />,
    div
  );
});