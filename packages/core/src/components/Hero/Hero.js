//@flow
import * as React from 'react';
import cx from 'classnames';

import m from '../../globals/modifiers.css';
import css from './Hero.css';

type Props = {
  className: string,
  innerClassName: string,
  backgroundImage: string,
  children: React.Node,
  caption: React.Node,
  animate: boolean,
  backgroundClassName: string,
}

const Hero = (props: Props) => {
  const {
    className,
    innerClassName,
    backgroundClassName,
    backgroundImage,
    children,
    caption,
    animate,
    ...rest
  } = props;

  const cl = cx(
    css.root,
    backgroundImage ? css.backgroundImage : null,
    animate ? css.animate : null,
    className,
  );

  const overlayCl = cx(css.overlay, backgroundImage ? css.overlayActive : null);

  const innerCl = cx(css.inner, innerClassName);

  const captionClasses = cx(css.caption, m.fontRegular);

  const styles = { backgroundImage: backgroundImage ? `url(${backgroundImage})` : null };

  return (
    <div {...rest} className={cl}>
      <div className={cx(css.background, backgroundClassName)} style={styles} />

      <div className={overlayCl}>
        <div className={innerCl}>
          <div className={css.content}>{children}</div>
        </div>

        {caption && backgroundImage && <div className={captionClasses}>{caption}</div>}
      </div>
    </div>
  );
};

export default Hero;
