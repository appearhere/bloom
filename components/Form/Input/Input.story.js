import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import Input from './Input';

const stories = storiesOf('FormComponents', module);
stories.addDecorator(withKnobs);

const inputTypes = [
  'text',
  'email',
  'password',
  'search',
  'url',
  'textarea',
];

stories.add('Input', () => (
  <Input
    id="1"
    type={ select('Type', inputTypes, inputTypes[0]) }
    value="100"
    onFocus={ action('Focus') }
    onBlur={ action('Blur') }
    onChange={ action('Change') }
    error={ boolean('Errored', false) ? 'Something went wrong' : '' }
  />
))
.add('Input w/high priority', () => (
  <Input
    id="1"
    type={ select('Type', inputTypes, inputTypes[0]) }
    value="100"
    onFocus={ action('Focus') }
    onBlur={ action('Blur') }
    onChange={ action('Change') }
    error={ boolean('Errored', false) ? 'Something went wrong' : '' }
    priority="high"
  />
))
.add('Input w/low priority', () => (
  <Input
    id="1"
    type={ select('Type', inputTypes, inputTypes[0]) }
    value="100"
    onFocus={ action('Focus') }
    onBlur={ action('Blur') }
    onChange={ action('Change') }
    error={ boolean('Errored', false) ? 'Something went wrong' : '' }
    priority="low"
  />
));
