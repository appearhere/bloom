/* global jasmine:true */
import React from 'react';
import { render } from 'react-dom';
import moment from 'moment';

import InteractionHandler, { getDates } from './InteractionHandler';
import CalendarMonth from '../CalendarMonth/CalendarMonth';

jest.mock('../CalendarMonth/CalendarMonth');

describe('getDates', () => {
  const dayOne = moment().startOf('day');
  const dayTwo = moment().startOf('day').add(1, 'day');
  const dayThree = moment().startOf('day').add(2, 'day');

  const momentRange = [dayOne, dayTwo, dayThree];

  it('returns an array comprised of only the supplied date', () => {
    expect(getDates(dayOne)).toEqual([dayOne]);
  });

  it('returns an array of moments inclusive of the supplied dates', () => {
    expect(getDates(dayOne, dayThree)).toEqual(momentRange);
  });

  it('returns an chronologically ordered array of moments inclusive of the supplied dates', () => {
    expect(getDates(dayThree, dayOne)).toEqual(momentRange);
  });
});

describe('InteractionHandler', () => {
  it('renders with a date without crashing', () => {
    const div = document.createElement('div');
    render(
      <InteractionHandler>
        <CalendarMonth />
      </InteractionHandler>,
      div
    );
  });

  describe('.handleInteraction', () => {
    it('returns an array comprised of only the supplied date', () => {
      const div = document.createElement('div');
      const spy = jasmine.createSpy();
      const firstDate = moment().startOf('day');
      let component;

      render(
        <InteractionHandler
          ref={ (c) => { component = c; } }
          onInteraction={ spy }
        >
          <CalendarMonth />
        </InteractionHandler>,
        div
      );

      component.handleInteraction({}, firstDate);

      expect(spy.calls.count()).toEqual(1);
      expect(spy.calls.mostRecent().args[0]).toEqual([firstDate]);
    });

    it('returns an array of dates when doing a multi interaction with the shift key held', () => {
      const div = document.createElement('div');
      const spy = jasmine.createSpy();
      const firstDate = moment().startOf('day');
      const lastDate = moment().add(1, 'days').startOf('day');
      let component;

      render(
        <InteractionHandler
          ref={ (c) => { component = c; } }
          onInteraction={ spy }
        >
          <CalendarMonth />
        </InteractionHandler>,
        div
      );

      component.handleInteraction({
        shiftKey: true,
      }, firstDate);

      expect(spy.calls.count()).toEqual(1);
      expect(spy.calls.mostRecent().args[0]).toEqual([firstDate]);
      expect(component.state.cachedFirstDate).toEqual(firstDate);

      component.handleInteraction({}, lastDate);

      expect(spy.calls.count()).toEqual(2);
      expect(spy.calls.mostRecent().args[0]).toEqual([firstDate, lastDate]);
    });
  });
});