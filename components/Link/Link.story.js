import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Link from '../Link/Link';

storiesOf('Link', module)
  .add('Default view', () => (
    <Link
      href="https://en.wikipedia.org/wiki/Special:Random"
      target="_blank"
    >
      Random Wikipedia article
    </Link>
  ));