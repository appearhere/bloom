import PropTypes from 'prop-types';
import React, { Component } from 'react';
import cx from 'classnames';

import mergeObjectStrings from '../../../utils/mergeObjectStrings/mergeObjectStrings';
import Input from '../Input/Input';
import Icon from '../../Icon/Icon';
import css from './IconInput.css';

export default class IconInput extends Component {
  static propTypes = {
    classNames: PropTypes.object,
    iconName: PropTypes.string.isRequired,
    iconSide: PropTypes.oneOf(['left', 'right']),
    iconDimensions: PropTypes.shape({
      height: PropTypes.string,
      width: PropTypes.string,
    }),
  };

  static defaultProps = {
    classNames: {},
    iconSide: 'left',
    iconDimensions: { height: '1em', width: '1em' },
  };

  focus = () => {
    this.input.focus();
  };

  blur = () => {
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
          {...rest}
        />
      </div>
    );
  }
}
