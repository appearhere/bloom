import splitPreservingDelimiter from './splitPreservingDelimiter';

it('splits a string, preserving the delimiter string', () => {
  const string = 'somefancystring';
  const delimiter = 'fancy';

  expect(splitPreservingDelimiter(string, delimiter)).toEqual(['some', 'fancy', 'string']);
});