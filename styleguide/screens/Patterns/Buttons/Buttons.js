import React from 'react';
import cx from 'classnames';

import Btn from '../../../../components/Btn/Btn';
import BtnGroup from '../../../../components/BtnGroup/BtnGroup';
import BtnContainer from '../../../../components/BtnContainer/BtnContainer';
import Icon from '../../../../components/Icon/Icon';
import Loader from '../../../../components/Loader/Loader';
import Medallion from '../../../../components/Medallion/Medallion';

import Specimen from '../../../components/Specimen/Specimen';
import { H, T, C, D } from '../../../components/Scaffold/Scaffold';
import css from './Buttons.css';
import m from '../../../../globals/modifiers.css';

const Buttons = () => (
  <div>
    <H level={ 1 }>Buttons</H>
    <T elm="p" className={ cx(m.mtr, m.largeI, m.demi) }>
      Buttons are components which signify that an action will occur when a user
      interacts with them.
    </T>
    <D>
      <H level={ 2 }>Btn</H>
      <T elm="p" className={ m.mtr }>
        This is your standard button. They typically trigger one action when
        interacted with, providing the basis for creating an interactive page.
        Add additional context to them using the <C>context</C> prop.
      </T>
      <Specimen
        classNames={ {
          root: css.specimenRoot,
          specimenContainer: css.specimenContainer,
        } }
        attributes={ [
          'Context',
          '<Btn />',
          '<Btn context="primary" />',
          '<Btn context="action" />',
          '<Btn context="danger" />',
          '<Btn context="whiteout" />',
        ] }
      >
        <Btn className={ css.btn }>Default</Btn>
        <Btn context="primary" className={ css.btn }>Primary</Btn>
        <Btn context="action" className={ css.btn }>Action</Btn>
        <Btn context="danger" className={ css.btn }>Danger</Btn>
        <Btn context="whiteout" className={ css.btn }>Whiteout</Btn>
      </Specimen>
      <H level={ 3 } className={ m.mtLgIi }>Hollow</H>
      <T elm="p" className={ m.mtr }>
        These are our hollow buttons. Use them for secondary actions.
        Most of the time, this will be when used alongside a standard
        button or primary action.
      </T>
      <Specimen
        classNames={ {
          root: css.specimenRoot,
          specimenContainer: css.specimenContainer,
        } }
        attributes={ [
          'Hollow variant',
          '<Btn variant="hollow" />',
          '<Btn variant="hollow" context="primary" />',
          '<Btn variant="hollow" context="action" />',
          '<Btn variant="hollow" context="danger" />',
          '<Btn variant="hollow" context="whiteout" />',
        ] }
      >
        <Btn variant="hollow" className={ css.btn }>Default</Btn>
        <Btn variant="hollow" context="primary" className={ css.btn }>Primary</Btn>
        <Btn variant="hollow" context="action" className={ css.btn }>Action</Btn>
        <Btn variant="hollow" context="danger" className={ css.btn }>Danger</Btn>
        <Btn variant="hollow" context="whiteout" className={ css.btn }>Whiteout</Btn>
      </Specimen>
      <H level={ 3 } className={ m.mtLgIi }>Subtle</H>
      <T elm="p" className={ m.mtr }>
        These are our subtle buttons. Use them for when the action is not
        overly important and should blend into its surroundings.
      </T>
      <Specimen
        classNames={ {
          root: css.specimenRoot,
          specimenContainer: css.specimenContainer,
        } }
        attributes={ [
          'Subtle variant',
          '<Btn variant="subtle" />',
          '<Btn variant="subtle" context="primary" />',
          '<Btn variant="subtle" context="action" />',
          '<Btn variant="subtle" context="danger" />',
          '<Btn variant="subtle" context="whiteout" />',
        ] }
      >
        <Btn variant="subtle" className={ css.btn }>Default</Btn>
        <Btn variant="subtle" context="primary" className={ css.btn }>Primary</Btn>
        <Btn variant="subtle" context="action" className={ css.btn }>Action</Btn>
        <Btn variant="subtle" context="danger" className={ css.btn }>Danger</Btn>
        <Btn variant="subtle" context="whiteout" className={ css.btn }>Whiteout</Btn>
      </Specimen>
      <H level={ 3 } className={ m.mtLgIi }>Icon</H>
      <T elm="p" className={ m.mtr }>
        Adding an icon is as simple as using the icon component within the
        button’s label. Icons should always placed on the left, and have a
        margin of <C>1rem</C> applied to their right.
      </T>
      <Specimen
        classNames={ {
          root: css.specimenRoot,
          specimenContainer: css.specimenContainer,
        } }
        attributes={ [
          'With an icon',
          '<Btn><Icon name="bogroll" className={ m.mrr } />Default</Btn>',
        ] }
      >
        <Btn className={ css.btn }>
          <Icon name="bogroll" className={ m.mrr } />
          Default
        </Btn>
      </Specimen>
      <H level={ 3 } className={ m.mtLgIi }>Loading</H>
      <T elm="p" className={ m.mtr }>
        When adding a loader, apply the same rules as a regular icon.
      </T>
      <Specimen
        classNames={ {
          root: css.specimenRoot,
          specimenContainer: css.specimenContainer,
        } }
        attributes={ [
          'With a loader',
          '<Btn><Loader className={ m.mrr } />Default</Btn>',
        ] }
      >
        <Btn className={ css.btn }>
          <Loader className={ m.mrr } />
          Default
        </Btn>
      </Specimen>
      <H level={ 3 } className={ m.mtLgIi }>Medalion</H>
      <T elm="p" className={ m.mtr }>
        Similarly to icons and loaders, medallions can also be added to buttons.
        These must be placed on the right hand side of the label, and have a
        margin of <C>1rem</C> applied to their left.
      </T>
      <Specimen
        classNames={ {
          root: css.specimenRoot,
          specimenContainer: css.specimenContainer,
        } }
        attributes={ [
          'With a medallion',
          '<Btn>Default<Medallion className={ m.mlr }>1</Medallion></Btn>',
        ] }
      >
        <Btn className={ css.btn }>
          Default
          <Medallion className={ m.mlr }>1</Medallion>
        </Btn>
      </Specimen>
      <H level={ 3 } className={ m.mtLgIi }>Wide</H>
      <T elm="p" className={ m.mtr }>
        When using one button, there are times you may want it to be full width.
        Use the className prop to achieve this.
      </T>
      <Specimen
        classNames={ {
          root: css.specimenRoot,
          specimenContainer: cx(css.specimenContainer, m.par),
        } }
        attributes={ [
          'Full width',
          '<Btn className={ m.widthFull }>Default</Btn>',
        ] }
      >
        <Btn className={ m.widthFull }>Default</Btn>
      </Specimen>
      <H level={ 3 } className={ m.mtLgIi }>Disabled</H>
      <T elm="p" className={ m.mtr }>
        Disable the button like you would any supported HTML element.
      </T>
      <Specimen
        classNames={ {
          root: css.specimenRoot,
          specimenContainer: css.specimenContainer,
        } }
        attributes={ [
          'Disabled',
          '<Btn disabled>Default</Btn>',
          '<Btn disabled variant="hollow" context="primary">Primary</Btn>',
          '<Btn disabled variant="subtle" context="action">Action</Btn>',
        ] }
      >
        <Btn disabled className={ css.btn }>Default</Btn>
        <Btn disabled variant="hollow" context="primary" className={ css.btn }>Primary</Btn>
        <Btn disabled variant="subtle" context="action" className={ css.btn }>Action</Btn>
      </Specimen>
    </D>
    <D>
      <H level={ 2 } className={ css.componentTitle }>BtnGroup</H>
      <T elm="p" className={ m.mtr }>
        Use button groups when adding a set of actions with a common theme to
        a page. They are only designed to work with buttons with no variant
        applied, and will apply their own context to each button.
      </T>
      <Specimen
        classNames={ {
          root: css.specimenRoot,
          specimenContainer: css.specimenContainer,
        } }
        attributes={ [
          'Context',
          '<BtnGroup><Btn>Default</Btn><Btn>Default</Btn></BtnGroup>',
          '<BtnGroup context="primary">...</BtnGroup>',
          '<BtnGroup context="action">...</BtnGroup>',
          '<BtnGroup context="danger">...</BtnGroup>',
          '<BtnGroup context="whiteout">...</BtnGroup>',
        ] }
      >
        <BtnGroup className={ css.btn }>
          <Btn>Default</Btn><Btn>Default</Btn>
        </BtnGroup>
        <BtnGroup className={ css.btn } context="primary">
          <Btn>Primary</Btn><Btn>Primary</Btn>
        </BtnGroup>
        <BtnGroup className={ css.btn } context="action">
          <Btn>Action</Btn><Btn>Action</Btn>
        </BtnGroup>
        <BtnGroup className={ css.btn } context="danger">
          <Btn>Danger</Btn><Btn>Danger</Btn>
        </BtnGroup>
        <BtnGroup className={ css.btn } context="whiteout">
          <Btn>Whiteout</Btn><Btn>Whiteout</Btn>
        </BtnGroup>
      </Specimen>
    </D>
    <D>
      <H level={ 2 } className={ css.componentTitle }>BtnContainer</H>
      <T elm="p" className={ m.mtr }>
        The button container is for the moments when you really want to use a div.
        Use it as a way of correctly marking up parts of the application that
        need to be interactive, but need custom styling.
      </T>
      <Specimen
        classNames={ {
          root: css.specimenRoot,
          specimenContainer: css.specimenContainer,
        } }
        attributes={ [
          'Context',
          '<BtnContainer>a clickable div</BtnContainer>',
        ] }
      >
        <BtnContainer className={ css.btn }>a clickable div</BtnContainer>
      </Specimen>
    </D>
  </div>
);

export default Buttons;
