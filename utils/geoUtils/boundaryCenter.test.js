import boundaryCenter from './boundaryCenter';

const SCENARIOS = [
  {
    given: [[0, 0], [0, 0]],
    expected: [0, 0],
  },
  {
    given: [
      [118.4111111, 34.122222],
      [73.94388889, 40.66972222],
    ],
    expected: [97.20151339193032, 39.547078603870254],
  },
];

it('calculates the correct center point for a boundary', () => {
  SCENARIOS.forEach(({ given, expected }) => {
    expect(boundaryCenter(given)).toEqual(expected);
  });
});

it('raises an error given junk input', () => {
  expect(() => { boundaryCenter([]); }).toThrow();
  expect(() => { boundaryCenter(['a']); }).toThrow();
  expect(() => { boundaryCenter(['a', 'b']); }).toThrow();
  expect(() => { boundaryCenter('junk'); }).toThrow();
});