import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import cx from 'classnames';

import mergeObjectStrings from '../../../utils/mergeObjectStrings/mergeObjectStrings';
import noop from '../../../utils/noop';
import css from './Input.css';

export default class Input extends Component {
  static propTypes = {
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    name: PropTypes.string,
    id: PropTypes.string,
    value: PropTypes.string,
    required: PropTypes.bool,
    placeholder: PropTypes.string,
    classNames: PropTypes.shape({
      wrapper: PropTypes.string,
      input: PropTypes.string,
      high: PropTypes.string,
      error: PropTypes.string,
      post: PropTypes.string,
      errorMsg: PropTypes.string,
      enter: PropTypes.string,
      enterActive: PropTypes.string,
      appear: PropTypes.string,
      appearActive: PropTypes.string,
      leave: PropTypes.string,
      leaveActive: PropTypes.string,
    }),
    error: PropTypes.string,
    /**
     * Subset of the HTML5 spec, as other types will most likely have their
     * own, bespoke component
     */
    type: PropTypes.oneOf(['text', 'email', 'password', 'search', 'url', 'textarea']),
    priority: PropTypes.oneOf(['high', 'low']),
  };

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

  focus = () => {
    this.input.focus();
    this.handleFocus();
  };

  blur = () => {
    this.input.blur();
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

  handleChange = e => {
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
