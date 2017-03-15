import React, { Component, PropTypes } from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import uniqueId from 'lodash/fp/uniqueId';
import cx from 'classnames';

import noop from '../../../utils/noop';
import Checkbox from './Checkbox';
import css from '../Input/FormInput.css';

export default class CheckboxGroup extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    children: PropTypes.func.isRequired,
    onChange: PropTypes.func,
    label: PropTypes.string,
    value: PropTypes.arrayOf(PropTypes.string),
    InputComponent: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.string,
    ]),
    error: PropTypes.string,
    optional: PropTypes.bool,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    optionalLabel: PropTypes.string,
    description: PropTypes.node,
  };

  static defaultProps = {
    value: [],
    onChange: noop,
    onFocus: noop,
    onBlur: noop,
    InputComponent: Checkbox,
    error: '',
  };

  constructor(props) {
    super(props);

    this.state = {
      hasFocus: false,
    };

    this.id = uniqueId('radiogroup');
  }

  focus = () => {
    this.input.focus();
    this.handleFocus();
  };

  blur = () => {
    this.input.blur();
    this.handleBlur();
  };

  handleChange = (e, name, changedValue) => {
    const { value, onChange } = this.props;

    const selected = new Set(value);

    if (selected.has(changedValue)) {
      selected.delete(changedValue);
    } else {
      selected.add(changedValue);
    }

    onChange(e, name, Array.from(selected));
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
      name,
      children,
      label,
      value,
      InputComponent,
      description,
      error,
      optional,
      optionalLabel,
    } = this.props;

    const labelClasses = cx(
      css.label,
      hasFocus || value ? css.labelFocused : null,
      error ? css.labelErrored : null,
    );

    const descriptionClasses = cx(
      css.description,
      css.descriptionFocused,
    );

    const labelId = `${this.id}-label`;
    const describedBy = `${this.id}-description`;

    /**
     * Ensures we only set the input component ref once, so the `focus` and `blur` methods
     * are always called on the **first** checkbox in the group
     */
    const setInputRef = (() => {
      let called = false;

      return (c) => {
        if (!called) {
          called = true;
          this.input = c;
        }
      };
    })();

    const selected = new Set(value);

    return (
      <div role="group" aria-labelledby={ labelId }>
        <span id={ labelId } className={ labelClasses }>
          { label } { optional && (
            <span className={ css.optional }>
              { optionalLabel }
            </span>
          ) }
        </span>
        { children && children((childProps) => {
          const checked = selected.has(childProps.value);

          return (
            <InputComponent
              name={ name }
              onChange={ this.handleChange }
              checked={ checked }
              required={ !optional }
              onFocus={ this.handleFocus }
              onBlur={ this.handleBlur }
              ref={ setInputRef }
              { ...childProps }
            />
          );
        }) }
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