// @flow
import * as React from 'react';

import Tether from '../Tether/Tether';
import Inner from './DropdownInner';

export { HORIZONTAL_ATTACHMENTS, VERTICAL_ATTACHMENTS } from '../Tether/Tether';

type Props = {
  target: React.Element<any>,
  children: React.Node,
  className: string, 
}
const Dropdown = ({ target, children, className, ...rest }: Props) => (
  <Tether {...rest} target={target}>
    <Inner className={className}>{children}</Inner>
  </Tether>
);

export default Dropdown;
