import PropTypes from 'prop-types';
import React, { Component } from 'react';
import cx from 'classnames';
import refractor from 'refractor/core.js';
import jsxLang from 'refractor/lang/jsx';
import rehype from 'rehype';

import css from './CodeBlock.css';

refractor.register(jsxLang);

export default class CodeBlock extends Component {
  static propTypes = {
    className: PropTypes.string,
    code: PropTypes.node,
    syntax: PropTypes.oneOf(['jsx', 'css']),
  };

  static defaultProps = {
    syntax: 'jsx',
  };

  createMarkup() {
    const { code, syntax } = this.props;

    if (code) {
      const nodes = refractor.highlight(code, syntax);
      const highlightedCode = rehype()
        .stringify({ type: 'root', children: nodes })
        .toString();

      return { __html: highlightedCode };
    }

    return null;
  }

  /* eslint-disable react/no-danger */
  render() {
    const { code, className } = this.props;
    return (
      <pre className={cx(css.root, className)}>
        <code className={css.code} dangerouslySetInnerHTML={this.createMarkup()} />
      </pre>
    );
    /* eslint-enable react/no-danger */
  }
}
