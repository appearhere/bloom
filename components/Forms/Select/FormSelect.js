import React, { Component, PropTypes } from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import uniqueId from 'lodash/fp/uniqueId';
import cx from 'classnames';

import noop from '../../../utils/noop';
import css from './FormSelect.css';

import Select from './Select';

export default class FormSelect extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    label: PropTypes.string,
    error: PropTypes.string,
    optional: PropTypes.bool,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    optionalLabel: PropTypes.string,
    description: PropTypes.node,
    className: PropTypes.string,
    value: PropTypes.string,
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    onChange: noop,
    onFocus: noop,
    onBlur: noop,
    value: '',
    error: '',
  };

  constructor(props) {
    super(props);

    this.id = uniqueId('formselect');
  }

  state = {
    hasFocus: false,
  };

  focus = () => {
    this.select.focus();
    this.handleFocus();
  };

  blur = () => {
    this.select.blur();
    this.handleBlur();
  };

  handleFocus = () => {
    const { onFocus } = this.props;
    this.setState({
      hasFocus: true,
    }, onFocus);
  };

  handleBlur = () => {
    const { onBlur } = this.props;
    this.setState({
      hasFocus: false,
    }, onBlur);
  };

  render() {
    const { hasFocus } = this.state;
    const {
      label,
      value,
      description,
      optional,
      optionalLabel,
      error,
      name,
      className,
      onChange,
      children,
      ...rest,
    } = this.props;

    const labelClasses = cx(
      css.label,
      hasFocus || (value && value.length) > 0 ? css.labelFocused : null,
      error ? css.labelErrored : null,
    );

    const inputClasses = cx(
      css.input,
      hasFocus ? css.inputFocused : null,
      error ? css.inputErrored : null,
    );

    const describedBy = `${this.id}-description`;

    return (
      <div className={ cx(css.root, className) }>
        <label htmlFor={ this.id } className={ labelClasses }>
          { label } { optional && (
            <span className={ css.optional }>
              { optionalLabel }
            </span>
          ) }
        </label>
        <div className={ css.inputContainer }>
          <Select
            { ...rest }
            id={ this.id }
            ref={ (c) => { this.select = c; } }
            className={ inputClasses }
            onFocus={ this.handleFocus }
            onBlur={ this.handleBlur }
            onChange={ onChange }
            value={ value }
            aria-describedby={ describedBy }
            required={ !optional }
            name={ name }
            hasError={ !!error }
          >
            { children }
          </Select>
        </div>
        <div id={ describedBy } className={ css.helperContainer }>
          { description && (
            <div
              className={ css.description }
              id={ describedBy }
            >
              { description }
            </div>
          ) }
          <CSSTransitionGroup
            transitionName={ css }
            transitionEnterTimeout={ 500 }
            transitionLeaveTimeout={ 300 }
            transitionAppearTimeout={ 500 }
            transitionAppear
          >
            { error && error.length > 0 && (
              <div
                className={ css.error }
              >
                { error }
              </div>
            ) }
          </CSSTransitionGroup>
        </div>
      </div>
    );
  }
}
