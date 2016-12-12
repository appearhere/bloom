import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Radio from './Radio';

storiesOf('Radio', module)
  .add('Default Radio', () => (
    <Radio
      name="1"
      value="1"
      onFocus={ action('Focus') }
      onBlur={ action('Blur') }
      onChange={ action('Change') }
    />
  ))
  .add('Checked Radio', () => (
    <Radio
      name="1"
      value="1"
      onFocus={ action('Focus') }
      onBlur={ action('Blur') }
      onChange={ action('Change') }
      checked
    />
  ));