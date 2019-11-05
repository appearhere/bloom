import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';

import css from './CollapsibleRow.css';

const CollapsibleRow = ({ title, body, left, opened, onClick, border, marginBottom, className }) => {
  const [open, toggle] = useState(false);

  useEffect(() => {
    toggle(opened);
  }, [opened])

  const handleClick = () => {
    toggle(!open);
    if (onClick) {
      onClick();
    }
  }

  return (
    <div
      className={cx(css.root, css.row, {
        [css.opened]: open,
        [css.border]: border,
        [css.marginBottom]: marginBottom,
        [className]: className
      })}
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
}

CollapsibleRow.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  body: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  border: PropTypes.bool,
  marginBottom: PropTypes.bool,
  left: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default CollapsibleRow;
