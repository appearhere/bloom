import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Icon from './Icon';

import m from '../../globals/modifiers.css';

storiesOf('Icon', module)
  .add('Bogroll', () => (
    <p className={ m.base }>
      <Icon name="bogroll" /> Flush
    </p>
  ))
  .add('Bogroll large', () => (
    <p className={ m.titleLarge }>
      <Icon name="bogroll" /> Flush
    </p>
  ))
  .add('Bogroll primary', () => (
    <p className={ m.fgPrimary }>
      <Icon name="bogroll" /> Flush
    </p>
  ));