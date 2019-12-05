import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';

import { ResponsiveGridLayout, Modifiers as m } from '@appearhere/bloom';

const stories = storiesOf('ResponsiveGridLayout', module);
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
  <ResponsiveGridLayout
    grid={grid}
    colGap={number('Column Gap (rem)', 1)}
    gridSize={number('Grid Size (rem)', 16)}
    rowHeight={number('Row Height (rem)', 10)}
  />
));
