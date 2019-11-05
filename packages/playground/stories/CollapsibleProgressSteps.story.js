import React from 'react';
import { storiesOf } from '@storybook/react';
import { CollapsibleProgressSteps } from '@appearhere/bloom';

const data = [
  {
    opened: true,
    title: 'In sagittis nulla a lectus ornare',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mi justo, iaculis eu rutrum non, tempus ac purus.'
  },
  {
    title: 'Class aptent taciti sociosqu',
    body: 'Sed quis lobortis dui, eget porttitor erat. Maecenas quis posuere neque.'
  },
  {
    title: 'Suspendisse eleifend finibus justo',
    body: 'Nullam consequat, tortor vel sodales finibus, enim lectus aliquet nisl, in convallis lectus est et urna.'
  }
]

storiesOf('CollapsibleProgressSteps', module)
  .add('Default', () => <CollapsibleProgressSteps data={data} />)
