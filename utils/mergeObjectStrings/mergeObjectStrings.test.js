import mergeObjectStrings from './mergeObjectStrings';

it('merges two strings with the same key', () => {
  const a = {
    foo: 'foo',
  };

  const b = {
    foo: 'bar',
  };

  const output = {
    foo: 'foo bar',
  };

  expect(mergeObjectStrings(a, b)).toEqual(output);
});

it('merges objects with different sets of keys', () => {
  const a = {
    foo: 'foo',
  };

  const b = {
    bar: 'bar',
  };

  const expected = {
    foo: 'foo',
    bar: 'bar',
  };

  expect(mergeObjectStrings(a, b)).toEqual(expected);
});

it('handles undefined gracefully', () => {
  const a = {
    foo: 'foo',
  };

  const expected = {
    foo: 'foo',
  };

  expect(mergeObjectStrings(a)).toEqual(expected);
});