import React from 'react';
import { storiesOf } from '@kadira/storybook';
import cx from 'classnames';
import Loader from './Loader';
import m from '../../globals/modifiers.css';

storiesOf('Loader', module)
  .add('Default', () => (
    <Loader className={ cx(m.fontLgV, m.fgPrimary) } />
  ));