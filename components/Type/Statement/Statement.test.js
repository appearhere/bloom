import React from 'react';
import { render } from 'react-dom';
import Statement from './Statement';

it('renders', () => {
  const div = document.createElement('div');
  render(<Statement>foo</Statement>, div);
});

it('renders when provided with a number', () => {
  const div = document.createElement('div');
  render(<Statement number={ 1 }>foo</Statement>, div);
});