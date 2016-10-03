import React, { PropTypes, Component } from 'react';
import { storiesOf } from '@kadira/storybook';
import Carousel from './Carousel';

import getValidIndex from '../../utils/getValidIndex/getValidIndex';

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

const slides = [<Slide i={ 0 } />, <Slide i={ 1 } />, <Slide i={ 2 } />, <Slide i={ 3 } />, <Slide i={ 4 } />, <Slide i={ 5 } />, <Slide i={ 6 } />, <Slide i={ 7 } />];

class TestComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lowestVisibleItemIndex: 0,
      itemsPerColumn: 1,
    }
  }

  goToIndex = (i) => {
    const { itemsPerColumn } = this.state;

    if (i < 0 || i >= slides.length) return;
    const lowestVisibleItemIndex = getValidIndex(i, slides.length, itemsPerColumn);
    this.setState({ lowestVisibleItemIndex });
  }

  render() {
    const { lowestVisibleItemIndex, itemsPerColumn } = this.state;

    return (
      <div style={ { width: '80vW', overflowX: 'visible', margin: '0 auto' } }>
        <Carousel
          lowestVisibleItemIndex={ lowestVisibleItemIndex }
          items={ slides }
          itemsPerColumn={ itemsPerColumn }
        />
        <button onClick={this.goToIndex.bind(this, 0)}>Go to 0</button>
        <button onClick={this.goToIndex.bind(this, 1)}>Go to 1</button>
        <button onClick={this.goToIndex.bind(this, 2)}>Go to 2</button>
        <button onClick={this.goToIndex.bind(this, 3)}>Go to 3</button>
        <button onClick={this.goToIndex.bind(this, 4)}>Go to 4</button>
      </div>
    );
  }
}

storiesOf('Carousel', module)
  .add('Default', () => (
    <TestComponent />
  ));