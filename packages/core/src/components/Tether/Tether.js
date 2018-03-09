/* eslint-disable react/no-multi-comp */
import PropTypes from 'prop-types';

import React, { Component, cloneElement } from 'react';
import ReactDOM from 'react-dom';
import keyMirror from 'key-mirror';
import { subscribe } from 'subscribe-ui-event';
import { Portal } from 'react-portal';
import cx from 'classnames';

import css from './Tether.css';

export const VERTICAL_ATTACHMENTS = keyMirror({
  TOP: null,
  BOTTOM: null,
  CENTER: null,
});

export const HORIZONTAL_ATTACHMENTS = keyMirror({
  CENTER: null,
  LEFT: null,
  RIGHT: null,
});

/* eslint-disable react/prefer-stateless-function */
class ChildWrapper extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    style: PropTypes.shape({
      position: PropTypes.string,
      left: PropTypes.string,
      top: PropTypes.string,
    }),
  };

  render() {
    const { children, style, ...rest } = this.props;
    return <div style={style}>{ cloneElement(children, rest) }</div>;
  }
}
/* eslint-enable react/prefer-stateless-function */

export default class Tether extends Component {
  static propTypes = {
    verticalAttachment: PropTypes.oneOf(Object.keys(VERTICAL_ATTACHMENTS)),
    horizontalAttachment: PropTypes.oneOf(Object.keys(HORIZONTAL_ATTACHMENTS)),
    target: PropTypes.element.isRequired,
    children: PropTypes.node.isRequired,
    active: PropTypes.bool,
    flushHorizontal: PropTypes.bool,
    flushVertical: PropTypes.bool,
    closeOnEsc: PropTypes.bool,
    closeOnOutsideClick: PropTypes.bool,
    beforeClose: PropTypes.func,
    onClose: PropTypes.func,
    onUpdate: PropTypes.func,
    targetClassName: PropTypes.string,
  };

  static defaultProps = {
    verticalAttachment: VERTICAL_ATTACHMENTS.BOTTOM,
    horizontalAttachment: HORIZONTAL_ATTACHMENTS.CENTER,
  };

  state = {
    top: 0,
    topAttachment: null,
    left: 0,
    leftAttachment: null,
  };

  /* eslint-disable react/no-did-mount-set-state */
  componentDidMount() {
    this.positionTethered();

    this.resizeEventSubscription = subscribe('resize', this.handleResize, {
      useRAF: true,
      throttleRate: 150,
    });

    this.scrollEventSubscription = subscribe('scroll', this.handleScroll, {
      useRAF: true,
      throttleRate: 300,
    });
  }
  /* eslint-enable react/no-did-mount-set-state */

  componentDidUpdate(prevProps) {
    if (
      this.props.active &&
      (
        this.props.active !== prevProps.active ||
        this.props.verticalAttachment !== prevProps.verticalAttachment ||
        this.props.horizontalAttachment !== prevProps.horizontalAttachment ||
        this.props.flushVertical !== prevProps.flushVertical ||
        this.props.flushHorizontal !== prevProps.flushHorizontal
      )
    ) {
      this.positionTethered();
    }
  }

  componentWillUnmount() {
    this.resizeEventSubscription.unsubscribe();
    this.scrollEventSubscription.unsubscribe();
  }

  getVerticalPosition = (options) => {
    const {
      viewportHeight,
      boundaryRect,
      targetRect,
      componentRect,
      horizontalAttachment,
    } = options;
    const { verticalAttachment, flushVertical } = this.props;

    const optimialVerticalAttachment = this.getOptimalVerticalAttachment({
      viewportHeight,
      targetRect,
      componentRect,
      attachmentPreference: verticalAttachment,
      flushVertical,
      horizontalAttachment,
    });

    const topPosition = this.getTopPosition({
      boundaryRect,
      viewportHeight,
      targetRect,
      componentRect,
      attachment: optimialVerticalAttachment,
      flushVertical,
      horizontalAttachment,
    });

    return {
      top: topPosition,
      topAttachment: optimialVerticalAttachment,
    };
  }

  getHorizontalPosition = ({ boundaryRect, targetRect, componentRect }) => {
    const { horizontalAttachment, flushHorizontal } = this.props;

    const optimialHorizontalAttachment = this.getOptimalHorizontalAttachment({
      boundaryRect,
      targetRect,
      componentRect,
      attachmentPreference: horizontalAttachment,
      flushHorizontal,
    });

    const leftPosition = this.getLeftPosition({
      boundaryRect,
      targetRect,
      componentRect,
      attachment: optimialHorizontalAttachment,
      flushHorizontal,
    });

    return {
      left: leftPosition,
      leftAttachment: optimialHorizontalAttachment,
    };
  }

  getElementBounds = () => {
    const viewportHeight = window.innerHeight;
    const boundaryRect = document.documentElement.getBoundingClientRect();
    const targetRect = this.target.getBoundingClientRect();
    const componentRect = this.component.getBoundingClientRect();

    return { viewportHeight, boundaryRect, targetRect, componentRect };
  }

  getOptimalVerticalAttachment = (options) => {
    const {
      viewportHeight,
      targetRect,
      componentRect,
      attachmentPreference,
      flushVertical,
      horizontalAttachment,
    } = options;

    const { height: targetHeight, top: targetTop, bottom: targetBottom } = targetRect;
    const { height: componentHeight } = componentRect;

    const flushModifier = flushVertical ? targetHeight : 0;
    const isInViewTop = (targetTop - componentHeight) + flushModifier >= 0;
    const isInViewBottom = (targetBottom + componentHeight) - flushModifier <= viewportHeight;

    const shouldPositionCenter = (attachmentPreference === VERTICAL_ATTACHMENTS.CENTER) &&
      (horizontalAttachment !== HORIZONTAL_ATTACHMENTS.CENTER);
    const shouldPositionTop =
      (attachmentPreference === VERTICAL_ATTACHMENTS.TOP && isInViewTop) ||
      (attachmentPreference === VERTICAL_ATTACHMENTS.BOTTOM && !isInViewBottom);
    const shouldPositionBottom =
      (attachmentPreference === VERTICAL_ATTACHMENTS.BOTTOM && isInViewBottom) ||
      (attachmentPreference === VERTICAL_ATTACHMENTS.TOP && !isInViewTop) ||
      (!isInViewTop && !isInViewBottom) ||
      (attachmentPreference === VERTICAL_ATTACHMENTS.BOTTOM &&
        horizontalAttachment === HORIZONTAL_ATTACHMENTS.CENTER);

    /**
     * The ordering here is important. `BOTTOM` takes precedence over `TOP` as it caters
     * for the out-of-bounds scenario's for both preferences
     */
    if (shouldPositionCenter) return VERTICAL_ATTACHMENTS.CENTER;
    if (shouldPositionBottom) return VERTICAL_ATTACHMENTS.BOTTOM;
    if (shouldPositionTop) return VERTICAL_ATTACHMENTS.TOP;

    return VERTICAL_ATTACHMENTS.BOTTOM;
  }

  getOptimalHorizontalAttachment = (options) => {
    const {
      boundaryRect,
      targetRect,
      componentRect,
      attachmentPreference,
      flushHorizontal,
    } = options;

    const { left: boundaryLeft, right: boundaryRight } = boundaryRect;
    const { width: targetWidth, left: targetLeft, right: targetRight } = targetRect;
    const { width: componentWidth } = componentRect;


    const flushModifier = flushHorizontal ? targetWidth : 0;
    const isInboundsLeft = (targetLeft - componentWidth) + flushModifier >= boundaryLeft;
    const isInboundsRight = (targetRight + componentWidth) - flushModifier <= boundaryRight;

    const shouldPositionCenter =
      (attachmentPreference === HORIZONTAL_ATTACHMENTS.CENTER) ||
      (!isInboundsLeft && !isInboundsRight);
    const shouldPositionRight =
      (attachmentPreference === HORIZONTAL_ATTACHMENTS.RIGHT && isInboundsRight) ||
      (attachmentPreference === HORIZONTAL_ATTACHMENTS.LEFT && !isInboundsLeft);
    const shouldPositionLeft =
      (attachmentPreference === HORIZONTAL_ATTACHMENTS.LEFT && isInboundsLeft) ||
      (attachmentPreference === HORIZONTAL_ATTACHMENTS.RIGHT && !isInboundsRight);

    if (shouldPositionCenter) return HORIZONTAL_ATTACHMENTS.CENTER;
    if (shouldPositionRight) return HORIZONTAL_ATTACHMENTS.RIGHT;
    if (shouldPositionLeft) return HORIZONTAL_ATTACHMENTS.LEFT;

    /**
     * NOTE: Should never happen. Consider how we handle this scenario
     */
    return HORIZONTAL_ATTACHMENTS.CENTER;
  }

  getTopPosition = (options) => {
    const {
      boundaryRect,
      targetRect,
      componentRect,
      attachment,
      flushVertical,
      horizontalAttachment,
    } = options;

    const { height: targetHeight, top: targetTop } = targetRect;
    const { height: componentHeight } = componentRect;

    const {
      top: bodyTop,
    } = boundaryRect;

    const flushModifier = flushVertical && horizontalAttachment !== HORIZONTAL_ATTACHMENTS.CENTER
      ? targetHeight
      : 0;
    const targetTopOffset = targetTop - bodyTop;
    const positions = {
      [VERTICAL_ATTACHMENTS.CENTER]: (targetTopOffset + (targetHeight / 2)) - (componentHeight / 2),
      [VERTICAL_ATTACHMENTS.TOP]: (targetTopOffset - componentHeight) + flushModifier,
      [VERTICAL_ATTACHMENTS.BOTTOM]: (targetTopOffset + targetHeight) - flushModifier,
    };

    return positions[attachment];
  }

  getLeftPosition = (options) => {
    const {
      targetRect,
      componentRect,
      attachment,
      flushHorizontal,
    } = options;

    const { width: targetWidth, left: targetLeft, right: targetRight } = targetRect;
    const { width: componentWidth } = componentRect;

    const flushModifier = flushHorizontal ? targetWidth : 0;
    const positions = {
      [HORIZONTAL_ATTACHMENTS.CENTER]: (targetLeft + (targetWidth / 2)) - (componentWidth / 2),
      [HORIZONTAL_ATTACHMENTS.LEFT]: (targetLeft - componentWidth) + flushModifier,
      [HORIZONTAL_ATTACHMENTS.RIGHT]: targetRight - flushModifier,
    };

    return positions[attachment];
  }

  positionTethered = () => {
    const { active } = this.props;

    if (active) {
      const { viewportHeight, boundaryRect, targetRect, componentRect } = this.getElementBounds();

      const {
        left,
        leftAttachment,
      } = this.getHorizontalPosition({ boundaryRect, targetRect, componentRect });

      const {
        top,
        topAttachment,
      } = this.getVerticalPosition({
        viewportHeight,
        boundaryRect,
        targetRect,
        componentRect,
        horizontalAttachment: leftAttachment,
      });

      this.setState({
        top,
        topAttachment,
        left,
        leftAttachment,
      });
    }
  };

  handleResize = this.positionTethered;

  handleScroll = () => {
    const { active } = this.props;

    if (active) {
      const { viewportHeight, boundaryRect, targetRect, componentRect } = this.getElementBounds();

      this.setState((currentState) => {
        const {
          leftAttachment,
        } = currentState;

        const {
          top,
          topAttachment,
        } = this.getVerticalPosition({
          viewportHeight,
          boundaryRect,
          targetRect,
          componentRect,
          horizontalAttachment: leftAttachment,
        });

        return {
          top,
          topAttachment,
        };
      });
    }
  }

  render() {
    const {
      target,
      children,
      active,
      verticalAttachment: _verticalAttachment,
      horizontalAttachment: _horziontalAttachment,
      flushHorizontal,
      flushVertical,
      targetClassName,
      ...rest
    } = this.props;

    const {
      top,
      topAttachment,
      left,
      leftAttachment,
    } = this.state;

    return (
      <div {...rest}>
        <div
          className={cx(css.target, targetClassName)}
          ref={(c) => { this.target = c; }}
        >
          { cloneElement(target, {
            verticalAttachment: topAttachment,
            horizontalAttachment: leftAttachment,
            flushHorizontal,
            flushVertical,
            active,
          }) }
        </div>
        { active && (
          <Portal>
            <ChildWrapper
              ref={(c) => { this.component = ReactDOM.findDOMNode(c); }}
              style={{
                position: 'absolute',
                top: `${top}px`,
                left: `${left}px`,
              }}
            >
              { cloneElement(children, {
                verticalAttachment: topAttachment,
                horizontalAttachment: leftAttachment,
                flushHorizontal,
                flushVertical,
                active,
              }) }
            </ChildWrapper>
          </Portal>
        ) }
      </div>
    );
  }
}
/* eslint-enable react/no-multi-comp */
