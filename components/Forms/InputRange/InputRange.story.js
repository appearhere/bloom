import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import InputRange from './InputRange';
import transformStepValues from './transformStepValues';
import InputRangeWithHistogram from './InputRangeWithHistogram';

const bucket = [
  0,
  2,
  4,
  8,
  16,
  32,
  64,
];

storiesOf('InputRange', module)
  .add('Default InputRange', () => (
    <InputRange
      minValue={ 0 }
      maxValue={ 10 }
      value={ 4 }
      name="Simple range input"
      onChange={ action('Change...') }
      onChangeComplete={ action('Change complete...') }
    />
  ))
  .add('Multi InputRange', () => (
    <InputRange
      minValue={ 0 }
      maxValue={ 10 }
      value={ {
        min: 0,
        max: 10,
      } }
      name="Simple range input"
      onChange={ action('Change...') }
      onChangeComplete={ action('Change complete...') }
    />
  ))
  .add('Non-linear default InputRange', () => {
    const NonLinearRangeInput = transformStepValues(InputRange)(bucket);

    return (
      <NonLinearRangeInput
        minValue={ bucket[0] }
        maxValue={ bucket[6] }
        value={ bucket[3] }
        name="Simple range input"
        onChange={ action('Change...') }
        onChangeComplete={ action('Change complete...') }
      />
    );
  })
  .add('Non-linear multi InputRange', () => {
    const NonLinearRangeInput = transformStepValues(InputRange)(bucket);

    return (
      <NonLinearRangeInput
        minValue={ bucket[0] }
        maxValue={ bucket[6] }
        value={ {
          min: bucket[1],
          max: bucket[5],
        } }
        name="Simple range input"
        onChange={ action('Change...') }
        onChangeComplete={ action('Change complete...') }
      />
    );
  })
  .add('With histogram', () => (
    <InputRangeWithHistogram
      minValue={ bucket[0] }
      maxValue={ bucket[6] }
      value={ {
        min: bucket[0],
        max: bucket[5],
      } }
      data={ [10, 35, 20, 3, 5, 37, 24] }
    />
  ));