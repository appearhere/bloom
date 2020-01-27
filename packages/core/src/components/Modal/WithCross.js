//@flow

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

type Props = {
  children: React.Node,
  onClose: Function,
  variant: 'light' | 'dark',
}

class WindowWithCross extends React.Component<Props> {
  static defaultProps = {
    onClose: noop,
    variant: 'light',
  };

  render() {
    const { children, onClose, variant, ...rest } = this.props;

    return (
      <Window {...rest} variant={variant}>
        <BtnContainer className={css.dismissContainer} onClick={onClose}>
          <Icon className={css.icon} name="cross" />
        </BtnContainer>
        <div className={cx(css.inner, m.cf)}>{children}</div>
      </Window>
    );
  }
}

export default WindowWithCross;
