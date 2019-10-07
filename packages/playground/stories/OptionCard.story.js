import React from 'react';
import { storiesOf } from '@storybook/react';
import { OptionCard } from '@appearhere/bloom';

storiesOf('OptionCard', module)
  .add('Default context', () => (
    <OptionCard
      heading="Point of sale"
      subheading="Grab a card reader from iZettle"
      img="https://appearhere-js.imgix.net/assets/additions/pos.jpg?auto=format&ixlib=js8.9.1">
    </OptionCard>
  ))
  .add('With children', () => (
    <OptionCard
      heading="Point of sale"
      subheading="Grab a card reader from iZettle"
      img="https://appearhere-js.imgix.net/assets/additions/pos.jpg?auto=format&ixlib=js8.9.1">
        <p>children</p>
    </OptionCard>
  ))
  .add('With active state', () => (
    <OptionCard
      heading="Point of sale"
      subheading="Grab a card reader from iZettle"
      img="https://appearhere-js.imgix.net/assets/additions/pos.jpg?auto=format&ixlib=js8.9.1"
      active
    >
        <p>children</p>
    </OptionCard>
  ));
