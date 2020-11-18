// @flow

import * as React from 'react';
import cx from 'classnames';
import css from './ChipGroup.css';
import Chip from '../Chip/Chip';

type Tag = {
  href: string,
  name: string,
}

type Props = {
  tags: Array<Tag>,
  className?: string,
};

const ChipGroup = ({ className, tags }: Props) => (
  <div className={cx(className, css.root)}>
    {tags && tags.map((tag) => (
      <Chip
        href={tag.href}
        text={tag.name}
        className={css.chip}
      />
    ))}
  </div>
);

export default ChipGroup;

