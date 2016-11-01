import React from 'react';
import { render } from 'react-dom';

import SignPost from './SignPost';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(
    <SignPost
      title=""
    >
      <span />
    </SignPost>,
    div
  );
});