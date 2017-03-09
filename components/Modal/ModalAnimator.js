import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import { TransitionMotion, spring } from 'react-motion';
import uniqueId from 'lodash/fp/uniqueId';
import Portal from 'react-portal';
import { canUseDOM } from 'exenv';
import { ESC } from '../../constants/keycodes';
import noop from '../../utils/noop';

import css from './ModalAnimator.css';

const DEFAULT_WINDOW_SPRING_CONFIG = { stiffness: 200, damping: 22 };
const DEFAULT_OVERLAY_SPRING_CONFIG = { stiffness: 500, damping: 18 };

const toggleBodyClass = (add, className) => {
  if (!canUseDOM) return;

  const body = document.querySelector('body');

  if (add && !body.classList.contains(className)) {
    body.classList.add(className);
  } else if (!add && body.classList.contains(className)) {
    body.classList.remove(className);
  }
};

export default class ModalAnimator extends Component {
  static propTypes = {
    id: PropTypes.string,
    onClose: PropTypes.func,
    windowSpringConfig: PropTypes.shape({
      stiffness: PropTypes.number,
      damping: PropTypes.number,
    }),
    overlaySpringConfig: PropTypes.shape({
      stiffness: PropTypes.number,
      damping: PropTypes.number,
    }),
    active: PropTypes.bool,
    children: PropTypes.node,
    'aria-labelledby': PropTypes.string,
    'aria-describedby': PropTypes.string,
    closeOnEsc: PropTypes.bool,
    closeOnOutsideClick: PropTypes.bool,
    windowClassName: PropTypes.string,
  };

  static defaultProps = {
    windowSpringConfig: DEFAULT_WINDOW_SPRING_CONFIG,
    overlaySpringConfig: DEFAULT_OVERLAY_SPRING_CONFIG,
    onClose: noop,
    closeOnEsc: true,
    closeOnOutsideClick: true,
  };

  constructor(props) {
    super(props);
    this.id = props.id || uniqueId('modal');
  }

  componentDidMount() {
    const { active } = this.props;
    toggleBodyClass(active, css.documentBody);
    this.keyupEvent = window.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillReceiveProps(nextProps) {
    const { active: newActive } = nextProps;
    const { active: oldActive } = this.props;

    if (newActive !== oldActive) {
      toggleBodyClass(newActive, css.documentBody);
    }
  }

  componentWillUnmount() {
    toggleBodyClass(false, css.documentBody);
    window.removeEventListener('keyup', this.keyupEvent);
  }

  getStyles = () => {
    const { windowSpringConfig, overlaySpringConfig } = this.props;

    return {
      y: spring(0, windowSpringConfig),
      opacity: spring(1, overlaySpringConfig),
    };
  };

  willEnter = () => ({
    y: 100,
    opacity: 0,
  });

  willLeave = () => {
    const { windowSpringConfig, overlaySpringConfig } = this.props;

    return {
      y: spring(100, windowSpringConfig),
      opacity: spring(0, overlaySpringConfig),
    };
  };

  handleKeyUp = (e) => {
    const { closeOnEsc, onClose } = this.props;
    const { keyCode } = e;
    if (closeOnEsc && keyCode === ESC) onClose(e);
  };

  handleClick = (e) => {
    const { closeOnOutsideClick, onClose } = this.props;
    const { target } = e;

    if (
      closeOnOutsideClick &&
      this.modalWindow &&
      target !== this.modalWindow &&
      !this.modalWindow.contains(target)
    ) {
      onClose(e);
    }
  };

  render() {
    const {
      active,
      children: child,
      'aria-labelledby': labelledBy,
      'aria-describedby': describedBy,
      windowClassName,
    } = this.props;

    return (
      <Portal isOpened>
        <TransitionMotion
          styles={ active ? [{
            key: this.id,
            style: this.getStyles(),
            data: child,
          }] : [] }
          willEnter={ this.willEnter }
          willLeave={ this.willLeave }
        >
          { interpolated => (
            <div ref={ (c) => { this.modal = c; } } onClick={ this.handleClick }>
              { interpolated.map(({ key, data, style }) => (
                <div
                  className={ css.root }
                  key={ key }
                >
                  <div
                    className={ css.overlay }
                    style={ {
                      opacity: style.opacity,
                    } }
                  />
                  <div
                    className={ css.wrapper }
                    style={ {
                      transform: `translate3d(0, ${style.y}%, 0)`,
                    } }
                    aria-labelledby={ labelledBy }
                    aria-describedby={ describedBy }
                  >
                    <div
                      className={ css.window }
                      className={ cx(css.window, windowClassName) }
                      ref={ (c) => { this.modalWindow = c; } }
                    >
                      { data }
                    </div>
                  </div>
                </div>
              )) }
            </div>
          ) }
        </TransitionMotion>
      </Portal>
    );
  }
}