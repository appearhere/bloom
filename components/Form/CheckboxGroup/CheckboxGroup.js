import React, { Component, PropTypes } from 'react';

import Checkbox from '../Checkbox/Checkbox';
import noop from '../../../utils/noop';

export default class CheckboxGroup extends Component {
  static propTypes = {
    Input: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.string,
    ]),
    children: PropTypes.func.isRequired,
    value: PropTypes.arrayOf(PropTypes.string),
    onChange: PropTypes.func,
    optional: PropTypes.bool,
    name: PropTypes.string,
    className: PropTypes.string,
    id: PropTypes.string,
  };

  static defaultProps = {
    onChange: noop,
    Input: Checkbox,
  };

  focus = () => {
    this.input.focus();
  };

  blur = () => {
    this.input.blur();
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
  }

  render() {
    const {
      children,
      Input,
      optional,
      value,
      name,
      className,
      id,
    } = this.props;

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
      <div className={ className }>
        { children && children((childProps) => {
          const checked = selected.has(childProps.value);

          return (
            <Input
              id={ id }
              name={ name }
              onChange={ this.handleChange }
              checked={ checked }
              required={ !optional }
              ref={ setInputRef }
              { ...childProps }
            />
          );
        }) }
      </div>
    );
  }
}
