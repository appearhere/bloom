import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { withKnobs, boolean } from '@kadira/storybook-addon-knobs';

import Select from './Select';
import Option from './Option';

import icons from '../../Icon/icons';

const stories = storiesOf('FormComponents', module);
stories.addDecorator(withKnobs);

stories.add('Select', () => (
  <Select
    name="icon"
    onChange={ action('onChange') }
    onFocus={ action('onFocus') }
    onBlur={ action('onBlur') }
    error={ boolean('Errored', false) ? 'Something went wrong' : '' }
    multiple={ boolean('Multiple', false) }
  >
    {
      Object
        .keys(icons)
        .map(option => (
          <Option key={ option } value={ option }>{ option }</Option>
      ))
    }
  </Select>
))
.add('Select w/high priority', () => (
  <Select
    name="icon"
    onChange={ action('onChange') }
    onFocus={ action('onFocus') }
    onBlur={ action('onBlur') }
    error={ boolean('Errored', false) ? 'Something went wrong' : '' }
    multiple={ boolean('Multiple', false) }
    priority="high"
  >
    {
      Object
        .keys(icons)
        .map(option => (
          <Option key={ option } value={ option }>{ option }</Option>
      ))
    }
  </Select>
));