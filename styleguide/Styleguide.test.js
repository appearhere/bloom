import React from 'react';
import ReactDOM from 'react-dom';
import Styleguide from './Styleguide';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Styleguide />, div);
});
