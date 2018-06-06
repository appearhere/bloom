import React from 'react';
import ReactDOM from 'react-dom';
import Tab from './Tab';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Tab />, div);
});
