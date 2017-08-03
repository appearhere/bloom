import React from 'react';
import { storiesOf } from '@kadira/storybook';

import SectionHeader from './SectionHeader/SectionHeader';
import Synopsis from './Synopsis/Synopsis';
import Quote from './Quote/Quote';
import IconLabel from './IconLabel/IconLabel';
import Statement from './Statement/Statement';
import m from '../../globals/modifiers.css';

storiesOf('Type', module)
  .add('<SectionHeader />', () => (
    <SectionHeader
      className={ [m.pa48].join(' ') }
      title="Bloom: Pattern library"
      strapline="A styleguide & library of React components"
    />
  ))
  .add('<SectionHeader /> centered', () => (
    <SectionHeader
      className={ [m.pa48, m.center].join(' ') }
      title="Bloom: Pattern library"
      strapline="A styleguide & library of React components"
    />
  ))
  .add('<SectionHeader /> reverse', () => (
    <SectionHeader
      className={ [m.fgWhite, m.bgBlack, m.pa48].join(' ') }
      title="Bloom: Pattern library"
      strapline="A styleguide & library of React components"
    />
  ))
  .add('<SectionHeader /> without strapline', () => (
    <SectionHeader
      className={ [m.pa48, m.center].join(' ') }
      level={ 2 }
      title="Bloom: Pattern library"
    />
  ))
  .add('<Synopsis /> default', () => (
    <Synopsis
      className={ [m.pa48].join(' ') }
      title="Thousands of spaces, for any idea and budget."
    >
      Find a space that matches your price, location, and audience, or browse our destination guides for inspiration.
    </Synopsis>
  ))
  .add('<Synopsis /> centered', () => (
    <Synopsis
      className={ [m.pa48, m.center].join(' ') }
      title="Focus on your idea."
    >
      We’ve organised legals & deposits simply so you can focus on the one thing
      { ' ' }that really matters - making your idea happen.
    </Synopsis>
  ))
  .add('<Synopsis /> advanced', () => (
    <Synopsis
      className={ m.pa48 }
      title={
        <span>
          <span className={ [m.fontSmI, m.bold, m.db, m.pbs].join(' ') }>Label</span>
          <span>Focus on your idea.</span>
        </span>
      }
    >
      We’ve organised legals & deposits simply so you can focus on the one thing
      { ' ' }that really matters - making your idea happen.
    </Synopsis>
  )).add('<Quote /> centered', () => (
    <Quote citation="Rhett Butler" className={ m.center }>
      Frankly my dear, I don’t give a damn
    </Quote>
  )).add('<Quote /> left', () => (
    <Quote citation="Rhett Butler" className={ m.left }>
      Frankly my dear, I don’t give a damn
    </Quote>
  )).add('<Quote /> right', () => (
    <Quote citation="Rhett Butler" className={ m.right }>
      Frankly my dear, I don’t give a damn
    </Quote>
  ))
  .add('<IconLabel />', () => (
    <IconLabel iconName="bogroll">
      Bog roll
    </IconLabel>
  ))
  .add('<Statement />', () => (
    <Statement>
      More <span className={ m.fgPrimary }>experiences</span> mean better cities.
    </Statement>
  ))
  .add('<Statement /> with number', () => (
    <Statement number={ 1 } >
      More <span className={ m.fgPrimary }>experiences</span> mean better cities.
    </Statement>
  ));
