//@flow
import React from 'react';
import cx from 'classnames';
import Blokk from '../../Blokk/Blokk';
import css from '../DestinationListingCard/DestinationListingCard.css';

type Props = {
  className?: string,
  carouselClassName?: string,
  bodyClassName?: string,
};

const EmptyListingCard = ({ className, carouselClassName, bodyClassName }: Props) => (
  <div className={className}>
    <div className={cx(css.carousel, carouselClassName)} />
    <div className={cx(css.body, bodyClassName)}>
      <Blokk length={4} />
      <Blokk length={12} />
      <Blokk length={7} />
    </div>
  </div>
);

export default EmptyListingCard;
