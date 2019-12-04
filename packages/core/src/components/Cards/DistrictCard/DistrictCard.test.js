import React from 'react';
import ReactDOM, { render } from 'react-dom';

import DistrictCard from './DistrictCard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<DistrictCard href="" subtitle="" src="" title=""/>, div);
});
