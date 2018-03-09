import React from 'react';
import { render } from 'react-dom';

import SocialLinks from './SocialLinks';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<SocialLinks />, div);
});
