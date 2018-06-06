import React from 'react';
import { storiesOf } from '@storybook/react';

import Dropdown, { HORIZONTAL_ATTACHMENTS } from './Dropdown';
import DropdownInner from './DropdownInner';

const Target = () => <button>Anchor</button>;
const DropdownContent = () => <div>Dropdown content, like a list of actions, helper text etc.</div>;

storiesOf('DropdownInner', module).add('Default', () => (
  <DropdownInner>
    <DropdownContent />
  </DropdownInner>
));

storiesOf('Dropdown', module).add('Default', () => (
  <Dropdown
    horizontalAttachment={HORIZONTAL_ATTACHMENTS.RIGHT}
    target={<Target />}
    flushHorizontal
    active
  >
    <DropdownContent />
  </Dropdown>
));
