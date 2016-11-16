import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { applyContainerQuery } from 'react-container-query';

import ProgressSteps from './ProgressSteps';
import progresscss from './ProgressSteps.css';
import Step from './Step';

const HorizontalProgressSteps = applyContainerQuery(ProgressSteps, {
  [progresscss.horizontal]: {
    minWidth: 750,
  },
});

storiesOf('ProgressSteps', module)
  .add('Default', () => (
    <ProgressSteps>
      <Step title="Apply in minutes">
        <p>
          { 'Tell us a little about yourself and your space and we’ll show what’s needed ' +
            'to list space in your city.' }
        </p>
      </Step>
      <Step title="Unlock your dashboard">
        <p>
          { 'We’ll need your license agreement and account information to verify your ' +
            'space and get you started.' }
        </p>
      </Step>
      <Step title="Get listed and go">
        <p>
          { 'Once you’re approved, start receiving space requests right away. Our current ' +
            'record is seven minutes.' }
        </p>
      </Step>
    </ProgressSteps>
  )).add('with one completed step', () => (
    <ProgressSteps lastCompletedIndex={ 0 }>
      <Step title="Apply in minutes">
        <p>
          { 'Tell us a little about yourself and your space and we’ll show what’s needed ' +
            'to list space in your city.' }
        </p>
      </Step>
      <Step title="Unlock your dashboard">
        <p>
          { 'We’ll need your license agreement and account information to verify your ' +
            'space and get you started.' }
        </p>
      </Step>
      <Step title="Get listed and go">
        <p>
          { 'Once you’re approved, start receiving space requests right away. Our current ' +
            'record is seven minutes.' }
        </p>
      </Step>
    </ProgressSteps>
  )).add('with multiple completed steps', () => (
    <ProgressSteps lastCompletedIndex={ 1 }>
      <Step title="Apply in minutes">
        <p>
          { 'Tell us a little about yourself and your space and we’ll show what’s needed ' +
            'to list space in your city.' }
        </p>
      </Step>
      <Step title="Unlock your dashboard">
        <p>
          { 'We’ll need your license agreement and account information to verify your ' +
            'space and get you started.' }
        </p>
      </Step>
      <Step title="Get listed and go">
        <p>
          { 'Once you’re approved, start receiving space requests right away. Our current ' +
            'record is seven minutes.' }
        </p>
      </Step>
    </ProgressSteps>
  ))
  .add('horizontal', () => (
    <HorizontalProgressSteps lastCompletedIndex={ 1 }>
      <Step title="Apply in minutes">
        <p>
          { 'Tell us a little about yourself and your space and we’ll show what’s needed ' +
            'to list space in your city.' }
        </p>
      </Step>
      <Step title="Unlock your dashboard">
        <p>
          { 'We’ll need your license agreement and account information to verify your ' +
            'space and get you started.' }
        </p>
      </Step>
      <Step title="Get listed and go">
        <p>
          { 'Once you’re approved, start receiving space requests right away. Our current ' +
            'record is seven minutes.' }
        </p>
      </Step>
    </HorizontalProgressSteps>
  ))
  .add('icons', () => (
    <HorizontalProgressSteps lastCompletedIndex={ 1 }>
      <Step title="Apply in minutes" icon="search">
        <p>
          { 'Tell us a little about yourself and your space and we’ll show what’s needed ' +
            'to list space in your city.' }
        </p>
      </Step>
      <Step title="Unlock your dashboard" icon="chatting">
        <p>
          { 'We’ll need your license agreement and account information to verify your ' +
            'space and get you started.' }
        </p>
      </Step>
      <Step title="Get listed and go" icon="store">
        <p>
          { 'Once you’re approved, start receiving space requests right away. Our current ' +
            'record is seven minutes.' }
        </p>
      </Step>
    </HorizontalProgressSteps>
  ));