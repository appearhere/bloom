import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import { IconInput } from '@appearhere/bloom';

const stories = storiesOf('FormComponents', module);
stories.addDecorator(withKnobs);

const inputTypes = ['text', 'email', 'password', 'search', 'url', 'textarea'];

stories
  .add('IconInput', () => (
    <IconInput
      iconName="search"
      id="1"
      type={select('Type', inputTypes, inputTypes[0])}
      value="100"
      onFocus={action('Focus')}
      onBlur={action('Blur')}
      onChange={action('Change')}
      error={boolean('Errored', false) ? 'Something went wrong' : ''}
    />
  ))
  .add('IconInput with rightsided icon', () => (
    <IconInput
      iconName="search"
      iconSide="right"
      id="1"
      type={select('Type', inputTypes, inputTypes[0])}
      value="100"
      onFocus={action('Focus')}
      onBlur={action('Blur')}
      onChange={action('Change')}
      error={boolean('Errored', false) ? 'Something went wrong' : ''}
    />
  ))
  .add('IconInput w/high priority', () => (
    <IconInput
      iconName="search"
      id="1"
      type={select('Type', inputTypes, inputTypes[0])}
      value="100"
      onFocus={action('Focus')}
      onBlur={action('Blur')}
      onChange={action('Change')}
      error={boolean('Errored', false) ? 'Something went wrong' : ''}
      priority="high"
    />
  ));
