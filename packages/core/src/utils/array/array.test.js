import {
  generateArray,
  generateNumberFilledArray,
  cloneArray,
  reshapeArray,
  splitArray,
} from './array';

describe('generateArray', () => {
  const n = 10;

  it('returns a new array of length 10', () => {
    expect(generateArray(n).length).toEqual(n);
  });

  it('handles an array length of 0 or less', () => {
    expect(generateArray(0)).toEqual([]);
    expect(generateArray(-1)).toEqual([]);
  });
});

describe('generateNumberFilledArray', () => {
  const n = 10;

  it('returns a new array filled with numbers equivilent to their index', () => {
    expect(generateNumberFilledArray(n)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('returns a new array filled with numbers equivilent to their index + 1', () => {
    expect(generateNumberFilledArray(n, 1)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});

describe('cloneArray', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  it('Returns a new array with the same contents', () => {
    expect(cloneArray(arr)).toEqual(arr);
    expect(cloneArray(arr)).not.toBe(arr);
  });
});

describe('reshapeArray', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  it('converts a 1d array into a 2d array', () => {
    expect(reshapeArray(arr, 2)).toEqual([
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9],
    ]);

    expect(reshapeArray(arr, 3)).toEqual([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]);

    expect(reshapeArray(arr, 9)).toEqual([
      [1],
      [2],
      [3],
      [4],
      [5],
      [6],
      [7],
      [8],
      [9],
    ]);
  });
});

describe('splitArray', () => {
  const arr = [1, 2, 3, 4, 5, 6];

  it('splits the array at the desired index', () => {
    expect(splitArray(arr, 3)).toEqual([
      [1, 2, 3],
      [4, 5, 6],
    ]);
  });
});
