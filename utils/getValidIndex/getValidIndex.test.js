import getValidIndex from './getValidIndex';

it('returns the same value when given an index that exists', () => {
  expect(getValidIndex(1, 10, 1)).toBe(1);
  expect(getValidIndex(2, 10, 1)).toBe(2);
  expect(getValidIndex(9, 10, 1)).toBe(9);
});

it('returns a valid index, at the opposite end of the array when given an invalid index', () => {
  expect(getValidIndex(-1, 10, 1)).toBe(9);
  expect(getValidIndex(-5, 10, 1)).toBe(5);
  expect(getValidIndex(10, 10, 1)).toBe(0);
  expect(getValidIndex(15, 10, 1)).toBe(5);
});