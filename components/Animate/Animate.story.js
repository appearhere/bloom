import React, { Component } from 'react';
import { storiesOf, linkTo } from '@kadira/storybook';

import Circle from './Circle';
import Sunrise from './Sunrise';
import Counter from './Counter';
import GraphOrnament from './GraphOrnament';
import EdgeFade from './EdgeFade';
import SplitWordEntrance from './SplitWordEntrance';
import Typewriter from './Typewriter';
import BackgroundColorSwitcher from './BackgroundColorSwitcher';
import m from '../../globals/modifiers.css';

const sunrisePanels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

class TestSunriseComponent extends Component {
  constructor(props) {
    super(props);

    this.startSunrise = this.startSunrise.bind(this);

    this.state = { start: false };
  }

  startSunrise() {
    this.setState({ start: true });
  }

  render() {
    const { start } = this.state;

    return (
      <div>
        <button onClick={ this.startSunrise }>Start</button>
        <Sunrise percent={ 50 } start={ start }>
          <div
            className={ m.bgPrimary }
            style={ {
              width: '300px',
              height: '400px',
              marginRight: '2%',
              marginTop: '2rem',
            } }
          />
        </Sunrise>
      </div>
    );
  }
}


storiesOf('Animation', module)
  .add('Sunrise', () => (
    <div>
      { sunrisePanels.map(() => (
        <Sunrise percent={ 50 }>
          <div
            className={ m.bgPrimary }
            style={ {
              width: '300px',
              height: '400px',
              marginRight: '2%',
              marginTop: '2rem',
            } }
          />
        </Sunrise>
      )) }
    </div>
  ))
  .add('Sunrise with start', () => (
    <TestSunriseComponent />
  ))
  .add('Swap', () => (
    <div>
      <p>
        See <code>&lt;Swap /&gt;</code> in action in the <code>&lt;GridFader /&gt;</code> component
      </p>
      <button onClick={ linkTo('GridFader', 'First') }>Go to GridFader</button>
    </div>
  ))
  .add('<Counter />', () => (
    <Counter
      className={ m.fontRegular }
      transform={ val => val.toFixed(0) }
      startValue={ 0 }
      endValue={ 33000000 }
    />
  ))
  .add('<Counter />: Naive currency', () => (
    <Counter
      className={ m.fontRegular }
      transform={ val => `£${val.toFixed(0)}` }
      startValue={ 0 }
      endValue={ 33000000 }
    />
  ))
  .add('<Circle />', () => (
    <div style={ { maxWidth: '100px' } }>
      <Circle percent={ 50 } />
      <Circle percent={ 75 } />
      <Circle percent={ 25 } />
      <Circle percent={ 100 } />
    </div>
  ))
  .add('<GraphOrnament />', () => (
    <div style={ { maxWidth: '500px' } }>
      <GraphOrnament animate play />
    </div>
  ))
  .add('<EdgeFade />', () => (
    <div>
      <div style={ { height: '100vh' } } />
      <EdgeFade>
        Text that’ll fade in an out when it reaches a certain distance from the top or bottom edge
      </EdgeFade>
      <div style={ { height: '100vh' } } />
    </div>
  ))
  .add('<SplitWordEntrance />', () => (
    <SplitWordEntrance className={ m.fontLgIii }>
      Introducing Landlord Dashboards
    </SplitWordEntrance>
  ))
  .add('<Typewriter />', () => (
    <Typewriter className={ m.fontLgIii }>
      Introducing Landlord Dashboards
    </Typewriter>
  ))
  .add('BackgroundColorSwitcher', () => (
    <BackgroundColorSwitcher>
      <div data-bgColor="pink" style={ { height: '100vh' } } />
      <div data-bgColor="#ED4A27" style={ { height: '100vh' } } />
      <div data-bgColor="#C02B0B" style={ { height: '100vh' } } />
      <div data-bgColor="#EE8117" style={ { height: '100vh' } } />
      <div data-bgColor="#57D94C" style={ { height: '100vh' } } />
      <div data-bgColor="#28DEBB" style={ { height: '100vh' } } />
      <div data-bgColor="#288ADE" style={ { height: '100vh' } } />
      <div data-bgColor="#9F46CF" style={ { height: '100vh' } } />
      <div data-bgColor="#BD2874" style={ { height: '100vh' } } />
      <div data-bgColor="#daa520" style={ { height: '100vh' } } />
      <div data-bgColor="#696969" style={ { height: '100vh' } } />
      <div data-bgColor="#903840" style={ { height: '100vh' } } />
      <div data-bgColor="#86C6E2" style={ { height: '100vh' } } />
      <div data-bgColor="#6D273B" style={ { height: '100vh' } } />
    </BackgroundColorSwitcher>
  ));