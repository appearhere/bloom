import React from 'react';
import ReactDOM from 'react-dom';

import StepIcon from './StepIcon';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StepIcon>1</StepIcon>, div);
});