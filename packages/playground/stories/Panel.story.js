import React from 'react';
import { storiesOf } from '@storybook/react';
import { Panel } from '@appearhere/bloom';

storiesOf('Panel', module)
  .add('Default context', () => (
    <Panel>Important information that you should look at right now</Panel>
  ))
  .add('Blackout context', () => (
    <Panel context="blackout">Important information that you should look at right now</Panel>
  ))
  .add('Success context', () => <Panel context="success">You did something right! 👏</Panel>)
  .add('Error context', () => <Panel context="error">Something went wrong 😕</Panel>);
