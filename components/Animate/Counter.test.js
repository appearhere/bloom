import React from 'react';
import { render, findDOMNode } from 'react-dom';

import Counter from './Counter';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<Counter startValue={ 0 } endValue={ 0 } />, div);
});

it('transforms the value as expect', () => {
  const div = document.createElement('div');
  let component;
  render(
    <Counter
      ref={ (c) => { component = c; } }
      startValue={ 0 }
      endValue={ 0 }
      transform={ val => `£${val}` }
    />,
    div
  );

  expect(findDOMNode(component).innerHTML).toBe('£0');
});