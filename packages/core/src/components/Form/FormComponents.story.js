import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { Field, Meta, Description, Label, Value, Placeholder } from './FormComponents';

const stories = storiesOf('FormComponents', module);
stories.addDecorator(withKnobs);

stories
  .add('Field', () => (
    <div>
      <Field>Where an input would go</Field>
      <Field>And the second</Field>
      <Field>and the third...</Field>
    </div>
  ))
  .add('Meta', () => <Meta>1 of 7</Meta>)
  .add('Description', () => (
    <Description>
      A description about the input or the information we’re trying to collect
    </Description>
  ))
  .add('Label', () => <Label>Price range</Label>)
  .add('Label w/error', () => <Label error="Something went wrong">Price range</Label>)
  .add('Value', () => <Value>900sq ft - 1500 sq ft</Value>)
  .add('Placeholder', () => <Placeholder>Any size</Placeholder>);
