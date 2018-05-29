import React from 'react';
import cx from 'classnames';
import dedent from 'dedent';

import Specimen from '../../../components/Specimen/Specimen';
import { D, H, T, C } from '../../../components/Scaffold/Scaffold';

import { Figure } from '@appearhere/bloom';

import { Modifiers as m } from '@appearhere/bloom';
import css from './Figure.module.css';

import conceptStore from './concept-store.jpg';

const FigureDocumentation = () => (
  <div>
    <H level={1}>Figure</H>
    <T elm="p" className={cx(m.mtr, m.largeI, m.demi)}>
      When it comes to displaying supporting content on an image use the <C>figure</C> component.
    </T>
    <D>
      <Specimen
        classNames={{
          specimenContainer: m.par,
        }}
        code={dedent`
          <Figure caption="As a team, we launch stores of our own">
            <img />
          </Figure>
        `}
      >
        <Figure caption="As a team, we launch stores of our own" className={css.figure}>
          <img src={conceptStore} className={css.figureImage} alt="Appear Here concept store" />
        </Figure>
      </Specimen>
    </D>
  </div>
);

export default FigureDocumentation;
