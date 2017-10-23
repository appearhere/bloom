import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';

import css from './DropdownInner.css';

const DropdownInner = (props) => {
  const {
    className,
    children,
    verticalAttachment: _verticalAttachment,
    horizontalAttachment: _horizontalAttachment,
    active: _active,
    closePortal: _closePortal,
    ...rest,
  } = props;

  return (
    <div
      { ...rest }
      className={ cx(css.root, className) }
    >
      { children }
    </div>
  );
};

DropdownInner.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  verticalAttachment: PropTypes.string,
  horizontalAttachment: PropTypes.string,
  active: PropTypes.bool,
  closePortal: PropTypes.func,
};

export default DropdownInner;
