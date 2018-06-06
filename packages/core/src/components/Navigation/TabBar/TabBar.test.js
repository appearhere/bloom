import React from 'react';
import { render } from 'react-dom';

import TabBar from './TabBar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(
    <TabBar>
      <span />
      <span />
    </TabBar>,
    div,
  );
});
