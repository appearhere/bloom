import React, { PropTypes } from 'react';
import cx from 'classnames';

import defaultcss from './ValueIcon.css';
import css from './ValueIconScissors.css';

const ValueIconScissors = (props) => {
  const {
    className,
    ...rest
  } = props;

  return (
    <span className={ cx(defaultcss.root, className) } { ...rest }>
      <svg viewBox="0 0 63.06 42">
        <rect
          x="16.28"
          y="31.33"
          width="9.99"
          height="3.01"
          rx="1.01"
          ry="1.01"
          transform="translate(-17.26 39.59) rotate(-67)"
        />
        <path
          d={ 'M33.71,24.25l2.5,5.88,3.64,8.58a2.86,2.86,0,0,0,3.73,1.51l2.25-1a2.86,2.86,0,0,0,' +
            '1.51-3.73L43.7,26.91A2.86,2.86,0,0,0,40,25.4l-.6.26c-1.44.61-2.47,0-3.33-1.66a8.21,' +
            '8.21,0,0,1-.73-2.85' }
        />
        <circle className={ css.fastener } cx="31.91" cy="21.18" r="1.24" />
        <rect
          x="40.3"
          y="27.84"
          width="3.01"
          height="9.99"
          rx="1.01"
          ry="1.01"
          transform="translate(-9.74 19.84) rotate(-24)"
        />
        <path d="M30.05,18.19,25.11,4.57a2.93,2.93,0,0,1,.92-3L32.69,15" />
        <path
          d={ 'M28.51,21.18a3.39,3.39,0,0,1,2.6-3.31l.39-.07,2-4.13,6-12.14a2.93,2.93,0,0,1,' +
            '.92,3L35.79,17.07,35,19.79a3.41,3.41,0,0,1-1.69,4.51,3.34,3.34,0,0,1-1.4.28,8.87,' +
            '8.87,0,0,1-2.12-.51.35.35,0,0,0-.44.2l-2.5,5.88-3.64,8.58a2.86,2.86,0,0,1-3.73,' +
            '1.51l-2.25-1a2.86,2.86,0,0,1-1.51-3.73l3.64-8.58a2.86,2.86,0,0,1,' +
            '3.73-1.51l.6.26a2.91,2.91,0,0,0,3.73-1.51A6.5,6.5,0,0,0,28.52,21'
          }
        />
        <line x1="32.81" y1="1.83" x2="32.81" y2="4.83" />
        <line x1="32.81" y1="6.83" x2="32.81" y2="9.83" />
      </svg>
    </span>
  );
};

ValueIconScissors.propTypes = {
  className: PropTypes.string,
};

export default ValueIconScissors;