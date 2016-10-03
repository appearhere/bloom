import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import classnames from 'classnames';

import SectionHeader from './SectionHeader/SectionHeader';
import Synopsis from './Synopsis/Synopsis';
import m from 'globals/modifiers.css';

storiesOf('Type', module)
  .add('<SectionHeader />', () => (
    <SectionHeader className={[m.pa48].join(' ')}
      title="Bloom: Pattern library"
      strapline="A styleguide & library of React components"
    />
  ))
  .add('<SectionHeader /> centered', () => (
    <SectionHeader className={[m.pa48, m.center].join(' ')}
      title="Bloom: Pattern library"
      strapline="A styleguide & library of React components"
    />
  ))
  .add('<SectionHeader /> reverse', () => (
    <SectionHeader className={[m.fgWhite, m.bgBlack, m.pa48].join(' ')}
      title="Bloom: Pattern library"
      strapline="A styleguide & library of React components"
    />
  )).add('<Synopsis /> default', () => (
    <Synopsis className={[m.pa48].join(' ')}
      title="Thousands of spaces, for any idea and budget."
      body="Find a space that matches your price, location, and audience, or browse our destination guides for inspiration."
    />
  ))
  .add('<Synopsis /> centered', () => (
    <Synopsis className={[m.pa48, m.center].join(' ')}
      title="Focus on your idea."
      body="We’ve organised legals & deposits simply so you can focus on the one thing that really matters - making your idea happen."
    />
  ));