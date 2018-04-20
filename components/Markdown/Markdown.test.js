import React from 'react';
import { render } from 'react-dom';

import Markdown from './Markdown';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<Markdown># Test</Markdown>, div);
});
