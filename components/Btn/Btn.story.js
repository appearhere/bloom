import React from 'react';
import { storiesOf, action } from '@storybook/react';
import Btn from './Btn';
import m from '../../globals/modifiers.css';
import Icon from '../Icon/Icon';
import Loader from '../Loader/Loader';

storiesOf('Btn', module)
  .add('Default button', () => <Btn onClick={action('Button clicked')}>Cancel</Btn>)
  .add('with Icon', () => (
    <Btn onClick={action('Button clicked')}>
      <Icon className={m.mrs} name="cross" />
      Cancel
    </Btn>
  ))
  .add('with Loader', () => (
    <Btn onClick={action('Button clicked')}>
      <Loader className={m.mrs} />
      Cancel
    </Btn>
  ))
  .add('High priority', () => (
    <Btn priority="high" onClick={action('Button clicked')}>
      Submit
    </Btn>
  ))
  .add('Primary context', () => (
    <Btn context="primary" onClick={action('Button clicked')}>
      Submit
    </Btn>
  ))
  .add('Action context', () => (
    <Btn context="action" onClick={action('Button clicked')}>
      Submit
    </Btn>
  ))
  .add('Danger context', () => (
    <Btn context="danger" onClick={action('Button clicked')}>
      Delete
    </Btn>
  ))
  .add('Hollow variant', () => (
    <Btn variant="hollow" onClick={action('Button clicked')}>
      Cancel
    </Btn>
  ))
  .add('Subtle variant', () => (
    <Btn variant="subtle" onClick={action('Button clicked')}>
      Cancel
    </Btn>
  ))
  .add('Primary hollow button', () => (
    <Btn context="primary" variant="hollow" onClick={action('Button clicked')}>
      Submit
    </Btn>
  ))
  .add('Primary subtle button', () => (
    <Btn context="primary" variant="subtle" onClick={action('Button clicked')}>
      Submit
    </Btn>
  ))
  .add('Action hollow button', () => (
    <Btn context="action" variant="hollow" onClick={action('Button clicked')}>
      Submit
    </Btn>
  ))
  .add('Action subtle button', () => (
    <Btn context="action" variant="subtle" onClick={action('Button clicked')}>
      Submit
    </Btn>
  ))
  .add('Danger hollow button', () => (
    <Btn context="danger" variant="hollow" onClick={action('Button clicked')}>
      Delete
    </Btn>
  ))
  .add('Danger subtle button', () => (
    <Btn context="danger" variant="subtle" onClick={action('Button clicked')}>
      Delete
    </Btn>
  ))
  .add('Whiteout button', () => (
    <div className={[m.pal, m.bgBlack].join(' ')}>
      <Btn context="whiteout" onClick={action('Button clicked')}>
        Cancel
      </Btn>
    </div>
  ))
  .add('Whiteout hollow button', () => (
    <div className={[m.pal, m.bgBlack].join(' ')}>
      <Btn context="whiteout" variant="hollow" onClick={action('Button clicked')}>
        Cancel
      </Btn>
    </div>
  ))
  .add('Whiteout subtle button', () => (
    <div className={[m.pal, m.bgBlack].join(' ')}>
      <Btn context="whiteout" variant="subtle" onClick={action('Button clicked')}>
        Cancel
      </Btn>
    </div>
  ));
