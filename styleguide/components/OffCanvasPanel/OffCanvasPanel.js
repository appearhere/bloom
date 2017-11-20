/* globals window: true */
import PropTypes from 'prop-types';

import React, { Component } from 'react';
import { TransitionMotion, spring } from 'react-motion';
import uniqueId from 'lodash/fp/uniqueId';
import { Portal } from 'react-portal';

import BtnContainer from '../../../components/BtnContainer/BtnContainer';
import css from './OffCanvasPanel.css';
import Icon from '../../../components/Icon/Icon';
import noop from '../../../utils/noop';
import ScreenReadable from '../../../components/ScreenReadable/ScreenReadable';
import { ESC } from '../../../constants/keycodes';

const DEFAULT_PANEL_SPRING_CONFIG = { stiffness: 200, damping: 22 };
const DEFAULT_OVERLAY_SPRING_CONFIG = { stiffness: 500, damping: 18 };

export default class OffCanvasPanel extends Component {
  static propTypes = {
    className: PropTypes.string,
    active: PropTypes.bool,
    children: PropTypes.node,
    onClose: PropTypes.func,
    panelSpringConfig: PropTypes.object,
    overlaySpringConfig: PropTypes.object,
  };

  static defaultProps = {
    onClose: noop,
    panelSpringConfig: DEFAULT_PANEL_SPRING_CONFIG,
    overlaySpringConfig: DEFAULT_OVERLAY_SPRING_CONFIG,
  };

  constructor(props) {
    super(props);

    this.id = uniqueId('offcanvaspanel');
  }

  componentDidMount() {
    const { active } = this.props;

    if (active) this.addEventListeners();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.active) {
      this.addEventListeners();
    } else {
      this.removeEventListeners();
    }
  }

  componentWillUnmount() {
    this.removeEventListeners();
  }

  getStyles = () => {
    const { panelSpringConfig, overlaySpringConfig } = this.props;

    return {
      x: spring(0, panelSpringConfig),
      opacity: spring(1, overlaySpringConfig),
    };
  };

  addEventListeners = () => {
    window.addEventListener('keyup', this.handleKeyUp);
  };

  removeEventListeners = () => {
    window.removeEventListener('keyup', this.handleKeyUp);
  };

  willEnter = () => ({
    x: -100,
    opacity: 0,
  });

  willLeave = () => {
    const { panelSpringConfig, overlaySpringConfig } = this.props;

    return {
      x: spring(-100, panelSpringConfig),
      opacity: spring(0, overlaySpringConfig),
    };
  };

  handleClick = (e) => {
    const { target } = e;
    const isComponent = this.component && (
      target === this.component || this.component.contains(target)
    );

    if (!isComponent) {
      this.handleClose();
      return;
    }
  };

  handleKeyUp = (e) => {
    const { keyCode } = e;

    if (keyCode === ESC) {
      this.handleClose();
      return;
    }
  };

  handleClose = () => {
    const { onClose } = this.props;
    onClose();
  }

  render() {
    const { className, active, children: child } = this.props;

    /* eslint-disable jsx-a11y/no-static-element-interactions */
    return (
      <Portal>
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
            <div onClick={ this.handleClick } className={ className }>
              { interpolated.map(({ key, data, style }) => (
                <div key={ key }>
                  <div
                    className={ css.overlay }
                    style={ {
                      opacity: style.opacity,
                    } }
                  />
                  <div
                    ref={ (c) => { this.component = c; } }
                    className={ css.menu }
                    style={ {
                      transform: `translate3d(${style.x}%, 0, 0)`,
                    } }
                  >
                    <BtnContainer className={ css.closeBtn } onClick={ this.handleClose }>
                      <Icon className={ css.closeIcon } name="cross" />
                      <ScreenReadable>Close panel</ScreenReadable>
                    </BtnContainer>
                    { data }
                  </div>
                </div>
              )) }
            </div>
          ) }
        </TransitionMotion>
      </Portal>
    );
    /* eslint-enable jsx-a11y/no-static-element-interactions */
  }
}
