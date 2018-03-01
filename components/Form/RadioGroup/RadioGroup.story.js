import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';
import RadioGroup from './RadioGroup';

const stories = storiesOf('FormComponents', module);
stories.addDecorator(withKnobs);

stories.add('RadioGroup', () => (
  <RadioGroup
    value={number('Value', 1)}
    onChange={action('checked')}
  >
    { radio => (
      <span>
        { radio({ value: 1, label: 'One' }) }
        { radio({ value: 2, label: 'Two' }) }
        { radio({ value: 3, label: 'Three' }) }
        { radio({ value: 4, label: 'Four' }) }
        { radio({ value: 5, label: 'Five' }) }
      </span>
    ) }
  </RadioGroup>
));
