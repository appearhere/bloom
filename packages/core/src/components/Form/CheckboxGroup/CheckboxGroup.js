//@flow
import * as React from 'react';

import Checkbox from '../Checkbox/Checkbox';
import noop from '../../../utils/noop';

type Props = {
  Input: Function | string,
  children?: Function,
  value: Array<string>,
  onChange: Function,
  optional?: boolean,
  name: string,
  className?: string,
  id: string,
}
export default class CheckboxGroup extends React.Component<Props> {
  input: HTMLInputElement;

  static defaultProps = {
    onChange: noop,
    Input: Checkbox,
  };

  focus = (): void => {
    this.input.focus();
  };

  blur = (): void => {
    this.input.blur();
  };

  handleChange = (e:SyntheticEvent<HTMLButtonElement>, name: string, changedValue: any) => {
    const { value, onChange } = this.props;

    const selected = new Set(value);

    if (selected.has(changedValue)) {
      selected.delete(changedValue);
    } else {
      selected.add(changedValue);
    }

    onChange(e, name, Array.from(selected));
  };

  render() {
    const { children, Input, optional, value, name, className, id } = this.props;

    const setInputRef = (() => {
      let called = false;

      return c => {
        if (!called) {
          called = true;
          this.input = c;
        }
      };
    })();

    const selected = new Set(value);

    return (
      <div className={className}>
        {children &&
          children(childProps => {
            const checked = selected.has(childProps.value);

            return (
              <Input
                id={id}
                name={name}
                onChange={this.handleChange}
                checked={checked}
                required={!optional}
                ref={setInputRef}
                {...childProps}
              />
            );
          })}
      </div>
    );
  }
}
