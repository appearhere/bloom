import React from 'react';
import ReactDOM from 'react-dom';

import GridFader from './GridFader';

jest.mock('react-transition-group/CSSTransitionGroup', () => 'div');

beforeEach(() => {
  jest.resetModules();
  jest.useFakeTimers();

  spyOn(console, 'error');
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GridFader />, div);
});

it('splits the grid and queue correctly', () => {
  const grid = [{ key: 1 }, { key: 2 }];
  const div = document.createElement('div');
  /* eslint-disable react/no-render-return-value */
  const instance = ReactDOM.render(<GridFader grid={grid} limit={1} />, div);
  /* eslint-enable react/no-render-return-value */

  expect(instance.state.grid.length).toBe(1);
  expect(instance.state.queue.length).toBe(1);
});

it('swaps correctly swaps items on a timed basis', () => {
  const grid = [{ key: 1 }, { key: 2 }];
  const div = document.createElement('div');
  /* eslint-disable react/no-render-return-value */
  const instance = ReactDOM.render(<GridFader grid={grid} limit={1} interval={2100} />, div);
  /* eslint-enable react/no-render-return-value */

  expect(instance.state.grid[0].key).toBe(1);
  expect(instance.state.queue[0].key).toBe(2);

  jest.runOnlyPendingTimers();

  expect(instance.state.grid[0].key).toBe(2);
  expect(instance.state.queue[0].key).toBe(1);

  jest.runOnlyPendingTimers();

  expect(instance.state.grid[0].key).toBe(1);
  expect(instance.state.queue[0].key).toBe(2);
});
