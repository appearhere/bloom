import React, { PropTypes, Component } from 'react';
import cx from 'classnames';
import { applyContainerQuery } from 'react-container-query';

import { CardOuter } from './Card';
import css from './SpaceCard.css';

const query = {
  [css.large]: {
    minWidth: 192,
  },
  [css.full]: {
    minHeight: 360,
  },
};

/* eslint-disable react/prefer-stateless-function */
class SpaceCard extends Component {
  render() {
    const {
      name,
      price,
      href,
      target,
      location,
      image,
      className,
      innerClassName,
      containerQuery,
      square,
      ...rest,
    } = this.props;

    const cl = cx(
      css.root,
      containerQuery,
      square ? css.square : null,
      className,
    );

    return (
      <a
        href={ href }
        target={ target }
        className={ cl }
        { ...rest }
      >
        <CardOuter
          className={ cx(css.inner, css.overlay, innerClassName) }
          image={ image }
        >
          <span className={ css.location }>
            { location }
          </span>
          <div className={ css.bottom }>
            <div className={ css.name }>
              { name }
            </div>
            <div className={ css.price }>
              { price }
            </div>
          </div>
        </CardOuter>
      </a>
    );
  }
}
/* eslint-enable react/prefer-stateless-function */

SpaceCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  location: PropTypes.string,
  href: PropTypes.string,
  className: PropTypes.string,
  innerClassName: PropTypes.string,
  image: PropTypes.string,
  target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top']),
  containerQuery: PropTypes.shape({
    [css.large]: PropTypes.bool,
    [css.full]: PropTypes.bool,
  }),
  square: PropTypes.bool,
};

SpaceCard.defaultProps = {
  target: '_self',
  square: false,
};

export default applyContainerQuery(SpaceCard, query);