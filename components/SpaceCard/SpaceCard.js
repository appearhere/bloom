import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

import ImageOverlayCard from '../ImageOverlayCard/ImageOverlayCard';

import css from './SpaceCard.css';
import linkcss from '../Link/Link.css';

export default class SpaceCard extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    type: PropTypes.string,
    href: PropTypes.string,
    className: PropTypes.string,
    containerQuery: PropTypes.object,
  };

  render() {
    const {
      name,
      image,
      price,
      type,
      href,
      location,
      className,
      containerQuery,
      ...rest,
    } = this.props;

    return (
      <article
        { ...rest }
        className={ cx(css.root, className) }
      >
        <a className={ css.link } href={ href }>
          <ImageOverlayCard
            className={ css.overlayCard }
            image={ image }
          >
            <header className={ css.header }>
              <h1 className={ css.name }>{ name }</h1>
            </header>
            <div className={ cx(css.detail, linkcss.root) }>
              { price } · { location }
            </div>
          </ImageOverlayCard>
        </a>
      </article>
    );
  }
}