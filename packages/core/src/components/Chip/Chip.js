// @flow

import * as React from 'react';
import cx from "classnames";
import css from "./Chip.css";

type Props = {
  className?: string,
  href: string,
  text: string,
};

const Chip = ({className, href, text}: Props) => (
  <a href={href} className={cx(css.root, className)}>
    {text}
  </a>
);

export default Chip;
