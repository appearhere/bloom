// @flow
import * as React from 'react';
import cx from 'classnames';
import { applyContainerQuery } from 'react-container-query';

import css from './SpaceFeatureCard.css';
import PictureCard from '../PictureCard/PictureCard';

const query = {
  [css.large]: {
    minWidth: 192,
  },
};

type Css = {
  large: boolean
}

type ContainerQuery = {
  css: Css,
}

type Props = {
  name: string,
  price: string,
  location: string,
  containerQuery: ContainerQuery,
  className?: string,
  children: React.Node,
}

/* eslint-disable react/prefer-stateless-function */
class SpaceFeatureCard extends React.Component<Props> {
  render() {
    const {
      name,
      price,
      location,
      containerQuery,
      className,
      children: _children,
      ...rest
    } = this.props;

    const classes = cx(css.root, containerQuery, className);

    return (
      <PictureCard {...rest} className={classes}>
        <div className={css.inner}>
          <span className={css.location}>{location}</span>
          <div className={css.bottom}>
            <div className={css.name}>{name}</div>
            <div className={css.price}>{price}</div>
          </div>
        </div>
      </PictureCard>
    );
  }
}
/* eslint-enable react/prefer-stateless-function */

export default applyContainerQuery(SpaceFeatureCard, query);
