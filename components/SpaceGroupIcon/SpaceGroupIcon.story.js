import React from 'react';
import { storiesOf } from '@kadira/storybook';

import SpaceGroupIcon from './SpaceGroupIcon';
import icons from './icons';

const story = storiesOf('SpaceGroupIcon', module);

Object.keys(icons).forEach((icon) => {
  story.add(icon, () => (
    <div>
      {icon}: <SpaceGroupIcon name={ icon } />
    </div>
  ));
});