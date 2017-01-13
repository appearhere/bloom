import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import FormSelect from './FormSelect';
import Option from './Option';

import icons from '../../Icon/icons';

storiesOf('FormSelect', module)
  .add('Default Select', () => (
    <FormSelect
      id="icons"
      name="icons"
      onFocus={ action('Focus') }
      onBlur={ action('Blur') }
      onChange={ action('Change') }
      label="Icons"
      placeholder="Select an icon"
      optionalLabel="optionnel"
      description="Pick an icon for the lulz"
      optional
    >
      {
        Object
          .keys(icons)
          .map(option => (
            <Option key={ option } value={ option }>{ option }</Option>
          ))
      }
    </FormSelect>
  ))
  .add('Selected value', () => (
    <FormSelect
      id="icons"
      name="icons"
      onFocus={ action('Focus') }
      onBlur={ action('Blur') }
      onChange={ action('Change') }
      label="Icons"
      placeholder="Select an icon"
      optionalLabel="optionnel"
      description="Pick an icon for the lulz"
      value="appearhere"
      optional
    >
      {
        Object
          .keys(icons)
          .map(option => (
            <Option key={ option } value={ option }>{ option }</Option>
          ))
      }
    </FormSelect>
  ))
  .add('Multiple Select', () => (
    <FormSelect
      id="icons"
      name="icons"
      onFocus={ action('Focus') }
      onBlur={ action('Blur') }
      onChange={ action('Change') }
      label="Icons"
      placeholder="Select an icon"
      optionalLabel="optionnel"
      description="Pick an icon for the lulz"
      value={ ['appearhere', 'bogroll'] }
      optional
      multiple
    >
      {
        Object
          .keys(icons)
          .map(option => (
            <Option key={ option } value={ option }>{ option }</Option>
          ))
      }
    </FormSelect>
  ))
  .add('Errored Select', () => (
    <FormSelect
      id="icons"
      name="icons"
      onFocus={ action('Focus') }
      onBlur={ action('Blur') }
      onChange={ action('Change') }
      label="Icons"
      placeholder="Select an icon"
      optionalLabel="optionnel"
      description="Pick an icon for the lulz"
      error="Wrong"
      optional
    >
      {
        Object
          .keys(icons)
          .map(option => (
            <Option key={ option } value={ option }>{ option }</Option>
          ))
      }
    </FormSelect>
  ))
  .add('Errored multiple Select', () => (
    <FormSelect
      id="icons"
      name="icons"
      onFocus={ action('Focus') }
      onBlur={ action('Blur') }
      onChange={ action('Change') }
      label="Icons"
      placeholder="Select an icon"
      optionalLabel="optionnel"
      description="Pick an icon for the lulz"
      value={ ['appearhere', 'bogroll'] }
      error="Wrong"
      optional
      multiple
    >
      {
        Object
          .keys(icons)
          .map(option => (
            <Option key={ option } value={ option }>{ option }</Option>
          ))
      }
    </FormSelect>
  ));