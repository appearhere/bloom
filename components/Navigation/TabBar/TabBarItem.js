import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';

import css from './TabBarItem.css';

const TabBarItem = (props) => {
  const {
    Component,
    className,
    active: _active,
    children,
    ...rest
  } = props;

  return (
    <Component
      {...rest}
      className={cx(
        css.root,
        className
      )}
    >
      { children }
    </Component>
  );
};

TabBarItem.propTypes = {
  className: PropTypes.string,
  Component: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
  children: PropTypes.node,
  active: PropTypes.bool,
};

TabBarItem.defaultProps = {
  Component: 'a',
};

export default TabBarItem;
