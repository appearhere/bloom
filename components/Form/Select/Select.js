import React, { Component, PropTypes } from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import cx from 'classnames';

import Icon from '../../Icon/Icon';
import noop from '../../../utils/noop';
import css from './Select.css';

export default class Select extends Component {
  static propTypes = {
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    name: PropTypes.string,
    id: PropTypes.string,
    required: PropTypes.bool,
    className: PropTypes.string,
    hasError: PropTypes.bool,
    multiple: PropTypes.bool,
    children: PropTypes.node.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array,
    ]),
    error: PropTypes.string,
  };

  static defaultProps = {
    onChange: noop,
    onFocus: noop,
    onBlur: noop,
  };

  state = {
    hasFocus: false,
  }

  focus = () => {
    this.select.focus();
    this.handleFocus();
  }

  blur = () => {
    this.select.blur();
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
    const { onChange, name, multiple } = this.props;
    const value = multiple
      ? [].filter.call(this.select.options, o => o.selected).map(o => o.value)
      : e.target.value;

    onChange(e, name, value);
  }

  render() {
    const { hasFocus } = this.state;

    const {
      name,
      id,
      required,
      error,
      className,
      multiple,
      value,
      children,
      ...rest,
    } = this.props;

    const classes = cx(
      css.select,
      hasFocus ? css.focus : null,
      error ? css.error : null,
    );

    return (
      <div className={ cx(css.wrapper, className) }>
        <select
          { ...rest }
          ref={ (c) => { this.select = c; } }
          className={ classes }
          name={ name }
          id={ id }
          required={ required }
          onFocus={ this.handleFocus }
          onBlur={ this.handleBlur }
          onChange={ this.handleChange }
          value={ value }
          multiple={ multiple }
        >
          { children }
        </select>
        { !multiple && <Icon name="chevron" className={ css.arrow } /> }
        <CSSTransitionGroup
          className={ css.post }
          transitionName={ css }
          transitionEnterTimeout={ 500 }
          transitionLeaveTimeout={ 300 }
          transitionAppearTimeout={ 500 }
          transitionAppear
        >
          { error && error.length > 0 && (
            <div
              className={ css.errorMsg }
            >
              { error }
            </div>
          ) }
        </CSSTransitionGroup>
      </div>
    );
  }
}