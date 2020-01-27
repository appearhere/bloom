//@flow

import * as React from 'react';
import cx from 'classnames';

import css from './ProgressSteps.css';

type Css = {
  horizontal: boolean,
}

type Props = {
  children: Array<React.Element<any>>,
  lastCompletedIndex:number,
  className: string,
  containerQuery: Css,
  stepCss: string,
}

export default class ProgressSteps extends React.Component<Props> {
  render() {
    const {
      children: steps,
      lastCompletedIndex,
      className,
      containerQuery,
      stepCss,
      ...rest
    } = this.props;

    const stepStyles = {};

    if (containerQuery && containerQuery[css.horizontal]) {
      stepStyles.width = `${100 / steps.length}%`;
    }

    return (
      <dl className={cx(css.root, className, containerQuery)} {...(rest: any)}>
        {React.Children.map(steps, (step, i) => {
          const completed = i <= lastCompletedIndex;

          return React.cloneElement(step, {
            step: i + 1,
            completed,
            style: stepStyles,
            css: stepCss,
          });
        })}
      </dl>
    );
  }
}
