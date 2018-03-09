import React, { Component } from 'react';
import dedent from 'dedent';

import Specimen from '../../../components/Specimen/Specimen';
import { D, H, T, C } from '../../../components/Scaffold/Scaffold';

import {
  Animate,
  Btn
} from '@appearhere/bloom';

import { Modifiers as m } from '@appearhere/bloom';

export default class Animation extends Component {
  state = {
    roll: false,
  };

  toggleRoll = () => {
    this.setState(({ roll }) => ({
      roll: !roll,
    }));
  };

  render() {
    const { roll } = this.state;

    return (
      <div>
        <H level={1}>Animation</H>
        <D>
          <H level={2}>Roll</H>
          <T elm="p" className={m.mtr}>
            <C>Roll</C> allows us to transition between two elements, pushing one
            out, while pushing another in. This can be useful for highlighting a
            change of state, where the resulting interface change is not obvious.
          </T>
          <Specimen
            classNames={{
              root: m.mtr,
              specimenContainer: m.par,
            }}
            code={dedent`
              <Btn onClick={ this.toggleRoll }>
                <Animate.Roll width="10rem">
                  { this.state.showMap
                    ? <span id="list">Show list</span>
                    : <span id="map">Show map</span>
                  }
                </Animate.Roll>
              </Btn>
            ` }
          >
            <Btn onClick={this.toggleRoll}>
              <Animate.Roll width="10rem">
                { roll
                  ? <span id="list">Show list</span>
                  : <span id="map">Show map</span>
                }
              </Animate.Roll>
            </Btn>
          </Specimen>
        </D>
      </div>
    );
  }
}
