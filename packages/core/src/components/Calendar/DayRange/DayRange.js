//@flow
import * as React from 'react';
import cx from 'classnames';

import { SELECT_DATE } from '../DayRangePicker/DayRangePicker';
import noop from '../../../utils/noop';
import mergeObjectStrings from '../../../utils/mergeObjectStrings/mergeObjectStrings';
import Icon from '../../Icon/Icon';
import BtnContainer from '../../BtnContainer/BtnContainer';
import { Value, Placeholder } from '../../Form/FormComponents';

import css from './DayRange.css';

type Classnames = {
  root: string,
  container: string,
  btn: string,
  value: string,
  placeholder: string,
  arrow: string,
}

type Props = {
  id: string,
  startLabel: string,
  endLabel: string,
  startDate: string,
  endDate: string,
  startDatePlaceholder: string,
  endDatePlaceholder: string,
  children: React.Node,
  classNames?: Classnames,
  onStartDateClick: Function,
  onEndDateClick: Function,
  inputClassNames?: Object,
  selectDate: SELECT_DATE.START | SELECT_DATE.END | '',
}
export default class DayRange extends React.Component<Props> {

  static defaultProps = {
    onStartDateClick: noop,
    onEndDateClick: noop,
    selectDate: null,
    startDatePlaceholder: 'Start date',
    endDatePlaceholder: 'End date',
  };

  render() {
    const {
      classNames,
      onStartDateClick,
      onEndDateClick,
      startDate,
      endDate,
      startDatePlaceholder,
      endDatePlaceholder,
      selectDate,
      ...rest
    } = this.props;

    const mergedClassNames = mergeObjectStrings(css, classNames);

    return (
      <div className={mergedClassNames.root}>
        <div className={css.container}>
          <BtnContainer
            {...rest}
            onClick={onStartDateClick}
            type="button"
            className={cx(
              mergedClassNames.btn,
              selectDate === SELECT_DATE.START ? mergedClassNames.btnActive : null,
            )}
          >
            {startDate ? (
              <Value className={mergedClassNames.value}>{startDate}</Value>
            ) : (
              <Placeholder className={mergedClassNames.placeholder}>
                {startDatePlaceholder}
              </Placeholder>
            )}
          </BtnContainer>
          <Icon className={mergedClassNames.arrow} name="arrow" />
          <BtnContainer
            onClick={onEndDateClick}
            className={cx(
              mergedClassNames.btn,
              selectDate === SELECT_DATE.END ? mergedClassNames.btnActive : null,
            )}
            type="button"
          >
            {endDate ? (
              <Value className={mergedClassNames.value}>{endDate}</Value>
            ) : (
              <Placeholder className={mergedClassNames.placeholder}>
                {endDatePlaceholder}
              </Placeholder>
            )}
          </BtnContainer>
        </div>
      </div>
    );
  }
}
