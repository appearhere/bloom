import React from 'react';
import ReactDOM from 'react-dom';
import ResponsiveGridLayout from './ResponsiveGridLayout';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ResponsiveGridLayout />, div);
});

it('splits the grid correctly', () => {
  const grid = [{ key: 1 }, { key: 2 }, { key: 3 }];
  const div = document.createElement('div');
  const instance = ReactDOM.render(<ResponsiveGridLayout grid={grid} />, div);

  expect(instance.state.grid.length).toBe(3);
});


