import React from 'react';
import { render } from 'react-dom';

import CodeRenderer from './CodeRenderer';

const MockJsxToString = jest.fn(() => '');
const jsxToStringInstance = new MockJsxToString();

const MockRenderToStaticMarkup = jest.fn(() => '');
const renderToStaticMarkupInstance = new MockRenderToStaticMarkup();

jest.doMock('jsx-to-string', () => jsxToStringInstance);
jest.doMock('react-dom/server', () => renderToStaticMarkupInstance);

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(
    <CodeRenderer>
      <span />
    </CodeRenderer>,
    div
  );
});

it('calls jsxToString when passed the jsx protocol', () => {
  const div = document.createElement('div');
  render(
    <CodeRenderer renderProtocol="jsx">
      <span />
    </CodeRenderer>,
    div
  );

  expect(MockJsxToString.mock.calls.length).toBe(1);
});

it('calls renderToStaticMarkup when passed the html protocol', () => {
  const div = document.createElement('div');
  render(
    <CodeRenderer renderProtocol="html">
      <span />
    </CodeRenderer>,
    div
  );

  expect(MockRenderToStaticMarkup.mock.calls.length).toBe(1);
});