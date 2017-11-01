import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';

import css from './IconLabel.css';
import Icon from '../../Icon/Icon';
import LeftRight from '../../LeftRight/LeftRight';

const IconLabel = ({ iconName, children, className, ...rest }) => (
  <LeftRight
    className={ className }
    leftClassName={ css.icon }
    leftChildren={
      <Icon
        name={ iconName }
      />
    }
    rightClassName={ css.label }
    rightChildren={ children }
    primarySide="right"
  />
);

IconLabel.propTypes = {
  iconName: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default IconLabel;
