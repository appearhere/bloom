import React from 'react';
import { storiesOf } from '@kadira/storybook';
import LeftRight from './LeftRight';

storiesOf('LeftRight', module)
  .add('Default view', () => (
    <LeftRight
      leftChildren={
        <p>
          Join 3,900 spaces around the world.
        </p>
      }
      rightChildren={
        <button>Let your space</button>
      }
    />
  ))
  .add('Right primary side', () => (
    <LeftRight
      leftChildren={
        <button>Let your space</button>
      }
      rightChildren={
        <p>
          Join 3,900 spaces around the world.
        </p>
      }
      primaryLeft="left"
    />
  ))
