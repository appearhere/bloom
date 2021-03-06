// @flow
import React, { Component } from 'react';
import cx from 'classnames';

import Input from '../Input/Input';
import noop from '../../../utils/noop';
import mergeObjectStrings from '../../../utils/mergeObjectStrings/mergeObjectStrings';
import css from './Input.css';

type Props = {
  InputComponent: any,
  inputClassNames?: Object,
  className?: string,
  onFocus: noop,
  onBlur: noop,
}

type State = {
  hasFocus: boolean
}

class AutoCompleteInput extends Component<Props, State> {
  input: ?HTMLInputElement;

  static defaultProps = {
    InputComponent: Input,
  };

  state = {
    hasFocus: false,
  };

  focus = () => {
    this.input && this.input.focus();
    this.handleFocus();
  };

  blur = () => {
    this.input && this.input.blur();
    this.handleBlur();
  };

  handleFocus = () => {
    const { onFocus } = this.props;
    this.setState({ hasFocus: true }, onFocus);
  };

  handleBlur = () => {
    const { onBlur } = this.props;
    this.setState({ hasFocus: false }, onBlur);
  };

  render() {
    const { InputComponent, className, inputClassNames, ...rest } = this.props;
    const { hasFocus } = this.state;

    return (
      <div className={cx(css.root, hasFocus ? css.focus : null, className)}>
        <InputComponent
          {...rest}
          ref={c => {
            this.input = c;
          }}
          classNames={mergeObjectStrings(inputClassNames, {
            root: css.root,
            wrapper: css.wrapper,
            input: css.input,
          })}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
        <div className={css.activeMarker} />
      </div>
    );
  }
}

export default (props: Props) => <AutoCompleteInput {...props} />;
