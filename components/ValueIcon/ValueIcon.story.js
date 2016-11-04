import React from 'react';
import { storiesOf } from '@kadira/storybook';

import ValueIcon from './ValueIcon';
import icons from './icons';
import m from '../../globals/modifiers.css';

const story = storiesOf('ValueIcon', module);

Object.keys(icons).forEach(icon => {
  story.add(icon, () => (
    <div className={ m.titleLarge }>
      { icon }: <ValueIcon name={ icon } />
    </div>
  ));
});