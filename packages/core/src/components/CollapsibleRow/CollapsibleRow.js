//@flow
import * as React from 'react';
import cx from 'classnames';
import Icon from '../Icon/Icon';

import css from './CollapsibleRow.css';

type Props = {
  title: string | React.Node,
  body: string | React.Node,
  border: boolean,
  marginBottom: boolean,
  left?: React.Node,
  onClick?: Function,
  className?: string,
  opened?: boolean
}

const CollapsibleRow = ({ title, body, left, opened, onClick, border, marginBottom, className }: Props) => {
  const [open, toggle] = React.useState(false);

  React.useEffect(() => {
    toggle(opened);
  }, [opened]);

  const handleClick = () => {
    toggle(!open);
    if (onClick) {
      onClick();
    }
  };

  return (
    <div
      className={cx(css.root, css.row, {
        [css.opened]: open,
        [css.border]: border,
        [css.marginBottom]: marginBottom
      }), className}
    >
      <div className={css.container}>
        { left && <div className={css.left}>
          {left}
        </div> }
        <div className={css.right}>
          <div className={cx(css.title, {[css.withLeftContent]: left})} onClick={handleClick}>
            {title}
            <Icon className={cx(css.chevron, open && css.chevronActive)} name="chevron" />
          </div>
          { open && <div className={cx(css.body, {[css.withLeftContent]: left})}>{body}</div> }
        </div>
      </div>
    </div>
  );
};

CollapsibleRow.defaultProps = {
  border: true,
  marginBottom: true,
};

export default CollapsibleRow;
