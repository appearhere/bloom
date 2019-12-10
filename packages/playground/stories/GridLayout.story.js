import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';

import { GridLayout, Modifiers as m } from '@appearhere/bloom';

const stories = storiesOf('GridLayout', module);
stories.addDecorator(withKnobs);

stories.add('default', () => (
  <GridLayout
    col={number('Columns', 3)}
    colGap={number('Column Gap (rem)', 1)}
    rowHeight={number('Row Height (rem)', 10)}
  >
    <div
      className={m.bgSuccess}
      style={{
        width: '100%',
        height: '100%',
        display: 'inline-block',
      }}
    />
    <div
      className={m.bgDanger}
      style={{
        width: '100%',
        height: '100%',
        display: 'inline-block',
      }}
    />
    <div
      className={m.bgPrimary}
      style={{
        width: '100%',
        height: '100%',
        display: 'inline-block',
      }}
    />
    <div
      className={m.bgSuccess}
      style={{
        width: '100%',
        height: '100%',
        display: 'inline-block',
      }}
    />
    <div
      className={m.bgDanger}
      style={{
        width: '100%',
        height: '100%',
        display: 'inline-block',
      }}
    />
    <div
      className={m.bgPrimary}
      style={{
        width: '100%',
        height: '100%',
        display: 'inline-block',
      }}
    />
  
  </GridLayout>
));
