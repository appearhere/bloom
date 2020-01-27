//@flow
import * as React from 'react';
import cx from 'classnames';

import css from './StarRating.css';
import starCss from '../Star/Star.css';
import Star from '../Star/Star';
import RadioGroup from '../RadioGroup/RadioGroup';

type Props = {
  name: string,
  ratings: Array<number>,
  value: number,
}
export default class StarRating extends React.Component<Props> {
  group: any;

  static defaultProps = {
    ratings: [1, 2, 3, 4, 5],
  };

  focus = (): void => {
    this.group.focus();
  };

  blur = (): void => {
    this.group.blur();
  };

  render() {
    const { name, value, ratings, ...rest } = this.props;

    return (
      <RadioGroup
        {...(rest: any)}
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
