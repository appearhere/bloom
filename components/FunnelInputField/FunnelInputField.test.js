import React from 'react';
import { render } from 'react-dom';

import FunnelInputField from './FunnelInputField';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(
    <FunnelInputField id="">
      <input />
    </FunnelInputField>,
    div,
  );
});
