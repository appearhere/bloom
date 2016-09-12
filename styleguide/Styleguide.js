import React from 'react';

import Swatch from './components/Swatch/Swatch';
import Btn from '../components/Btn/Btn';
import Icon from '../components/Icon/Icon';

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
    <Btn>lol</Btn>
    <Icon name="example" />
  </div>
);