import React from 'react';
import cx from 'classnames';

import Specimen from '../../../components/Specimen/Specimen';
import { D, H, T, C } from '../../../components/Scaffold/Scaffold';

import SocialLinks from '../../../../components/SocialLinks/SocialLinks';

import m from '../../../../globals/modifiers.css';

const SocialLinksDocumentation = () => (
  <div>
    <H level={ 1 }>Social Links</H>
    <T elm="p" className={ cx(m.mtr, m.largeI, m.demi) }>
      When it comes to adding social links or enabling social share, use the
      <C>SocialLinks</C> component.
    </T>
    <D>
      <H level={ 2 }>Default</H>
      <T elm="p" className={ m.mtr }>
        For use on light backgrounds.
      </T>
      <Specimen
        classNames={ {
          root: m.mtr,
          specimenContainer: m.par,
        } }
        code={ '<SocialLinks uri="https://bloom.appearhere.co.uk" />' }
      >
        <SocialLinks uri="https://bloom.appearhere.co.uk" />
      </Specimen>
    </D>
    <D>
      <H level={ 2 }>Dark</H>
      <T elm="p" className={ m.mtr }>
        For use on dark backgrounds.
      </T>
      <Specimen
        classNames={ {
          root: m.mtr,
          specimenContainer: m.par,
        } }
        code={ '<SocialLinks uri="https://bloom.appearhere.co.uk" variant="dark" />' }
        variant="dark"
      >
        <SocialLinks uri="https://bloom.appearhere.co.uk" variant="dark" />
      </Specimen>
    </D>
  </div>
);

export default SocialLinksDocumentation;
