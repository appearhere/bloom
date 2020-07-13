// @flow

import * as React from 'react';
import cx from 'classnames';

import Window from './Window';
import m from '../../globals/modifiers.css';
import noop from '../../utils/noop';
import css from './WithCross.css';
import Icon from '../Icon/Icon';
import BtnContainer from '../BtnContainer/BtnContainer';

/**
 * TODO: Figure out react-motion compatible focus trap
 */

type ClassNames = {
  dismissContainer: string,
  body: string,
  header: string,
  footer: string,
 }

type Props = {
  children: React.Node,
  onClose: Function,
  variant: 'light' | 'dark',
  classNames: ClassNames,
}

class WindowWithCross extends React.Component<Props> {
  static defaultProps = {
    onClose: noop,
    variant: 'light',
    classNames: {
      dismissContainer: '',
      body: '',
      header: '',
      footer: '',
    }
  };

  render() {
    const { children, onClose, variant, classNames, ...rest } = this.props;

    return (
      <Window {...rest} classNames={classNames} variant={variant}>
        <BtnContainer className={cx(css.dismissContainer, classNames.dismissContainer)} onClick={onClose}>
          <Icon className={css.icon} name="cross" />
        </BtnContainer>
        <div className={cx(css.inner, m.cf)}>{children}</div>
      </Window>
    );
  }
}

export default WindowWithCross;
