//@flow
import React from 'react';

import FittedImage from '../FittedImage/FittedImage';
import moment from '../../utils/moment/moment';
import LeftRight from '../LeftRight/LeftRight';
import css from './BookingRequestPreview.css';
import Icon from '../Icon/Icon';

type BookingRequest = {
  id: number,
  idea_name: string,
  idea_category: string,
  start_on: string,
  end_on: string,
  primary_photo_thumbnail_url: string,
  tooltip: string,
  complete: boolean,
}

type Props = {
  bookingRequests: Array<BookingRequest>,
  className?: string,
}

const BookingRequestPreview = ({ bookingRequests, className, ...rest }: Props) => {
  const keyedBookingRequests = bookingRequests.reduce((obj, next) => {
    const state = next.tooltip;
    const currentRequests = obj[state] || [];
    return Object.assign(obj, {
      [state]: [...currentRequests, next],
    });
  }, {});

  return (
    <div {...rest} className={className}>
      {Object.keys(keyedBookingRequests).map(state => {
        const requests = keyedBookingRequests[state];

        return (
          <div className={css.requestList} key={state}>
            <div className={css.state}>{state}</div>
            {requests.map(request => (
              <LeftRight
                className={css.request}
                key={request.id}
                primarySide="right"
                leftChildren={
                  <FittedImage
                    className={css.image}
                    src={request.primary_photo_thumbnail_url}
                    alt={request.idea_name}
                  />
                }
                rightChildren={
                  <div className={css.requestDetail}>
                    <div className={css.ideaName}>{request.idea_name}</div>
                    <div className={css.dates}>
                      {moment(request.start_on).format('L')}
                      <Icon className={css.untilIcon} name="arrow" />
                      {moment(request.end_on).format('L')}
                    </div>
                  </div>
                }
              />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default BookingRequestPreview;
