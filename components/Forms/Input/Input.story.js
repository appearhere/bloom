import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Input from './Input';

storiesOf('Input', module)
  .add('Default input', () => (
    <Input
      id="1"
      value="100"
      onFocus={ action('Focus') }
      onBlur={ action('Blur') }
      onChange={ action('Change') }
    />
  ))
  .add('Default input with error', () => (
    <Input
      id="1"
      value="100"
      onFocus={ action('Focus') }
      onBlur={ action('Blur') }
      onChange={ action('Change') }
      hasError
    />
  ))
  .add('TextArea', () => (
    <Input
      type="textarea"
      id="1"
      value={ 'Default inputLorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
        ' Et ille ridens: Video, inquit, quid agas; At tu eadem ista dic in iudicio aut,' +
        ' si coronam times, dic in senatu. Mene ergo et Triarium dignos existimas, apud quos' +
        ' turpiter loquare? Nam adhuc, meo fortasse vitio, quid ego quaeram non perspicis. ' +
        ' Quae cum magnifice primo dici.' }
      onFocus={ action('Focus') }
      onBlur={ action('Blur') }
      onChange={ action('Change') }
    />
  ))
  .add('TextArea with error', () => (
    <Input
      type="textarea"
      id="1"
      value={ 'Default inputLorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
       ' Et ille ridens: Video, inquit, quid agas; At tu eadem ista dic in iudicio aut,' +
       ' si coronam times, dic in senatu. Mene ergo et Triarium dignos existimas, apud quos' +
        ' turpiter loquare? Nam adhuc, meo fortasse vitio, quid ego quaeram non perspicis. ' +
        ' Quae cum magnifice primo dici.' }
      onFocus={ action('Focus') }
      onBlur={ action('Blur') }
      onChange={ action('Change') }
      hasError
    />
  ));