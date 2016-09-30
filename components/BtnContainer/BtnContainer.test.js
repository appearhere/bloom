import React from 'react';
import ReactDOM from 'react-dom';

import BtnContainer from './BtnContainer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BtnContainer>label</BtnContainer>, div);
});