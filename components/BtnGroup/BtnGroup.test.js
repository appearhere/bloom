import React from 'react';
import { render } from 'react-dom';

import BtnGroup from './BtnGroup';
import Btn from '../Btn/Btn';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(
    <BtnGroup>
      <Btn>foo</Btn>
    </BtnGroup>,
    div,
  );
});
