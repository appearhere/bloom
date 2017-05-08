import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import ControlIcon from './ControlIcon';
import Control from './Control';

storiesOf('Map Control', module)
.add('Control', () => (
  <Control onClick={ action('click') }>
    <ControlIcon name="plus" />
  </Control>
))
.add('Control with text', () => (
  <Control onClick={ action('click') }>
    Just Text
  </Control>
));