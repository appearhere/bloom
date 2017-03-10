import isArray from 'lodash/fp/isArray';

const filterNaNs = array => array.filter(n => !isNaN(n));
export const isLngLat = val => isArray(val) && filterNaNs(val).length === 2;

export default (props, propName, componentName) => {
  const val = props[propName];
  const msg = `${propName} in ${componentName} should be array containing a longitude and latitude`;

  if (!isLngLat(val)) throw new Error(msg);

  return null;
};