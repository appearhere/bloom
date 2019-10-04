import React from 'react';
import { storiesOf } from '@storybook/react';

import {
  SpaceTypeIcon
} from '@appearhere/bloom';

const story = storiesOf('SpaceTypeIcon', module);

const icons = [
  'shopShare',
  'event',
  'barRestaurant',
  'market',
  'retail',
  'unique',
];

icons.forEach(icon => {
  story.add(icon, () => (
    <div>
      {icon}: <SpaceTypeIcon name={icon} />
    </div>
  ));
});
