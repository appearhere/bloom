import React from 'react';
import { storiesOf } from '@storybook/react';

import { SignPost, Btn, Modifiers as m } from '@appearhere/bloom';

storiesOf('SignPost', module).add('Default', () => (
  <SignPost title="Brands">
    <p className={[m.mt0, m.mb0].join(' ')}>
      Start searching our exclusive collection of the world’s best retail spaces.
    </p>
    <Btn context="primary" className={m.mtl}>
      How it works
    </Btn>
  </SignPost>
));
