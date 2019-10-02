import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import { Select, Option } from '@appearhere/bloom';

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
  'menu,',
  'minus',
  'notification',
  'percentage',
  'pinterest',
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
]

const stories = storiesOf('FormComponents', module);
stories.addDecorator(withKnobs);

stories
  .add('Select', () => (
    <Select
      name="icon"
      onChange={action('onChange')}
      onFocus={action('onFocus')}
      onBlur={action('onBlur')}
      error={boolean('Errored', false) ? 'Something went wrong' : ''}
      multiple={boolean('Multiple', false)}
    >
      {icons.map(option => (
        <Option key={option} value={option}>
          {option}
        </Option>
      ))}
    </Select>
  ))
  .add('Select w/high priority', () => (
    <Select
      name="icon"
      onChange={action('onChange')}
      onFocus={action('onFocus')}
      onBlur={action('onBlur')}
      error={boolean('Errored', false) ? 'Something went wrong' : ''}
      multiple={boolean('Multiple', false)}
      priority="high"
    >
      {icons.map(option => (
        <Option key={option} value={option}>
          {option}
        </Option>
      ))}
    </Select>
  ));
