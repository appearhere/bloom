// @flow
import * as React from 'react';

import DestinationListingCard from '../DestinationListingCard/DestinationListingCard';
import Link from '../../Link/Link';

import css from './SpaceListingCard.css';

type Props = {
  placeLabel: React.Node,
  placeHref: string,
  location: React.Node,
  size: React.Node,
  price: React.Node,
  priceUnit: React.Node,
  onPlaceLabelClick: Function,
  onCarouselChange: Function,
}

const SpaceListingCard = (props: Props) => {
  const {
    placeLabel,
    placeHref,
    location,
    size,
    onPlaceLabelClick,
    onCarouselChange,
    ...rest
  } = props;

  return (
    <DestinationListingCard
      carouselOverlay={
        placeLabel && (
          <Link
            onClick={onPlaceLabelClick}
            href={placeHref}
            className={css.placeLink}
            bodyClassName={css.placeLinkBody}
            iconClassName={css.placeLinkIcon}
          >
            {placeLabel}
          </Link>
        )
      }
      information={[location, size].filter((el) => { return el; })}
      onCarouselChange={onCarouselChange}
      {...(rest: any)}
    />
  );
};

export default SpaceListingCard;
