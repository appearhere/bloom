import React, {
  Component,
  PropTypes,
  Children,
  cloneElement,
} from 'react';

import { getChildComponentValidator } from '../../utils/propTypes/propTypes';
import { getInclusiveMomentRange } from '../../utils/moment/moment';
import CalendarMonth from './CalendarMonth';
import InteractiveCalendarItem from './InteractiveCalendarItem';
import noop from '../../utils/noop';

const validateChildComponents = getChildComponentValidator(CalendarMonth);

export const getDates = (startDate, endDate) => {
  if (!endDate) return [startDate];

  return startDate.isAfter(endDate)
    ? getInclusiveMomentRange(endDate, startDate)
    : getInclusiveMomentRange(startDate, endDate);
};

export default class InteractionHandler extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(validateChildComponents),
      validateChildComponents,
    ]).isRequired,
    onInteraction: PropTypes.func,
    DayComponent: PropTypes.func,
  };

  static defaultProps = {
    onInteraction: noop,
    DayComponent: InteractiveCalendarItem,
  };

  state = {
    cachedFirstDate: null,
    firstHighlightedDate: null,
  };

  componentWillReceiveProps() {
    this.setState({ cachedFirstDate: null });
  }

  handleMouseOver = (e, date) => {
    this.setState((currentState) => {
      if (currentState.cachedFirstDate) return { firstHighlightedDate: date };
      return {};
    });
  };

  handleInteraction = (e, date) => {
    this.setState((currentState, props) => {
      const { onInteraction } = props;
      const isFirstMultiClick = e.shiftKey && !currentState.cachedFirstDate;
      const isLastMultiClick = currentState.cachedFirstDate;

      if (isFirstMultiClick) {
        onInteraction(getDates(date));
        return { cachedFirstDate: date };
      } else if (isLastMultiClick) {
        onInteraction(getDates(currentState.cachedFirstDate, date));
        return { cachedFirstDate: null };
      }

      onInteraction(getDates(date));
      return {};
    });
  };

  render() {
    const {
      onInteraction: _onInteraction,
      DayComponent,
      children,
      ...rest,
    } = this.props;
    const { cachedFirstDate, firstHighlightedDate } = this.state;
    const childrenArr = Children.toArray(children);
    const highlightedDates = cachedFirstDate && firstHighlightedDate
      ? getDates(cachedFirstDate, firstHighlightedDate)
      : [];

    return (
      <div>
        { Children.map(childrenArr, child => cloneElement(child, {
          ...rest,
          DayComponent,
          dayProps: {
            ...child.props.dayProps,
            onInteraction: this.handleInteraction,
            onMouseOver: this.handleMouseOver,
            highlightedDates,
          },
        })) }
      </div>
    );
  }
}