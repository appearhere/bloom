import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import RadioGroup from './RadioGroup';
import Star from '../StarRating/Star';

storiesOf('RadioGroup', module)
  .add('Default view', () => (
    <RadioGroup
      name="RadioGroup"
      value={ 2 }
      onChange={ action('checked') }
      label="Out of five?"
      optionalLabel="optionnel"
      description="Radio buttons r kewl"
      optional
    >
      { radio => (
        <span>
          { radio({ value: 1 }) }
          { radio({ value: 2 }) }
          { radio({ value: 3 }) }
          { radio({ value: 4 }) }
          { radio({ value: 5 }) }
        </span>
      ) }
    </RadioGroup>
  ))
  .add('Custom radio buttons', () => (
    <RadioGroup
      name="RadioGroup"
      value={ 2 }
      onChange={ action('checked') }
      InputComponent={ Star }
      label="Out of five?"
      optionalLabel="optionnel"
      description="Radio buttons r kewl"
      optional
    >
      { radio => (
        <span>
          { radio({ value: 1 }) }
          { radio({ value: 2 }) }
          { radio({ value: 3 }) }
          { radio({ value: 4 }) }
          { radio({ value: 5 }) }
        </span>
      ) }
    </RadioGroup>
  ));