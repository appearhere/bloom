import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Select from './Select';
import Option from './Option';

import icons from '../../Icon/icons';

storiesOf('Select', module)
  .add('Standard select', () => (
    <Select
      name="icon"
      onChange={ action('onChange') }
      onFocus={ action('onFocus') }
      onBlur={ action('onBlur') }
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
  .add('Multiple select', () => (
    <Select
      name="icon"
      onChange={ action('onChange') }
      onFocus={ action('onFocus') }
      onBlur={ action('onBlur') }
      value={ ['appearhere', 'bogroll'] }
      multiple
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