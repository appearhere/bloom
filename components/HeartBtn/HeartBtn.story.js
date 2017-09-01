import React, { Component } from 'react';
import { storiesOf } from '@kadira/storybook';

import HeartBtn from './HeartBtn';

class TestHeartContainer extends Component {
  state = { active: false };

  toggleActive = () => {
    this.setState(({ active }) => ({
      active: !active,
    }));
  };

  render() {
    const { active } = this.state;

    return (
      <HeartBtn
        { ...this.props }
        onClick={ this.toggleActive }
        active={ active }
      />
    );
  }
}

storiesOf('HeartBtn', module)
  .add('Default (dark) variant', () => (
    <TestHeartContainer />
  ))
  .add('Light variant', () => (
    <TestHeartContainer variant="light" />
  ));
