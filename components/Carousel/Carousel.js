import React, { PropTypes, Component } from 'react';

import Inner from './CarouselInner';

export default class Carousel extends Component {
  static propTypes = {
    lowestVisibleItemIndex: PropTypes.number,
    items: PropTypes.array.isRequired,
    itemsPerColumn: PropTypes.number,
  };

  static defaultProps = {
    lowestVisibleItemIndex: 0,
    items: [],
    itemsPerColumn: 1,
  };

  render() {
    const { items, itemsPerColumn, lowestVisibleItemIndex } = this.props;

    const renderPerColumn = itemsPerColumn < items.length ? itemsPerColumn : items.length;
    const slideWidth = 100 / renderPerColumn;

    const position = lowestVisibleItemIndex * (-1 * slideWidth);
    const transform = `translate3d(${position}%, 0, 0)`;

    return (
      <div>
        <Inner
          style={ {
            transform,
          } }
          slideWidth={ slideWidth }
        >
          { items }
        </Inner>
      </div>
    );
  }
}
