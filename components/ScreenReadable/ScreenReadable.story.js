import React from 'react';
import { storiesOf } from '@kadira/storybook';
import ScreenReadable from './ScreenReadable';

storiesOf('ScreenReadable', module)
  .add('Default view', () => (
    <span>Visible<ScreenReadable> only on a screen reader</ScreenReadable></span>
  ));