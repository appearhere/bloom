// @flow
import * as React from 'react';

type Props = {
  selected: boolean,
  children: React.Node,
  value: string | number,
}

const Option = ({ selected, value, children, ...rest }: Props) => (
  <option selected={selected} value={value} {...(rest: any)}>
    {children}
  </option>
);

export default Option;
