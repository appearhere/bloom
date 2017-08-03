import React from 'react';
import { storiesOf } from '@kadira/storybook';

import Hero from '../Hero/Hero';
import m from '../../globals/modifiers.css';
import StickyNode from './StickyNode';

storiesOf('StickyNode', module)
  .add('Individual sticky bar', () => (
    <div>
      <div
        className={m.pa96}
        style={{
          height: '150vh',
          background: 'url(http://subtlepatterns2015.subtlepatterns' +
            '.netdna-cdn.com/patterns/seigaiha.png)'
        }}
      >
        <StickyNode>
          <div className={[m.pal, m.bgPrimary].join(' ')} />
        </StickyNode>
      </div>
    </div>
  ))
  .add('Multiple sticky nodes', () => (
    <div>
      <div
        className={m.pa96}
        style={{
          height: '300vh',
          background: 'url(http://subtlepatterns2015.subtlepatterns' +
            '.netdna-cdn.com/patterns/seigaiha.png)'
        }}
      >
        <StickyNode>
          <div className={[m.pa200, m.bgPrimary].join(' ')} />
        </StickyNode>
        <StickyNode className={m.mt200}>
          <div className={[m.pa200, m.bgBlack].join(' ')} />
        </StickyNode>
      </div>
    </div>
  ))
  .add('Multiple sticky nodes that don’t overlay', () => (
    <div>
      <div
        className={m.pa96}
        style={{
          height: '300vh',
          background: 'url(http://subtlepatterns2015.subtlepatterns' +
            '.netdna-cdn.com/patterns/seigaiha.png)'
        }}
      >
        <StickyNode className="panelOne">
          <div className={[m.pa200, m.bgPrimary].join(' ')} />
        </StickyNode>
        <StickyNode className={m.mt200} top=".panelOne">
          <div className={[m.pa200, m.bgBlack].join(' ')} />
        </StickyNode>
      </div>
    </div>
  ))
  .add('Sticky bar with ’stick limit’', () => (
    <div
      className={m.pa96}
      style={{
        height: '150vh',
        background: 'url(http://subtlepatterns2015.subtlepatterns' +
          '.netdna-cdn.com/patterns/seigaiha.png)'
      }}
    >
      <div style={{height: '500px'}} className={[m.bgWhite, 'boundary'].join(' ')}>
        <StickyNode bottomBoundary=".boundary">
          <div className={[m.pal, m.bgPrimary].join(' ')} />
        </StickyNode>
      </div>
    </div>
  ));
