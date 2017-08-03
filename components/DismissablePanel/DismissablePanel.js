import React, { PropTypes } from 'react';
import cx from 'classnames';

import Panel, { PANEL_CONTEXT } from '../Panel/Panel';
import BtnContainer from '../BtnContainer/BtnContainer';
import Icon from '../Icon/Icon';
import css from './DismissablePanel.css';

const DismissablePanel = (props) => {
  const {
    children,
    className,
    context,
    onClose,
    ...rest,
  } = props;

  return (
    <Panel
      { ...rest }
      context={ context }
      className={ cx(
        css.root,
        onClose ? css.dismissable : null,
        className,
      ) }
    >
      <div
        className={ cx(
          css.inner,
        ) }
      >
        { children }
      </div>
      { onClose && (
        <BtnContainer className={ css.dismissContainer } onClick={ onClose }>
          <Icon className={ css.icon } name="cross" />
        </BtnContainer>
      ) }
    </Panel>
  );
};

DismissablePanel.propTypes = {
  className: PropTypes.string,
  context: PropTypes.oneOf([
    PANEL_CONTEXT.DEFAULT,
    PANEL_CONTEXT.BLACKOUT,
    PANEL_CONTEXT.ERROR,
    PANEL_CONTEXT.SUCCESS,
  ]),
  children: PropTypes.node,
  onClose: PropTypes.func,
};

DismissablePanel.defaultProps = {
  context: PANEL_CONTEXT.DEFAULT,
};

export default DismissablePanel;
