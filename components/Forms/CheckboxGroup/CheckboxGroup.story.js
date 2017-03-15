import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { withKnobs, array } from '@kadira/storybook-addon-knobs';
import CheckboxGroup from './CheckboxGroup';

const stories = storiesOf('CheckboxGroup', module);
stories.addDecorator(withKnobs);

stories
  .add('Default view', () => {
    const value = array('Value(s)', ['1'], ',');

    return (
      <CheckboxGroup
        name="CheckboxGroup"
        value={ value }
        onChange={ action('checked') }
        label="Favourite number(s)?"
        optionalLabel="optionnel"
        description="Checkboxes r kewl"
        optional
      >
        { checkbox => (
          <span>
            { checkbox({ value: '1' }) }
            { checkbox({ value: '2' }) }
            { checkbox({ value: '3' }) }
            { checkbox({ value: '4' }) }
            { checkbox({ value: '5' }) }
          </span>
        ) }
      </CheckboxGroup>
    );
  });