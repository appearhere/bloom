import PropTypes from 'prop-types';
import React, { Children, cloneElement } from 'react';
import cx from 'classnames';

import css from './ControlGroup.css';

const ControlGroup = ({ children, className }) => (
  <div className={cx(css.root, css.controlGroup, className)}>
    {Children.map(children, child =>
      cloneElement(child, {
        className: cx(css.control, child.props.className),
      }),
    )}
  </div>
);

ControlGroup.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default ControlGroup;
