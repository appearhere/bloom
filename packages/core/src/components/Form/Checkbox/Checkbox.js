// @flow
import * as React from 'react';

import cx from 'classnames';
import uniqueId from 'lodash/fp/uniqueId';

import css from './Checkbox.css';
import noop from '../../../utils/noop';
import Icon from '../../Icon/Icon';
import ScreenReadable from '../../ScreenReadable/ScreenReadable';
import LeftRight from '../../LeftRight/LeftRight';

type Props = {
  name: string,
  onFocus: Function,
  onBlur: Function,
  onChange: Function,
  children?: React.Node,
  value: string | number,
  checked?: boolean,
  className?: string,
  label: React.Node,
}

type State = {
  hasFocus: boolean,
};

export default class Checkbox extends React.Component<Props, State> {
  input: ?HTMLInputElement;
  id: string;

  constructor(props: Props) {
    super(props);

    this.id = uniqueId('radio');
  }

  static defaultProps = {
    onChange: noop,
    onFocus: noop,
    onBlur: noop,
  };

  state = {
    hasFocus: false,
  };

  focus = (): void => {
    this.input && this.input.focus();
    this.handleFocus();
  };

  blur = (): void => {
    this.input && this.input.blur();
    this.handleBlur();
  };

  handleFocus = (): void => {
    const { onFocus } = this.props;
    this.setState({ hasFocus: true }, onFocus);
  };

  handleBlur = (): void => {
    const { onBlur } = this.props;
    this.setState({ hasFocus: false }, onBlur);
  };

  handleChange = (e: SyntheticEvent<HTMLButtonElement>) => {
    const { name, value, onChange } = this.props;
    onChange(e, name, value);
  };

  render() {
    const { children, value, checked, name, label, className, ...rest } = this.props;

    return (
      <span className={cx(css.root, className)}>
        <input
          {...rest}
          id={this.id}
          type="checkbox"
          name={name}
          value={value}
          checked={checked}
          onChange={this.handleChange}
          ref={c => {
            this.input = c;
          }}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
        <label htmlFor={this.id}>
          {children ? (
            <div>
              <ScreenReadable>{value}</ScreenReadable>
              {children}
            </div>
          ) : (
            <div>
              <ScreenReadable>{value}</ScreenReadable>
              <LeftRight
                leftChildren={
                  <span className={css.checkbox}>
                    <Icon className={css.icon} name="tick" />
                  </span>
                }
                rightChildren={<span className={css.label}>{label}</span>}
                primarySide="right"
                rightClassName={css.labelContainer}
              />
            </div>
          )}
        </label>
      </span>
    );
  }
}
