import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import { IconInput } from '@appearhere/bloom';

const stories = storiesOf('FormComponents', module);
stories.addDecorator(withKnobs);

const inputTypes = ['text', 'email', 'password', 'search', 'url', 'textarea'];
const icons = [
  'appearhere-brackets',
  'automatic-payments',
  'calendar-insight',
  'chart-arrow',
  'play-c',
  'chevron-right',
  'tick-c',
  'tick-starred',
  'travel-idea',
  'vip-entrance',
  'card-list',
  'account',
  'appearhere',
  'arrow',
  'back',
  'arrow-right',
  'bogroll',
  'book',
  'calendar',
  'camera',
  'chatting',
  'chevron',
  'clock',
  'comment',
  'cross',
  'dollar',
  'download',
  'facebook',
  'filter',
  'globe',
  'heart',
  'location',
  'manage',
  'map',
  'menu',
  'minus',
  'notification',
  'percentage',
  'pintrest',
  'play',
  'plus',
  'radio',
  'search',
  'shield',
  'signature',
  'star',
  'store',
  'teamwork',
  'tick',
  'ticket',
  'twitter',
  'instagram',
];

stories
  .add('IconInput', () => (
    <IconInput
      iconName={select('Icon', icons, 'search')}
      id="1"
      type={select('Type', inputTypes, inputTypes[0])}
      value="100"
      onFocus={action('Focus')}
      onBlur={action('Blur')}
      onChange={action('Change')}
      error={boolean('Errored', false) ? 'Something went wrong' : ''}
    />
  ))
  .add('IconInput w/ rightsided icon', () => (
    <IconInput
      iconName={select('Icon', icons, 'search')}
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
  .add('IconInput w/ high priority', () => (
    <IconInput
      iconName={select('Icon', icons, 'search')}
      id="1"
      type={select('Type', inputTypes, inputTypes[0])}
      value="100"
      onFocus={action('Focus')}
      onBlur={action('Blur')}
      onChange={action('Change')}
      error={boolean('Errored', false) ? 'Something went wrong' : ''}
      priority="high"
    />
  ))
  .add('IconInput w/ custom icon dimensions', () => (
    <IconInput
      iconName={select('Icon', icons, 'search')}
      iconDimensions={{ height: 32, width: 32 }}
      id="1"
      type={select('Type', inputTypes, inputTypes[0])}
      value="London"
      onFocus={action('Focus')}
      onBlur={action('Blur')}
      onChange={action('Change')}
      error={boolean('Errored', false) ? 'Something went wrong' : ''}
    />
  ));
