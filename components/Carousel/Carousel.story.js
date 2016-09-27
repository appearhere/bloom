import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Carousel from './Carousel';

storiesOf('Carousel', module)
  .add('lol', () => (
    <div style={{ width: '80vW', overflowX: 'visible', margin: '0 auto' }}>
      <Carousel />
    </div>
  ));