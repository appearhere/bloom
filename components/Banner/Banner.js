import React, { PropTypes } from 'react';
import cx from 'classnames';

import BtnContainer from '../BtnContainer/BtnContainer';
import Icon from '../Icon/Icon';
import css from './Banner.css';

const contexts = {
  ERROR: 'error',
  SUCCESS: 'success',
};

const Banner = ({ children, className, context, onClose, ...rest }) => (
  <div
    { ...rest }
    className={ cx(
      css.root,
      css[context],
      onClose ? css.dismissable : null,
      className,
    ) }
  >
    <div
      className={ cx(
        css.inner,
      ) }
    >
      { children }
    </div>
    { onClose && (
      <BtnContainer className={ css.dismissContainer } onClick={ onClose }>
        <Icon className={ css.icon } name="cross" />
      </BtnContainer>
    ) }
  </div>
);

Banner.propTypes = {
  className: PropTypes.string,
  context: PropTypes.oneOf([
    contexts.ERROR,
    contexts.SUCCESS,
  ]),
  children: PropTypes.node,
  onClose: PropTypes.func,
};

export default Banner;