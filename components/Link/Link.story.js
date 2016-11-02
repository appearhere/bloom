import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Link from '../Link/Link';
import linkcss from '../Link/Link.css';

storiesOf('Link', module)
  .add('Default view', () => (
    <Link
      href="https://en.wikipedia.org/wiki/Special:Random"
      target="_blank"
      className={ linkcss.root }
    >
      Random Wikipedia article
    </Link>
  ))
  .add('Naughty link hijacking', () => (
    <Link
      href="#"
      onClick={action('naughty click')}
    >
      Storybook action example
    </Link>
  ));