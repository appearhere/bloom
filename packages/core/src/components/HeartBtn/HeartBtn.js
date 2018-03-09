import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';

import noop from '../../utils/noop';
import BtnContainer from '../BtnContainer/BtnContainer';
import Icon from '../Icon/Icon';
import css from './HeartBtn.css';

const HeartBtn = ({ active, onClick, className, variant, ...rest }) => (
  <BtnContainer {...rest} className={cx(css.root, css[variant], className)} onClick={onClick}>
    <Icon className={cx(css.icon, active ? css.active : null)} name="heart" />
  </BtnContainer>
);

HeartBtn.propTypes = {
  className: PropTypes.string,
  active: PropTypes.bool,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['light', 'dark']),
};

HeartBtn.defaultProps = {
  onClick: noop,
  variant: 'dark',
};

export default HeartBtn;
