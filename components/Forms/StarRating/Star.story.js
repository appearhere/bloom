import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Star from './Star';

storiesOf('Star', module)
  .add('Default Star', () => (
    <Star
      name="1"
      value="1"
      onFocus={ action('Focus') }
      onBlur={ action('Blur') }
      onChange={ action('Change') }
    />
  ))
  .add('Checked Star', () => (
    <Star
      name="1"
      value="1"
      onFocus={ action('Focus') }
      onBlur={ action('Blur') }
      onChange={ action('Change') }
      checked
    />
  ));