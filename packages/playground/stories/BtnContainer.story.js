import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { BtnContainer } from '@appearhere/bloom';

storiesOf('BtnContainer', module).add('Default button', () => (
  <BtnContainer onClick={action('Button clicked')}>Like</BtnContainer>
));
