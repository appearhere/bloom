// @flow
import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import cx from 'classnames';

import mergeObjectStrings from '../../../utils/mergeObjectStrings/mergeObjectStrings';
import noop from '../../../utils/noop';
import css from './Input.css';

type Classnames = {
  wrapper?: string,
  input?: string,
  high?: string,
  error?: string,
  post?: string,
  errorMsg?: string,
  enter?: string,
  enterActive?: string,
  appear?: string,
  appearActive?: string,
  leave?: string,
  leaveActive?: string,
}

type Props = {
  onFocus: Function,
  onBlur: Function,
  onChange: Function,
  name: string,
  id: string,
  value: string,
  required: boolean,
  placeholder: string,
  error: string,
  classNames: Classnames,
  type: 'text' | 'email' | 'password' | 'search' | 'url' | 'textarea',
  priority: 'high' | 'low',
}

type State = {
  hasFocus: boolean,
};

export default class Input extends Component<Props, State> {
  input: any;

  static defaultProps = {
    onChange: noop,
    onFocus: noop,
    onBlur: noop,
    type: 'text',
    value: '',
    error: '',
    classNames: {},
  };

  state = {
    hasFocus: false,
  };

  focus = (): void => {
    this.input.focus();
    this.handleFocus();
  };

  blur = (): void => {
    this.input.blur();
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

  handleChange = (e: SyntheticInputEvent<>) => {
    const { onChange, name } = this.props;
    onChange(e, name, e.target.value);
  };

  render() {
    const { hasFocus } = this.state;

    const {
      name,
      id,
      value,
      required,
      placeholder,
      error,
      type,
      classNames,
      priority,
      ...rest
    } = this.props;

    const mergedClassNames = mergeObjectStrings(css, classNames);

    const classes = cx(
      mergedClassNames.input,
      hasFocus ? mergedClassNames.focus : null,
      error ? mergedClassNames.error : null,
      mergedClassNames[priority],
    );

    const InputComponent = type === 'textarea' ? 'textarea' : 'input';

    return (
      <div className={mergedClassNames.wrapper}>
        <InputComponent
          {...rest}
          ref={c => {
            this.input = c;
          }}
          className={classes}
          name={name}
          id={id}
          value={value}
          placeholder={placeholder}
          type={type}
          required={required}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
        />
        <CSSTransitionGroup
          className={mergedClassNames.post}
          transitionName={css}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
          transitionAppearTimeout={500}
          transitionAppear
        >
          {error && <div className={mergedClassNames.errorMsg}>{error}</div>}
        </CSSTransitionGroup>
      </div>
    );
  }
}
