// @flow

import * as React from 'react';
import classnames from 'classnames';

import defaultCss from './SectionHeader.css';

type Css = {
  title: string,
  strapline: string,
}

type Props = {
  className?: string,
  title: React.Node,
  strapline: React.Node,
  level: number,
  css: Css
}

const SectionHeader = (props: Props) => {
  const { title, strapline, className, level, css, ...rest } = props;

  const titleClasses = classnames(
    defaultCss.base,
    strapline ? [defaultCss.titleWithStrapline] : [defaultCss.title],
    css.title,
  );

  const straplineClasses = classnames(defaultCss.base, defaultCss.strapline, css.strapline);

  const titleEl = <span className={titleClasses}>{title}</span>;
  const straplineEl = strapline && <span className={straplineClasses}>{strapline}</span>;

  return React.createElement(`h${level}`, { className, ...(rest: any) }, titleEl, straplineEl);
};

SectionHeader.defaultProps = {
  level: 1,
  css: {
    title: '',
    strapline: '',
  },
};

export default SectionHeader;
