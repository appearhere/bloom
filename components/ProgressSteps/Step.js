import React, { PropTypes } from 'react';
import cx from 'classnames';

import LeftRight from '../LeftRight/LeftRight';
import StepIcon from '../StepIcon/StepIcon';
import m from '../../globals/modifiers.css';
import css from './ProgressSteps.css';

const Step = ({ step, completed, title, children, ...rest }) => {
  const leftClassName = cx(
    m.valignt,
    css.stepIconContainer,
    completed ? css.stepIconContainerCompleted : null,
  );

  const rightClassName = cx(
    css.stepContent,
    completed ? css.stepContentCompleted : null,
  );

  return (
    <LeftRight
      { ...rest }
      className={ css.step }
      leftClassName={ leftClassName }
      rightClassName={ m.valignt }
      leftChildren={
        <StepIcon
          className={ css.stepIcon }
          completed={ completed }
        >
          { step }
        </StepIcon>
      }
      rightChildren={
        <div className={ rightClassName }>
          <dt className={ css.stepTitle }>{ title }</dt>
          <dd className={ css.stepBody }>{ children }</dd>
        </div>
      }
      primarySide="right"
    />
  );
};

Step.propTypes = {
  step: PropTypes.node,
  completed: PropTypes.bool,
  title: PropTypes.node,
  children: PropTypes.node,
};

export default Step;