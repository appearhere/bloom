//@flow

import React, { Component } from 'react';
import CommonMark from 'commonmark';
import ReactRenderer from 'commonmark-react-renderer';
import cx from 'classnames';

import css from './Markdown.css';

const parser = new CommonMark.Parser();
const renderer = new ReactRenderer();

type Props = {
  children: string,
  className: string,
  overrideClassname: boolean,
  targetBlank: Boolean,
}

export default class Markdown extends Component<Props> {
  static defaultProps = {
    overrideClassname: false,
  };

  render() {
    const { children, className, overrideClassname, ...rest } = this.props;

    const ast = parser.parse(children);

    const props = {
      className: overrideClassname ? className : cx(css.root, className),
      ...rest,
    };

    return React.createElement('div', props, renderer.render(ast));
  }
}
