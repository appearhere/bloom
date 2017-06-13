import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { withKnobs, boolean } from '@kadira/storybook-addon-knobs';
import ControlIcon from './ControlIcon';
import Control from './Control';

const stories = storiesOf('Map control', module);
stories.addDecorator(withKnobs);

stories.add('Control', () => (
  <Control onClick={ action('click') } disabled={ boolean('Disabled', false) }>
    <ControlIcon name="plus" />
  </Control>
))
.add('Control with text', () => (
  <Control onClick={ action('click') } disabled={ boolean('Disabled', false) }>
    Just Text
  </Control>
));