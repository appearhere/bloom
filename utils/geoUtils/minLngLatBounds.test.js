import minLngLatBounds from './minLngLatBounds';

const SCENARIOS = [
  {
    given: [[0, 0]],
    expected: [[0, 0], [0, 0]],
  },
  {
    given: [[0, 0], [1, 1]],
    expected: [[0, 0], [1, 1]],
  },
  {
    given: [
      [-80.18930, 25.767368],
      [-118.40612, 34.088808],
      [-73.97864, 40.727093],
    ],
    expected: [[-118.40612, 25.767368], [-73.97864, 40.727093]],
  },
];

it('calculates the correct minimum bounds', () => {
  SCENARIOS.forEach(({ given, expected }) => {
    expect(minLngLatBounds(given)).toEqual(expected);
  });
});

it('raises an error given junk input', () => {
  expect(() => { minLngLatBounds([]); }).toThrow();
  expect(() => { minLngLatBounds(['a']); }).toThrow();
  expect(() => { minLngLatBounds('junk'); }).toThrow();
});