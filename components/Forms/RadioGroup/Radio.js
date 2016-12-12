import React, { PropTypes, Component } from 'react';
import uniqueId from 'lodash/fp/uniqueId';

import ScreenReadable from '../../ScreenReadable/ScreenReadable';

/**
 * TODO: Style default radio buttons
 */
export default class Radio extends Component {
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
    onChange: () => {},
    onFocus: () => {},
    onBlur: () => {},
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
      <span className={ className }>
        <input
          { ...rest }
          id={ this.id }
          type="radio"
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
            <span><ScreenReadable>{ value }</ScreenReadable>{ children }</span>
          ) : value }
        </label>
      </span>
    );
  }
}