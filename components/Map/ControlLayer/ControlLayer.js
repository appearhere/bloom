import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';

import Control from '../Control/Control';
import ControlGroup from '../ControlGroup/ControlGroup';
import ControlIcon from '../Control/ControlIcon';

import css from './ControlLayer.css';

const ControlLayer = (props) => {
  const {
    children,
    className,
    controlGroupClassName,
    onZoomIn,
    onZoomOut,
  } = props;

  return (
    <div className={cx(css.root, className)}>
      <ControlGroup className={cx(css.controlGroup, controlGroupClassName)}>
        <Control onClick={onZoomIn}>
          <ControlIcon name="plus" />
        </Control>
        <Control onClick={onZoomOut}>
          <ControlIcon name="minus" />
        </Control>
      </ControlGroup>
      { children }
    </div>
  );
};

ControlLayer.propTypes = {
  className: PropTypes.string,
  controlGroupClassName: PropTypes.string,
  children: PropTypes.node.isRequired,
  onZoomIn: PropTypes.func.isRequired,
  onZoomOut: PropTypes.func.isRequired,
};

export default ControlLayer;
