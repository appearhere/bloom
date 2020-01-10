import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, number } from '@storybook/addon-knobs';
import { RadioGroup } from '@appearhere/bloom';

const stories = storiesOf('FormComponents', module);
stories.addDecorator(withKnobs);

stories.add('RadioGroup', () => (
  <RadioGroup name="RadioGroup" value={number('Value', 1)} onChange={action('checked')}>
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
));
