import React, { Component } from 'react';
import keyMirror from 'key-mirror';
import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, select } from '@storybook/addon-knobs';

import { Animate, Btn, Modifiers as m } from '@appearhere/bloom';

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
        <button onClick={this.startSunrise}>Start</button>
        <Animate.Sunrise percent={50} start={start}>
          <div
            className={m.bgPrimary}
            style={{
              width: '300px',
              height: '400px',
              marginRight: '2%',
              marginTop: '2rem',
            }}
          />
        </Animate.Sunrise>
      </div>
    );
  }
}

const stories = storiesOf('Animate', module);
stories.addDecorator(withKnobs);

const labels = ['Map', 'Results'];

stories
  .add('Sunrise', () => (
    <div>
      {sunrisePanels.map(() => (
        <Animate.Sunrise percent={50}>
          <div
            className={m.bgPrimary}
            style={{
              width: '300px',
              height: '400px',
              marginRight: '2%',
              marginTop: '2rem',
            }}
          />
        </Animate.Sunrise>
      ))}
    </div>
  ))
  .add('Sunrise with start', () => <TestSunriseComponent />)
  .add('Swap', () => (
    <div>
      <p>
        See <code>&lt;Swap /&gt;</code> in action in the <code>&lt;GridFader /&gt;</code> component
      </p>
      <button onClick={linkTo('GridFader', 'First')}>Go to GridFader</button>
    </div>
  ))
  .add('<Animate.Counter />', () => (
    <Animate.Counter
      className={m.fontRegular}
      transform={val => val.toFixed(0)}
      startValue={0}
      endValue={33000000}
    />
  ))
  .add('<Animate.Counter />: Naive currency', () => (
    <Animate.Counter
      className={m.fontRegular}
      transform={val => `£${val.toFixed(0)}`}
      startValue={0}
      endValue={33000000}
    />
  ))
  .add('<Animate.Circle />', () => (
    <div style={{ maxWidth: '100px' }}>
      <Animate.Circle percent={50} />
      <Animate.Circle percent={75} />
      <Animate.Circle percent={25} />
      <Animate.Circle percent={100} />
    </div>
  ))
  .add('<Animate.GraphOrnament />', () => (
    <div style={{ maxWidth: '500px' }}>
      <Animate.GraphOrnament animate play />
    </div>
  ))
  .add('<Animate.EdgeFade />', () => (
    <div>
      <div style={{ height: '100vh' }} />
      <Animate.EdgeFade>
        Text that’ll fade in an out when it reaches a certain distance from the top or bottom edge
      </Animate.EdgeFade>
      <div style={{ height: '100vh' }} />
    </div>
  ))
  .add('<Animate.SplitWordEntrance />', () => (
    <Animate.SplitWordEntrance className={m.fontLgIii}>Introducing Landlord Dashboards</Animate.SplitWordEntrance>
  ))
  .add('<Animate.Typewriter />', () => (
    <Animate.Typewriter className={m.fontLgIii}>Introducing Landlord Dashboards</Animate.Typewriter>
  ))
  .add('<Animate.Roll />', () => {
    const opts = keyMirror({
      [labels[0]]: null,
      [labels[1]]: null,
    });
    const value = select('Label', opts, labels[0]);

    return (
      <Btn>
        <Animate.Roll width="12rem">
          <span id={value} key={value}>
            {value}
          </span>
        </Animate.Roll>
      </Btn>
    );
  });
