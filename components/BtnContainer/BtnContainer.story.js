import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import BtnContainer from './BtnContainer';

storiesOf('BtnContainer', module)
  .add('Default button', () => (
    <BtnContainer onClick={ action('Button clicked') }>
      Like
    </BtnContainer>
  ));
