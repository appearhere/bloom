import React, { PropTypes } from 'react';
import cx from 'classnames';

import css from './StepIcon.css';

const StepIcon = (props) => {
  const {
    children,
    className,
    circleClassName,
    completed,
    ...rest
  } = props;

  const circleClasses = cx(
    css.circle,
    completed ? css.circleCompleted : null,
    circleClassName,
  );

  return (
    <svg
      width="50px"
      height="50px"
      viewBox="0 0 46 46"
      className={ cx(css.root, className) }
      { ...rest }
    >
      <g fill="none">
        <circle
          className={ circleClasses }
          cx="23"
          cy="23"
          r="22"
        />
        <text className={ css.text } textAnchor="middle">
          <tspan x="22.5" y="28">{ children }</tspan>
        </text>
      </g>
    </svg>
  );
};

StepIcon.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  completed: PropTypes.bool,
  circleClassName: PropTypes.string,
};

export default StepIcon;