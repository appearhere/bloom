import React from 'react';
import cx from 'classnames';

import { Medallion } from '@appearhere/bloom';
import Specimen from '../../../components/Specimen/Specimen';
import { H, T, C } from '../../../components/Scaffold/Scaffold';

import css from './Medallion.module.css';
import { Modifiers as m } from '@appearhere/bloom';

const MedallionDocumentation = () => (
  <div>
    <H level={1}>Medallion</H>
    <T elm="p" className={cx(m.mtr, m.largeI, m.demi)}>
      Medallions are used to display a numerical value alongside other information, such as a label.
    </T>
    <T elm="p" className={m.mtLgIi}>
      Medallions currently exist in 2 variations, <C>light</C> for dark backgrounds, and <C>dark</C>{' '}
      for lighter backgrounds.
    </T>
    <div className={css.group}>
      <Specimen
        classNames={{
          root: css.specimenRoot,
          specimenContainer: m.par,
        }}
        code={'<Medallion>10</Medallion>'}
        variant="dark"
      >
        <Medallion>10</Medallion>
      </Specimen>
      <Specimen
        classNames={{
          root: css.specimenRoot,
          specimenContainer: m.par,
        }}
        code={'<Medallion variant="dark">10</Medallion>'}
      >
        <Medallion variant="dark">10</Medallion>
      </Specimen>
    </div>
  </div>
);

export default MedallionDocumentation;
