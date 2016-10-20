import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import cx from 'classnames';
import uniqueId from 'lodash/fp/uniqueId';

import m from '../../globals/modifiers.css';

import css from './Input.css';

export default class Input extends Component {
  static propTypes = {
    label: PropTypes.node.isRequired,
    optionalLabel: PropTypes.string,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    optional: PropTypes.bool,
    error: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string,
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
    ]),
  };

  static defaultProps = {
    onChange: () => {},
    onFocus: () => {},
    onBlur: () => {},
    optional: false,
    optionalLabel: 'optional',
    type: 'text',
    error: '',
    value: '',
  };

  constructor(props) {
    super(props);

    this.id = uniqueId('forminput');
  }

  state = {
    hasFocus: false,
  };

  focus = () => {
    findDOMNode(this.input).focus();
    this.handleFocus();
  };

  blur = () => {
    findDOMNode(this.input).blur();
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

  handleChange = (e) => {
    const { onChange } = this.props;
    onChange(e, e.target.value);
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
      placeholder,
      name,
      type,
      className,
      ...rest,
    } = this.props;

    const labelClasses = cx(
      css.label,
      hasFocus || value.length > 0 ? css.labelFocused : null,
      error ? css.labelErrored : null,
    );

    const inputClasses = cx(
      css.input,
      hasFocus ? css.inputFocused : null,
      error ? css.inputErrored : null,
    );

    const descriptionClasses = cx(
      css.description,
      hasFocus || value.length > 0 ? css.descriptionFocused : null,
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
        <input
          { ...rest }
          id={ this.id }
          ref={ (c) => { this.input = c; } }
          className={ inputClasses }
          onFocus={ this.handleFocus }
          onBlur={ this.handleBlur }
          onChange={ this.handleChange }
          value={ value }
          aria-describedby={ describedBy }
          placeholder={ placeholder }
          required={ !optional }
          name={ name }
          type={ type }
        />
        <div id={ describedBy } className={ css.helperContainer }>
          { description && (
            <div
              className={ descriptionClasses }
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
            transitionAppear={ true }
          >
            { error.length > 0 && (
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
