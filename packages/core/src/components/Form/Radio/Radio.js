import PropTypes from 'prop-types';
import React, { Component } from 'react';
import cx from 'classnames';
import uniqueId from 'lodash/fp/uniqueId';

import css from './Radio.css';
import noop from '../../../utils/noop';
import Icon from '../../Icon/Icon';
import ScreenReadable from '../../ScreenReadable/ScreenReadable';
import LeftRight from '../../LeftRight/LeftRight';

export default class Radio extends Component {
  static propTypes = {
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    children: PropTypes.node,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    checked: PropTypes.bool,
    className: PropTypes.string,
    label: PropTypes.string,
  };

  static defaultProps = {
    onChange: noop,
    onFocus: noop,
    onBlur: noop,
  };

  constructor(props) {
    super(props);

    this.id = uniqueId('radio');
  }

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
    const { name, value, onChange } = this.props;
    onChange(e, name, value);
  };

  render() {
    const { children, value, checked, name, label, className, ...rest } = this.props;

    return (
      <div className={cx(css.root, className)}>
        <input
          {...rest}
          id={this.id}
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={this.handleChange}
          ref={c => {
            this.input = c;
          }}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
        <label htmlFor={this.id}>
          {children ? (
            <div>
              <ScreenReadable>{value}</ScreenReadable>
              {children}
            </div>
          ) : (
            <div>
              <ScreenReadable>{value}</ScreenReadable>
              <LeftRight
                leftChildren={
                  <span className={css.radio}>
                    <Icon className={css.icon} name="radio" />
                  </span>
                }
                rightChildren={<span className={css.label}>{label}</span>}
                primarySide="right"
              />
            </div>
          )}
        </label>
      </div>
    );
  }
}
