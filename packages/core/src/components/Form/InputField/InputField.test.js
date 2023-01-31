import React from 'react';
import { render } from 'react-dom';

import InputField from './InputField';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(
    <InputField id="">
      <input />
    </InputField>,
    div,
  );
});

it('renders label if passed a label prop', () => {
  const {container} = render(
    <InputField label="Test Label">
      <input />
    </InputField>,
  )

  const labelField = container.querySelector('Label');
  expect(labelField).toBeVisible();
})

it('does not render label if not passed a label prop', () => {
  const {container} = render(
    <InputField>
      <input />
    </InputField>,
  )

  const labelField = container.querySelector('Label');
  expect(labelField).toBeFalsy();
})
