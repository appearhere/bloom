import templateHelper from './templateHelper';

it('fills in the blanks in the correct places', () => {
  const foo = 'bar';

  const simpleTemplate = templateHelper`${'foo'}`;
  const complexTemplate = templateHelper`hello, ${'foo'}`;

  const simpleOutput = simpleTemplate({ foo });
  const complexOutput = complexTemplate({ foo });

  expect(simpleOutput).toBe(foo);
  expect(complexOutput).toContain(foo);
  expect(complexOutput).toBe(`hello, ${foo}`);
});
