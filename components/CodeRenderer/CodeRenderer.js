import React, { PropTypes } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import jsxToString from 'jsx-to-string';

export const protocols = {
  COMPONENT: 'component',
  JSX: 'jsx',
  HTML: 'html',
};

const CodeRenderer = ({ renderProtocol, children, ...rest }) => {
  let output = null;

  if (renderProtocol === protocols.JSX) {
    output = jsxToString(children);
  } else if (renderProtocol === protocols.HTML) {
    output = renderToStaticMarkup(children);
  } else {
    output = children;
  }

  return <div { ...rest }>{ output }</div>;
};

CodeRenderer.propTypes = {
  children: PropTypes.element.isRequired,
  renderProtocol: PropTypes.oneOf([
    protocols.COMPONENT,
    protocols.JSX,
    protocols.HTML,
  ]),
};

CodeRenderer.defaultProps = {
  renderProtocol: 'component',
};

export default CodeRenderer;