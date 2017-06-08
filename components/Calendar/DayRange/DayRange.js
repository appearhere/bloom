import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

import m from '../../../globals/modifiers.css';
import noop from '../../../utils/noop';
import mergeObjectStrings from '../../../utils/mergeObjectStrings/mergeObjectStrings';
import Icon from '../../Icon/Icon';
import BtnContainer from '../../BtnContainer/BtnContainer';
import InputField from '../../Form/InputField/InputField';

import css from './DayRange.css';

export default class DayRange extends Component {
  static propTypes = {
    id: PropTypes.string,
    startLabel: PropTypes.string,
    endLabel: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    onClick: PropTypes.func,
    inputClassNames: PropTypes.object,
    active: PropTypes.bool,
  };

  static defaultProps = {
    onClick: noop,
  };

  render() {
    const {
      className,
      inputClassNames,
      onClick,
      startDate,
      endDate,
      active,
      ...rest
    } = this.props;

    return (
      <span>
        <Icon name="calendar" />

        <BtnContainer
          { ...rest }
          onClick={ onClick }
          type="button"
          className={ cx(
            css.root,
            active ? css.active : null,
            className,
          ) }
        >

          <InputField
            classNames={ mergeObjectStrings(inputClassNames, {
              root: m.pb0,
            }) }
            id="1"
            valueReplay={ startDate || 'Appear' }
          />
        </BtnContainer>

        <Icon name="arrow" />

        <BtnContainer
          className={ cx(
            css.root,
            active ? css.active : null,
            className,
          ) }
          type="button"
        >

          <InputField
            classNames={ mergeObjectStrings(inputClassNames, {
              root: m.pb0,
            }) }
            id="2"
            valueReplay={ endDate || 'Disappear' }
          />
        </BtnContainer>
      </span>
    );
  }
}
