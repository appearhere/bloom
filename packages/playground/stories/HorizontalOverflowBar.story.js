import React from 'react';
import { storiesOf } from '@storybook/react';

import { Navigation } from '@appearhere/bloom';

const links = [
  {
    href: 'http://www.appearhere.co.uk/1',
    label: 'Mission',
    active: true,
  },
  {
    href: 'http://www.appearhere.co.uk/2',
    label: 'Company',
    active: false,
  },
  {
    href: 'http://www.appearhere.co.uk/3',
    label: 'Careers',
    active: false,
  },
  {
    href: 'http://www.appearhere.co.uk/4',
    label: 'Press',
    active: false,
  },
];

storiesOf('HorizontalOverflowBar', module)
  .add('HorizontalOverflowBar', () => (
    <div>
      <Navigation.HorizontalOverflowBar>
        {linkComponent =>
          links.map(link =>
            linkComponent({
              key: link.href,
              ...link,
            }),
          )
        }
      </Navigation.HorizontalOverflowBar>
    </div>
  ));