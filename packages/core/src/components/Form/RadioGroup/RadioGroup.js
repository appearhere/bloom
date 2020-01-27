//@flow
import * as React from 'react';

import Radio from '../Radio/Radio';
import noop from '../../../utils/noop';

type Props = {
  Input: Function | string,
  children: Function,
  value: string | number,
  onChange: Function,
  optional: boolean,
  name: string,
  className: string,
  id: string,
}
export default class RadioGroup extends React.Component<Props> {
  input: any;

  static defaultProps = {
    onChange: noop,
    Input: Radio,
  };

  focus = (): void => {
    this.input.focus();
  };

  blur = (): void => {
    this.input.blur();
  };

  render() {
    const { children, Input, onChange, optional, value, name, className, id } = this.props;

    return (
      <div className={className}>
        {children &&
          children(childProps => {
            const checked = childProps.value === value;

            return (
              <Input
                id={id}
                name={name}
                onChange={onChange}
                checked={checked}
                required={!optional}
                ref={c => {
                  this.input = c;
                }}
                {...childProps}
              />
            );
          })}
      </div>
    );
  }
}
