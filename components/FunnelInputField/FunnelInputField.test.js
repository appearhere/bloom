import React from 'react';
import { render } from 'react-dom';

import FunnelInputField from './FunnelInputField';

const Input = () => <input />;

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(
    <FunnelInputField
      id=""
    >
      <Input />
    </FunnelInputField>,
    div
  );
});
