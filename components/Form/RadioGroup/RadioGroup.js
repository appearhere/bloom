import React, { Component, PropTypes } from 'react';

import Radio from '../Radio/Radio';
import noop from '../../../utils/noop';

export default class RadioGroup extends Component {
  static propTypes = {
    Input: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.string,
    ]),
    children: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    onChange: PropTypes.func,
    optional: PropTypes.bool,
    name: PropTypes.string,
    className: PropTypes.string,
    id: PropTypes.string,
  };

  static defaultProps = {
    onChange: noop,
    Input: Radio,
  };

  focus = () => {
    this.input.focus();
  };

  blur = () => {
    this.input.blur();
  };

  render() {
    const {
      children,
      Input,
      onChange,
      optional,
      value,
      name,
      className,
      id,
    } = this.props;

    return (
      <div className={ className }>
        { children && children((childProps) => {
          const checked = childProps.value === value;

          return (
            <Input
              id={ id }
              name={ name }
              onChange={ onChange }
              checked={ checked }
              required={ !optional }
              ref={ (c) => { this.input = c; } }
              { ...childProps }
            />
          );
        }) }
      </div>
    );
  }
}