import React, { PropTypes } from 'react';
import classnames from 'classnames';

import m from '../../globals/modifiers.css';
import css from './Hero.css';

const Hero = (props) => {
  const {
    className,
    backgroundImage,
    children,
    caption,
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

  const captionClasses = classnames(
    css.caption,
    m.fontBase,
  )

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
      { caption && backgroundImage && (
        <div className={ captionClasses }>
          { caption }
        </div>
      )}
    </div>
  );
};

Hero.propTypes = {
  className: PropTypes.string,
  backgroundImage: PropTypes.string,
  children: PropTypes.node.isRequired,
  caption: PropTypes.node,
};

export default Hero;