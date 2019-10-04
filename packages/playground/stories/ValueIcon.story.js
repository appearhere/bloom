import React from 'react';
import { storiesOf } from '@storybook/react';

import {
  ValueIcons,
  Modifiers as m
} from '@appearhere/bloom';

const story = storiesOf('ValueIcons', module);

story
  .add('ValueIcons.Handshake', () => <ValueIcons.Handshake className={m.titleLarge} />)
  .add('ValueIcons.ThumbsUp', () => <ValueIcons.ThumbsUp className={m.titleLarge} />)
  .add('ValueIcons.NoBull', () => <ValueIcons.NoBull className={m.titleLarge} />)
  .add('ValueIcons.Scissors', () => <ValueIcons.Scissors className={m.titleLarge} />)
  .add('ValueIcons.Open', () => <ValueIcons.Open className={m.titleLarge} />)
  .add('ValueIcons.BoxingGlove', () => <ValueIcons.BoxingGlove className={m.titleLarge} />);
