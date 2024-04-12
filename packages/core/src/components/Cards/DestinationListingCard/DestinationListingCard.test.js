import React from 'react';
import { render } from 'react-dom';

global.MutationObserver = class {
  constructor(callback) {}
  disconnect() {}
  observe(element, initObject) {}
};

jest.mock('nuka-carousel', () => {
  const React = require('react');
  return jest.fn(() => <div>Mocked Carousel</div>);
});

import DestinationListingCard from './DestinationListingCard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<DestinationListingCard />, div);
});
