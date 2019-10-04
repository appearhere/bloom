import React from 'react';
import { storiesOf } from '@storybook/react';

import {
  Dropdown,
  TETHER_HORIZONTAL_ATTACHMENTS
} from '@appearhere/bloom';

const Target = () => <button>Anchor</button>;
const DropdownContent = () => <div>Dropdown content, like a list of actions, helper text etc.</div>;

storiesOf('Dropdown', module).add('Default', () => (
  <Dropdown
    horizontalAttachment={TETHER_HORIZONTAL_ATTACHMENTS.RIGHT}
    target={<Target />}
    flushHorizontal
    active
  >
    <DropdownContent />
  </Dropdown>
));
