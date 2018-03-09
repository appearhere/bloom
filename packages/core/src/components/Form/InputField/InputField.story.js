import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { withKnobs, boolean, array, select, number } from '@storybook/addon-knobs';

import CheckboxGroup from '../CheckboxGroup/CheckboxGroup';
import InputField from './InputField';
import Input from '../Input/Input';
import InputRange from '../InputRange/InputRange';
import RadioGroup from '../RadioGroup/RadioGroup';
import Select from '../Select/Select';
import Option from '../Select/Option';
import StarRating from '../StarRating/StarRating';
import m from '../../../globals/modifiers.css';

const stories = storiesOf('InputField', module);
stories.addDecorator(withKnobs);

const inputTypes = ['text', 'email', 'password', 'search', 'url', 'textarea'];

const WrappedSelect = () => (
  <Select
    className={m.mtl}
    onChange={action('onChange')}
    onFocus={action('onFocus')}
    onBlur={action('onBlur')}
  >
    <Option value="1">One</Option>
    <Option value="2">Two</Option>
    <Option value="3">Three</Option>
    <Option value="4">Four</Option>
    <Option value="5">Five</Option>
  </Select>
);

stories
  .add('Simple', () => <InputField id="0" label="Appearing date" valueReplay="31 Mar" />)
  .add('CheckboxGroup', () => {
    const value = array('Value(s)', ['1'], ',');

    return (
      <InputField
        id="1"
        label="Checkboxes"
        description="A description of the desired input"
        optionalLabel="optional"
      >
        <CheckboxGroup
          className={m.mtl}
          name="CheckboxGroup"
          value={value}
          onChange={action('checked')}
        >
          {checkbox => (
            <span>
              {checkbox({
                value: '1',
                label: 'One',
                name: '',
              })}
              {checkbox({
                value: '2',
                label: 'Two',
                name: '',
              })}
              {checkbox({
                value: '3',
                label: 'Three',
                name: '',
              })}
              {checkbox({
                value: '4',
                label: 'Four',
                name: '',
              })}
              {checkbox({
                value: '5',
                label: 'Five',
                name: '',
              })}
            </span>
          )}
        </CheckboxGroup>
      </InputField>
    );
  })
  .add('Input', () => (
    <InputField
      id="2"
      label="Text input"
      description="A description of the desired input"
      error={boolean('Errored', false) ? 'Something went wrong' : ''}
      required={false}
    >
      <Input
        className={m.mtl}
        id="1"
        type={select('Type', inputTypes, inputTypes[0])}
        value="100"
        onFocus={action('Focus')}
        onBlur={action('Blur')}
        onChange={action('Change')}
      />
    </InputField>
  ))
  .add('InputRange', () => (
    <InputField
      id="2"
      label="Range input"
      description="A description of the desired input"
      valueReplay={`${number('value', 4)} units`}
    >
      <InputRange
        className={m.mtl}
        minValue={0}
        maxValue={10}
        value={number('value', 4)}
        name="Simple range input"
        onChange={action('Change...')}
        onChangeComplete={action('Change complete...')}
      />
    </InputField>
  ))
  .add('RadioGroup', () => (
    <InputField id="1" label="Radio buttons" description="A description of the desired input">
      <RadioGroup className={m.mtl} value={number('Value', 1)} onChange={action('checked')}>
        {radio => (
          <span>
            {radio({ value: 1, label: 'One' })}
            {radio({ value: 2, label: 'Two' })}
            {radio({ value: 3, label: 'Three' })}
            {radio({ value: 4, label: 'Four' })}
            {radio({ value: 5, label: 'Five' })}
          </span>
        )}
      </RadioGroup>
    </InputField>
  ))
  .add('Select', () => (
    <InputField id="1" label="Select box" description="A description of the desired input">
      <WrappedSelect />
    </InputField>
  ))
  .add('StarRating', () => (
    <InputField id="1" label="Radio buttons" description="A description of the desired input">
      <StarRating
        className={m.mtl}
        name="RadioGroup"
        value={number('Value', 1)}
        onChange={action('Changing')}
      />
    </InputField>
  ));
