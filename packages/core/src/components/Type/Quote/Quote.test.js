import React from 'react';
import ReactDOM from 'react-dom';
import Quote from './Quote';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Quote>Hi</Quote>, div);
});
