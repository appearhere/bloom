import React, { PropTypes, Component, Children } from 'react';
import cx from 'classnames';

import NukaCarousel from '@appearhere/nuka-carousel';

import css from './Carousel.css';

export default class Carousel extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.array,
    ]).isRequired,
    className: PropTypes.string,
    lowestVisibleItemIndex: PropTypes.number,
    peaking: PropTypes.bool,
    speed: PropTypes.number,
  };

  static defaultProps = {
    lowestVisibleItemIndex: 0,
    peaking: false,
    speed: 300,
  };

  constructor(props) {
    super(props);
    this.state = { lowestVisibleItemIndex: props.lowestVisibleItemIndex };
  }

  componentWillReceiveProps(nextProps) {
    const { lowestVisibleItemIndex } = this.state;
    const nextIndex = nextProps.lowestVisibleItemIndex;

    if (nextIndex !== lowestVisibleItemIndex) {
      this.setState({ lowestVisibleItemIndex: nextIndex }, () => {
        const childLength = Children.count(nextProps.children);
        const wrappingPrev = lowestVisibleItemIndex === 0 && nextIndex === childLength - 1;
        const wrappingNext = lowestVisibleItemIndex === childLength - 1 && nextIndex === 0;

        if (wrappingPrev) {
          this.carousel.previousSlide();
        } else if (wrappingNext) {
          this.carousel.nextSlide();
        } else {
          this.carousel.goToSlide(nextIndex);
        }
      });
    }
  }

  render() {
    const { peaking, children, className, ...rest } = this.props;
    const frameOverflow = peaking ? 'visible' : 'hidden';

    return (
      <div className={ cx(css.wrapper, className, peaking ? css.peaking : null) }>
        <NukaCarousel
          ref={ (c) => { this.carousel = c; } }
          decorators={ [] }
          frameOverflow={ frameOverflow }
          peaking={ peaking }
          { ...rest }
        >
          { children }
        </NukaCarousel>
      </div>
    );
  }
}