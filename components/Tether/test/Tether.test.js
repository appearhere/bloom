import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { render } from 'react-dom';

import Tether, { HORIZONTAL_ATTACHMENTS, VERTICAL_ATTACHMENTS } from '../Tether';
import VERTICAL_ATTACHMENT_FIXTURES from './verticalAttachmentFixtures';
import HORIZONTAL_ATTACHMENT_FIXTURES from './horizontalAttachmentFixtures';
import FLUSH_VERTICAL_ATTACHMENT_FIXTURES from './flushVerticalAttachmentFixtures';
import FLUSH_HORIZONTAL_ATTACHMENT_FIXTURES from './flushHorizontalAttachmentFixtures';
import VERTICAL_POSITION_FIXTURES from './verticalPositionFixtures';
import HORIZONTAL_POSITION_FIXTURES from './horizontalPositionFixtures';

/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-multi-comp */
/* eslint-disable class-methods-use-this */
class TestTarget extends Component {
  static propTypes = {
    verticalAttachment: PropTypes.oneOf(Object.keys(VERTICAL_ATTACHMENTS)),
    horizontalAttachment: PropTypes.oneOf(Object.keys(HORIZONTAL_ATTACHMENTS)),
  };

  render() {
    return <button />;
  }
}

class TestChild extends Component {
  static propTypes = {
    verticalAttachment: PropTypes.oneOf(Object.keys(VERTICAL_ATTACHMENTS)),
    horizontalAttachment: PropTypes.oneOf(Object.keys(HORIZONTAL_ATTACHMENTS)),
    closePortal: PropTypes.func,
  };

  render() {
    return <div />;
  }
}
/* eslint-active class-methods-use-this */
/* eslint-active react/no-multi-comp */
/* eslint-active react/prefer-stateless-function */

describe('Tether component', () => {
  it('renders closed without crashing', () => {
    const div = document.createElement('div');
    render(
      <Tether
        target={<TestTarget />}
      >
        <TestChild />
      </Tether>,
      div
    );
  });

  it('renders opened without crashing', () => {
    const div = document.createElement('div');
    render(
      <Tether
        target={<TestTarget />}
        active
      >
        <TestChild />
      </Tether>,
      div
    );
  });
});

describe('Tether target component', () => {
  it('receives attachment props from Tether', () => {
    let target;

    const div = document.createElement('div');
    render(
      <Tether
        target={<TestTarget ref={(c) => { target = c; }} />}
        active
      >
        <TestChild />
      </Tether>,
      div
    );

    expect('horizontalAttachment' in target.props).toBe(true);
    expect('verticalAttachment' in target.props).toBe(true);
    expect('flushHorizontal' in target.props).toBe(true);
    expect('flushVertical' in target.props).toBe(true);
  });

  it('receives active prop from Tether', () => {
    let target;

    const div = document.createElement('div');
    render(
      <Tether
        target={<TestTarget ref={(c) => { target = c; }} />}
        active
      >
        <TestChild />
      </Tether>,
      div
    );

    expect('active' in target.props).toBe(true);
  });
});

describe('Tether child component', () => {
  it('receives attachment props from Tether', () => {
    let child;

    const div = document.createElement('div');
    render(
      <Tether
        target={<TestTarget />}
        active
      >
        <TestChild ref={(c) => { child = c; }} />
      </Tether>,
      div
    );

    expect('horizontalAttachment' in child.props).toBe(true);
    expect('verticalAttachment' in child.props).toBe(true);
    expect('flushHorizontal' in child.props).toBe(true);
    expect('flushVertical' in child.props).toBe(true);
  });
});

const OPTIMAL_ATTACHMENT_TEST_CASES = [
  ...VERTICAL_ATTACHMENT_FIXTURES,
  ...HORIZONTAL_ATTACHMENT_FIXTURES,
  ...FLUSH_VERTICAL_ATTACHMENT_FIXTURES,
  ...FLUSH_HORIZONTAL_ATTACHMENT_FIXTURES,
];

OPTIMAL_ATTACHMENT_TEST_CASES.forEach(({ method, args, expected }) => {
  const isFlush = args.flushHorizontal || args.flushVertical;
  const description = `Tether \`${method}\` given \`${args.attachmentPreference}\`` +
    ` ${isFlush ? 'and is flush' : ''}`;

  describe(description, () => {
    let component;

    const div = document.createElement('div');
    render(
      <Tether
        ref={(c) => { component = c; }}
        target={<TestTarget />}
        active
      >
        <TestChild />
      </Tether>,
      div
    );

    it(`returns an optimal attachment of \`${expected}\``, () => {
      expect(
        component[method](args)
      ).toEqual(expected);
    });
  });
});

const TETHERED_POSITION_TEST_CASES = [
  ...VERTICAL_POSITION_FIXTURES,
  ...HORIZONTAL_POSITION_FIXTURES,
];

TETHERED_POSITION_TEST_CASES.forEach(({ method, args, expected }) => {
  const isFlush = args.flushHorizontal || args.flushVertical;
  const description = `Tether \`${method}\` given \`${args.attachment}\`` +
    ` ${isFlush ? 'and is flush' : ''}`;

  describe(description, () => {
    let component;

    const div = document.createElement('div');
    render(
      <Tether
        ref={(c) => { component = c; }}
        target={<TestTarget />}
        active
      >
        <TestChild />
      </Tether>,
      div
    );

    it(`returns a top value of \`${expected}px\``, () => {
      expect(
        component[method](args)
      ).toEqual(expected);
    });
  });
});
