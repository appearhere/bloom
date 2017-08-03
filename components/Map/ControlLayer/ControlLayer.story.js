import React from 'react';
import { storiesOf } from '@kadira/storybook';

import ControlLayer from './ControlLayer';
import BaseMap from '../BaseMap';

storiesOf('Map Control Layer', module)
  .add('Default', () => (
    <div style={ { height: '96vh' } }>
      <ControlLayer>
        <BaseMap />
      </ControlLayer>
    </div>
  ));
