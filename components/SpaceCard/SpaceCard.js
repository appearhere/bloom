import React, { Component, PropTypes } from 'react';
import { applyContainerQuery } from 'react-container-query';
import cx from 'classnames';

import css from './SpaceCard.css';

const query = {
  [css.containerQueryMedium]: {
    minWidth: 300,
  },
};

/* eslint-disable react/prefer-stateless-function */
// https://github.com/d6u/react-container-query/issues/15
class SpaceCard extends Component {
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
      className,
      containerQuery,
      ...rest,
    } = this.props;

    return (
      <article
        { ...rest }
        className={ cx(css.root, containerQuery, className) }
        style={ {
          backgroundImage: `url(${image})`,
        } }
      >
        <a className={ css.link } href={ href }>
          <header className={ css.header }>
            <h1 className={ css.name }>{ name }</h1>
          </header>
          <div className={ css.detail }>
            { price } · { type }
          </div>
        </a>
      </article>
    );
  }
}
/* eslint-enable react/prefer-stateless-function */

export default applyContainerQuery(SpaceCard, query);