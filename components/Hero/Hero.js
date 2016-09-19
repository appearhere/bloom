import React, { PropTypes } from 'react';
import classnames from 'classnames';

import css from './Hero.css';

const Hero = (props) => {
  const {
    className,
    backgroundImage,
    children,
    ...rest,
  } = props;

  const classes = classnames(
    css.root,
    className
  );

  const innerClasses = classnames(
    css.inner,
    backgroundImage ? css.innerOverlay : null,
  );

  const styles = { backgroundImage: `url(${backgroundImage})` };

  return (
    <div
      { ...rest }
      className={ classes }
      style={ styles }
    >
      <div className={ innerClasses }>
        { children }
      </div>
    </div>
  );
};

Hero.propTypes = {
  className: PropTypes.string,
  backgroundImage: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Hero;