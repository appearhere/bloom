import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import DismissablePanel from './DismissablePanel';

storiesOf('DismissablePanel', module)
  .add('Default context', () => (
    <DismissablePanel onClose={ action('Closing banner') }>
      Important information that you should look at right now
    </DismissablePanel>
  ))
  .add('Blackout context', () => (
    <DismissablePanel context="blackout" onClose={ action('Closing banner') }>
      Important information that you should look at right now
    </DismissablePanel>
  ))
  .add('Success context', () => (
    <DismissablePanel context="success" onClose={ action('Closing banner') }>
      You did something right! 👏
    </DismissablePanel>
  ))
  .add('Error context', () => (
    <DismissablePanel context="error" onClose={ action('Closing banner') }>
      Something went wrong 😕
    </DismissablePanel>
  ));
