import React from 'react';
import cx from 'classnames';
import dedent from 'dedent';

import Specimen from '../../../components/Specimen/Specimen';
import { D, H, T } from '../../../components/Scaffold/Scaffold';

import Badge from '../../../../components/Badge/Badge';

import m from '../../../../globals/modifiers.css';

const BadgeDocumentation = () => (
  <div>
    <H level={ 1 }>Badge</H>
    <T elm="p" className={ cx(m.mtr, m.largeI, m.demi) }>
      Badges are used for items which require a label or additional
      categorisation using keywords.
    </T>
    <D>
      <Specimen
        classNames={ {
          specimenContainer: m.par,
        } }
        code={ dedent`
          <Badge>Default</Badge>
          <Badge context="primary">Primary</Badge>
          <Badge context="special">Special</Badge>
        ` }
      >
        <Badge className={ m.mrr }>Default</Badge>
        <Badge context="primary" className={ m.mrr }>Primary</Badge>
        <Badge context="special" className={ m.mrr }>Special</Badge>
      </Specimen>
    </D>
  </div>
);

export default BadgeDocumentation;
