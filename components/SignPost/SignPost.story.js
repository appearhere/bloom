import React from 'react';
import { storiesOf } from '@kadira/storybook';

import SignPost from './SignPost';

import Btn from '../Btn/Btn';
import m from '../../globals/modifiers.css';

storiesOf('SignPost', module)
  .add('Default', () => (
    <SignPost title="Brands">
      <p className={ [m.mt0, m.mb0].join(' ') }>
        Start searching our exclusive collection of the world’s best retail spaces.
      </p>
      <Btn context="primary" className={ m.mtl }>How it works</Btn>
    </SignPost>
  ));