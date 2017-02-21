import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import cx from 'classnames';
import momentPropTypes from 'react-moment-proptypes';
import debounce from 'lodash/fp/debounce';

import BookingRequestPreview from '../BookingRequestPreview/BookingRequestPreview';
import Tooltip, { HORIZONTAL_ATTACHMENTS, VERTICAL_ATTACHMENTS } from '../Tooltip/Tooltip';
import InteractiveCalendarItem from './InteractiveCalendarItem';
import { SERVER_DATE } from '../../constants/formats';
import css from './AvailabilityCalendarItem.css';
import moment from '../../utils/moment/moment';
import Icon from '../Icon/Icon';

export const AVAILABILITY_STATES = {
  AVAILABLE: 'available',
  UNAVAILABLE: 'unavailable',
};

const today = moment();

const CalendarItemInner = (props) => {
  const {
    closePortal: _closePortal,
    verticalAttachment: _verticalAttachment,
    horizontalAttachment: _horziontalAttachment,
    modifiers,
    day,
    classNames,
    ...rest,
  } = props;

  return (
    <div>
      <InteractiveCalendarItem
        { ...rest }
        dayClassName={ css.text }
        modifiers={ modifiers }
        classNames={ classNames }
        day={ day }
      />
      { modifiers.internal && (
        <Icon className={ cx(css.icon, css.iconInternal) } name="appearhere-brackets" />
      ) }
      { !modifiers.internal && modifiers.underOffer && (
        <Icon className={ cx(css.icon, css.iconUnderOffer) } name="clock" />
      ) }
      { !modifiers.internal && !modifiers.underOffer && modifiers.halo && (
        <Icon className={ cx(css.icon, css.iconHalo) } name="star" />
      ) }
    </div>
  );
};

CalendarItemInner.propTypes = {
  closePortal: PropTypes.func,
  verticalAttachment: PropTypes.bool,
  horizontalAttachment: PropTypes.bool,
  modifiers: PropTypes.object,
  day: momentPropTypes.momentObj,
  classNames: PropTypes.object,
};

export default class AvailabilityCalendarItem extends Component {
  static propTypes = {
    day: momentPropTypes.momentObj,
    modifiers: PropTypes.object,
    classNames: PropTypes.object,
    highlightedDates: PropTypes.arrayOf(momentPropTypes.momentObj),
    meta: PropTypes.object,
  };

  static defaultProps = {
    day: today,
    classNames: {},
    modifiers: {},
    meta: {},
    highlightedDates: [],
  };

  constructor(props) {
    super(props);

    const lookupDate = props.day ? props.day.format(SERVER_DATE) : null;
    const dayMeta = props.meta[lookupDate];

    if (dayMeta && dayMeta.bookingRequests && dayMeta.bookingRequests.length) {
      this.state = {
        showTooltip: false,
      };
    } else {
      this.state = {};
    }

    this.handleMouseOver = debounce(75, this.handleMouseOver, {
      leading: true,
    });
  }

  /* eslint-disable no-undef */
  componentDidMount() {
    window.addEventListener('mouseover', this.handleMouseOver);
  }

  componentWillUnmount() {
    window.removeEventListener('mouseover', this.handleMouseOver);
  }
  /* eslint-enable no-undef */

  handleMouseOver = (e) => {
    const targetElm = this.tooltipComponent &&
      this.tooltipComponent.target &&
      findDOMNode(this.tooltipComponent.target);

    const tooltipElm = this.tooltipComponent &&
      this.tooltipComponent.tooltip &&
      findDOMNode(this.tooltipComponent.tooltip);

    this.setState(() => {
      if (
        (targetElm && targetElm.contains(e.target)) ||
        (tooltipElm && tooltipElm.contains(e.target))
      ) {
        return {
          showTooltip: true,
        };
      }

      return {
        showTooltip: false,
      };
    });
  };

  render() {
    const {
      day,
      modifiers: modifiersProp,
      classNames: classNamesProp,
      meta,
      highlightedDates,
      ...rest,
    } = this.props;

    const lookupDate = day ? day.format(SERVER_DATE) : null;
    const dayMeta = meta[lookupDate];

    // for some reason, wrapping the calendar item in the tooltip component causes us
    // to close track of the props that `InteractiveCalendarItem` generates ;~;
    const modifiers = {
      highlighted: day && highlightedDates.some(date => day.isSame(date, 'day')),
      ...modifiersProp,
    };

    if (dayMeta) {
      const {
        state,
        halo,
        selected,
        void: isVoid,
        bookingRequests,
      } = dayMeta;

      const internal = bookingRequests &&
        bookingRequests.some(request => request.complete);
      const underOffer = bookingRequests &&
        bookingRequests.some(request => !request.complete);

      const stateModifiers = Object.assign({}, modifiers, {
        availabilityCalendarItem: true,
        available: state === AVAILABILITY_STATES.AVAILABLE,
        unavailable: state === AVAILABILITY_STATES.UNAVAILABLE,
        void: isVoid,
        halo,
        selected,
        internal,
        underOffer,
      });

      const classNames = {
        availabilityCalendarItem: css.availabilityCalendarItem,
        withDate: css.withDate,
        selected: css.selected,
        available: css.available,
        unavailable: css.unavailable,
        halo: css.halo,
        internal: css.internal,
        underOffer: css.underOffer,
        void: css.void,
        highlighted: css.highlighted,
        ...classNamesProp,
      };

      return bookingRequests ? (
        <div className={ css.root }>
          <Tooltip
            targetClassName={ css.target }
            ref={ (c) => { this.tooltipComponent = c; } }
            verticalAttachment={ VERTICAL_ATTACHMENTS.TOP }
            horizontalAttachment={ HORIZONTAL_ATTACHMENTS.CENTER }
            variant="light"
            active={ this.state.showTooltip }
            target={ (
              <CalendarItemInner
                { ...rest }
                day={ day }
                modifiers={ stateModifiers }
                classNames={ classNames }
              />
            ) }
          >
            <BookingRequestPreview
              className={ css.bookingRequests }
              bookingRequests={ bookingRequests }
            />
          </Tooltip>
        </div>
      ) : (
        <CalendarItemInner
          { ...rest }
          day={ day }
          modifiers={ stateModifiers }
          classNames={ classNames }
        />
      );
    }

    return (
      <InteractiveCalendarItem { ...rest } day={ day } modifiers={ modifiers } />
    );
  }
}