import React from 'react';
import { render } from 'react-dom';
import Link from './Link';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render.render(<Link>Hello, world</Link>, div);
});
