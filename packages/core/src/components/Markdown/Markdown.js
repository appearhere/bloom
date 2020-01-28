import PropTypes from 'prop-types';
import React, { Component } from 'react';
import cx from 'classnames';
import ReactMarkdown from 'react-markdown/with-html';

import css from './Markdown.css';

export default class Markdown extends Component {
  static propTypes = {
    children: PropTypes.string.isRequired,
    className: PropTypes.string,
    overrideClassname: PropTypes.bool,
    targetBlank: PropTypes.bool,
    escapeHtml: PropTypes.bool,
  };

  static defaultProps = {
    overrideClassname: false,
    targetBlank: false,
    escapeHtml: false,
  };

  render() {
    const {
      children,
      className,
      overrideClassname,
      targetBlank,
      escapeHtml,
      ...rest,
    } = this.props;

    const props = {
      className: overrideClassname ? className : cx(css.root, className),
      ...rest,
    };

    return React.createElement(
      'div',
      props,
      <ReactMarkdown
        source={children}
        escapeHtml={escapeHtml}
        linkTarget={targetBlank ? "_blank" : "_self"}
      />
    );
  }
}
