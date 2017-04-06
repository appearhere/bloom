import isArray from 'lodash/fp/isArray';

/**
 * Determines if all items in a deeply neseted array are on the same nesting level
 * e.g
 *  - [[1,2,3]] => true
 *  - [[1,2],3] => false
 * @param {array} array
 * @returns {boolean} isSingleLevel
 */
const singleLevelArray = (array) => {
  if (array.length === 1) return singleLevelArray(array[0]);
  return !array.some(isArray);
};

export default singleLevelArray;