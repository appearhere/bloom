import React from 'react';
import { storiesOf } from '@kadira/storybook';

import DayRange from './DayRange';

const stories = storiesOf('DayRange', module);

stories
  .add('No dates selected', () => (
    <DayRange
      active={ false }
      onClick={ () => {} }
      id={ '9081237549081327' }
    />
  ));
