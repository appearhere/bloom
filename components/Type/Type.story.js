import React from 'react';
import { storiesOf } from '@kadira/storybook';

import SectionHeader from './SectionHeader/SectionHeader';
import Synopsis from './Synopsis/Synopsis';
import Quote from './Quote/Quote';
import IconLabel from './IconLabel/IconLabel';
import m from '../../globals/modifiers.css';

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
    >
      Find a space that matches your price, location, and audience, or browse our destination guides for inspiration.
    </Synopsis>
  ))
  .add('<Synopsis /> centered', () => (
    <Synopsis className={[m.pa48, m.center].join(' ')}
      title="Focus on your idea."
    >
      We’ve organised legals & deposits simply so you can focus on the one thing that really matters - making your idea happen.
    </Synopsis>
  ))
  .add('<Synopsis /> advanced', () => (
    <Synopsis className={[m.pa48].join(' ')}
      title={
        <span>
          <span className={ [m.fontSmI, m.bold, m.db, m.pbs].join(' ') }>Label</span>
          <span>Focus on your idea.</span>
        </span>
      }
    >
      We’ve organised legals & deposits simply so you can focus on the one thing that really matters - making your idea happen.
    </Synopsis>
  )).add('<Quote /> default', () => (
    <Quote citation="Rhett Butler" >
      Frankly my dear, I don’t give a damn
    </Quote>
  )).add('<Quote /> reverse and centered', () => (
    <Quote
      citation={ <span>Charles Babbage, Genius</span> }
      cite="http://www.brainyquote.com/quotes/quotes/c/charlesbab141832.html"
      className={ [m.fgWhite, m.bgBlack, m.pa48, m.center].join(' ') }
    >
      I am not able rightly to apprehend the kind of confusion of ideas that could provoke such n question
    </Quote>
  ))
  .add('<IconLabel />', () => (
    <IconLabel iconName="bogroll">
      Bog roll
    </IconLabel>
  ));