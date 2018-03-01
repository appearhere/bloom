import React from 'react';
import { render } from 'react-dom';

import Checkbox from './Checkbox';

const mockedId = Math.random().toString();
jest.mock('lodash/fp/uniqueId', () => jest.fn(() => mockedId));

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(
    <Checkbox name="" value="" />,
    div
  );
});

it('handles external focusing and blurring', () => {
  const div = document.createElement('div');
  let component;

  render(
    <Checkbox
      name=""
      value={1}
      ref={(c) => { component = c; }}
    />,
    div
  );

  component.focus();

  expect(component.input === document.activeElement).toBe(true);
  expect(component.state.hasFocus).toBe(true);

  component.blur();
  expect(component.input === document.activeElement).toBe(false);
  expect(component.state.hasFocus).toBe(false);
});

it('assigns a unique id to itself', () => {
  const div = document.createElement('div');
  let component;

  render(
    <Checkbox
      name=""
      value={1}
      ref={(c) => { component = c; }}
    />,
    div
  );

  expect(component.id).toBe(mockedId);
  expect(component.input.getAttribute('id')).toBe(component.id);
});
