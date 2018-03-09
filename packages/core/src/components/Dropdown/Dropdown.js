import PropTypes from 'prop-types';
import React from 'react';

import Tether from '../Tether/Tether';
import Inner from './DropdownInner';

export { HORIZONTAL_ATTACHMENTS, VERTICAL_ATTACHMENTS } from '../Tether/Tether';

const Dropdown = ({ target, children, className, ...rest }) => (
  <Tether {...rest} target={target}>
    <Inner className={className}>{children}</Inner>
  </Tether>
);

Dropdown.propTypes = {
  target: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Dropdown;
