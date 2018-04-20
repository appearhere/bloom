import React from 'react';
import { storiesOf } from '@storybook/react';
import Figure from './Figure';

storiesOf('Figure', module).add('Figure', () => (
  <div>
    <Figure
      caption={
        <span>
          Idea 2001:&nbsp;
          <a href="http://www.appearhere.co.uk">Edjer x Hour club</a>
        </span>
      }
    >
      <img src="https://source.unsplash.com/random/536x800" alt="Yes" />
    </Figure>
  </div>
));
