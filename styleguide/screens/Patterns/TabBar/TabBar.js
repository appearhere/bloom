/* globals window: true */
import React from 'react';
import cx from 'classnames';
import dedent from 'dedent';

import Specimen from '../../../components/Specimen/Specimen';
import { D, H, T, C } from '../../../components/Scaffold/Scaffold';

import TabBar from '../../../../components/Navigation/TabBar/TabBar';
import TabBarItem from '../../../../components/Navigation/TabBar/TabBarItem';
import TabBarIconItem from '../../../../components/Navigation/TabBar/TabBarIconItem';

import m from '../../../../globals/modifiers.css';

const TabBarDocumentation = () => (
  <div>
    <H level={1}>Tab Bar</H>
    <T elm="p" className={cx(m.mtr, m.largeI, m.demi)}>
      Provide an easy way to navigate between pages of content with the same
      hierarchy. Use it to provide page or view level navigation, and not at the
      lower content level. The <C>TabBar</C> should contain no more than five elements.
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
          <TabBar>
            <TabBarItem
              href="#search"
              active
            >
              Search
            </TabBarItem>
            <TabBarItem
              href="#favourites"
            >
              Favourites
            </TabBarItem>
            <TabBarItem
              href="#notification"
              active
            >
              Notifications
            </TabBarItem>
          </TabBar>
        ` }
      >
        <TabBar>
          <TabBarItem
            href="#search"
            active
          >
            Search
          </TabBarItem>
          <TabBarItem
            href="#favourites"
          >
            Favourites
          </TabBarItem>
          <TabBarItem
            href="#notification"
          >
            Notifications
          </TabBarItem>
        </TabBar>
      </Specimen>
      <H level={3} className={m.mtLgIi}>As part of a SPA</H>
      <T elm="p" className={m.mtr}>
        You can override the default behaviour by providing a different
        component to the individual items. You&#39;re able to pass in any additional
        props that the new component will need.
      </T>
      <Specimen
        classNames={{
          root: m.mtr,
          specimenContainer: m.par,
        }}
        code={dedent`
          <TabBar>
            <TabBarItem onClick={ this.navigateToSearch } Component="button">
              Search
            </TabBarItem>
            <TabBarItem onClick={ this.navigateToFavourites } Component="button">
              Favourites
            </TabBarItem>
          </TabBar>
        ` }
      >
        { /* eslint-disable no-alert */ }
        <TabBar>
          <TabBarItem
            onClick={() => { window.alert('Navigating...'); }}
            Component="button"
            className={m.bgWhite}
          >
            Search
          </TabBarItem>
          <TabBarItem
            onClick={() => { window.alert('Navigating...'); }}
            Component="button"
            className={m.bgWhite}
          >
            Favourites
          </TabBarItem>
        </TabBar>
        { /* eslint-enable no-alert */ }
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
          <TabBar variant="dark">
            <TabBarItem
              href="#search"
              active
            >
              Search
            </TabBarItem>
            <TabBarItem
              href="#favourites"
            >
              Favourites
            </TabBarItem>
            <TabBarItem
              href="#notification"
              active
            >
              Notifications
            </TabBarItem>
          </TabBar>
        ` }
      >
        <TabBar variant="dark">
          <TabBarItem
            href="#search"
            active
          >
            Search
          </TabBarItem>
          <TabBarItem
            href="#favourites"
          >
            Favourites
          </TabBarItem>
          <TabBarItem
            href="#notification"
          >
            Notifications
          </TabBarItem>
        </TabBar>
      </Specimen>
    </D>
    <D>
      <H level={2}>With icons</H>
      <T elm="p" className={m.mtr}>
        Add icons to the individual items to provide a visual cue to the user
        as to what to expect when they are navigated to the next page.
      </T>
      <Specimen
        classNames={{
          root: m.mtr,
          specimenContainer: m.par,
        }}
        code={dedent`
          <TabBar>
            <TabBarIconItem
              icon="search"
              href="#search"
              active
            >
              Search
            </TabBarIconItem>
            <TabBarIconItem
              icon="star"
              href="#favourites"
            >
              Favourites
            </TabBarIconItem>
            <TabBarIconItem
              icon="notification"
              href="#notification"
            >
              Notifications
            </TabBarIconItem>
          </TabBar>
        ` }
      >
        <TabBar>
          <TabBarIconItem
            icon="search"
            href="#search"
            active
          >
            Search
          </TabBarIconItem>
          <TabBarIconItem
            icon="star"
            href="#favourites"
          >
            Favourites
          </TabBarIconItem>
          <TabBarIconItem
            icon="notification"
            href="#notification"
          >
            Notifications
          </TabBarIconItem>
        </TabBar>
      </Specimen>
    </D>
  </div>
);

export default TabBarDocumentation;
