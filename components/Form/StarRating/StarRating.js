import PropTypes from 'prop-types';
import React, { Component } from 'react';
import cx from 'classnames';

import css from './StarRating.css';
import starCss from '../Star/Star.css';
import Star from '../Star/Star';
import RadioGroup from '../RadioGroup/RadioGroup';

export default class StarRating extends Component {
  static propTypes = {
    name: PropTypes.string,
    ratings: PropTypes.arrayOf(PropTypes.number),
    value: PropTypes.number,
  };

  static defaultProps = {
    ratings: [1, 2, 3, 4, 5],
  };

  focus = () => {
    this.group.focus();
  };

  blur = () => {
    this.group.blur();
  };

  render() {
    const { name, value, ratings, ...rest } = this.props;

    return (
      <RadioGroup
        {...rest}
        ref={c => {
          this.group = c;
        }}
        name={name}
        value={value}
        Input={Star}
      >
        {radio => (
          <span>
            {ratings.map(rating =>
              radio({
                key: `${name}-${rating}`,
                value: rating,
                className: cx(css.starContainer, value >= rating ? starCss.active : null),
              }),
            )}
          </span>
        )}
      </RadioGroup>
    );
  }
}
