import React, { PropTypes, Component } from 'react';
import { storiesOf } from '@kadira/storybook';

import PictureCard from '../Cards/PictureCard/PictureCard';
import Carousel from './Carousel';

import getValidIndex from '../../utils/getValidIndex/getValidIndex';

const numbers = [...Array(10).keys()];

const StorySlide = ({ number }) => (
  <div key={ `slide-${number}` } style={ { paddingLeft: '2%', paddingRight: '2%' } }>
    <PictureCard
      src={ `http://placekitten.com/g/287/4${(number * 2) + 10}` }
      style={ {
        height: '300px',
        verticalAlign: 'middle',
        textAlign: 'center',
        fontSize: '5rem',
      } }
      center
      href="#"
    >
      { number }
    </PictureCard>
  </div>
);
StorySlide.propTypes = { number: PropTypes.number };

class StorySlides extends Component {
  static propTypes = {
    slidesToShow: PropTypes.number,
  };

  static defaultProps = {
    slidesToShow: 1,
  };

  constructor(props) {
    super(props);
    this.state = { lowestVisibleItemIndex: 0 };
  }

  previousSlide = () => {
    const { lowestVisibleItemIndex } = this.state;
    this.goToIndex(lowestVisibleItemIndex - 1);
  }

  nextSlide = () => {
    const { lowestVisibleItemIndex } = this.state;
    this.goToIndex(lowestVisibleItemIndex + 1);
  }

  goToIndex = (i) => {
    const { slidesToShow } = this.props;
    const lowestVisibleItemIndex = getValidIndex(i, numbers.length, slidesToShow);
    this.setState({ lowestVisibleItemIndex });
  }

  render() {
    const { lowestVisibleItemIndex } = this.state;

    /* eslint-disable react/jsx-no-bind */
    return (
      <div>
        <button onClick={ this.previousSlide }>Prev</button>
        <button onClick={ this.nextSlide }>Next</button>
        <button onClick={ this.goToIndex.bind(this, 0) }>Go to 0</button>
        <button onClick={ this.goToIndex.bind(this, 1) }>Go to 1</button>
        <button onClick={ this.goToIndex.bind(this, 2) }>Go to 2</button>
        <button onClick={ this.goToIndex.bind(this, 3) }>Go to 3</button>
        <button onClick={ this.goToIndex.bind(this, 4) }>Go to 4</button>
        <Carousel
          ref={ (c) => { this.carousel = c; } }
          lowestVisibleItemIndex={ lowestVisibleItemIndex }
          { ...this.props }
        >
          { numbers.map(i => <StorySlide number={ i } key={ i } />) }
        </Carousel>
      </div>
    );
    /* eslint-enable react/jsx-no-bind */
  }
}

storiesOf('Carousel', module)
  .add('Default', () => (
    <StorySlides />
  ))
  .add('Muliple in view 💯', () => (
    <StorySlides slidesToShow={ 3 } />
  ))
  .add('Infinite ∞', () => (
    <StorySlides wrapAround />
  ))
  .add('Peaking 🐦', () => (
    <StorySlides peaking />
  ))
  .add('🐦 + ∞ + 💯', () => (
    <StorySlides peaking wrapAround slidesToShow={ 3 } />
  ));
