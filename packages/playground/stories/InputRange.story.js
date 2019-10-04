import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, number } from '@storybook/addon-knobs';
import { InputRange, InputRangeWithHistogram } from '@appearhere/bloom';
import transformStepValues from './transformStepValues';

const stories = storiesOf('FormComponents', module);
stories.addDecorator(withKnobs);

const bucket = [0, 2, 4, 8, 16, 32, 64];

stories
  .add('Default InputRange', () => (
    <InputRange
      minValue={0}
      maxValue={10}
      value={number('value', 4)}
      name="Simple range input"
      onChange={action('Change...')}
      onChangeComplete={action('Change complete...')}
    />
  ))
  .add('Multi InputRange', () => (
    <InputRange
      minValue={0}
      maxValue={10}
      value={{
        min: number('min', 0),
        max: number('max', 10),
      }}
      name="Simple range input"
      onChange={action('Change...')}
      onChangeComplete={action('Change complete...')}
    />
  ))
  .add('Non-linear default InputRange', () => {
    const NonLinearRangeInput = transformStepValues(InputRange)(bucket);

    return (
      <NonLinearRangeInput
        minValue={bucket[0]}
        maxValue={bucket[6]}
        value={bucket[number('value', 1)]}
        name="Simple range input"
        onChange={action('Change...')}
        onChangeComplete={action('Change complete...')}
      />
    );
  })
  .add('Non-linear multi InputRange', () => {
    const NonLinearRangeInput = transformStepValues(InputRange)(bucket);

    return (
      <NonLinearRangeInput
        minValue={bucket[0]}
        maxValue={bucket[6]}
        value={{
          min: bucket[number('min', 1)],
          max: bucket[number('max', 5)],
        }}
        name="Simple range input"
        onChange={action('Change...')}
        onChangeComplete={action('Change complete...')}
      />
    );
  })
  .add('With histogram', () => (
    <InputRangeWithHistogram
      minValue={bucket[0]}
      maxValue={bucket[6]}
      value={{
        min: bucket[number('min', 1)],
        max: bucket[number('max', 5)],
      }}
      name="Range input with histogram"
      data={[10, 35, 20, 3, 5, 37, 24]}
    />
  ));
