import React, { PropTypes, Component } from 'react';
import cx from 'classnames';
import uniqueId from 'lodash/fp/uniqueId';

import css from './Checkbox.css';
import noop from '../../../utils/noop';
import Icon from '../../Icon/Icon';
import ScreenReadable from '../../ScreenReadable/ScreenReadable';

export default class Checkbox extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    children: PropTypes.node,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    checked: PropTypes.bool,
    className: PropTypes.string,
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
    const { name, value, onChange } = this.props;
    onChange(e, name, value);
  }

  render() {
    const {
      children,
      value,
      checked,
      name,
      className,
      ...rest,
    } = this.props;

    return (
      <span className={ cx(css.root, className) }>
        <input
          { ...rest }
          id={ this.id }
          type="checkbox"
          name={ name }
          value={ value }
          checked={ checked }
          onChange={ this.handleChange }
          ref={ (c) => { this.input = c; } }
          onFocus={ this.handleFocus }
          onBlur={ this.handleBlur }
        />
        <label htmlFor={ this.id }>
          { children ? (
            <span><ScreenReadable>{ value }></ScreenReadable>{ children }</span>
          ) : (
            <span>
              <ScreenReadable>{ value }></ScreenReadable>
              <Icon className={ css.icon } name="tick" />
            </span>
          ) }
        </label>
      </span>
    );
  }
}