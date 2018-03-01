import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';

import defaultcss from './ValueIcon.css';
import css from './ValueIconThumbsUp.css';

const ValueIconThumbsUp = (props) => {
  const {
    className,
    ...rest
  } = props;

  return (
    <span className={cx(defaultcss.root, className)} {...rest}>
      <svg viewBox="0 0 63.06 42">
        <rect x="13.18" y="18.1" width="13.52" height="22.22" />
        <line x1="42.15" y1="25.83" x2="47.95" y2="25.83" />
        <line x1="41.19" y1="32.59" x2="46.5" y2="32.59" />
        <path
          d={'M26.72,18.24,32.47,9V1.68s5.71.15,5.71,6.59c0,3.33-4.67,9.62,2.59,9.69s9.1,0,9.1,' +
            '0L45.19,40.32H26.72l0-18.91Z'
          }
        />
        <circle className={css.button} cx="19.94" cy="34.52" r="1.93" />
      </svg>
    </span>
  );
};

ValueIconThumbsUp.propTypes = {
  className: PropTypes.string,
};

export default ValueIconThumbsUp;

