import { generateNumberFilledArray } from '../array/array';

export const getInclusiveMomentRange = (start, end) => {
  const range = end.diff(start, 'days') + 1;
  return generateNumberFilledArray(range).map(n => start.clone().add(n, 'days'));
};