import React, { PropTypes } from 'react';

const Option = ({ selected, value, children, ...rest }) => (
  <option
    selected={ selected }
    value={ value }
    { ...rest }
  >
    { children }
  </option>
);

Option.propTypes = {
  selected: PropTypes.bool,
  children: PropTypes.node,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default Option;