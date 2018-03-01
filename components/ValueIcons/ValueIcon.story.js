import React from 'react';
import { storiesOf } from '@storybook/react';

import ValueIconBoxingGlove from './ValueIconBoxingGlove';
import ValueIconOpen from './ValueIconOpen';
import ValueIconScissors from './ValueIconScissors';
import ValueIconNoBull from './ValueIconNoBull';
import ValueIconThumbsUp from './ValueIconThumbsUp';
import ValueIconHandshake from './ValueIconHandshake';

import m from '../../globals/modifiers.css';

const story = storiesOf('ValueIcon', module);

story.add('ValueIconHandshake', () => (
  <ValueIconHandshake className={m.titleLarge} />
))
.add('ValueIconThumbsUp', () => (
  <ValueIconThumbsUp className={m.titleLarge} />
))
.add('ValueIconNoBull', () => (
  <ValueIconNoBull className={m.titleLarge} />
))
.add('ValueIconScissors', () => (
  <ValueIconScissors className={m.titleLarge} />
))
.add('ValueIconOpen', () => (
  <ValueIconOpen className={m.titleLarge} />
))
.add('ValueIconBoxingGlove', () => (
  <ValueIconBoxingGlove className={m.titleLarge} />
));
