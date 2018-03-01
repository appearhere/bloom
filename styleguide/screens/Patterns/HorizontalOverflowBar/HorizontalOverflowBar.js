import React from 'react';
import cx from 'classnames';
import dedent from 'dedent';
import uniqueId from 'lodash/fp/uniqueId';

import Specimen from '../../../components/Specimen/Specimen';
import { D, H, T, Note, C } from '../../../components/Scaffold/Scaffold';

import { generateArray } from '../../../../utils/array/array';
import HorizontalOverflowBar
  from '../../../../components/Navigation/HorizontalOverflowBar/HorizontalOverflowBar';

import m from '../../../../globals/modifiers.css';

const links = generateArray(12)
  .fill('')
  .map(() => {
    const id = uniqueId('Link ');
    return ({
      key: id,
      href: '#',
      active: false,
      label: id,
    });
  });

const HorizontalOverflowBarDocumentation = () => (
  <div>
    <H level={1}>Horizontal Overflow Bar</H>
    <T elm="p" className={cx(m.mtr, m.largeI, m.demi)}>
      This component is used to display a sub navigation on a webpage, which
      works across all screen sizes.
    </T>
    <D>
      <H level={2}>Default</H>
      <T elm="p" className={m.mtr}>
        By default, both smaller and larger screens are left aligned with
        consistent spacing throughout.
      </T>
      <Specimen
        classNames={{
          root: m.mtr,
          specimenContainer: m.par,
        }}
        code={dedent`
          <HorizontalOverflowBar>
            { link => links.map(props => link(props)) }
          </HorizontalOverflowBar>
        ` }
      >
        <HorizontalOverflowBar>
          { link => links.map(props => link(props)) }
        </HorizontalOverflowBar>
      </Specimen>
      <Note className={m.mtr}>
        <T elm="p">
          For the <C>HorizontalOverflowBar</C> component to work correctly, try not to
          not add too many links. It uses a fixed width of <C>56.25rem</C>
          when laying out the links to provide the overflow and the total width
          of the links must not exceed this.
        </T>
      </Note>
    </D>
    <D>
      <H level={2}>Centered</H>
      <T elm="p" className={m.mtr}>
        Consider using the <C>applyContainerQuery</C> higher-order component
        to override the default styles when the <C>HorizontalOverflowBar</C>&#39;s
        default behaviour is not necessary, e.g., at larger viewport sizes.
      </T>
    </D>
  </div>
);

export default HorizontalOverflowBarDocumentation;
