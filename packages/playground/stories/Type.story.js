import React from 'react';
import { storiesOf } from '@storybook/react';

import {
  Type,
  Modifiers as m
} from '@appearhere/bloom';

storiesOf('Type', module)
  .add('<Type.SectionHeader />', () => (
    <Type.SectionHeader
      className={[m.pa48].join(' ')}
      title="Bloom: Pattern library"
      strapline="A library of React components"
    />
  ))
  .add('<Type.SectionHeader /> centered', () => (
    <Type.SectionHeader
      className={[m.pa48, m.center].join(' ')}
      title="Bloom: Pattern library"
      strapline="A library of React components"
    />
  ))
  .add('<Type.SectionHeader /> reverse', () => (
    <Type.SectionHeader
      className={[m.fgWhite, m.bgBlack, m.pa48].join(' ')}
      title="Bloom: Pattern library"
      strapline="A library of React components"
    />
  ))
  .add('<Type.SectionHeader /> without strapline', () => (
    <Type.SectionHeader
      className={[m.pa48, m.center].join(' ')}
      level={2}
      title="Bloom: Pattern library"
    />
  ))
  .add('<Type.Synopsis /> default', () => (
    <Type.Synopsis className={[m.pa48].join(' ')} title="Thousands of spaces, for any idea and budget.">
      Find a space that matches your price, location, and audience, or browse our destination guides
      for inspiration.
    </Type.Synopsis>
  ))
  .add('<Type.Synopsis /> centered', () => (
    <Type.Synopsis className={[m.pa48, m.center].join(' ')} title="Focus on your idea.">
      We’ve organised legals & deposits simply so you can focus on the one thing that really matters
      - making your idea happen.
    </Type.Synopsis>
  ))
  .add('<Type.Synopsis /> advanced', () => (
    <Type.Synopsis
      className={m.pa48}
      title={
        <span>
          <span className={[m.fontSmI, m.bold, m.db, m.pbs].join(' ')}>Label</span>
          <span>Focus on your idea.</span>
        </span>
      }
    >
      We’ve organised legals & deposits simply so you can focus on the one thing that really matters
      - making your idea happen.
    </Type.Synopsis>
  ))
  .add('<Type.Quote /> centered', () => (
    <Type.Quote citation="Rhett Butler" className={m.center}>
      Frankly my dear, I don’t give a damn
    </Type.Quote>
  ))
  .add('<Type.Quote /> left', () => (
    <Type.Quote citation="Rhett Butler" className={m.left}>
      Frankly my dear, I don’t give a damn
    </Type.Quote>
  ))
  .add('<Type.Quote /> right', () => (
    <Type.Quote citation="Rhett Butler" className={m.right}>
      Frankly my dear, I don’t give a damn
    </Type.Quote>
  ))
  .add('<Type.IconLabel />', () => <Type.IconLabel iconName="bogroll">Bog roll</Type.IconLabel>)
  .add('<Type.Statement />', () => (
    <Type.Statement>
      More <span className={m.fgPrimary}>experiences</span> mean better cities.
    </Type.Statement>
  ))
  .add('<Type.Statement /> with number', () => (
    <Type.Statement number={1}>
      More <span className={m.fgPrimary}>experiences</span> mean better cities.
    </Type.Statement>
  ));
