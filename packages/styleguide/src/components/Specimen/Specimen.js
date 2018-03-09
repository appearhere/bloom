import PropTypes from 'prop-types';
import React, { Component } from 'react';
import cx from 'classnames';
import refractor from 'refractor/core.js';
import jsxLang from 'refractor/lang/jsx';
import rehype from 'rehype';
import { Typography as t } from '@appearhere/bloom';
import css from './Specimen.module.css';

refractor.register(jsxLang);

const mergeObjectStrings = (ca = {}, cb = {}) => {
  const classNames = Object.assign({}, ca, cb);
  Object.keys(classNames).forEach((key) => {
    classNames[key] = cx(ca[key], cb[key]);
  });

  return classNames;
};

export default class Specimen extends Component {
  static propTypes = {
    classNames: PropTypes.shape({
      root: PropTypes.string,
      specimenContainer: PropTypes.string,
      specimen: PropTypes.string,
      body: PropTypes.string,
      name: PropTypes.string,
      attributes: PropTypes.string,
      attribute: PropTypes.string,
    }),
    name: PropTypes.string,
    attributes: PropTypes.array,
    children: PropTypes.node,
    code: PropTypes.node,
    variant: PropTypes.oneOf(['light', 'dark']),
  };

  static defaultProps = {
    attributes: [],
    language: 'javascript',
    variant: 'light',
  };

  createMarkup() {
    const { code } = this.props;

    if (code) {
      const nodes = refractor.highlight(code, 'jsx');
      const highlightedCode = rehype()
        .stringify({ type: 'root', children: nodes })
        .toString();

      return { __html: highlightedCode };
    }

    return null;
  }

  render() {
    const {
      classNames,
      children,
      name,
      attributes,
      code,
      variant,
    } = this.props;

    const classes = mergeObjectStrings(css, classNames);

    /* eslint-disable react/no-danger */
    return (
      <div className={classes.root}>
        <div
          className={cx(
            classes.specimenContainer,
            classes[variant],
          )}
        >
          <span className={classes.specimen}>
            { children }
          </span>
        </div>
        <div className={classes.body}>
          <div className={classes.name}>{ name }</div>
          { attributes.length > 0 && (
            <ul className={classes.attributes}>
              { attributes.map((attribute, i) => (
                <li key={i} className={cx(classes.attribute, t.fontSmallI)}>
                  { attribute }
                </li>
              )) }
            </ul>
          ) }
          { code && (
            <div className={css.codeBlock}>
              <pre className={css.pre}>
                <code
                  className={cx(css.code, t.fontSmallI)}
                  dangerouslySetInnerHTML={this.createMarkup()}
                />
              </pre>
            </div>
          ) }
        </div>
      </div>
    );
    /* eslint-enable react/no-danger */
  }
}
