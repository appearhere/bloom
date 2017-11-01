import React from 'react';
import { storiesOf } from '@storybook/react';

import Tooltip from './Tooltip';
import { HORIZONTAL_ATTACHMENTS, VERTICAL_ATTACHMENTS } from '../Tether/Tether';

const Target = () => <button>Anchor</button>;
const DropdownContent = () => <div>Dropdown content, like a list of actions, helper text etc.</div>;

const stories = storiesOf('Tooltip', module)
  .add('Default Tooltip', () => (
    <div style={ { textAlign: 'center', marginTop: '5rem' } }>
      <Tooltip
        target={ <Target /> }
        active
      >
        <DropdownContent />
      </Tooltip>
    </div>
  ))
  .add('Light Tooltip', () => (
    <div style={ { textAlign: 'center', marginTop: '5rem' } }>
      <Tooltip
        target={ <Target /> }
        variant="light"
        active
      >
        <DropdownContent />
      </Tooltip>
    </div>
  ))
  .add('Positioned bottom right', () => (
    <div style={ { textAlign: 'center', marginTop: '5rem' } }>
      <Tooltip
        target={ <Target /> }
        verticalAttachment={ VERTICAL_ATTACHMENTS.BOTTOM }
        horizontalAttachment={ HORIZONTAL_ATTACHMENTS.RIGHT }
        active
      >
        <DropdownContent />
      </Tooltip>
    </div>
  ))
  .add('Positioned center right', () => (
    <div style={ { textAlign: 'center', marginTop: '5rem' } }>
      <Tooltip
        target={ <Target /> }
        verticalAttachment={ VERTICAL_ATTACHMENTS.CENTER }
        horizontalAttachment={ HORIZONTAL_ATTACHMENTS.RIGHT }
        active
      >
        <DropdownContent />
      </Tooltip>
    </div>
  ))
  .add('Positioned top right', () => (
    <div style={ { textAlign: 'center', marginTop: '5rem' } }>
      <Tooltip
        target={ <Target /> }
        verticalAttachment={ VERTICAL_ATTACHMENTS.TOP }
        horizontalAttachment={ HORIZONTAL_ATTACHMENTS.RIGHT }
        active
      >
        <DropdownContent />
      </Tooltip>
    </div>
  ))
  .add('Positioned top center', () => (
    <div style={ { textAlign: 'center', marginTop: '5rem' } }>
      <Tooltip
        target={ <Target /> }
        verticalAttachment={ VERTICAL_ATTACHMENTS.TOP }
        horizontalAttachment={ HORIZONTAL_ATTACHMENTS.CENTER }
        active
      >
        <DropdownContent />
      </Tooltip>
    </div>
  ))
  .add('Positioned top left', () => (
    <div style={ { textAlign: 'center', marginTop: '5rem' } }>
      <Tooltip
        target={ <Target /> }
        verticalAttachment={ VERTICAL_ATTACHMENTS.TOP }
        horizontalAttachment={ HORIZONTAL_ATTACHMENTS.LEFT }
        active
      >
        <DropdownContent />
      </Tooltip>
    </div>
  ))
  .add('Positioned center left', () => (
    <div style={ { textAlign: 'center', marginTop: '5rem' } }>
      <Tooltip
        target={ <Target /> }
        verticalAttachment={ VERTICAL_ATTACHMENTS.CENTER }
        horizontalAttachment={ HORIZONTAL_ATTACHMENTS.LEFT }
        active
      >
        <DropdownContent />
      </Tooltip>
    </div>
  ))
  .add('Positioned bottom left', () => (
    <div style={ { textAlign: 'center', marginTop: '5rem' } }>
      <Tooltip
        target={ <Target /> }
        verticalAttachment={ VERTICAL_ATTACHMENTS.BOTTOM }
        horizontalAttachment={ HORIZONTAL_ATTACHMENTS.LEFT }
        active
      >
        <DropdownContent />
      </Tooltip>
    </div>
  ))
  .add('Positioned center center', () => (
    <div style={ { textAlign: 'center', marginTop: '5rem' } }>
      <Tooltip
        target={ <Target /> }
        verticalAttachment={ VERTICAL_ATTACHMENTS.CENTER }
        horizontalAttachment={ HORIZONTAL_ATTACHMENTS.CENTER }
        active
      >
        <DropdownContent />
      </Tooltip>
    </div>
  ));

stories.
  add('Positioned flush bottom right', () => (
    <div style={ { textAlign: 'center', marginTop: '5rem' } }>
      <Tooltip
        target={ <Target /> }
        verticalAttachment={ VERTICAL_ATTACHMENTS.BOTTOM }
        horizontalAttachment={ HORIZONTAL_ATTACHMENTS.RIGHT }
        flushVertical
        active
      >
        <DropdownContent />
      </Tooltip>
    </div>
  ))
  .add('Positioned flush top right', () => (
    <div style={ { textAlign: 'center', marginTop: '5rem' } }>
      <Tooltip
        target={ <Target /> }
        verticalAttachment={ VERTICAL_ATTACHMENTS.TOP }
        horizontalAttachment={ HORIZONTAL_ATTACHMENTS.RIGHT }
        flushVertical
        active
      >
        <DropdownContent />
      </Tooltip>
    </div>
  ))
  .add('Positioned flush top center', () => (
    <div style={ { textAlign: 'center', marginTop: '5rem' } }>
      <Tooltip
        target={ <Target /> }
        verticalAttachment={ VERTICAL_ATTACHMENTS.TOP }
        horizontalAttachment={ HORIZONTAL_ATTACHMENTS.CENTER }
        flushVertical
        active
      >
        <DropdownContent />
      </Tooltip>
    </div>
  ))
  .add('Positioned flush top left', () => (
    <div style={ { textAlign: 'center', marginTop: '5rem' } }>
      <Tooltip
        target={ <Target /> }
        verticalAttachment={ VERTICAL_ATTACHMENTS.TOP }
        horizontalAttachment={ HORIZONTAL_ATTACHMENTS.LEFT }
        flushVertical
        active
      >
        <DropdownContent />
      </Tooltip>
    </div>
  ))
  .add('Positioned flush bottom left', () => (
    <div style={ { textAlign: 'center', marginTop: '5rem' } }>
      <Tooltip
        target={ <Target /> }
        verticalAttachment={ VERTICAL_ATTACHMENTS.BOTTOM }
        horizontalAttachment={ HORIZONTAL_ATTACHMENTS.LEFT }
        flushVertical
        active
      >
        <DropdownContent />
      </Tooltip>
    </div>
  ))
  .add('Positioned flush bottom center', () => (
    <div style={ { textAlign: 'center', marginTop: '5rem' } }>
      <Tooltip
        target={ <Target /> }
        verticalAttachment={ VERTICAL_ATTACHMENTS.BOTTOM }
        horizontalAttachment={ HORIZONTAL_ATTACHMENTS.CENTER }
        flushVertical
        active
      >
        <DropdownContent />
      </Tooltip>
    </div>
  ));

stories
  .add('Positioned bottom flush right', () => (
    <div style={ { textAlign: 'center', marginTop: '5rem' } }>
      <Tooltip
        target={ <Target /> }
        verticalAttachment={ VERTICAL_ATTACHMENTS.BOTTOM }
        horizontalAttachment={ HORIZONTAL_ATTACHMENTS.RIGHT }
        flushHorizontal
        active
      >
        <DropdownContent />
      </Tooltip>
    </div>
  ))
  .add('Positioned top flush right', () => (
    <div style={ { textAlign: 'center', marginTop: '5rem' } }>
      <Tooltip
        target={ <Target /> }
        verticalAttachment={ VERTICAL_ATTACHMENTS.TOP }
        horizontalAttachment={ HORIZONTAL_ATTACHMENTS.RIGHT }
        flushHorizontal
        active
      >
        <DropdownContent />
      </Tooltip>
    </div>
  ))
  .add('Positioned top flush left', () => (
    <div style={ { textAlign: 'center', marginTop: '5rem' } }>
      <Tooltip
        target={ <Target /> }
        verticalAttachment={ VERTICAL_ATTACHMENTS.TOP }
        horizontalAttachment={ HORIZONTAL_ATTACHMENTS.LEFT }
        flushHorizontal
        active
      >
        <DropdownContent />
      </Tooltip>
    </div>
  ))
  .add('Positioned bottom flush left', () => (
    <div style={ { textAlign: 'center', marginTop: '5rem' } }>
      <Tooltip
        target={ <Target /> }
        verticalAttachment={ VERTICAL_ATTACHMENTS.BOTTOM }
        horizontalAttachment={ HORIZONTAL_ATTACHMENTS.LEFT }
        flushHorizontal
        active
      >
        <DropdownContent />
      </Tooltip>
    </div>
  ));
