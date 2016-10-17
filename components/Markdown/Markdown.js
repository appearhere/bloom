import React, { PropTypes, Component } from 'react';
import CommonMark from 'commonmark';
import ReactRenderer from 'commonmark-react-renderer';
import cx from 'classnames';
import Prism from 'prismjs';
import '!style!css!prismjs/themes/prism-okaidia.css';
import 'prismjs/components/prism-markdown.min.js';
import 'prismjs/components/prism-markup.min.js';
import 'prismjs/components/prism-ruby.min.js';
import 'prismjs/components/prism-jsx.min.js';

import css from './Markdown.css';

const parser = new CommonMark.Parser();
const renderer = new ReactRenderer();

export default class Markdown extends Component {
  static propTypes = {
    children: PropTypes.string.isRequired,
    className: PropTypes.string,
    overrideClassname: PropTypes.bool,
    highlightSyntax: PropTypes.bool,
  };

  static defaultProps = {
    overrideClassname: false,
    highlightSyntax: false,
  }

  componentDidMount() {
    const { highlightSyntax } = this.props;
    if (highlightSyntax) Prism.highlightAll();
  }

  render() {
    const {
      /* eslint-disable no-unused-vars */
      highlightSyntax: _highlightSyntax,
      /* eslint-enable no-unused-vars */
      children,
      className,
      overrideClassname,
      ...rest
    } = this.props;

    const ast = parser.parse(children);

    const props = {
      className: overrideClassname ? className : cx(css.root, className),
      ...rest,
    };

    return React.createElement('div', props, renderer.render(ast));
  }
}