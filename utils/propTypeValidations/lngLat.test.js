import lngLat from './lngLat';

const call = (validator, propValue) => validator({ value: propValue }, 'value', 'Test');

it('accepts valid lngLat', () => {
  expect(call(lngLat, [0, 0])).toEqual(null);
  expect(call(lngLat, ['-10', '3.22'])).toEqual(null);
});

it('raises given something that is not an array', () => {
  expect(() => call(lngLat, 'a')).toThrow();
  expect(() => call(lngLat, '[0, 0]')).toThrow();
  expect(() => call(lngLat, true)).toThrow();
  expect(() => call(lngLat, NaN)).toThrow();
  expect(() => call(lngLat, () => {})).toThrow();
});

it('raises given an array of NaNs', () => {
  expect(() => call(lngLat, ['a', 'b'])).toThrow();
  expect(() => call(lngLat, [NaN, NaN])).toThrow();
  expect(() => call(lngLat, [NaN, NaN])).toThrow();
});

it('raises given an array of incorrect length', () => {
  expect(() => call(lngLat, [0, 0, 0])).toThrow();
  expect(() => call(lngLat, [0])).toThrow();
});