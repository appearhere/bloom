//@flow

import * as React from 'react';
import cx from 'classnames';

import Control from '../Control/Control';
import ControlGroup from '../ControlGroup/ControlGroup';
import ControlIcon from '../Control/ControlIcon';

import css from './ControlLayer.css';

type Props = {
  children: React.Node,
  className: string,
  controlGroupClassName: string,
  onZoomIn: Function,
  onZoomOut: Function,
}

const ControlLayer = (props: Props) => {
  const { children, className, controlGroupClassName, onZoomIn, onZoomOut } = props;

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
      {children}
    </div>
  );
};

export default ControlLayer;
