import React, { PropTypes, cloneElement, Children, Component } from 'react';
import cx from 'classnames';

import css from './ProgressSteps.css';

export default class ProgressSteps extends Component {
  static propTypes = {
    children: PropTypes.array.isRequired,
    lastCompletedIndex: PropTypes.number,
    className: PropTypes.string,
    /* eslint-disable react/no-unused-prop-types */
    containerQuery: PropTypes.shape({
      [css.horizontal]: PropTypes.bool,
    }),
    /* eslint-enable react/no-unused-prop-types */
  };

  render() {
    const {
      children: steps,
      lastCompletedIndex,
      className,
      containerQuery,
      ...rest,
    } = this.props;

    const stepStyles = {};
    if (containerQuery && containerQuery[css.horizontal]) {
      stepStyles.width = `${100 / steps.length}%`;
    }

    return (
      <dl
        className={ cx(css.root, className, containerQuery) }
        { ...rest }
      >
        { Children.map(steps, (step, i) => {
          const completed = i <= lastCompletedIndex;

          return cloneElement(step, {
            step: i + 1,
            completed,
            style: stepStyles,
          });
        }) }
      </dl>
    );
  }
}