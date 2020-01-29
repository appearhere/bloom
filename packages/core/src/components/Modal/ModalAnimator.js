// @flow

import * as React from 'react';
import cx from 'classnames';
import uniqueId from 'lodash/fp/uniqueId';
import { Portal } from 'react-portal';
import { ESC } from '../../constants/keycodes';
import noop from '../../utils/noop';
import BodyClassNameConductor from '../../utils/BodyClassNameConductor/BodyClassNameConductor';

import css from './ModalAnimator.css';

type Props = {
  id: string,
  onClose: Function,
  active: boolean,
  children: React.Node,
  'aria-labelledby': string,
  'aria-describedby': string,
  closeOnEsc: boolean,
  closeOnOutsideClick: boolean,
  windowClassName: string,
  preventScroll: boolean,
}

export default class ModalAnimator extends React.Component<Props> {
  id: string;
  bodyClassName: typeof BodyClassNameConductor;
  keyupEvent: KeyboardEvent;
  modal: ?HTMLDivElement;
  modalWindow: ?HTMLDivElement;

  static defaultProps = {
    onClose: noop,
    closeOnEsc: true,
    closeOnOutsideClick: true,
    preventScroll: true,
  };

  constructor(props: Props) {
    super(props);
    this.id = props.id || uniqueId('modal');
    this.bodyClassName = new BodyClassNameConductor(this.id);
  }

  componentDidMount() {
    const { active, preventScroll } = this.props;
    if (active && preventScroll) this.bodyClassName.add('overflowHidden');
    this.keyupEvent = window.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillReceiveProps(nextProps: Props) {
    const { active: newActive, preventScroll } = nextProps;
    const { active: oldActive } = this.props;

    if (newActive && newActive !== oldActive) {
      if (preventScroll && this.bodyClassName) this.bodyClassName.add('overflowHidden');
      this.keyupEvent = window.addEventListener('keyup', this.handleKeyUp);
    } else if (!newActive) {
      if (preventScroll) this.bodyClassName.remove('overflowHidden');
      if (this.keyupEvent) window.removeEventListener('keyup', this.keyupEvent);
    }
  }

  componentWillUnmount() {
    this.bodyClassName.remove('overflowHidden');
    window.removeEventListener('keyup', this.keyupEvent);
  }

  handleKeyUp = (e: KeyboardEvent) => {
    const { closeOnEsc, onClose } = this.props;
    const { keyCode } = e;
    if (closeOnEsc && keyCode === ESC) onClose(e);
  };

  handleClick = (e: SyntheticEvent<HTMLDivElement>): void => {
    const { closeOnOutsideClick, onClose } = this.props;
    const { target } = e;

    if (
      closeOnOutsideClick &&
      this.modalWindow &&
      target !== this.modalWindow &&
      target instanceof Node &&
      !this.modalWindow.contains(target)
    ) {
      onClose(e);
    }
  };

  render() {
    const {
      active,
      children,
      'aria-labelledby': labelledBy,
      'aria-describedby': describedBy,
      windowClassName,
    } = this.props;

    if (!active) return null;

    return (
      <Portal>
        <div
          ref={c => {
            this.modal = c;
          }}
          onClick={this.handleClick}
        >
          <div className={css.root}>
            <div className={css.overlay} />
            <div
              className={css.wrapper}
              aria-labelledby={labelledBy}
              aria-describedby={describedBy}
            >
              <div
                className={cx(css.window, windowClassName)}
                ref={c => {
                  this.modalWindow = c;
                }}
              >
                {children}
              </div>
            </div>
          </div>
        </div>
      </Portal>
    );
  }
}
