import React from 'react';
import { storiesOf } from '@storybook/react';

import { Icon, Modifiers as m } from '@appearhere/bloom';

const story = storiesOf('Icon', module);

[
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
].forEach(icon => {
  story.add(icon, () => (
    <div className={m.base}>
      {icon}: <Icon name={icon} />
    </div>
  ));
});

story
  .add('Large icon', () => (
    <div className={m.titleLarge}>
      <Icon name="bogroll" /> Flush
    </div>
  ))
  .add('Primary icon', () => (
    <div className={m.fgPrimary}>
      <Icon name="bogroll" /> Flush
    </div>
  ))
  .add('Missing Fallback', () => (
    <div className={m.fgPrimary}>
      <Icon name="missing" fallback="bogroll" />
    </div>
  ));
