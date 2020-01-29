// @flow

import * as React from 'react';
import cx from 'classnames';

import css from './ControlGroup.css';

type Props = {
  children: React.Node,
  className: string,
}

const ControlGroup = ({ children, className }: Props) => (
  <div className={cx(css.root, css.controlGroup, className)}>
    {React.Children.map(children, child =>
      React.cloneElement(child, {
        className: cx(css.control, child.props.className),
      }),
    )}
  </div>
);

export default ControlGroup;
