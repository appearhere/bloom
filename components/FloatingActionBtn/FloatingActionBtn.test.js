import React from 'react';
import { render } from 'react-dom';

import FloatingActionBtn from './FloatingActionBtn';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<FloatingActionBtn>label</FloatingActionBtn>, div);
});