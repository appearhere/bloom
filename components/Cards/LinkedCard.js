import React, { PropTypes } from 'react';
import cx from 'classnames';

import Card from './Card';
import css from './LinkedCard.css';

const LinkedCard = (props) => {
  const {
    href,
    target,
    className,
    children,
    ...rest,
  } = props;

  return (
    <a
      href={ href }
      target={ target }
      className={ cx(css.root, className) }
    >
      <Card { ...rest } className={ css.overlay }>
        { children }
      </Card>
    </a>
  );
};

LinkedCard.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top']),
  className: PropTypes.string,
};

LinkedCard.defaultProps = {
  target: '_self',
};

export default LinkedCard;