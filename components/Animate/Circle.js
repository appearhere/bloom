import PropTypes from 'prop-types';
import React from 'react';
import { Motion, spring } from 'react-motion';
import cx from 'classnames';

import css from './Circle.css';

const Circle = ({ percent }) => (
  <svg className={ css.root } viewBox="0 0 34 34">
    <circle className={ cx(css.circle, css.circleTrack) } cx="17" cy="17" r="15.9154943092"/>
    <Motion
      defaultStyle={ {
        x: 0,
      } }
      style={ {
        x: spring(percent, { stiffness: 35, damping: 10 }),
      } }
    >
      { ({ x }) => (
          <circle
            className={ cx(css.circle, css.circleFilled) }
            cx="17"
            cy="17"
            r="15.9154943092"
            strokeDasharray={`${x}, 100`}
          />
        )
      }

    </Motion>
  </svg>

);

Circle.propTypes = {
  percent: PropTypes.number,
};

Circle.defaultProps = {
  percent: 0,
};

export default Circle;


