import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { withKnobs, boolean } from '@kadira/storybook-addon-knobs';
import Star from './Star';

const stories = storiesOf('FormComponents', module);
stories.addDecorator(withKnobs);

stories.add('Star', () => (
  <Star checked={ boolean('Checked', false) } />
));