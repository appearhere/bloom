import React from 'react';

import Swatch from './components/Swatch/Swatch';

const colours = [
  'Black',
  'Blue',
  'Gold',
  'Red',
  'White',
];

export default () => (
  <div>
    <div>Bloom - Appear Here's pattern library & style guide</div>
    {colours.map(c => <Swatch color={c} />)}
  </div>
);