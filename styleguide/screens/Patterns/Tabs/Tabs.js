import React from 'react';
import cx from 'classnames';
import dedent from 'dedent';

import Specimen from '../../../components/Specimen/Specimen';
import { D, H, T, A, C } from '../../../components/Scaffold/Scaffold';

import Tabs from '../../../../components/Tabs/Tabs';
import Tab from '../../../../components/Tabs/Tab';

import m from '../../../../globals/modifiers.css';

const TabsDocumentation = () => (
  <div>
    <H level={ 1 }>Tabs</H>
    <T elm="p" className={ cx(m.mtr, m.largeI, m.demi) }>
      <C>Tabs</C> provide an easy way to navigate between views on a single page, where content
      is related. For cases when you need page level tabs, <A href="/patterns/tab-bar"> TabBar</A>.
    </T>
    <D>
      <Specimen
        classNames={ {
          specimenContainer: m.par,
        } }
        code={ dedent`
          <Tabs>
            <Tab label="One">
              Barry Chuckle
            </Tab>
            <Tab label="Two">
              Paul Chuckle
            </Tab>
          </Tabs>
        ` }
      >
        <Tabs>
          <Tab label="One">
            Barry Chuckle
          </Tab>
          <Tab label="Two">
            Paul Chuckle
          </Tab>
        </Tabs>
      </Specimen>
    </D>
  </div>
);

export default TabsDocumentation;
