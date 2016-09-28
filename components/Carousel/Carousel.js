import React, { PropTypes, Component, cloneElement } from 'react';
import cx from 'classnames';

import css from './Carousel.css';

// logic is from slick carousel
// An issue occurs when the slidesToScroll + targetSlide is greater
// than slideCount... you'll end up with a row filled with slide0's to fill it
// up. Realistically, it should haave an additional x slides:
//
// [[0,1,2,3,4,5],[6,7]] should render: [[0,1,2,3,4,5],[6,7,0,1,2,3,4]]
function getNewSlide(targetSlide, slideCount, slidesToScroll) {
  if (targetSlide < 0) {
    if (slideCount % slidesToScroll !== 0) {
      return getNewSlide(targetSlide + slideCount, slideCount, slidesToScroll);
    }

    return slideCount + targetSlide;
  } else if (targetSlide >= slideCount) {
    if (slideCount % slidesToScroll !== 0) {
      return getNewSlide(targetSlide - slideCount, slideCount, slidesToScroll);
    }

    return targetSlide - slideCount;
  }

  return targetSlide;
}


export default class Carousel extends Component {
  static propTypes = {
    itemsPerColumn: PropTypes.number,
    items: PropTypes.arrayOf(PropTypes.node),
    infinite: PropTypes.bool,
  };

  static defaultProps = {
    itemsPerColumn: 10,
    infinite: false,
  };

  constructor(props) {
    super(props);

    this.state = {
      lowestVisibleItemIndex: 0,
      animate: null,
    };

    this.showNextColumn = this.showNextColumn.bind(this);
    this.showPrevColumn = this.showPrevColumn.bind(this);
    this.getSlidesToRender = this.getSlidesToRender.bind(this);
  }

  getSlidesToRender() {
    const { itemsPerColumn, items, infinite } = this.props;
    const { lowestVisibleItemIndex } = this.state;
    const slides = [];
    let start = 0;
    let end = items.length - 1;

    if (
      (infinite || (lowestVisibleItemIndex > 0 && lowestVisibleItemIndex < items.length))
      && itemsPerColumn < items.length
    ) {
      // multiply this by two so the the next element's "overhang" comes into view
      // during the animation
      start = lowestVisibleItemIndex - (itemsPerColumn * 2);
      end = lowestVisibleItemIndex + (itemsPerColumn * 2);
    }

    if (!infinite && !(itemsPerColumn > items.length)) {
      start = lowestVisibleItemIndex - (itemsPerColumn * 2);
      end = items.length - 1;
    }

    for (let i = start; i <= end; i += 1) {
      if (!infinite && i < 0) {
        const itemsCountToRender = itemsPerColumn < items.length ? itemsPerColumn : items.length;
        const slideWidth = 100 / itemsCountToRender;
        slides.push(<div
          className={ css.slide }
          style={ {
            width: `${slideWidth}%`,
          } }
        />);
      } else {
        const slideIndex = getNewSlide(i, items.length, itemsPerColumn);
        slides.push(items[slideIndex]);
      }
    }

    return slides;
  }

  showNextColumn() {
    const { itemsPerColumn, items, infinite } = this.props;
    const { lowestVisibleItemIndex, animate } = this.state;

    if (animate || (!infinite && lowestVisibleItemIndex >= items.length - 1)) return;

    const newIndex = lowestVisibleItemIndex + itemsPerColumn;

    this.setState({ animate: 'right' });

    setTimeout(() => {
      this.setState({
        animate: null,
        lowestVisibleItemIndex: getNewSlide(newIndex, items.length, itemsPerColumn),
      });
    }, 500);
  }

  showPrevColumn() {
    const { itemsPerColumn, items, infinite } = this.props;
    const { lowestVisibleItemIndex, animate } = this.state;

    if (animate || (!infinite && lowestVisibleItemIndex <= 0)) return;

    const newIndex = lowestVisibleItemIndex - itemsPerColumn;

    this.setState({ animate: 'left' });

    setTimeout(() => {
      this.setState({
        animate: null,
        lowestVisibleItemIndex: getNewSlide(newIndex, items.length, itemsPerColumn),
      });
    }, 500);
  }

  render() {
    const { itemsPerColumn, items } = this.props;
    const { animate } = this.state;

    const itemsCountToRender = itemsPerColumn < items.length ? itemsPerColumn : items.length;
    const slideWidth = 100 / itemsCountToRender;

    const toRender = this.getSlidesToRender();
    let transform = '';

    if (itemsPerColumn < items.length) {
      transform = 'translate3d(-200%, 0, 0)';

      if (animate === 'right') {
        transform = 'translate3d(-300%, 0, 0)';
      }

      if (animate === 'left') {
        transform = 'translate3d(-100%, 0, 0)';
      }
    }

    return (
      <div>
        <div
          className={ cx(
            css.root,
            animate ? css.animate : null,
          ) }
          style={ {
            transform,
          } }
        >
          { toRender.map((slide, i) => (
            <div
              key={ i }
              className={ css.slide }
              style={ {
                width: `${slideWidth}%`,
              } }
            >
              { cloneElement(slide) }
            </div>
          )) }
        </div>
        <button onClick={ this.showPrevColumn }>Prev</button>
        <button onClick={ this.showNextColumn }>Next</button>
      </div>
    );
  }
}