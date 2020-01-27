//@flow

import * as React from 'react';
import cx from 'classnames';

import css from './StepIcon.css';

type Props = {
  children: React.Node,
  className: string,
  completed: boolean,
  circleClassName: string,
}

const StepIcon = (props: Props) => {
  const { children, className, circleClassName, completed, ...rest } = props;

  const circleClasses = cx(css.circle, completed ? css.circleCompleted : null, circleClassName);

  return (
    <svg
      width="50px"
      height="50px"
      viewBox="0 0 46 46"
      className={cx(css.root, className)}
      {...(rest: any)}
    >
      <g fill="none">
        <circle className={circleClasses} cx="23" cy="23" r="22" />
        <text className={css.text} textAnchor="middle">
          <tspan x="22.5" y="28">
            {children}
          </tspan>
        </text>
      </g>
    </svg>
  );
};

export default StepIcon;
