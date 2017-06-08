import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

import { SELECT_DATE } from '../DayRangePicker/DayRangePicker';
import noop from '../../../utils/noop';
import Icon from '../../Icon/Icon';
import BtnContainer from '../../BtnContainer/BtnContainer';
import { Value, Placeholder } from '../../Form/FormComponents';

import css from './DayRange.css';

export default class DayRange extends Component {
  static propTypes = {
    id: PropTypes.string,
    startLabel: PropTypes.string,
    endLabel: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    startDatePlaceholder: PropTypes.string,
    endDatePlaceholder: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    onStartDateClick: PropTypes.func,
    onEndDateClick: PropTypes.func,
    inputClassNames: PropTypes.object,
    selectDate: PropTypes.oneOf([SELECT_DATE.START, SELECT_DATE.END, '']),
  };

  static defaultProps = {
    onStartDateClick: noop,
    onEndDateClick: noop,
    selectDate: null,
    startDatePlaceholder: 'Start date',
    endDatePlaceholder: 'End date',
  };

  render() {
    const {
      className,
      onStartDateClick,
      onEndDateClick,
      startDate,
      endDate,
      startDatePlaceholder,
      endDatePlaceholder,
      selectDate,
      ...rest
    } = this.props;

    return (
      <div className={ cx(css.root, className) }>
        <div className={ css.container }>
          <BtnContainer
            { ...rest }
            onClick={ onStartDateClick }
            type="button"
            className={ cx(
              css.btn,
              selectDate === SELECT_DATE.START ? css.btnActive : null,
            ) }
          >
            { startDate
                ? <Value className={ css.value }>{ startDate }</Value>
                : <Placeholder className={ css.placeholder }>{ startDatePlaceholder }</Placeholder>
            }
          </BtnContainer>
          <Icon className={ css.arrow } name="arrow" />
          <BtnContainer
            onClick={ onEndDateClick }
            className={ cx(
              css.btn,
              selectDate === SELECT_DATE.END ? css.btnActive : null,
            ) }
            type="button"
          >
            { endDate
                ? <Value className={ css.value }>{ endDate }</Value>
                : <Placeholder className={ css.placeholder }>{ endDatePlaceholder }</Placeholder>
            }
          </BtnContainer>
        </div>
      </div>
    );
  }
}
