import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

import css from './Star.css';
import Icon from '../../Icon/Icon';
import Radio from '../Radio/Radio';

export default class Star extends Component {
  static propTypes = {
    className: PropTypes.string,
    iconClassName: PropTypes.string,
  }

  focus = () => {
    this.component.focus();
  }

  blur = () => {
    this.component.blur();
  }

  render() {
    const { className, iconClassName, ...rest } = this.props;

    return (
      <Radio
        { ...rest }
        className={ cx(css.root, className) }
        ref={ (c) => {
          this.component = c;
        } }
      >
        <Icon name="star" className={ cx(css.star, iconClassName) } />
      </Radio>
    );
  }
}
