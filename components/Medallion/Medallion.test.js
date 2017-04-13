import React from 'react';
import { render } from 'react-dom';

import Medallion from './Medallion';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<Medallion>label</Medallion>, div);
});