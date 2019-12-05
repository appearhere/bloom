import React from 'react';
import ReactDOM from 'react-dom';
import GridLayout from './GridLayout';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GridLayout />, div);
});

it('splits the grid correctly', () => {
  const grid = [{ key: 1 }, { key: 2 }, { key: 3 }];
  const div = document.createElement('div');
  const instance = ReactDOM.render(<GridLayout grid={grid} limit={3} col={3}/>, div);

  expect(instance.state.grid.length).toBe(3);
});


