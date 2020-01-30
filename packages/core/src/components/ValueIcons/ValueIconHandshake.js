// @flow

import React from 'react';
import cx from 'classnames';

import defaultcss from './ValueIcon.css';
import css from './ValueIconHandshake.css';

type Props = {
  className?: string,
}

const ValueIconHandshake = (props: Props) => {
  const { className, ...rest } = props;

  return (
    <span className={cx(defaultcss.root, className)} {...(rest: any)}>
      <svg viewBox="0 0 63.06 42">
        <polyline points="38.01 12.92 46.58 27.24 22.4 37.56 14.23 26.27 14.08 4.44 31.87 4.44" />
        <rect x="48.99" y="4.44" width="13.58" height="22.3" />
        <path
          d={
            'M49,4.44H31.87S31.23,4.92,23,12c-2.42,2.24-2,4.11-.93,5.54a4.21,4.21,0,0,0,' +
            '5.35.87c9.6-5.21,10.48-5.71,10.48-5.71L46,26.27h3Z'
          }
        />
        <line x1="34.93" y1="21.32" x2="39.78" y2="29.71" />
        <line x1="29.59" y1="25.77" x2="33.47" y2="32.49" />
        <line x1="24.74" y1="30.62" x2="27.17" y2="34.82" />
        <circle className={css.button} cx="7.29" cy="21" r="1.94" />
        <circle className={css.button} cx="55.78" cy="21" r="1.94" />
        <rect x="0.5" y="4.44" width="13.58" height="22.3" />
      </svg>
    </span>
  );
};

export default ValueIconHandshake;
