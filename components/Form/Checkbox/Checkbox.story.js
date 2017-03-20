import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { withKnobs, boolean } from '@kadira/storybook-addon-knobs';
import Checkbox from './Checkbox';

const stories = storiesOf('FormComponents', module);
stories.addDecorator(withKnobs);

stories.add('Checkbox', () => (
  <Checkbox
    name="1"
    value="1"
    onFocus={ action('Focus') }
    onBlur={ action('Blur') }
    onChange={ action('Change') }
    checked={ boolean('Checked', false) }
    label="1"
  />
));