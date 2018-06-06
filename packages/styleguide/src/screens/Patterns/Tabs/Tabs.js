import React from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import dedent from 'dedent';

import Specimen from '../../../components/Specimen/Specimen';
import { D, H, T, C } from '../../../components/Scaffold/Scaffold';
import {
  Tabs,
  Tab
} from '@appearhere/bloom';

import { Modifiers as m } from '@appearhere/bloom';
import scaffoldCss from '../../../components/Scaffold/Scaffold.module.css';

const TabsDocumentation = () => (
  <div>
    <H level={1}>Tabs</H>
    <T elm="p" className={cx(m.mtr, m.largeI, m.demi)}>
      <C>Tabs</C> provide an easy way to navigate between views on a single page, where content is
      related. For cases when you need page level tabs,{' '}
      <Link className={scaffoldCss.link} to="/patterns/tab-bar">
        TabBar
      </Link>.
    </T>
    <D>
      <Specimen
        classNames={{
          specimenContainer: m.par,
        }}
        code={dedent`
          <Tabs>
            <Tab label="One">
              Barry Chuckle
            </Tab>
            <Tab label="Two">
              Paul Chuckle
            </Tab>
          </Tabs>
        `}
      >
        <Tabs>
          <Tab label="One">Barry Chuckle</Tab>
          <Tab label="Two">Paul Chuckle</Tab>
        </Tabs>
      </Specimen>
    </D>
  </div>
);

export default TabsDocumentation;
