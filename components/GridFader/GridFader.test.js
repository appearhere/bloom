/* global jasmine: true */
import React from 'react';
import ReactDOM from 'react-dom';

import GridFader from './GridFader';

jest.mock('react-addons-css-transition-group', () => jest.fn(() => <div />));

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GridFader />, div);
});

it('splits the grid and queue correctly', () => {
  const grid = [{ key: 1 }, { key: 2 }];
  const div = document.createElement('div');
  /* eslint-disable react/no-render-return-value */
  const instance = ReactDOM.render(
    <GridFader
      grid={ grid }
      limit={ 1 }
    />,
    div
  );
  /* eslint-enable react/no-render-return-value */

  expect(instance.state.grid.length).toBe(1);
  expect(instance.state.queue.length).toBe(1);
});

it('swaps correctly swaps items on a timed basis', () => {
  jasmine.clock().install();

  const grid = [{ key: 1 }, { key: 2 }];
  const interval = 2100;
  const div = document.createElement('div');
  /* eslint-disable react/no-render-return-value */
  const instance = ReactDOM.render(
    <GridFader
      grid={ grid }
      limit={ 1 }
      interval={ interval }
    />,
    div
  );
  /* eslint-enable react/no-render-return-value */

  expect(instance.state.grid[0].key).toBe(1);
  expect(instance.state.queue[0].key).toBe(2);

  jasmine.clock().tick(interval);

  expect(instance.state.grid[0].key).toBe(2);
  expect(instance.state.queue[0].key).toBe(1);

  jasmine.clock().tick(interval);

  expect(instance.state.grid[0].key).toBe(1);
  expect(instance.state.queue[0].key).toBe(2);

  jasmine.clock().uninstall();
});