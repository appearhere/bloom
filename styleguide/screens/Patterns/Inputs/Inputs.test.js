import React from 'react';
import { render } from 'react-dom';

import Inputs from './Inputs';

jest.mock('../../../../components/Form/Input/Input.css', () => ({
  enter: 'enter',
  appear: 'appear',
  enterActive: 'enterActive',
  appearActive: 'appearActive',
  leave: 'leave',
  leaveActive: 'leaveActive',
}));

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<Inputs />, div);
});
