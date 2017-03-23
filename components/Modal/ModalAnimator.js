import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import { TransitionMotion, spring } from 'react-motion';
import uniqueId from 'lodash/fp/uniqueId';
import Portal from 'react-portal';
import { ESC } from '../../constants/keycodes';
import noop from '../../utils/noop';
import BodyClassNameConductor from '../../utils/BodyClassNameConductor/BodyClassNameConductor';

import css from './ModalAnimator.css';

const DEFAULT_WINDOW_SPRING_CONFIG = { stiffness: 200, damping: 22 };
const DEFAULT_OVERLAY_SPRING_CONFIG = { stiffness: 500, damping: 18 };

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
    this.bodyClassName = new BodyClassNameConductor(this.id);
  }

  componentDidMount() {
    const { active } = this.props;
    if (active) this.bodyClassName.add('noScroll');
    this.keyupEvent = window.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillReceiveProps(nextProps) {
    const { active: newActive } = nextProps;
    const { active: oldActive } = this.props;

    if (newActive !== oldActive) {
      this.bodyClassName.toggle('noScroll');
    }
  }

  componentWillUnmount() {
    this.bodyClassName.remove('noScroll');
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