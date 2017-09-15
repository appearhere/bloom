import React from 'react';

import Badge from '../../../../components/Badge/Badge';

import Specimen from '../../../components/Specimen/Specimen';
import type from '../../../typography.css';
import css from './Badges.css';

const Badges = () => (
  <div>
    <h1 className={ type.h1 }>Badges</h1>
    <p className={ type.p }>
      Badges are used for items which require categorisation using a keyword.
    </p>
    <p className={ type.p }>
      This is your standard badge. They are a subtle yet effective way of grouping components.
    </p>
    <Specimen
      attributes={ [
        'Contexts',
        '<Badge />',
        '<Badge context="primary" />',
        '<Badge context="special" />',
      ] }
      classNames={ {
        root: css.specimenRoot,
        specimenContainer: css.specimenContainer,
      } }
    >
      <Badge className={ css.badge }>Default</Badge>
      <Badge context="primary" className={ css.badge }>Primary</Badge>
      <Badge context="special" className={ css.badge }>Special</Badge>
    </Specimen>
    <p className={ type.p }>
      Hollow bages are used when...
    </p>
    <Specimen
      attributes={ [
        'Hollow Variant',
        '<Badge hollow />',
        '<Badge hollow context="primary" />',
        '<Badge hollow context="special" />',
      ] }
      classNames={ {
        root: css.specimenRoot,
        specimenContainer: css.specimenContainer,
      } }
    >
      <Badge hollow className={ css.badge }>Default</Badge>
      <Badge hollow context="primary" className={ css.badge }>Primary</Badge>
      <Badge hollow context="special" className={ css.badge }>Special</Badge>
    </Specimen>
  </div>
);

export default Badges;
