import React, { PropTypes } from 'react';
import classnames from 'classnames';

import m from '../../../globals/modifiers.css';
import css from './SectionHeader.css';

const titleClasses = classnames(
  css.base,
  css.title,
  m.fontLgIv,
  m.uppercase,
);

const straplineClasses = classnames(
  css.base,
  css.strapline,
  m.fontRegular
);

const SectionHeader = ({ title, strapline, className, ...rest }) => (
  <div className={ className } { ...rest }>
    <h1 className={ titleClasses }>{ title }</h1>
    <p className={ straplineClasses }>{ strapline }</p>
  </div>
);

SectionHeader.propTypes = {
  className: PropTypes.string,
  title: PropTypes.node,
  strapline: PropTypes.node,
};

export default SectionHeader;