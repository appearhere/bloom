import React from 'react';
import ReactDOM from 'react-dom';

import GraphOrnament from './GraphOrnament';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GraphOrnament />, div);
});
