import isSingleLevelArray from './isSingleLevelArray';

const SINGLE_LEVEL_ARRAYS = [
  [],
  [1, 2, 3],
  [[1, 2, 3]],
  [[[1, 2, 3]]],
];

const SPLIT_ARRAYS = [
  [1, [2, 3]],
  [[[1, 2]], [1, [2, 3]], 4],
  [[[1, [2]]]],
];

it('returns true on when all items are nested on one level', () => {
  SINGLE_LEVEL_ARRAYS.forEach((array) => {
    expect(isSingleLevelArray(array)).toBe(true);
  });
});

it('returns false when items are nested on different levels', () => {
  SPLIT_ARRAYS.forEach((array) => {
    expect(isSingleLevelArray(array)).toBe(false);
  });
});