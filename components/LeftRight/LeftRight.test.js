import React from 'react';
import ReactDOM from 'react-dom';
import LeftRight from './LeftRight';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LeftRight leftChildren="" rightChildren="" />, div);
});
