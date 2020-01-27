//@flow

import * as React from 'react';
import cx from 'classnames';
import css from './OptionCard.css';

type Props = {
  img: string,
  children: React.Node,
  heading: string,
  subheading: string,
  active: boolean,
}

export default class OptionCard extends React.Component<Props> {
  render() {
    const { img, children, heading, subheading, active, ...rest } = this.props;

    return (
      <div className={cx(css.wrapper, { [css.active]: active })} {...(rest: any)}>
        <div className={css.content} >
          <h4 className={css.title}>{heading}</h4>
          <p className={css.subtitle}>{subheading}</p>
          {children}
        </div>
        <div className={css.imageContainer} style={{ backgroundImage: `url(${img})` }} />
      </div>
    );
  }
}
