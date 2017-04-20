/* global jasmine:true */
import React from 'react';
import { render } from 'react-dom';

import DayRangePicker, { SELECT_DATE } from './DayRangePicker';
import moment from '../../../utils/moment/moment';

describe('DayRangePicker', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<DayRangePicker />, div);
  });

  describe('.handleInteraction, selecting a start date', () => {
    it('returns a start date and no end date with empty state', () => {
      const div = document.createElement('div');
      const spy = jasmine.createSpy();
      const selected = moment();
      let component;

      render(
        <DayRangePicker
          ref={ (c) => { component = c; } }
          selectDate={ SELECT_DATE.START }
          onInteraction={ spy }
        />,
        div
      );

      component.handleInteraction(null, selected);

      expect(spy.calls.count()).toEqual(1);
      expect(spy.calls.mostRecent().args[1].isSame(selected)).toBe(true);
      expect(spy.calls.mostRecent().args[2]).toBe(null);
    });

    it('returns a start date when a start date has already been selected', () => {
      const div = document.createElement('div');
      const spy = jasmine.createSpy();
      const startDate = moment().add(-1, 'day');
      const selected = moment();
      let component;

      render(
        <DayRangePicker
          ref={ (c) => { component = c; } }
          selectDate={ SELECT_DATE.START }
          onInteraction={ spy }
          startDate={ startDate }
        />,
        div
      );

      component.handleInteraction(null, selected);

      expect(spy.calls.count()).toEqual(1);
      expect(spy.calls.mostRecent().args[1].isSame(selected)).toBe(true);
      expect(spy.calls.mostRecent().args[2]).toBe(null);
    });

    it('returns the same end date', () => {
      const div = document.createElement('div');
      const spy = jasmine.createSpy();
      const startDate = moment().add(-1, 'day');
      const endDate = moment().add(1, 'day');
      const selected = moment();
      let component;

      render(
        <DayRangePicker
          ref={ (c) => { component = c; } }
          selectDate={ SELECT_DATE.START }
          onInteraction={ spy }
          startDate={ startDate }
          endDate={ endDate }
        />,
        div
      );

      component.handleInteraction(null, selected);

      expect(spy.calls.count()).toEqual(1);
      expect(spy.calls.mostRecent().args[1].isSame(selected)).toBe(true);
      expect(spy.calls.mostRecent().args[2].isSame(endDate)).toBe(true);
    });
  });

  describe('.handleInteraction, selecting an end date', () => {
    it('returns an end date when requested with empty state', () => {
      const div = document.createElement('div');
      const spy = jasmine.createSpy();
      const selected = moment();
      let component;

      render(
        <DayRangePicker
          ref={ (c) => { component = c; } }
          selectDate={ SELECT_DATE.END }
          onInteraction={ spy }
        />,
        div
      );

      component.handleInteraction(null, selected);

      expect(spy.calls.count()).toEqual(1);
      expect(spy.calls.mostRecent().args[1]).toBe(null);
      expect(spy.calls.mostRecent().args[2].isSame(selected)).toBe(true);
    });

    it('returns an end date when new date is after the start date', () => {
      const div = document.createElement('div');
      const spy = jasmine.createSpy();
      const startDate = moment().add(-1, 'day');
      const selected = moment();
      let component;

      render(
        <DayRangePicker
          ref={ (c) => { component = c; } }
          selectDate={ SELECT_DATE.END }
          onInteraction={ spy }
          startDate={ startDate }
        />,
        div
      );

      component.handleInteraction(null, selected);

      expect(spy.calls.count()).toEqual(1);
      expect(spy.calls.mostRecent().args[1].isSame(startDate)).toBe(true);
      expect(spy.calls.mostRecent().args[2].isSame(selected)).toBe(true);
    });

    describe('without an end date selected', () => {
      it('returns an end date when new date is equal to the start date', () => {
        const div = document.createElement('div');
        const spy = jasmine.createSpy();
        const startDate = moment().add(-1, 'day');
        let component;

        render(
          <DayRangePicker
            ref={ (c) => { component = c; } }
            selectDate={ SELECT_DATE.END }
            onInteraction={ spy }
            startDate={ startDate }
          />,
          div
        );

        component.handleInteraction(null, startDate);

        expect(spy.calls.count()).toEqual(1);
        expect(spy.calls.mostRecent().args[1].isSame(startDate)).toBe(true);
        expect(spy.calls.mostRecent().args[2].isSame(startDate)).toBe(true);
      });
    });

    it('returns a start date when the new date is equal to the current end date', () => {
      const div = document.createElement('div');
      const spy = jasmine.createSpy();
      const startDate = moment().add(-1, 'day');
      const selected = moment().add(-2, 'day');
      let component;

      render(
        <DayRangePicker
          ref={ (c) => { component = c; } }
          selectDate={ SELECT_DATE.END }
          onInteraction={ spy }
          startDate={ startDate }
          endDate={ selected }
        />,
        div
      );

      component.handleInteraction(null, selected);

      expect(spy.calls.count()).toEqual(1);
      expect(spy.calls.mostRecent().args[1].isSame(selected)).toBe(true);
      expect(spy.calls.mostRecent().args[2]).toBe(null);
    });

    it('returns a start date when the new date is before the start date', () => {
      const div = document.createElement('div');
      const spy = jasmine.createSpy();
      const startDate = moment().add(-1, 'day');
      const selected = moment().add(-2, 'day');
      let component;

      render(
        <DayRangePicker
          ref={ (c) => { component = c; } }
          selectDate={ SELECT_DATE.END }
          onInteraction={ spy }
          startDate={ startDate }
        />,
        div
      );

      component.handleInteraction(null, selected);

      expect(spy.calls.count()).toEqual(1);
      expect(spy.calls.mostRecent().args[1].isSame(selected)).toBe(true);
      expect(spy.calls.mostRecent().args[2]).toBe(null);
    });
  });
});