import React, { Component, PropTypes } from 'react';

import Tether from '../Tether/Tether';
import Inner from './DropdownInner';

export { HORIZONTAL_ATTACHMENTS, VERTICAL_ATTACHMENTS } from '../Tether/Tether';

export default class Dropdown extends Component {
  static propTypes = {
    target: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    closeOnEsc: PropTypes.bool,
    closeOnOutsideClick: PropTypes.bool,
  };

  static defaultProps = {
    closeOnEsc: true,
    closeOnOutsideClick: true,
  };

  render() {
    const {
      target,
      children,
      className,
      ...rest,
    } = this.props;

    return (
      <Tether
        { ...rest }
        target={ target }
      >
        <Inner className={ className }>
          { children }
        </Inner>
      </Tether>
    );
  }
}
