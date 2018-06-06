/* globals window: true */
import React from 'react';
import cx from 'classnames';
import dedent from 'dedent';

import Specimen from '../../../components/Specimen/Specimen';
import { D, H, T, C } from '../../../components/Scaffold/Scaffold';

import {
  Navigation
} from '@appearhere/bloom';

import { Modifiers as m } from '@appearhere/bloom';

const TabBarDocumentation = () => (
  <div>
    <H level={1}>Tab Bar</H>
    <T elm="p" className={cx(m.mtr, m.largeI, m.demi)}>
      Provide an easy way to navigate between pages of content with the same hierarchy. Use it to
      provide page or view level navigation, and not at the lower content level. The <C>TabBar</C>{' '}
      should contain no more than five elements.
    </T>
    <D>
      <H level={2}>Default</H>
      <T elm="p" className={m.mtr}>
        Should be used to blend in with a light interface.
      </T>
      <Specimen
        classNames={{
          root: m.mtr,
          specimenContainer: m.par,
        }}
        code={dedent`
          <Navigation.TabBar>
            <Navigation.TabBarItem
              href="#search"
              active
            >
              Search
            </Navigation.TabBarItem>
            <Navigation.TabBarItem
              href="#favourites"
            >
              Favourites
            </Navigation.TabBarItem>
            <Navigation.TabBarItem
              href="#notification"
              active
            >
              Notifications
            </Navigation.TabBarItem>
          </Navigation.TabBar>
        `}
      >
        <Navigation.TabBar>
          <Navigation.TabBarItem href="#search" active>
            Search
          </Navigation.TabBarItem>
          <Navigation.TabBarItem href="#favourites">Favourites</Navigation.TabBarItem>
          <Navigation.TabBarItem href="#notification">Notifications</Navigation.TabBarItem>
        </Navigation.TabBar>
      </Specimen>
      <H level={3} className={m.mtLgIi}>
        As part of a SPA
      </H>
      <T elm="p" className={m.mtr}>
        You can override the default behaviour by providing a different component to the individual
        items. You&#39;re able to pass in any additional props that the new component will need.
      </T>
      <Specimen
        classNames={{
          root: m.mtr,
          specimenContainer: m.par,
        }}
        code={dedent`
          <Navigation.TabBar>
            <Navigation.TabBarItem onClick={ this.navigateToSearch } Component="button">
              Search
            </Navigation.TabBarItem>
            <Navigation.TabBarItem onClick={ this.navigateToFavourites } Component="button">
              Favourites
            </Navigation.TabBarItem>
          </Navigation.TabBar>
        `}
      >
        {/* eslint-disable no-alert */}
        <Navigation.TabBar>
          <Navigation.TabBarItem
            onClick={() => {
              window.alert('Navigating...');
            }}
            Component="button"
            className={m.bgWhite}
          >
            Search
          </Navigation.TabBarItem>
          <Navigation.TabBarItem
            onClick={() => {
              window.alert('Navigating...');
            }}
            Component="button"
            className={m.bgWhite}
          >
            Favourites
          </Navigation.TabBarItem>
        </Navigation.TabBar>
        {/* eslint-enable no-alert */}
      </Specimen>
    </D>
    <D>
      <H level={2}>Dark</H>
      <T elm="p" className={m.mtr}>
        Should be used to stand out from a light interface.
      </T>
      <Specimen
        classNames={{
          root: m.mtr,
          specimenContainer: m.par,
        }}
        code={dedent`
          <Navigation.TabBar variant="dark">
            <Navigation.TabBarItem
              href="#search"
              active
            >
              Search
            </Navigation.TabBarItem>
            <Navigation.TabBarItem
              href="#favourites"
            >
              Favourites
            </Navigation.TabBarItem>
            <Navigation.TabBarItem
              href="#notification"
              active
            >
              Notifications
            </Navigation.TabBarItem>
          </Navigation.TabBar>
        `}
      >
        <Navigation.TabBar variant="dark">
          <Navigation.TabBarItem href="#search" active>
            Search
          </Navigation.TabBarItem>
          <Navigation.TabBarItem href="#favourites">Favourites</Navigation.TabBarItem>
          <Navigation.TabBarItem href="#notification">Notifications</Navigation.TabBarItem>
        </Navigation.TabBar>
      </Specimen>
    </D>
    <D>
      <H level={2}>With icons</H>
      <T elm="p" className={m.mtr}>
        Add icons to the individual items to provide a visual cue to the user as to what to expect
        when they are navigated to the next page.
      </T>
      <Specimen
        classNames={{
          root: m.mtr,
          specimenContainer: m.par,
        }}
        code={dedent`
          <Navigation.TabBar>
            <Navigation.TabBarIconItem
              icon="search"
              href="#search"
              active
            >
              Search
            </Navigation.TabBarIconItem>
            <Navigation.TabBarIconItem
              icon="star"
              href="#favourites"
            >
              Favourites
            </Navigation.TabBarIconItem>
            <Navigation.TabBarIconItem
              icon="notification"
              href="#notification"
            >
              Notifications
            </Navigation.TabBarIconItem>
          </Navigation.TabBar>
        `}
      >
        <Navigation.TabBar>
          <Navigation.TabBarIconItem icon="search" href="#search" active>
            Search
          </Navigation.TabBarIconItem>
          <Navigation.TabBarIconItem icon="star" href="#favourites">
            Favourites
          </Navigation.TabBarIconItem>
          <Navigation.TabBarIconItem icon="notification" href="#notification">
            Notifications
          </Navigation.TabBarIconItem>
        </Navigation.TabBar>
      </Specimen>
    </D>
  </div>
);

export default TabBarDocumentation;
