/* eslint-disable react/no-multi-comp */
import React, { Component, PropTypes, cloneElement } from 'react';
import cx from 'classnames';
import warning from 'warning';

import Tether, { HORIZONTAL_ATTACHMENTS, VERTICAL_ATTACHMENTS } from '../Tether/Tether';
import css from './Tooltip.css';

export { HORIZONTAL_ATTACHMENTS, VERTICAL_ATTACHMENTS } from '../Tether/Tether';

/* eslint-disable react/prefer-stateless-function */
class TetherDirectionWrapper extends Component {
  render() {
    const {
      verticalAttachment,
      horizontalAttachment,
      verticalClassNames,
      horizontalClassNames,
      flushHorizontal,
      flushVertical,
      children,
      className,
      active,
      ...rest,
    } = this.props;

    const classNames = cx(
      className,
      verticalClassNames[verticalAttachment],
      horizontalClassNames[horizontalAttachment],
      flushVertical ? verticalClassNames.flushVertical : null,
      flushHorizontal ? horizontalClassNames.flushHorizontal : null,
      active ? css.active : null,
    );

    return (
      <div className={ classNames }>
        { cloneElement(children, {
          ...rest,
          verticalAttachment,
          horizontalAttachment,
        }) }
      </div>
    );
  }
}
/* eslint-enable react/prefer-stateless-function */

TetherDirectionWrapper.propTypes = {
  children: PropTypes.node,
  verticalAttachment: PropTypes.oneOf(Object.keys(VERTICAL_ATTACHMENTS)),
  horizontalAttachment: PropTypes.oneOf(Object.keys(HORIZONTAL_ATTACHMENTS)),
  className: PropTypes.string,
  verticalClassNames: PropTypes.shape({
    [VERTICAL_ATTACHMENTS.CENTER]: PropTypes.string,
    [VERTICAL_ATTACHMENTS.TOP]: PropTypes.string,
    [VERTICAL_ATTACHMENTS.BOTTOM]: PropTypes.string,
  }),
  horizontalClassNames: PropTypes.shape({
    [HORIZONTAL_ATTACHMENTS.CENTER]: PropTypes.string,
    [HORIZONTAL_ATTACHMENTS.LEFT]: PropTypes.string,
    [HORIZONTAL_ATTACHMENTS.RIGHT]: PropTypes.string,
  }),
  flushHorizontal: PropTypes.bool,
  flushVertical: PropTypes.bool,
  active: PropTypes.bool,
};

export default class Tooltip extends Component {
  static propTypes = {
    target: PropTypes.node,
    children: PropTypes.node,
    variant: PropTypes.oneOf(['light', 'dark']),
    targetClassName: PropTypes.string,
    className: PropTypes.string,
    flushHorizontal: PropTypes.bool,
    flushVertical: PropTypes.bool,
  };

  static defaultProps = {
    variant: 'dark',
  };

  render() {
    const {
      target,
      children,
      variant,
      flushHorizontal,
      flushVertical,
      className,
      ...rest,
    } = this.props;

    const targetClassNames = {
      vertical: {
        [VERTICAL_ATTACHMENTS.CENTER]: css.targetVerticalCenter,
        [VERTICAL_ATTACHMENTS.TOP]: css.targetTop,
        [VERTICAL_ATTACHMENTS.BOTTOM]: css.targetBottom,
        flushVertical: css.targetFlushVertical,
      },
      horizontal: {
        [HORIZONTAL_ATTACHMENTS.CENTER]: css.targetHorizontalCenter,
        [HORIZONTAL_ATTACHMENTS.LEFT]: css.targetLeft,
        [HORIZONTAL_ATTACHMENTS.RIGHT]: css.targetRight,
        flushHorizontal: css.targetFlushHorizontal,
      },
    };

    const tooltipClassNames = {
      vertical: {
        [VERTICAL_ATTACHMENTS.CENTER]: css.tooltipVerticalCenter,
        [VERTICAL_ATTACHMENTS.TOP]: css.tooltipTop,
        [VERTICAL_ATTACHMENTS.BOTTOM]: css.tooltipBottom,
        flushVertical: css.tooltipFlushVertical,
      },
      horizontal: {
        [HORIZONTAL_ATTACHMENTS.CENTER]: css.tooltipHorizontalCenter,
        [HORIZONTAL_ATTACHMENTS.LEFT]: css.tooltipLeft,
        [HORIZONTAL_ATTACHMENTS.RIGHT]: css.tooltipRight,
        flushHorizontal: css.tooltipFlushHorizontal,
      },
    };

    const targetClasses = cx(
      css.target,
      css[variant],
    );

    const tooltipClasses = cx(
      css.tooltip,
      css[variant],
      className,
    );

    warning(
      !(flushVertical && flushHorizontal),
      '`Tooltip` component doesn\'t support the use of `flushVertical` and `flushHorizontal`' +
      ' in tandem. The tooltip will cover it\'s target and may cause unexpected behaviour'
    );

    return (
      <Tether
        { ...rest }
        flushVertical={ flushVertical }
        flushHorizontal={ flushHorizontal }
        target={ (
          <TetherDirectionWrapper
            ref={ (c) => { this.target = c; } }
            className={ targetClasses }
            verticalClassNames={ targetClassNames.vertical }
            horizontalClassNames={ targetClassNames.horizontal }
          >
            { target }
          </TetherDirectionWrapper>
        ) }
      >
        <TetherDirectionWrapper
          ref={ (c) => { this.tooltip = c; } }
          className={ tooltipClasses }
          verticalClassNames={ tooltipClassNames.vertical }
          horizontalClassNames={ tooltipClassNames.horizontal }
        >
          { children }
        </TetherDirectionWrapper>
      </Tether>
    );
  }
}
/* eslint-enable react/no-multi-comp */