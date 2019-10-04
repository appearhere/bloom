import React from 'react';
import { storiesOf } from '@storybook/react';
import cx from 'classnames';
import { Loader, Modifiers as m } from '@appearhere/bloom';

storiesOf('Loader', module).add('Default', () => <Loader className={cx(m.fontLgV, m.fgPrimary)} />);
