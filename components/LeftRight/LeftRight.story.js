import React from 'react';
import { storiesOf } from '@kadira/storybook';
import LeftRight from './LeftRight';

storiesOf('LeftRight', module)
  .add('Default view', () => (
    <LeftRight
      leftChildren={
        <button>Let your space</button>
      }
      rightChildren={
        <p>
          Join 3,900 spaces around the world.
        </p>
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
      primarySide="right"
    />
  ));
