import React from 'react';
import ReactDOM from 'react-dom';
import SplitWordEntrance from './SplitWordEntrance';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SplitWordEntrance>foo</SplitWordEntrance>, div);
});
