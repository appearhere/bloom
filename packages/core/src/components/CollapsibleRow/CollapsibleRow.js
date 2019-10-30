import React, { useState } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import Icon from '../Icon/Icon';
import Radio from '../Form/Radio/Radio';


import css from './CollapsibleRow.css';

const CollapsibleRow = ({ title, body, controlled, border, animationTimeout, left }) => {
  const [open, toggle] = useState(false);

  return (
    <div className={cx(css.root, css.row)}>
      <div className={css.container}>
        <div className={css.left}>
          {left}
        </div>
        <div className={css.right}>
          <div className={css.title} onClick={() => toggle(!open)}>
            {title}
            <Icon className={cx(css.chevron, open && css.chevronActive)} name="chevron" />
          </div>
          { open && <div className={css.body}>{body}</div> }
        </div>
      </div>
    </div>
  );
};

CollapsibleRow.propTypes = {
  title: PropTypes.oneOf([PropTypes.string, PropTypes.node]),
  body: PropTypes.oneOf([PropTypes.string, PropTypes.node]),
  controlled: PropTypes.bool,
  border: PropTypes.bool,
  animationTimeout: PropTypes.number
};

CollapsibleRow.defaultProps = {
  animationTimeout: 300
}

export default CollapsibleRow;
