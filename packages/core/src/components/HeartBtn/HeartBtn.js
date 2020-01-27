//@flow
import * as React from 'react';
import cx from 'classnames';

import noop from '../../utils/noop';
import BtnContainer from '../BtnContainer/BtnContainer';
import Icon from '../Icon/Icon';
import css from './HeartBtn.css';

type Props = {
  className: string,
  active: boolean,
  onClick: Function,
  variant: 'light' | 'dark',
}

const HeartBtn = ({ active, onClick, className, variant, ...rest }: Props) => (
  <BtnContainer {...rest} className={cx(css.root, css[variant], className)} onClick={onClick}>
    <Icon className={cx(css.icon, active ? css.active : null)} name="heart" />
  </BtnContainer>
);

HeartBtn.defaultProps = {
  onClick: noop,
  variant: 'dark',
};

export default HeartBtn;
