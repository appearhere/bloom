import React from 'react';
import ReactDOM from 'react-dom';

import Btn from './Btn';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Btn>label</Btn>, div);
});