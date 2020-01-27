//@flow
import * as React from 'react';
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
}

export default class IconInput extends React.Component<Props> {
  input: any;

  static defaultProps = {
    classNames: {},
    iconSide: 'left',
    iconDimensions: { height: '1em', width: '1em' },
  };

  focus = (): void => {
    this.input.focus();
  };

  blur = (): void => {
    this.input.blur();
  };

  render() {
    const { classNames, iconName, iconSide, iconDimensions, ...rest } = this.props;

    return (
      <div className={cx(css.root, css[iconSide], classNames.root)}>
        <Icon
          className={cx(css.icon, classNames.icon)}
          onClick={this.focus}
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
