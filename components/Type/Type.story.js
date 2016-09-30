import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import classnames from 'classnames';

import SectionHeader from './SectionHeader/SectionHeader';
import Synopsis from './Synopsis/Synopsis';
import Quote from './Quote/Quote';
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
      body="Find a space that matches your price, location, and audience, or browse our destination guides for inspiration."
    />
  ))
  .add('<Synopsis /> centered', () => (
    <Synopsis className={[m.pa48, m.center].join(' ')}
      title="Focus on your idea."
      body="We’ve organised legals & deposits simply so you can focus on the one thing that really matters - making your idea happen."
    />
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
  ));