import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Icon from './Icon';

import m from '../../globals/modifiers.css';

storiesOf('Icon', module)
  .add('Bogroll', () => (
    <div className={ m.base }>
      <Icon name="bogroll" /> Flush
    </div>
  ))
  .add('Bogroll large', () => (
    <div className={ m.titleLarge }>
      <Icon name="bogroll" /> Flush
    </div>
  ))
  .add('Bogroll primary', () => (
    <div className={ m.fgPrimary }>
      <Icon name="bogroll" /> Flush
    </div>
  ))
  .add('Appearhere', () => (
    <div className={ m.base }>
      <Icon name="appearhere" />
    </div>
  ))
  .add('Appearhere white', () => (
    <div className={ [m.titleLarge, m.bgBlack, m.fgWhite].join(' ') }>
      <Icon name="appearhere" />
    </div>
  ))
  .add('Appearhere brackets', () => (
    <div className={ m.base }>
      <Icon name="appearherebrackets" />
    </div>
  ))
  .add('Appearhere brackets large', () => (
    <div className={ m.titleLarge }>
      <Icon name="appearherebrackets" />
    </div>
  ))
  .add('Appearhere brackets white', () => (
    <div className={ [m.titleLarge, m.bgBlack, m.fgWhite].join(' ') }>
      <Icon name="appearherebrackets" />
    </div>
  ));