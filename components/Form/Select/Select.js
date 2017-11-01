import PropTypes from 'prop-types';
import React, { Component } from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import cx from 'classnames';

import mergeObjectStrings from '../../../utils/mergeObjectStrings/mergeObjectStrings';
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
    classNames: PropTypes.shape({
      wrapper: PropTypes.string,
      select: PropTypes.string,
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
    hasError: PropTypes.bool,
    multiple: PropTypes.bool,
    children: PropTypes.node.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array,
    ]),
    error: PropTypes.string,
    priority: PropTypes.oneOf(['high']),
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
      classNames,
      multiple,
      value,
      children,
      priority,
      ...rest,
    } = this.props;

    const mergedClassNames = mergeObjectStrings(css, classNames);

    const classes = cx(
      mergedClassNames.select,
      hasFocus ? mergedClassNames.focus : null,
      error ? css.error : null,
      css[priority],
    );

    return (
      <div className={ mergedClassNames.wrapper }>
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
        { !multiple && <Icon name="chevron" className={ mergedClassNames.arrow } /> }
        <CSSTransitionGroup
          className={ mergedClassNames.post }
          transitionName={ css }
          transitionEnterTimeout={ 500 }
          transitionLeaveTimeout={ 300 }
          transitionAppearTimeout={ 500 }
          transitionAppear
        >
          { error && error.length > 0 && (
            <div
              className={ mergedClassNames.errorMsg }
            >
              { error }
            </div>
          ) }
        </CSSTransitionGroup>
      </div>
    );
  }
}
