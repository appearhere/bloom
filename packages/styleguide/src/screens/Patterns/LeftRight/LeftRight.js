import React from 'react';
import cx from 'classnames';
import dedent from 'dedent';

import { LeftRight } from '@appearhere/bloom';
import Specimen from '../../../components/Specimen/Specimen';
import { H, T, A, C } from '../../../components/Scaffold/Scaffold';

import css from './LeftRight.module.css';
import { Modifiers as m } from '@appearhere/bloom';

const LeftRightDocumentation = () => (
  <div>
    <H level={1}>LeftRight</H>
    <T elm="p" className={cx(m.mtr, m.largeI, m.demi)}>
      LeftRight is purely a layout component. It can be used to build thing such as{' '}
      <A
        className={cx(m.largeI, m.demi)}
        href="http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/"
        target="_blank"
      >
        media objects
      </A>. Content in the secondary side will only take up as much horizontal space as required,
      leaving the primary side to fill up the remain space, without wrapping around it.
    </T>
    <T elm="p" className={m.mtLgIi}>
      By default, the largest side is on the left.
    </T>
    <Specimen
      classNames={{
        root: m.mtr,
        specimenContainer: m.par,
      }}
      code={dedent`
        <LeftRight
          leftChildren={ (
            <div className={ css.primary }>Primary</div>
          ) }
          rightChildren={ (
            <div className={ css.secondary }>Secondary</div>
          ) }
        />
      `}
    >
      <LeftRight
        leftChildren={<div className={css.primary}>Primary</div>}
        rightChildren={<div className={css.secondary}>Secondary</div>}
      />
    </Specimen>
    <T elm="p" className={m.mtLgIi}>
      You can swap this using the <C>primarySide</C> prop.
    </T>
    <Specimen
      classNames={{
        root: m.mtr,
        specimenContainer: m.par,
      }}
      code={dedent`
        <LeftRight
          leftChildren={ (
            <div className={ css.secondary }>Secondary</div>
          ) }
          rightChildren={ (
            <div className={ css.primary }>Primary</div>
          ) }
          primarySide="right"
        />
      `}
    >
      <LeftRight
        rightChildren={<div className={css.secondary}>Primary</div>}
        leftChildren={<div className={css.primary}>Secondary</div>}
        primarySide="right"
      />
    </Specimen>
  </div>
);

export default LeftRightDocumentation;
