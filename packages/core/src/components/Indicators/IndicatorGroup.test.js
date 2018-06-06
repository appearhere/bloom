import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import IndicatorGroup from './IndicatorGroup';

// Test component *must* be a class so refs work
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable class-methods-use-this */
class TestComp extends Component {
  render() {
    return <div />;
  }
}
/* eslint-enable class-methods-use-this */
/* eslint-enable react/prefer-stateless-function */

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<IndicatorGroup>{indicator => indicator({ i: 0 })}</IndicatorGroup>, div);
});

it('outputs children of the correct type', () => {
  let renderedComponent = null;
  const div = document.createElement('div');

  ReactDOM.render(
    <IndicatorGroup Component={TestComp}>
      {indicator =>
        indicator({
          i: 0,
          ref: c => {
            renderedComponent = c;
          },
        })
      }
    </IndicatorGroup>,
    div,
  );

  expect(renderedComponent instanceof TestComp).toBe(true);
});

it('passes an active prop to it’s children', () => {
  let renderedComponent = null;
  const div = document.createElement('div');

  ReactDOM.render(
    <IndicatorGroup Component={TestComp}>
      {indicator =>
        indicator({
          i: 0,
          ref: c => {
            renderedComponent = c;
          },
        })
      }
    </IndicatorGroup>,
    div,
  );

  expect('active' in renderedComponent.props).toBe(true);
});

it('passes the active prop to the correct child', () => {
  let regularComponent = null;
  let activeComponent = null;
  const div = document.createElement('div');

  ReactDOM.render(
    <IndicatorGroup Component={TestComp} activeIndicator={1}>
      {indicator => (
        <span>
          {indicator({
            i: 0,
            ref: c => {
              regularComponent = c;
            },
          })}
          {indicator({
            i: 1,
            ref: c => {
              activeComponent = c;
            },
          })}
        </span>
      )}
    </IndicatorGroup>,
    div,
  );

  expect(regularComponent.props.active).toBe(false);
  expect(activeComponent.props.active).toBe(true);
});

it('throws when it’s children aren’t given indices', () => {
  const div = document.createElement('div');
  let hasThrown = false;

  try {
    ReactDOM.render(
      <IndicatorGroup Component={TestComp}>{indicator => indicator()}</IndicatorGroup>,
      div,
    );
  } catch (e) {
    hasThrown = true;
  }

  expect(hasThrown).toBe(true);
});
