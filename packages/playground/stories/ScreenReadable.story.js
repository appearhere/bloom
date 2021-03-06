import React from 'react';
import { storiesOf } from '@storybook/react';
import { ScreenReadable } from '@appearhere/bloom';

storiesOf('ScreenReadable', module).add('Default view', () => (
  <span>
    Visible<ScreenReadable> only on a screen reader</ScreenReadable>
  </span>
));
