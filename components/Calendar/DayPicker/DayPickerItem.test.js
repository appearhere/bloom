/* global jasmine:true */
import React from 'react';
import moment from 'moment';
import { render, findDOMNode } from 'react-dom';
import { Simulate } from 'react-dom/test-utils';
import { ENTER } from '../../../constants/keycodes';

import DayPickerItem from './DayPickerItem';

describe('DayPickerItem', () => {
  it('renders with a date without crashing', () => {
    const div = document.createElement('div');
    render(<DayPickerItem />, div);
  });

  describe('.handleInteraction', () => {
    it('fires the `onInteraction` callback when clicked with', () => {
      let component;
      const div = document.createElement('div');
      const spy = jasmine.createSpy();
      const now = moment();

      render(
        <DayPickerItem
          ref={ (c) => { component = c; } }
          day={ now }
          onInteraction={ spy }
        />,
        div
      );

      Simulate.click(findDOMNode(component));
      expect(spy.calls.count()).toEqual(1);
      expect(spy.calls.mostRecent().args[1].isSame(now)).toBe(true);
    });

    it('fires the `onInteraction` callback when touched', () => {
      let component;
      const div = document.createElement('div');
      const spy = jasmine.createSpy();
      const now = moment();

      render(
        <DayPickerItem
          ref={ (c) => { component = c; } }
          day={ now }
          onInteraction={ spy }
        />,
        div
      );

      Simulate.touchEnd(findDOMNode(component));
      expect(spy.calls.count()).toEqual(1);
      expect(spy.calls.mostRecent().args[1].isSame(now)).toBe(true);
    });

    it('fires the `onInteraction` callback when the user pressed `enter`', () => {
      let component;
      const div = document.createElement('div');
      const spy = jasmine.createSpy();
      const now = moment();

      render(
        <DayPickerItem
          ref={ (c) => { component = c; } }
          day={ now }
          onInteraction={ spy }
        />,
        div
      );

      Simulate.keyUp(findDOMNode(component), { keyCode: ENTER });
      expect(spy.calls.count()).toEqual(1);
      expect(spy.calls.mostRecent().args[1].isSame(now)).toBe(true);
    });

    it('doesn\'t fire the `onInteraction` callback the user presses any other key besides `enter`',
      () => {
        let component;
        const div = document.createElement('div');
        const spy = jasmine.createSpy();
        const now = moment();

        render(
          <DayPickerItem
            ref={ (c) => { component = c; } }
            day={ now }
            onInteraction={ spy }
          />,
          div
        );

        Simulate.keyUp(findDOMNode(component), { keyCode: 1 });
        expect(spy.calls.count()).toEqual(0);
      }
    );

    it('doesn\'t fire the `onInteraction` callback when interacted with whilst disabled', () => {
      let component;
      const div = document.createElement('div');
      const spy = jasmine.createSpy();
      const now = moment();

      render(
        <DayPickerItem
          ref={ (c) => { component = c; } }
          day={ now }
          onInteraction={ spy }
          getDayState={ () => ({
            isDisabled: true,
          }) }
        />,
        div
      );

      Simulate.click(findDOMNode(component));
      expect(spy.calls.count()).toEqual(0);
    });
  });

  describe('.handleHighlight', () => {
    it('fires the `onHighlight` callback when the mouse passes over', () => {
      let component;
      const div = document.createElement('div');
      const spy = jasmine.createSpy();
      const now = moment();

      render(
        <DayPickerItem
          ref={ (c) => { component = c; } }
          day={ now }
          onHighlight={ spy }
        />,
        div
      );

      Simulate.mouseOver(findDOMNode(component));
      expect(spy.calls.count()).toEqual(1);
      expect(spy.calls.mostRecent().args[1].isSame(now)).toBe(true);
    });

    it('fires the `onHighlight` callback when it is given focus', () => {
      let component;
      const div = document.createElement('div');
      const spy = jasmine.createSpy();
      const now = moment();

      render(
        <DayPickerItem
          ref={ (c) => { component = c; } }
          day={ now }
          onHighlight={ spy }
        />,
        div
      );

      Simulate.focus(findDOMNode(component));
      expect(spy.calls.count()).toEqual(1);
      expect(spy.calls.mostRecent().args[1].isSame(now)).toBe(true);
    });

    it('doesn\'t fire the `onHighlight` callback when interacted with whilst disabled', () => {
      let component;
      const div = document.createElement('div');
      const spy = jasmine.createSpy();
      const now = moment();

      render(
        <DayPickerItem
          ref={ (c) => { component = c; } }
          day={ now }
          onHighlight={ spy }
          getDayState={ () => ({
            isDisabled: true,
          }) }
        />,
        div
      );

      Simulate.mouseOver(findDOMNode(component));
      expect(spy.calls.count()).toEqual(0);
    });
  });
});
