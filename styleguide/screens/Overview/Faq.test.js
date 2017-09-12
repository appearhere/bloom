import React from 'react';
import { render } from 'react-dom';

import Faq from './Faq';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<Faq />, div);
});
