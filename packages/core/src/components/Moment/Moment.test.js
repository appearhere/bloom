import React from 'react';
import { render } from 'react-dom';

import Moment from './Moment';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(
    <Moment title="">
      <span />
    </Moment>,
    div,
  );
});