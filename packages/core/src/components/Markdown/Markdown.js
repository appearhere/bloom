// @flow
import React from 'react';
import CommonMark from 'commonmark';
import ReactRenderer from 'commonmark-react-renderer';
import cx from 'classnames';

import css from './Markdown.css';

type Props = {
  children: string,
  className?: string,
  overrideClassname?: boolean,
  linkTarget: '_self' | '_blank',
  escapeHtml?: boolean,
};

const Markdown = ({ children, className, overrideClassname = false, linkTarget = '_self', escapeHtml = false, ...rest }: Props) => {
  const parser = new CommonMark.Parser();
  const renderer = new ReactRenderer({
    linkTarget: linkTarget,
    escapeHtml: escapeHtml,
  });
  const ast = parser.parse(children);

  const props = {
    className: overrideClassname ? className : cx(css.root, className),
    ...rest,
  };

  return React.createElement('div', props, renderer.render(ast));
}

export default Markdown;
