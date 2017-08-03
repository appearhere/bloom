import React, { PropTypes } from 'react';
import cx from 'classnames';

import defaultcss from './ValueIcon.css';
import css from './ValueIconBoxingGlove.css';

const ValueIconBoxingGlove = (props) => {
  const {
    className,
    ...rest,
  } = props;

  return (
    <span className={ cx(defaultcss.root, className) } { ...rest }>
      <svg viewBox="0 0 63.06 42">
        <path
          d={ 'M39.46,20.64H36.91a4.41,4.41,0,0,1,0-8.81h4.48a4.41,4.41,0,0,1,4.41,' +
            '4.41v7.94a4.41,4.41,0,0,1-4.41,4.41H38.18'
          }
        />
        <path
          d={ 'M43.23,28.43a4.41,4.41,0,0,1-4.41,4.41H33.64V29.94a2.83,2.83,0,0,0-5.66,' +
            '0v2.89H22.79a4.41,4.41,0,0,1-4.41-4.41V14.6'
          }
        />
        <path
          d="M39.77,32.73v5.43a2.63,2.63,0,0,1-2.63,2.63H24.48a2.63,2.63,0,0,1-2.63-2.63V32.73"
        />
        <line className={ css.laces } x1="28.15" y1="36.03" x2="33.46" y2="36.03" />
        <line className={ css.laces } x1="28.15" y1="38.16" x2="33.46" y2="38.16" />
        <circle cx="30.81" cy="32.73" r="0.53" />
        <circle cx="30.81" cy="29.94" r="0.53" />
        <path
          d={ 'M33.36,18.84H25.91A8.84,8.84,0,0,1,17.1,10h0a8.84,8.84,0,0,1,8.81-8.81h9.93A8.84,' +
            '8.84,0,0,1,44.66,10h0a8.74,8.74,0,0,1-.46,2.81'
          }
        />
      </svg>
    </span>
  );
};

ValueIconBoxingGlove.propTypes = {
  className: PropTypes.string,
};

export default ValueIconBoxingGlove;
