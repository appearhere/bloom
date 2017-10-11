import React from 'react';
import { render } from 'react-dom';

import CodeBlock from './CodeBlock';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<CodeBlock />, div);
});

