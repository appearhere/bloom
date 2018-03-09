import isArray from 'lodash/fp/isArray';

/**
 * Calculates the depth of a nested array
 * e.g
 *  - [1,2,3] => 0
 *  - [[1,2,3]] => 1
 *  - [[[1,2,3]]] => 2
 * @param {array} array
 * @returns {number} depth
 */

const nestedArrayDepth = (array, currentDepth = 0) => {
  if (isArray(array[0])) return nestedArrayDepth(array[0], currentDepth + 1);
  return currentDepth;
};

export default nestedArrayDepth;
