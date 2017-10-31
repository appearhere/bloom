import React from 'react';
import { storiesOf } from '@storybook/react';

import Marker from './Marker';
import m from '../../../globals/modifiers.css';

storiesOf('Map Marker', module)
  .add('Default (Light)', () => (
    <Marker className={ m.paSmI }>
      In association football, marking is an organized defensive strategy which aims to prevent a
      member of the opposing team (usually a striker) from taking control of the ball.
    </Marker>
  ))
  .add('Dark', () => (
    <Marker variant="dark" className={ m.paSmI }>
      The terror it inspired... you have no idea, you’re too young. Just picture coming home and
      finding the Dark Mark hovering over your house, and knowing what you’re about to find
      inside... Everyone’s worst fear... the very worst.
    </Marker>
  ));
