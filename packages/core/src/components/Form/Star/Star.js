//@flow
import * as React from 'react';
import cx from 'classnames';

import css from './Star.css';
import Icon from '../../Icon/Icon';
import Radio from '../Radio/Radio';

type Props = {
  name: string,
  value: string | number,
  className: string,
  iconClassName: string,
}
export default class Star extends React.Component<Props> {
  component: any;

  focus = () => {
    this.component.focus();
  };

  blur = () => {
    this.component.blur();
  };

  render() {
    const { name, value, className, iconClassName, ...rest } = this.props;

    return (
      <Radio
        {...(rest: any)}
        name={name}
        value={value}
        className={cx(css.root, className)}
        ref={c => {
          this.component = c;
        }}
      >
        <Icon name="star" className={cx(css.star, iconClassName)} />
      </Radio>
    );
  }
}
