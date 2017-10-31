import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
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
