//@flow

import * as React from 'react';

import css from './IconLabel.css';
import Icon from '../../Icon/Icon';
import LeftRight from '../../LeftRight/LeftRight';

type Props = {
  iconName: string,
  children: React.Node,
  className: string,
}

const IconLabel = ({ iconName, children, className }: Props) => (
  <LeftRight
    className={className}
    leftClassName={css.icon}
    leftChildren={<Icon name={iconName} />}
    rightClassName={css.label}
    rightChildren={children}
    primarySide="right"
  />
);

export default IconLabel;
