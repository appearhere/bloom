import React from 'react';
import { render } from 'react-dom';

import Suggestion from './Suggestion';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<Suggestion />, div);
});