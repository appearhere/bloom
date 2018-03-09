import nestedArrayDepth from './nestedArrayDepth';

it('correctly calculates nesting depth', () => {
  expect(nestedArrayDepth([])).toBe(0);
  expect(nestedArrayDepth([1])).toBe(0);
  expect(nestedArrayDepth([[]])).toBe(1);
  expect(nestedArrayDepth([[1]])).toBe(1);
});
