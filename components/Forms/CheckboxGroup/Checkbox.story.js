import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { withKnobs, boolean } from '@kadira/storybook-addon-knobs';
import Checkbox from './Checkbox';

const stories = storiesOf('Checkbox', module);
stories.addDecorator(withKnobs);

stories
  .add('Default', () => (
    <Checkbox
      name="1"
      value="1"
      checked={ boolean('Checked', false) }
      onFocus={ action('Focus') }
      onBlur={ action('Blur') }
      onChange={ action('Change') }
    />
  ));