import PropTypes from 'prop-types';
import React, { Children, cloneElement } from 'react';
import cx from 'classnames';

import childrenOf from '../../utils/propTypeValidations/childrenOf';
import Btn from '../Btn/Btn';
import css from './BtnGroup.css';

const BtnGroup = props => {
  const { children, className, context, priority, ...rest } = props;

  return (
    <div {...rest} className={cx(css[context], className)}>
      {Children.map(children, child =>
        cloneElement(child, {
          className: cx(css.btn, child.props.className),
          variant: 'default',
          context,
          priority,
        }),
      )}
    </div>
  );
};

BtnGroup.propTypes = {
  className: PropTypes.string,
  children: childrenOf(Btn).isRequired,
  context: PropTypes.oneOf(['default', 'primary', 'danger', 'action', 'whiteout']),
  priority: PropTypes.oneOf(['high', 'normal']),
};

BtnGroup.defaultProps = {
  context: 'default',
  priority: 'normal',
};

export default BtnGroup;
