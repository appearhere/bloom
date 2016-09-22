import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import classnames from 'classnames';

import SectionHeader from './SectionHeader';
import m from '../../globals/modifiers.css';

storiesOf('SectionHeader', module)
  .add('Default', () => (
    <SectionHeader className={[m.pa48].join(' ')}
      title="Bloom: Pattern library"
      strapline="A styleguide & library of React components"
    />
  ))
  .add('Centered', () => (
    <SectionHeader className={[m.pa48, m.center].join(' ')}
      title="Bloom: Pattern library"
      strapline="A styleguide & library of React components"
    />
  ))
  .add('Reverse', () => (
    <SectionHeader className={[m.fgWhite, m.bgBlack, m.pa48].join(' ')}
      title="Bloom: Pattern library"
      strapline="A styleguide & library of React components"
    />
  ));