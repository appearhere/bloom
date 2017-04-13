import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Panel from './Panel';

storiesOf('Panel', module)
  .add('Default context', () => (
    <Panel>
      Important information that you should look at right now
    </Panel>
  ))
  .add('Dark context', () => (
    <Panel context="dark">
      Important information that you should look at right now
    </Panel>
  ))
  .add('Success context', () => (
    <Panel context="success">
      You did something right! 👏
    </Panel>
  ))
  .add('Error context', () => (
    <Panel context="error">
      Something went wrong 😕
    </Panel>
  ));