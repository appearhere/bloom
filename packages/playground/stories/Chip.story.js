import React from 'react';
import {storiesOf} from '@storybook/react';
import {
  Chip
} from '@appearhere/bloom';

storiesOf('Chip', module)
  .add('Normal', () => <Chip href="https://www.appearhere.co.uk" text="Active"/>);
