import React from 'react';
import ReactDOM, { findDOMNode } from 'react-dom';

import Input from './Input';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Input
      label=""
    />,
    div
  );
});

it('handles external focusing and blurring', () => {
  const div = document.createElement('div');
  let component;

  ReactDOM.render(
    <Input
      ref={ (c) => { component = c; }}
      label=""
    />,
    div
  );

  const input = findDOMNode(component).querySelector('input');
  component.focus();

  expect(input === document.activeElement).toBe(true);
  expect(component.state.hasFocus).toBe(true);

  component.blur();
  expect(input === document.activeElement).toBe(false);
  expect(component.state.hasFocus).toBe(false);
});