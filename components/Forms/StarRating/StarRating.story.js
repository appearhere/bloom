import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import StarRating from './StarRating';

storiesOf('StarRating', module)
  .add('StarRating', () => (
    <StarRating
      name="RadioGroup"
      value={ 3 }
      onChange={ action('Changing') }
      label="Out of five?"
      optionalLabel="optionnel"
      description="Radio buttons r kewl"
      optional
    />
  ));