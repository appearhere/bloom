import React from 'react';
import ReactDOM from 'react-dom';
import Synopsis from './Synopsis';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Synopsis title="" body="" />, div);
});
