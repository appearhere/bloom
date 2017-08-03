import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { withKnobs, number, select } from '@kadira/storybook-addon-knobs';
import moment from 'moment';

import DayRange from './DayRange';

const stories = storiesOf('DayRange', module);
stories.addDecorator(withKnobs);

stories.add('Default day range', () => {
  const startDateModifier = number('day', 0);
  const startDate = startDateModifier > 0
    ? moment().add(startDateModifier, 'day').format('DD/MM')
    : undefined;
  const endDate = startDateModifier > 0
    ? moment().add(startDateModifier + 5, 'day').format('DD/MM')
    : undefined;

  return (
    <DayRange
      selectDate={ select('selectDate', ['START', 'END', ''], '') }
      startDate={ startDate }
      endDate={ endDate }
      id={ '9081237549081327' }
    />
  );
});
