// @flow
import React, { Component } from 'react';
import cx from 'classnames';

import mergeObjectStrings from '../../../utils/mergeObjectStrings/mergeObjectStrings';
import Input from '../Input/Input';
import Icon from '../../Icon/Icon';
import css from './IconInput.css';

type IconDimensions = {
  height: string,
  width: string,
}

type Props = {
  classNames: Object,
  iconName: string,
  iconSide: 'left' | 'right',
  iconDimensions: IconDimensions,
  onIconClick: () => void,
}

export default class IconInput extends Component<Props> {
  input: HTMLInputElement;

  static defaultProps = {
    classNames: {},
    iconSide: 'left',
    iconDimensions: { height: '1em', width: '1em' },
  };

  iconClick = (): void => {
    this.props.onIconClick ? this.props.onIconClick() : this.input.focus();
  };

  blur = (): void => {
    this.input.blur();
  };

  render() {
    const { classNames, iconName, iconSide, iconDimensions, onIconClick, ...rest } = this.props;

    return (
      <div className={cx(css.root, css[iconSide], classNames.root)}>
        <Icon
          className={cx(css.icon, classNames.icon)}
          onClick={this.iconClick}
          name={iconName}
          dimensions={iconDimensions}
        />
        <Input
          ref={c => {
            this.input = c;
          }}
          classNames={mergeObjectStrings(css, classNames)}
          {...(rest: any)}
        />
      </div>
    );
  }
}
