import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { Form } from '@appearhere/bloom';

const stories = storiesOf('FormComponents', module);
stories.addDecorator(withKnobs);

stories
  .add('Field', () => (
    <div>
      <Form.Field>Where an input would go</Form.Field>
      <Form.Field>And the second</Form.Field>
      <Form.Field>and the third...</Form.Field>
    </div>
  ))
  .add('Meta', () => <Form.Meta>1 of 7</Form.Meta>)
  .add('Description', () => (
    <Form.Description>
      A description about the input or the information we’re trying to collect
    </Form.Description>
  ))
  .add('Label', () => <Form.Label>Price range</Form.Label>)
  .add('Label w/error', () => <Form.Label error="Something went wrong">Price range</Form.Label>)
  .add('Value', () => <Form.Value>900sq ft - 1500 sq ft</Form.Value>)
  .add('Placeholder', () => <Form.Placeholder>Any size</Form.Placeholder>);
