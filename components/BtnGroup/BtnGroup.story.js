import React from 'react';
import { storiesOf } from '@kadira/storybook';
import cx from 'classnames';

import Medallion from '../Medallion/Medallion';
import m from '../../globals/modifiers.css';
import BtnGroup from './BtnGroup';
import Icon from '../Icon/Icon';
import Btn from '../Btn/Btn';

storiesOf('BtnGroup', module)
  .add('Default Button Group', () => (
    <BtnGroup>
      <Btn>
        <Icon className={ m.mrRegular } name="filter" />
        Filters
        <Medallion className={ cx(m.mlRegular, m.fr) }>1</Medallion>
      </Btn>
      <Btn>
        <Icon className={ m.mrRegular } name="map" /> Map
      </Btn>
      <Btn>
        <Icon className={ m.mrRegular } name="bogroll" /> Flush
      </Btn>
    </BtnGroup>
  ))
  .add('Primary Button Group', () => (
    <BtnGroup context="primary">
      <Btn>
        <Icon className={ m.mrRegular } name="filter" />
        Filters
        <Medallion className={ cx(m.mlRegular, m.fr) }>1</Medallion>
      </Btn>
      <Btn>
        <Icon className={ m.mrRegular } name="map" /> Map
      </Btn>
      <Btn>
        <Icon className={ m.mrRegular } name="bogroll" /> Flush
      </Btn>
    </BtnGroup>
  ))
  .add('Action Button Group', () => (
    <BtnGroup context="action">
      <Btn>
        <Icon className={ m.mrRegular } name="filter" />
        Filters
        <Medallion className={ cx(m.mlRegular, m.fr) }>12</Medallion>
      </Btn>
      <Btn>
        <Icon className={ m.mrRegular } name="map" /> Map
      </Btn>
      <Btn>
        <Icon className={ m.mrRegular } name="bogroll" /> Flush
      </Btn>
    </BtnGroup>
  ))
  .add('Danger Button Group', () => (
    <BtnGroup context="danger">
      <Btn>
        <Icon className={ m.mrRegular } name="filter" />
        Filters
        <Medallion className={ cx(m.mlRegular, m.fr) }>124</Medallion>
      </Btn>
      <Btn>
        <Icon className={ m.mrRegular } name="map" /> Map
      </Btn>
      <Btn>
        <Icon className={ m.mrRegular } name="bogroll" /> Flush
      </Btn>
    </BtnGroup>
  ))
  .add('Whiteout Button Group', () => (
    <BtnGroup context="whiteout">
      <Btn>
        <Icon className={ m.mrRegular } name="filter" />
        Filters
        <Medallion variant="dark" className={ cx(m.mlRegular, m.fr) }>9001</Medallion>
      </Btn>
      <Btn>
        <Icon className={ m.mrRegular } name="map" /> Map
      </Btn>
      <Btn>
        <Icon className={ m.mrRegular } name="bogroll" /> Flush
      </Btn>
    </BtnGroup>
  ))
  .add('High priority Button Group', () => (
    <BtnGroup priority="high">
      <Btn>
        <Icon className={ m.mrRegular } name="filter" />
        Filters
        <Medallion className={ cx(m.mlRegular, m.fr) }>1</Medallion>
      </Btn>
      <Btn>
        <Icon className={ m.mrRegular } name="map" /> Map
      </Btn>
      <Btn>
        <Icon className={ m.mrRegular } name="bogroll" /> Flush
      </Btn>
    </BtnGroup>
  ));
