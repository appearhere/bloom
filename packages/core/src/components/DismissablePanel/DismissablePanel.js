//@flow
import * as React from 'react';
import cx from 'classnames';

import Panel, { PANEL_CONTEXT } from '../Panel/Panel';
import BtnContainer from '../BtnContainer/BtnContainer';
import Icon from '../Icon/Icon';
import css from './DismissablePanel.css';

type Props = {
  className?: string,
  context:
    typeof PANEL_CONTEXT.DEFAULT |
    typeof PANEL_CONTEXT.BLACKOUT |
    typeof PANEL_CONTEXT.ERROR |
    typeof PANEL_CONTEXT.SUCCESS,
  children: React.Node,
  onClose?: Function,
};
const DismissablePanel = (props: Props) => {
  const { children, className, context, onClose, ...rest } = props;

  return (
    <Panel
      {...rest}
      context={context}
      className={cx(css.root, onClose ? css.dismissable : null, className)}
    >
      <div className={cx(css.inner)}>{children}</div>
      {onClose && (
        <BtnContainer className={css.dismissContainer} onClick={onClose}>
          <Icon className={css.icon} name="cross" />
        </BtnContainer>
      )}
    </Panel>
  );
};

DismissablePanel.defaultProps = {
  context: PANEL_CONTEXT.DEFAULT,
};

export default DismissablePanel;
