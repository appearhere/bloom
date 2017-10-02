import React, { createElement, PropTypes } from 'react';
import cx from 'classnames';

import BtnContainer from '../../../components/BtnContainer/BtnContainer';
import noop from '../../../utils/noop';
import css from './Scaffold.css';
import m from '../../../globals/modifiers.css';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export const h1 = css.h1;
export const h2 = css.h2;
export const h3 = css.h3;
export const h4 = css.h4;
export const body = css.body;
export const section = m.mtLgIii;
export const code = css.code;
export const link = css.link;
export const descriptionList = css.descriptionList;

export const H = ({ level, className, children }) => createElement(
  `h${level}`,
  {
    className: cx(
      level === 1 ? h1 : null,
      level === 2 ? h2 : null,
      level === 3 ? h3 : null,
      level === 4 ? h4 : null,
      className,
    ),
  },
  children,
);

export const T = ({ elm, className, children }) => createElement(
  elm,
  {
    className: cx(body, className),
  },
  children
);

export const D = ({ className, children }) => (
  <div className={ cx(section, className) }>
    { children }
  </div>
);

export const C = ({ className, children }) => (
  <code className={ cx(code, className) }>{ children }</code>
);

export const A = ({ className, children, ...rest }) => (
  <a { ...rest } className={ cx(link, className) }>{ children }</a>
);

export const Dl = ({ className, children, ...rest }) => (
  <dl { ...rest } className={ cx(descriptionList, className) }>
    { children }
  </dl>
);

export const Placeholder = ({ className, children, onClick, ...rest }) => (
  <BtnContainer
    { ...rest }
    className={ cx(css.placeholder, className) }
    onClick={ onClick }
  >
    { children }
  </BtnContainer>
);

H.propTypes = {
  ...propTypes,
  level: PropTypes.number,
};

T.propTypes = {
  ...propTypes,
  elm: PropTypes.string,
};

C.propTypes = propTypes;
A.propTypes = propTypes;
D.propTypes = propTypes;
Dl.propTypes = propTypes;

Placeholder.propTypes = {
  ...propTypes,
  onClick: PropTypes.func,
};

H.defaultProps = {
  level: 1,
};

T.defaultProps = {
  elm: 'span',
};

Placeholder.defaultProps = {
  onClick: noop,
};
