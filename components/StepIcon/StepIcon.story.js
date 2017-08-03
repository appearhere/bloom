import React from 'react';
import { storiesOf } from '@kadira/storybook';
import StepIcon from './StepIcon';

storiesOf('StepIcon', module)
  .add('Step 1', () => (
    <StepIcon>1</StepIcon>
  ))
  .add('Step 2', () => (
    <StepIcon>2</StepIcon>
  ))
  .add('Step 3', () => (
    <StepIcon>3</StepIcon>
  ))
  .add('Step 10', () => (
    <StepIcon>10</StepIcon>
  ));
