import React from 'react';
import { storiesOf } from '@kadira/storybook';

import GridFader from './GridFader';
import m from 'globals/modifiers.css';

const style = {
  width: '100px',
  height: '100px',
  display: 'inline-block',
};

const grid = [{
  key: 'success',
  className: m.bgSuccess,
  style,
}, {
  key: 'danger',
  className: m.bgDanger,
  style,
}, {
  key: 'primary',
  className: m.bgPrimary,
  style,
}];

storiesOf('GridFader', module)
  .add('default', () => (
    <GridFader
      grid={ grid }
      limit={ 2 }
    />
  ));