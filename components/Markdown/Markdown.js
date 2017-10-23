import PropTypes from 'prop-types';
import React, { Component } from 'react';
import CommonMark from 'commonmark';
import ReactRenderer from 'commonmark-react-renderer';
import cx from 'classnames';

import css from './Markdown.css';

const parser = new CommonMark.Parser();
const renderer = new ReactRenderer();

export default class Markdown extends Component {
  static propTypes = {
    children: PropTypes.string.isRequired,
    className: PropTypes.string,
    overrideClassname: PropTypes.bool,
  };

  static defaultProps = {
    overrideClassname: false,
  }

  render() {
    const {
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
