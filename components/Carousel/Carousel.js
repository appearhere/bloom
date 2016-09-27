import React, { PropTypes, Component, cloneElement } from 'react';

import css from './Carousel.css';

const Slide = ({ i }) => (
  <div
    style={ {
      width: '100%',
      height: '300px',
    } }
  >
    <div
      style={ {
        width: '100%',
        height: '300px',
        backgroundColor: 'red',
      } }
    >
      slide { i }
    </div>
  </div>
);

Slide.propTypes = {
  i: PropTypes.number,
};

const slides = [<Slide i={ 0 } />, <Slide i={ 1 } />, <Slide i={ 2 } />, <Slide i={ 3 } />];

function getNewSlide(targetSlide, slideCount, slidesToScroll) {
  if (targetSlide < 0) {
    if (slideCount % slidesToScroll !== 0) {
      return slideCount - (slideCount % slidesToScroll);
    }

    return slideCount + targetSlide;
  } else if (targetSlide >= slideCount) {
    if (slideCount % slidesToScroll !== 0) {
      return 0;
    }

    return targetSlide - slideCount;
  }

  return targetSlide;
}


export default class Carousel extends Component {
  static propTypes = {
    itemsPerColumn: PropTypes.number,
  };

  static defaultProps = {
    itemsPerColumn: 1,
  };

  constructor(props) {
    super(props);

    this.state = {
      lowestVisibleItemIndex: 0,
      animate: null,
    };

    this.showNextColumn = this.showNextColumn.bind(this);
    this.showPrevColumn = this.showPrevColumn.bind(this);
  }

  showNextColumn() {
    const { lowestVisibleItemIndex } = this.state;
    const { itemsPerColumn } = this.props;

    const newIndex = lowestVisibleItemIndex + itemsPerColumn;

    this.setState({ animate: 'right' });

    setTimeout(() => {
      this.setState({
        animate: null,
        lowestVisibleItemIndex: getNewSlide(newIndex, slides.length, itemsPerColumn),
      });
    }, 500);
  }

  showPrevColumn() {
    const { lowestVisibleItemIndex } = this.state;
    const { itemsPerColumn } = this.props;

    const newIndex = lowestVisibleItemIndex - itemsPerColumn;

    this.setState({ animate: 'left' });

    setTimeout(() => {
      this.setState({
        animate: null,
        lowestVisibleItemIndex: getNewSlide(newIndex, slides.length, itemsPerColumn),
      });
    }, 500);
  }

  render() {
    const { itemsPerColumn } = this.props;
    const { lowestVisibleItemIndex, animate } = this.state;

    const toRender = [
      slides[getNewSlide(lowestVisibleItemIndex - 2, slides.length, itemsPerColumn)],
      slides[getNewSlide(lowestVisibleItemIndex - 1, slides.length, itemsPerColumn)],
      slides[getNewSlide(lowestVisibleItemIndex, slides.length, itemsPerColumn)],
      slides[getNewSlide(lowestVisibleItemIndex + 1, slides.length, itemsPerColumn)],
      slides[getNewSlide(lowestVisibleItemIndex + 2, slides.length, itemsPerColumn)],
    ];

    let transform = 'translate3d(-200%, 0, 0)';

    if (animate === 'right') {
      transform = 'translate3d(-300%, 0, 0)';
    }

    if (animate === 'left') {
      transform = 'translate3d(-100%, 0, 0)';
    }

    return (
      <div>
        <div
          className={ [
            css.root,
            animate ? css.animate : null,
          ].join(' ') }
          style={ {
            transform,
          } }
        >
          { toRender.map((slide, i) => (
            <div key={ i } className={ css.slide }>
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