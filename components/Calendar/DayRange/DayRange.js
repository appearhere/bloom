import PropTypes from 'prop-types';
import React, { Component } from 'react';
import cx from 'classnames';

import { SELECT_DATE } from '../DayRangePicker/DayRangePicker';
import noop from '../../../utils/noop';
import mergeObjectStrings from '../../../utils/mergeObjectStrings/mergeObjectStrings';
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
    classNames: PropTypes.shape({
      root: PropTypes.string,
      container: PropTypes.string,
      btn: PropTypes.string,
      value: PropTypes.string,
      placeholder: PropTypes.string,
      arrow: PropTypes.string,
    }),
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
            { startDate ? (
              <Value className={mergedClassNames.value}>{ startDate }</Value>
            ) : (
              <Placeholder className={mergedClassNames.placeholder}>
                { startDatePlaceholder }
              </Placeholder>
            ) }
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
            { endDate ? (
              <Value className={mergedClassNames.value}>{ endDate }</Value>
            ) : (
              <Placeholder className={mergedClassNames.placeholder}>
                { endDatePlaceholder }
              </Placeholder>
            ) }
          </BtnContainer>
        </div>
      </div>
    );
  }
}
