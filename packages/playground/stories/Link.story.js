import React from 'react';
import { storiesOf } from '@storybook/react';
import { Link } from '@appearhere/bloom';

storiesOf('Link', module).add('Default view', () => (
  <Link
    href="https://en.wikipedia.org/wiki/Special:Random"
    target="_blank"
  >
    Random Wikipedia article
  </Link>
));
