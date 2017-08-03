import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Moment from './Moment';

storiesOf('Moment', module)
  .add('Default', () => (
    <Moment title="Great success!">
      Why keep working when you’ve done so well? Have a slice on us 🍕
    </Moment>
  ));
