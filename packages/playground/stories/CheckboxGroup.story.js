import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, array } from '@storybook/addon-knobs';
import { CheckboxGroup } from '@appearhere/bloom';

const stories = storiesOf('FormComponents', module);
stories.addDecorator(withKnobs);

stories.add('CheckboxGroup', () => {
  const value = array('Value(s)', ['1'], ',');

  return (
    <CheckboxGroup name="CheckboxGroup" value={value} onChange={action('checked')}>
      {checkbox => (
        <span>
          {checkbox({ value: '1', label: 'One' })}
          {checkbox({ value: '2', label: 'Two' })}
          {checkbox({ value: '3', label: 'Three' })}
          {checkbox({ value: '4', label: 'Four' })}
          {checkbox({ value: '5', label: 'Five' })}
        </span>
      )}
    </CheckboxGroup>
  );
});
