import React from 'react';
import { storiesOf } from '@kadira/storybook';

import Icon from './Icon';
import icons from './icons';
import m from '../../globals/modifiers.css';

const story = storiesOf('Icon', module);

Object.keys(icons).forEach((icon) => {
  story.add(icon, () => (
    <div className={ m.base }>
      {icon}: <Icon name={ icon } />
    </div>
  ));
});

story.add('Large icon', () => (
  <div className={ m.titleLarge }>
    <Icon name="bogroll" /> Flush
  </div>
))
.add('Primary icon', () => (
  <div className={ m.fgPrimary }>
    <Icon name="bogroll" /> Flush
  </div>
));