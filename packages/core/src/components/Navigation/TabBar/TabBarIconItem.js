import PropTypes from 'prop-types';
import React from 'react';

import Icon from '../../Icon/Icon';
import TabBarItem from './TabBarItem';

import css from './TabBarIconItem.css';

const TabBarIconItem = props => {
  const { children, icon, ...rest } = props;

  return (
    <TabBarItem className={css.root} {...rest}>
      <Icon className={css.icon} name={icon} />
      <span className={css.label}>{children}</span>
    </TabBarItem>
  );
};

TabBarIconItem.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.string.isRequired,
};

export default TabBarIconItem;
