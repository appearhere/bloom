import React from 'react';
import { storiesOf } from '@storybook/react';
import { Badge } from '@appearhere/bloom';

storiesOf('Badge', module)
  .add('Default badge', () => <Badge>Soon</Badge>)
  .add('Primary badge', () => <Badge context="primary">New</Badge>)
  .add('Special badge', () => <Badge context="special">Verified</Badge>)
  .add('Hollow badge', () => <Badge hollow>Unknown</Badge>)
  .add('Primary hollow badge', () => (
    <Badge context="primary" hollow>
      Place
    </Badge>
  ))
  .add('Special hollow badge', () => (
    <Badge context="special" hollow>
      Collection
    </Badge>
  ))
  .add('With icon', () => (
    <Badge icon="price-tag">
      50% Discount
    </Badge>
  ))
  .add('With icon', () => (
    <Badge icon="security">
      Secure
    </Badge>
  ));
