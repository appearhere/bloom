import React from 'react';
import ReactDOM from 'react-dom';
import { findRenderedDOMComponentWithTag, Simulate } from 'react-addons-test-utils';

import Scrubber from './Scrubber';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Scrubber
      currentTime={ 0 }
      duration={ 0 }
      seek={ () => {} }
    />,
    div
  );
});

it('calculates the progress correctly', () => {
  const div = document.createElement('div');
  let component = null;

  ReactDOM.render(
    <Scrubber
      ref={ (c) => { component = c; } }
      currentTime={ 5 }
      duration={ 10 }
      seek={ () => {} }
    />,
    div
  );

  expect(component.getInnerWidth()).toBe(50);

  ReactDOM.render(
    <Scrubber
      ref={ (c) => { component = c; } }
      currentTime={ 2 }
      duration={ 8 }
      seek={ () => {} }
    />,
    div
  );

  expect(component.getInnerWidth()).toBe(25);
});

it('handles internal focus', () => {
  const div = document.createElement('div');
  let component = null;

  ReactDOM.render(
    <Scrubber
      ref={ (c) => { component = c; } }
      currentTime={ 5 }
      duration={ 10 }
      seek={ () => {} }
    />,
    div
  );

  const rangeInput = findRenderedDOMComponentWithTag(component, 'input');

  expect(component.state.focused).toBe(false);

  Simulate.focus(rangeInput);
  expect(component.state.focused).toBe(true);

  Simulate.blur(rangeInput);
  expect(component.state.focused).toBe(false);
});