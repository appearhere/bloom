import React from 'react';
import { storiesOf } from '@kadira/storybook';
import CodeRenderer from './CodeRenderer';
import Btn from '../Btn/Btn';

storiesOf('CodeRenderer', module)
  .add('Default', () => (
    <CodeRenderer>
      <Btn>Like</Btn>
    </CodeRenderer>
  ))
  .add('JSX', () => (
    <CodeRenderer renderProtocol="jsx">
      <Btn>Like</Btn>
    </CodeRenderer>
  ))
  .add('HTML', () => (
    <CodeRenderer renderProtocol="html">
      <Btn>Like</Btn>
    </CodeRenderer>
  ));