import React from 'react';
import cx from 'classnames';

import Btn from '../../../../components/Btn/Btn';
import Icon from '../../../../components/Icon/Icon';
import ScreenReadable from '../../../../components/ScreenReadable/ScreenReadable';
import Specimen from '../../../components/Specimen/Specimen';
import { H, T, D, A, C } from '../../../components/Scaffold/Scaffold';
import m from '../../../../globals/modifiers.css';

const Accessibility = () => (
  <div>
    <H level={ 1 }>Accessibility</H>
    <T elm="p" className={ cx(m.mtr, m.largeI, m.demi) }>
      It is imperative that, as we build out our applications we strive to make
      them as accessible as possible to all types of users. To aide design and
      development of accessible applications, we’ve compiled a list of
      resources, helper classes and components.
    </T>
    <D>
      <H level={ 2 }>Resources</H>
      <ul className={ m.mtr }>
        <T elm="li" className={ m.mtSmIii }>
          <A href="https://medium.com/statuscode/getting-started-with-website-accessibility-5586c7febc92" target="_blank">
            Getting started with website accessibility
          </A>
          { ' by ' }
          <A href="https://medium.com/@cariefisher" target="_blank">Carie Fisher</A>
        </T>
        <T elm="li" className={ m.mtSmIii }>
          <A href="https://facebook.github.io/react/docs/accessibility.html" target="_blank">
            React documentation on accessibility
          </A>
        </T>
        <T elm="li" className={ m.mtSmIii }>
          <A href="https://snook.ca/archives/html_and_css/hiding-content-for-accessibility" target="_blank">
            Hiding content for accessibility
          </A>
        </T>
      </ul>
    </D>
    <D>
      <H level={ 2 }>ScreenReadable</H>
      <T elm="p" className={ m.mtr }>
        At times, it may be necessary to build an interface without the use of
        supporting text. An example of this is a button which uses an icon for
        its label. In this scenario, it is incredibly hard for screen reader
        users to make sense of said button. In this scenario, use the
        <C>ScreenReadable</C> component to add additional context, which
        the missing label would’ve added. It employs the methods found
        in <A href="https://snook.ca/archives/html_and_css/hiding-content-for-accessibility" target="_blank">
          Hiding content for accessibility
        </A>.
      </T>
      <Specimen
        classNames={ {
          root: m.mtr,
          specimenContainer: m.par,
        } }
        attributes={ [
          'ScreenReadable',
          '<Btn><Icon name="bogroll" /><ScreenReadable>Open menu</ScreenReadable></Btn>',
        ] }
      >
        <Btn><Icon name="bogroll" /><ScreenReadable>Open menu</ScreenReadable></Btn>
      </Specimen>
    </D>
  </div>
);

export default Accessibility;
