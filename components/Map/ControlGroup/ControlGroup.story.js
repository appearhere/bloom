import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import ControlIcon from '../Control/ControlIcon';
import Control from '../Control/Control';
import ControlGroup from './ControlGroup';

storiesOf('Map Control', module)
.add('ControlGroup', () => (
  <ControlGroup>
    <Control onClick={ action('click plus') }>
      <ControlIcon name="plus" />
    </Control>
    <Control onClick={ action('click minus') }>
      <ControlIcon name="minus" />
    </Control>
  </ControlGroup>
));