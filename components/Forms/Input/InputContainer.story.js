import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import FormInput from './FormInput';

storiesOf('FormInput', module)
  .add('Default Input', () => (
    <FormInput
      id="1"
      name="1"
      onFocus={ action('Focus') }
      onBlur={ action('Blur') }
      onChange={ action('Change') }
      label="Full name"
      placeholder="Your first and last name"
      optionalLabel="optionnel"
      description="Let us know who you are, so we can refer to you by name"
      optional
    />
  ))
  .add('Errored Input', () => (
    <FormInput
      id="1"
      name="1"
      value="100"
      onFocus={ action('Focus') }
      onBlur={ action('Blur') }
      onChange={ action('Change') }
      description="Tell us what you love, what you really, really love"
      label="Full name"
      placeholder="Your first and last name"
      optionalLabel="optionnel"
      error="We can't call you that!"
      optional
    />
  ))
  .add('Default Textarea', () => (
    <FormInput
      type="textarea"
      id="1"
      name="1"
      value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Propter nos enim illam, non."
      onFocus={ action('Focus') }
      onBlur={ action('Blur') }
      onChange={ action('Change') }
      label="Other comments"
      placeholder="I really love everything!"
      description="Tell us what you love, what you really, really love"
      optional
    />
  ))
  .add('Errored Textarea', () => (
    <FormInput
      type="textarea"
      id="1"
      name="1"
      value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Propter nos enim illam, non."
      onFocus={ action('Focus') }
      onBlur={ action('Blur') }
      onChange={ action('Change') }
      label="Other comments"
      placeholder="I really love everything!"
      description="Tell us what you love, what you really, really love"
      error="You've got to say something 🙃"
      optional
    />
  ));