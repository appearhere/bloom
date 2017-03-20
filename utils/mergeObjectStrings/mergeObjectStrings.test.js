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