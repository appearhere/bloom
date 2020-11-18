import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  ChipGroup
} from '@appearhere/bloom';

storiesOf('ChipGroup', module)
  .add('Normal', () =>
    <ChipGroup
      tags={[
        { href: "https://www.appearhere.co.uk/cities/london/search", name: 'London' },
        { href: "https://www.appearhere.co.uk/destinations/collections/fashion", name: 'Fashion' },
        { href: "https://www.appearhere.co.uk/inspire", name: 'The Week Here' }
      ]}
    />
  );
