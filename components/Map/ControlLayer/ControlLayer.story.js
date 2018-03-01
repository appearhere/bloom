import React from 'react';
import { storiesOf } from '@storybook/react';

import ControlLayer from './ControlLayer';
import BaseMap from '../BaseMap';

storiesOf('Map Control Layer', module)
  .add('Default', () => (
    <div style={{ height: '96vh' }}>
      <ControlLayer>
        <BaseMap />
      </ControlLayer>
    </div>
  ));
