import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Btn from '../Btn/Btn';

storiesOf('Button', module)
  .add('default view', () => (
    <Btn onClick={ action('button clicked') }>Hello</Btn>
  ));