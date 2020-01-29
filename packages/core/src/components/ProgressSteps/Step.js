// @flow

import * as React from 'react';
import cx from 'classnames';

import LeftRight from '../LeftRight/LeftRight';
import Circle from '../Animate/Circle';
import Icon from '../Icon/Icon';
import m from '../../globals/modifiers.css';
import defaultCss from './ProgressSteps.css';

type Css = {
  stepIconContainer: string,
  stepIconContainerCompleted: string,
  stepIcon: string,
  stepIconCompleted: string,
  stepTitle: string,
  stepTitleCompleted: string,
  stepBody: string,
  stepBodyCompleted: string,
  stepContent: string,
  stepContentCompleted: string,
  step: string,
  stepIconCircle: string,
}

type Props = {
  completed: boolean,
  title: React.Node,
  children: React.Node,
  css: Css,
  step: React.Node,
  icon: string,
}

const Step = (props: Props) => {
  const { step, completed, title, children, css, icon, ...rest } = props;

  const leftClassName = cx(
    m.valignt,
    defaultCss.stepIconContainer,
    css.stepIconContainer,
    completed ? defaultCss.stepIconContainerCompleted : null,
    completed ? css.stepIconContainerCompleted : null,
  );

  const rightClassName = cx(
    m.valignt,
    defaultCss.stepContent,
    css.stepContent,
    completed ? defaultCss.stepContentCompleted : null,
    completed ? css.stepContentCompleted : null,
  );

  const stepIconClassName = cx(
    defaultCss.stepIcon,
    css.stepIcon,
    completed ? defaultCss.stepIconCompleted : null,
    completed ? css.stepIconCompleted : null,
  );

  const stepTitleClassName = cx(
    defaultCss.stepTitle,
    css.stepTitle,
    completed ? defaultCss.stepTitleCompleted : null,
    completed ? css.stepTitleCompleted : null,
  );

  const stepBodyClassName = cx(
    defaultCss.stepBody,
    css.stepBody,
    completed ? defaultCss.stepBodyCompleted : null,
    completed ? css.stepBodyCompleted : null,
  );

  return (
    <LeftRight
      {...rest}
      className={cx(defaultCss.step, css.step)}
      leftClassName={leftClassName}
      rightClassName={rightClassName}
      leftChildren={
        icon ? (
          <Icon className={defaultCss.icon} name={icon} />
        ) : (
          <Circle
            circleClassName={css.stepIconCircle}
            className={stepIconClassName}
            completed={completed}
          >
            {step}
          </Circle>
        )
      }
      rightChildren={
        <div>
          <dt className={stepTitleClassName}>{title}</dt>
          <dd className={stepBodyClassName}>{children}</dd>
        </div>
      }
      primarySide="right"
    />
  );
};

Step.defaultProps = {
  css: {
    stepIconContainer: '',
    stepIconContainerCompleted: '',
    stepIcon: '',
    stepIconCompleted: '',
    stepTitle: '',
    stepTitleCompleted: '',
    stepBody: '',
    stepBodyCompleted: '',
  },
};

export default Step;
