import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { Radio } from '@appearhere/bloom';

const stories = storiesOf('FormComponents', module);
stories.addDecorator(withKnobs);

stories.add('Radio button', () => (
  <Radio
    name="1"
    value="1"
    onFocus={action('Focus')}
    onBlur={action('Blur')}
    onChange={action('Change')}
    checked={boolean('Checked', false)}
    label="1"
  />
));
