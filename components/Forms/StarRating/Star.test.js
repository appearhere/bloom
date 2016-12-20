import React from 'react';
import { render } from 'react-dom';

import Star from './Star';

const mockedId = Math.random().toString();
jest.mock('lodash/fp/uniqueId', () => jest.fn(() => mockedId));

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(
    <Star name="" value="" />,
    div
  );
});