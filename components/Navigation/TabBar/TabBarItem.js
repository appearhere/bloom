import React, { PropTypes } from 'react';
import cx from 'classnames';

import Icon from '../../Icon/Icon';
import css from './TabBarItem.css';

const TabBarItem = (props) => {
  const {
    Component,
    className,
    active: _active,
    children,
    icon,
    ...rest,
  } = props;

  return (
    <Component
      { ...rest }
      className={ cx(
        css.root,
        className
      ) }
    >
      <Icon className={ css.icon } name={ icon } />
      <span className={ css.label }>
        { children }
      </span>
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
  icon: PropTypes.string,
};

TabBarItem.defaultProps = {
  Component: 'a',
};

export default TabBarItem;