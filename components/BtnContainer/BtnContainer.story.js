import React from 'react';
import { storiesOf, action } from '@storybook/react';
import BtnContainer from './BtnContainer';

storiesOf('BtnContainer', module)
  .add('Default button', () => (
    <BtnContainer onClick={action('Button clicked')}>
      Like
    </BtnContainer>
  ));
