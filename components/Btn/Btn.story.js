import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Btn from './Btn';
import m from '../../globals/modifiers.css';

storiesOf('Btn', module)
  .add('Default button', () => (
    <Btn onClick={ action('Button clicked') }>
      Like
    </Btn>
  ))
  .add('Primary context', () => (
    <Btn context="primary" onClick={ action('Button clicked') }>
      Like
    </Btn>
  ))
  .add('Danger context', () => (
    <Btn context="danger" onClick={ action('Button clicked') }>
      Like
    </Btn>
  ))
  .add('Hollow variant', () => (
    <Btn variant="hollow" onClick={ action('Button clicked') }>
      Like
    </Btn>
  ))
  .add('Subtle variant', () => (
    <Btn variant="subtle" onClick={ action('Button clicked') }>
      Like
    </Btn>
  ))
  .add('Primary hollow button', () => (
    <Btn context="primary" variant="hollow" onClick={ action('Button clicked') }>
      Like
    </Btn>
  ))
  .add('Primary subtle button', () => (
    <Btn context="primary" variant="subtle" onClick={ action('Button clicked') }>
      Like
    </Btn>
  ))
  .add('Danger hollow button', () => (
    <Btn context="danger" variant="hollow" onClick={ action('Button clicked') }>
      Like
    </Btn>
  ))
  .add('Danger subtle button', () => (
    <Btn context="danger" variant="subtle" onClick={ action('Button clicked') }>
      Like
    </Btn>
  ))
  .add('Whiteout button', () => (
    <div className={[m.pal, m.bgBlack].join(' ')}>
      <Btn context="whiteout" onClick={ action('Button clicked') }>
        Like
      </Btn>
    </div>
  ))
  .add('Whiteout hollow button', () => (
    <div className={[m.pal, m.bgBlack].join(' ')}>
      <Btn context="whiteout" variant="hollow" onClick={ action('Button clicked') }>
        Like
      </Btn>
    </div>
  ))
  .add('Whiteout subtle button', () => (
    <div className={[m.pal, m.bgBlack].join(' ')}>
      <Btn context="whiteout" variant="subtle" onClick={ action('Button clicked') }>
        Like
      </Btn>
    </div>
  ));