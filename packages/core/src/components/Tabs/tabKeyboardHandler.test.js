import tabKeyboardHandler from './tabKeyboardHandler';

it('returns the correct index for a `left` arrow key press', () => {
  const keyCode = 37;
  expect(tabKeyboardHandler(keyCode, 0, 3)).toBe(2);
  expect(tabKeyboardHandler(keyCode, 1, 3)).toBe(0);
  expect(tabKeyboardHandler(keyCode, 2, 3)).toBe(1);
});

it('returns the correct index for a `up` arrow key press', () => {
  const keyCode = 38;
  expect(tabKeyboardHandler(keyCode, 0, 3)).toBe(2);
  expect(tabKeyboardHandler(keyCode, 1, 3)).toBe(0);
  expect(tabKeyboardHandler(keyCode, 2, 3)).toBe(1);
});

it('returns the correct index for a `right` arrow key press', () => {
  const keyCode = 39;
  expect(tabKeyboardHandler(keyCode, 0, 3)).toBe(1);
  expect(tabKeyboardHandler(keyCode, 1, 3)).toBe(2);
  expect(tabKeyboardHandler(keyCode, 2, 3)).toBe(0);
});

it('returns the correct index for a `down` arrow key press', () => {
  const keyCode = 40;
  expect(tabKeyboardHandler(keyCode, 0, 3)).toBe(1);
  expect(tabKeyboardHandler(keyCode, 1, 3)).toBe(2);
  expect(tabKeyboardHandler(keyCode, 2, 3)).toBe(0);
});

it('returns the correct index for a `home` key press', () => {
  const keyCode = 36;
  expect(tabKeyboardHandler(keyCode, 0, 3)).toBe(0);
  expect(tabKeyboardHandler(keyCode, 1, 3)).toBe(0);
  expect(tabKeyboardHandler(keyCode, 2, 3)).toBe(0);
});

it('returns the correct index for a `end` key press', () => {
  const keyCode = 35;
  expect(tabKeyboardHandler(keyCode, 0, 3)).toBe(2);
  expect(tabKeyboardHandler(keyCode, 1, 3)).toBe(2);
  expect(tabKeyboardHandler(keyCode, 2, 3)).toBe(2);
});

it('returns the correct index for a `enter` key press', () => {
  const keyCode = 13;
  expect(tabKeyboardHandler(keyCode, 0, 3)).toBe(0);
  expect(tabKeyboardHandler(keyCode, 1, 3)).toBe(1);
  expect(tabKeyboardHandler(keyCode, 2, 3)).toBe(2);
});

it('returns the correct index for a `enter` key press', () => {
  const keyCode = 32;
  expect(tabKeyboardHandler(keyCode, 0, 3)).toBe(0);
  expect(tabKeyboardHandler(keyCode, 1, 3)).toBe(1);
  expect(tabKeyboardHandler(keyCode, 2, 3)).toBe(2);
});
