import React from 'react';
import { storiesOf } from '@storybook/react';

import { Icon, Modifiers as m } from '@appearhere/bloom';

const story = storiesOf('Icon', module);

[
  'account',
  'appearhere',
  'appearhere-brackets',
  'arrow',
  'automatic-payments',
  'back',
  'bogroll',
  'book',
  'calendar',
  'calendar-insight',
  'camera',
  'card-list',
  'chart-arrow',
  'chatting',
  'chevron',
  'chevron-right',
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
  'play-c',
  'plus',
  'radio',
  'search',
  'shield',
  'signature',
  'star',
  'store',
  'teamwork',
  'tick',
  'tick-c',
  'tick-starred',
  'ticket',
  'travel-idea',
  'twitter',
  'vip-entrance',
  'instagram',
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
