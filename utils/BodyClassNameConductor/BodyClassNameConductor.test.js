import BodyClassNameConductor from './BodyClassNameConductor';

const mocked = {
  foo: 'bar',
  baz: 'baz',
};

jest.mock('./BodyClassNameConductor.css', () => ({
  foo: 'bar',
  baz: 'baz',
}));

it('adds a classname to the body', () => {
  const conductor = new BodyClassNameConductor('foo');
  const body = document.querySelector('body');
  conductor.add('foo');

  expect(body.classList.contains(mocked.foo)).toBe(true);
});

it('removes a classname from the body', () => {
  const conductor = new BodyClassNameConductor('foo');
  const body = document.querySelector('body');

  conductor.add('foo');
  conductor.remove('foo');

  expect(body.classList.contains(mocked.foo)).toBe(false);
});

it('toggles a classname on the body', () => {
  const conductor = new BodyClassNameConductor('foo');
  const body = document.querySelector('body');
  conductor.toggle('foo');

  expect(body.classList.contains(mocked.foo)).toBe(true);

  conductor.toggle('foo');

  expect(body.classList.contains(mocked.foo)).toBe(false);
});

it('add multiple classnames to the body', () => {
  const conductor = new BodyClassNameConductor('foo');
  const body = document.querySelector('body');
  conductor.add('foo');
  conductor.add('baz');

  expect(body.classList.contains(mocked.foo)).toBe(true);
  expect(body.classList.contains(mocked.baz)).toBe(true);
});

it('remove multiple classnames from the body', () => {
  const conductor = new BodyClassNameConductor('foo');
  const body = document.querySelector('body');
  conductor.add('foo');
  conductor.add('baz');

  conductor.remove('foo');
  conductor.remove('baz');

  expect(body.classList.contains(mocked.foo)).toBe(false);
  expect(body.classList.contains(mocked.baz)).toBe(false);
});

test('that a classname is only removed when no origins references it', () => {
  const conductorA = new BodyClassNameConductor('a');
  const conductorB = new BodyClassNameConductor('b');
  const body = document.querySelector('body');

  conductorA.add('foo');
  conductorB.add('foo');

  expect(body.classList.contains(mocked.foo)).toBe(true);

  conductorA.remove('foo');

  expect(body.classList.contains(mocked.foo)).toBe(true);

  conductorB.remove('foo');

  expect(body.classList.contains(mocked.foo)).toBe(false);
});

test('that a classname is only toggled when no origins references it', () => {
  const conductorA = new BodyClassNameConductor('a');
  const conductorB = new BodyClassNameConductor('b');
  const body = document.querySelector('body');

  conductorA.add('foo');
  conductorB.add('foo');

  expect(body.classList.contains(mocked.foo)).toBe(true);

  conductorA.toggle('foo');

  expect(body.classList.contains(mocked.foo)).toBe(true);

  conductorB.toggle('foo');

  expect(body.classList.contains(mocked.foo)).toBe(false);
});