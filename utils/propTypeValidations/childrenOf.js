import { PropTypes } from 'react';

/**
 * http://stackoverflow.com/a/39457422/6700793
 */
const childrenOf = (...types) => {
  const fieldType = PropTypes.shape({
    type: PropTypes.oneOf(types),
  });

  return PropTypes.oneOfType([
    fieldType,
    PropTypes.arrayOf(fieldType),
  ]);
};

export default childrenOf;
