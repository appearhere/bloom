import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

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
    className: PropTypes.string,
    hasError: PropTypes.bool,
    /**
     * Subset of the HTML5 spec, as other types will most likely have their
     * own, bespoke component
     */
    type: PropTypes.oneOf([
      'text',
      'email',
      'password',
      'search',
      'url',
      'textarea',
    ]),
  };

  static defaultProps = {
    onChange: noop,
    onFocus: noop,
    onBlur: noop,
    type: 'text',
    value: '',
  };

  state = {
    hasFocus: false,
  }

  focus = () => {
    this.input.focus();
    this.handleFocus();
  }

  blur = () => {
    this.input.blur();
    this.handleBlur();
  }

  handleFocus = () => {
    const { onFocus } = this.props;
    this.setState({ hasFocus: true }, onFocus);
  }

  handleBlur = () => {
    const { onBlur } = this.props;
    this.setState({ hasFocus: false }, onBlur);
  }

  handleChange = (e) => {
    const { onChange, name } = this.props;
    onChange(e, name, e.target.value);
  }

  render() {
    const { hasFocus } = this.state;

    const {
      name,
      id,
      value,
      required,
      placeholder,
      hasError,
      type,
      className,
      ...rest
    } = this.props;

    const classes = cx(
      css.input,
      className,
      hasFocus ? css.focus : null,
      hasError ? css.error : null,
    );

    const InputComponent = type === 'textarea' ? 'textarea' : 'input';

    return (
      <div className={ css.wrapper }>
        <InputComponent
          { ...rest }
          ref={ (c) => { this.input = c; } }
          className={ classes }
          name={ name }
          id={ id }
          value={ value }
          placeholder={ placeholder }
          type={ type }
          required={ required }
          onFocus={ this.handleFocus }
          onBlur={ this.handleBlur }
          onChange={ this.handleChange }
        />
      </div>
    );
  }
}