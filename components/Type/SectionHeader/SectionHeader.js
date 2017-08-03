import React, { PropTypes, createElement } from 'react';
import classnames from 'classnames';

import defaultCss from './SectionHeader.css';


const SectionHeader = (props) => {
  const {
    title,
    strapline,
    className,
    level,
    css,
    ...rest,
  } = props;

  const titleClasses = classnames(
    defaultCss.base,
    strapline ? [defaultCss.titleWithStrapline] : [defaultCss.title],
    css.title,
  );

  const straplineClasses = classnames(
    defaultCss.base,
    defaultCss.strapline,
    css.strapline,
  );

  const titleEl = <span className={ titleClasses }>{ title }</span>;
  const straplineEl = strapline && <span className={ straplineClasses }>{ strapline }</span>;

  return (
    createElement(
      `h${level}`,
      { className, ...rest },
      titleEl,
      straplineEl
    )
  );
};

SectionHeader.propTypes = {
  className: PropTypes.string,
  title: PropTypes.node.isRequired,
  strapline: PropTypes.node,
  level: PropTypes.number,
  css: PropTypes.shape({
    title: PropTypes.string,
    strapline: PropTypes.string,
  }),
};

SectionHeader.defaultProps = {
  level: 1,
  css: {
    title: '',
    strapline: '',
  },
};

export default SectionHeader;
