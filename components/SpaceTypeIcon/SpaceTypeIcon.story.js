import React from 'react';
import { storiesOf } from '@storybook/react';

import SpaceTypeIcon from './SpaceTypeIcon';
import icons from './icons';

const story = storiesOf('SpaceTypeIcon', module);

Object.keys(icons).forEach((icon) => {
  story.add(icon, () => (
    <div>
      {icon}: <SpaceTypeIcon name={icon} />
    </div>
  ));
});
