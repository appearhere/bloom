// @flow
import * as React from 'react';
import cx from 'classnames';

import css from './DropdownInner.css';

type Props = {
  className?: string,
  children: React.Node,
  verticalAttachment?: string,
  horizontalAttachment?: string,
  active?: boolean,
  closePortal?: Function,
}
const DropdownInner = (props: Props) => {
  const {
    className,
    children,
    verticalAttachment: _verticalAttachment,
    horizontalAttachment: _horizontalAttachment,
    active: _active,
    closePortal: _closePortal,
    ...rest
  } = props;

  return (
    <div {...rest} className={cx(css.root, className)}>
      {children}
    </div>
  );
};

export default DropdownInner;
