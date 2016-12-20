import React from 'react';
import { render } from 'react-dom';

import Input from './Input';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(
    <Input />,
    div
  );
});

it('handles external focusing and blurring', () => {
  const div = document.createElement('div');
  let component;

  render(
    <Input ref={ (c) => { component = c; } } />,
    div
  );

  component.focus();

  expect(component.input === document.activeElement).toBe(true);
  expect(component.state.hasFocus).toBe(true);

  component.blur();
  expect(component.input === document.activeElement).toBe(false);
  expect(component.state.hasFocus).toBe(false);
});

it('renders an `<input />` element by default', () => {
  const div = document.createElement('div');
  let component;

  render(
    <Input ref={ (c) => { component = c; } } />,
    div
  );

  expect(component.input.tagName)
    .toBe(document.createElement('input').tagName);
});

it('renders a `<textarea />` element with `type="textarea"`', () => {
  const div = document.createElement('div');
  let component;

  render(
    <Input
      ref={ (c) => { component = c; } }
      type="textarea"
    />,
    div
  );

  expect(component.input.tagName)
    .toBe(document.createElement('textarea').tagName);
});