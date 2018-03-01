import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';

import css from './Figure.css';

const Figure = (props) => {
  const {
    className,
    caption,
    children,
    ...rest
  } = props;

  const classes = cx(css.root, className);
  const captionClasses = cx(css.caption);

  return (
    <figure {...rest} className={classes}>
      { children }
      <figcaption className={captionClasses}>{ caption }</figcaption>
    </figure>
  );
};

Figure.propTypes = {
  className: PropTypes.string,
  caption: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};

export default Figure;
