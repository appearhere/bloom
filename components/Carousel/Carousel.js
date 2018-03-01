import PropTypes from 'prop-types';
import React, { Component, Children } from 'react';
import cx from 'classnames';
import NukaCarousel from '@appearhere/nuka-carousel';

import noop from '../../utils/noop';
import css from './Carousel.css';

export default class Carousel extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.array,
    ]).isRequired,
    className: PropTypes.string,
    lowestVisibleItemIndex: PropTypes.number,
    onChange: PropTypes.func,
    peaking: PropTypes.bool,
    speed: PropTypes.number,

  };

  static defaultProps = {
    lowestVisibleItemIndex: 0,
    peaking: false,
    speed: 300,
    onChange: noop,
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
        const willWrapToEnd = lowestVisibleItemIndex === 0 && nextIndex === childLength - 1;
        const willWrapToStart = lowestVisibleItemIndex === childLength - 1 && nextIndex === 0;

        if (willWrapToEnd) {
          this.carousel.previousSlide();
        } else if (willWrapToStart) {
          this.carousel.nextSlide();
        } else {
          this.carousel.goToSlide(nextIndex);
        }
      });
    }
  }

  handleChange = (lowestVisibleItemIndex) => {
    const { onChange } = this.props;
    this.setState({ lowestVisibleItemIndex }, () => { onChange(lowestVisibleItemIndex); });
  }

  render() {
    const { peaking, children, className, ...rest } = this.props;
    const frameOverflow = peaking ? 'visible' : 'hidden';

    return (
      <div className={cx(css.wrapper, className, peaking ? css.peaking : null)}>
        <NukaCarousel
          ref={(c) => { this.carousel = c; }}
          decorators={[]}
          frameOverflow={frameOverflow}
          peaking={peaking}
          afterSlide={this.handleChange}
          {...rest}
        >
          { children }
        </NukaCarousel>
      </div>
    );
  }
}
