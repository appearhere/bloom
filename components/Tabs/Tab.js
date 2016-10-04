import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

import css from './Tabs.css';

export default class Tab extends Component {
  static propTypes = {
    value: PropTypes.number,
    selected: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node,
    onClick: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func
  }

  handleClick = (e) => {
    const { onClick, value } = this.props;
    onClick(e, parseInt(value, 10));
  };

  handleFocus = (e) => {
    const { onFocus, value } = this.props;
    onFocus(e, parseInt(value, 10));
  };

  handleBlur = (e) => {
    const { onBlur, value } = this.props;
    onBlur(e, parseInt(value, 10));
  };

  focus = () => {
    this.component.focus();
  };

  blur = () => {
    this.component.blur();
  };

  render() {
    const {
      value,
      selected,
      className,
      children,
      ...rest,
    } = this.props;

    const classes = cx(
      css.tab,
      selected ? css.tabActive : null,
      className
    );

    return (
      <button
        { ...rest }
        ref={ (c) => {
          this.component = c;
        } }
        onFocus={ this.handleFocus }
        onBlur={ this.handleBlur }
        onClick={ this.handleClick }
        className={ classes }
        aria-selected= { selected }
        value={ value }
        tabIndex={ selected ? 0 : -1 }
      >
        { children }
      </button>
    );
  }
}