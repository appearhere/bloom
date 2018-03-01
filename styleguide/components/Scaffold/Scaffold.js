import PropTypes from 'prop-types';
import React, { createElement } from 'react';
import cx from 'classnames';

import BtnContainer from '../../../components/BtnContainer/BtnContainer';
import noop from '../../../utils/noop';
import css from './Scaffold.css';
import m from '../../../globals/modifiers.css';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

const listTypes = {
  ordered: 'o',
  unordered: 'u',
};

export const h1 = css.h1;
export const h2 = css.h2;
export const h3 = css.h3;
export const h4 = css.h4;
export const body = css.body;
export const section = m.mtLgIii;
export const code = css.code;
export const link = css.link;
export const list = css.list;
export const descriptionList = css.descriptionList;
export const note = css.note;

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
  <div className={cx(section, className)}>
    { children }
  </div>
);

export const C = ({ className, children }) => (
  <code className={cx(code, className)}>{ children }</code>
);

export const A = ({ className, children, ...rest }) => (
  <a {...rest} className={cx(link, className)}>{ children }</a>
);

export const List = ({ className, children, type, ...rest }) => createElement(
  `${listTypes[type]}l`,
  {
    className: cx(
      list,
      className
    ),
    ...rest,
  },
  children,
);

export const Dl = ({ className, children, ...rest }) => (
  <dl {...rest} className={cx(descriptionList, className)}>
    { children }
  </dl>
);

export const Note = ({ className, children, ...rest }) => (
  <div {...rest} className={cx(note, className)}>
    <div className={css.noteHeading}>Note</div>
    { children }
  </div>
);

export const Placeholder = ({ className, children, onClick, ...rest }) => (
  <BtnContainer
    {...rest}
    className={cx(css.placeholder, className)}
    onClick={onClick}
  >
    { children }
  </BtnContainer>
);

export const Bq = ({ className, children, citation, ...rest }) => (
  <div>
    <blockquote
      {...rest}
      className={cx(
        css.blockquote,
        className,
      )}
    >
      { children }
    </blockquote>
    <cite>{ citation }</cite>
  </div>
);

H.propTypes = {
  ...propTypes,
  level: PropTypes.number,
};

T.propTypes = {
  ...propTypes,
  elm: PropTypes.string,
};

Bq.propTypes = {
  ...propTypes,
  citation: PropTypes.node,
};

List.propTypes = {
  ...propTypes,
  type: PropTypes.oneOf(['ordered', 'unordered']).isRequired,
};

C.propTypes = propTypes;
A.propTypes = propTypes;
D.propTypes = propTypes;
Dl.propTypes = propTypes;
Note.propTypes = propTypes;

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
