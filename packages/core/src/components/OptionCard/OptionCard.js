import PropTypes from 'prop-types';
import React, { Component } from 'react';
import cx from 'classnames';
import css from './OptionCard.css';

export default class OptionCard extends Component {
  static propTypes = {
    img: PropTypes.string,
    children: PropTypes.node,
    heading: PropTypes.string,
    subheading: PropTypes.string,
    active: PropTypes.bool,
  };

  render() {
    const { img, children, heading, subheading, active, ...rest } = this.props;

    return (
      <div className={cx(css.wrapper, { [css.active]: active })} {...rest}>
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
