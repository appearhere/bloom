import React from 'react';
import { render } from 'react-dom';

import ModalAnimator from './ModalAnimator';

it('renders closed without crashing', () => {
  const div = document.createElement('div');
  render(<ModalAnimator />, div);
});

it('renders open without crashing', () => {
  const div = document.createElement('div');
  render(<ModalAnimator active />, div);
});
