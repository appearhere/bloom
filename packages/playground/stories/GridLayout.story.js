import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';

import { GridLayout, Modifiers as m } from '@appearhere/bloom';

const stories = storiesOf('GridLayout', module);
stories.addDecorator(withKnobs);

const style = {
  width: '100%',
  height: '100%',
  display: 'inline-block',
};

const grid = [
  {
    key: 'success',
    className: m.bgSuccess,
    style,
  },
  {
    key: 'danger',
    className: m.bgDanger,
    style,
  },
  {
    key: 'primary',
    className: m.bgPrimary,
    style,
  },
  {
    key: 'success',
    className: m.bgSuccess,
    style,
  },
  {
    key: 'danger',
    className: m.bgDanger,
    style,
  },
  {
    key: 'primary',
    className: m.bgPrimary,
    style,
  },
  {
    key: 'success',
    className: m.bgSuccess,
    style,
  },
  {
    key: 'danger',
    className: m.bgDanger,
    style,
  },
  {
    key: 'primary',
    className: m.bgPrimary,
    style,
  },
  {
    key: 'success',
    className: m.bgSuccess,
    style,
  },
  {
    key: 'danger',
    className: m.bgDanger,
    style,
  },
  {
    key: 'primary',
    className: m.bgPrimary,
    style,
  },
];

stories.add('default', () => (
  <GridLayout
    grid={grid}
    limit={number('Limit', 6)}
    col={number('Columns', 3)}
    colGap={number('Column Gap', 10)}
    rowHeight={number('Row Height', 150)}
  />
));
