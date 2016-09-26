import React from 'react';
import ReactDOM from 'react-dom';
import Wrapper from './Wrapper';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Wrapper />, div);
});
