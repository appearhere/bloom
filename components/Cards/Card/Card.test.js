import React from 'react';
import { render } from 'react-dom';

import Card from './Card';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<Card />, div);
});

it('renders a div by default', () => {
  const div = document.createElement('div');
  let component;

  render(
    <div ref={(c) => { component = c; }}>
      <Card />
    </div>,
    div
  );

  expect(component.children[0].tagName).toBe(div.tagName);
});

it('renders an anchor when provided a href', () => {
  const div = document.createElement('div');
  const anchor = document.createElement('a');
  let component;

  render(
    <div ref={(c) => { component = c; }}>
      <Card href="#" />
    </div>,
    div
  );

  expect(component.children[0].tagName).toBe(anchor.tagName);
});
