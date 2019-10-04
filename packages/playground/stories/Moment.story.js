import React from 'react';
import { storiesOf } from '@storybook/react';
import { Moment } from '@appearhere/bloom';

storiesOf('Moment', module).add('Default', () => (
  <Moment title="Great success!">
    Why keep working when you’ve done so well? Have a slice on us 🍕
  </Moment>
));
