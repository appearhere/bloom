import React from 'react';

import Btn from '../../../../components/Btn/Btn';
// import BtnGroup from '../../../../components/BtnGroup/BtnGroup';
// import BtnContainer from '../../../../components/BtnContainer/BtnContainer';
import Icon from '../../../../components/Icon/Icon';
import Loader from '../../../../components/Loader/Loader';

import Specimen from '../../../components/Specimen/Specimen';
import { h1 } from '../PatternsStyles';
import type from '../../../typography.css';
import css from './Buttons.css';

// - Default variant
// - Hollow variant
// - Subtle variant
// - High priority
// - Disabled
// - with Icon
// - with Loader

/**
 * TODO: Add disabled styles to buttons
 */
const Buttons = () => (
  <div>
    <h1 className={ h1 }>Buttons</h1>
    <p>
      Buttons are components which signify that an action will occur when a user interacts with them.
    </p>
    <h2>Btn</h2>
    <p>
      This is your standard button. They typically trigger one action when interacted with, providing the basis for creating an interactive page. You should add additional context to them, based on the action they will perform. E.g., use the primary context where it is the main action we want the user to perform. Use the danger context for when the action is <strong>destructive</strong>.
    </p>
    <Specimen
      classNames={ {
        root: css.specimenRoot,
        specimenContainer: css.specimenContainer,
      } }
      attributes={ [
        'Contexts',
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
    <p className={ type.p }>
      These are our hollow buttons. Use them for secondary actions. Most of the time, this will be when used alongside a standard button or primary action.
    </p>
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
    <p>
      These are our subtle buttons. Use them for when the action is not overly important and should blend into its surroundings
    </p>
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
    <p>
      Adding an icon is as simple as using the {'<Icon />'} component within the button's label. Icons should <strong>always</strong> placed on the left, and have a margin of `1rem` applied to their right
    </p>
    <Specimen
      classNames={ {
        root: css.specimenRoot,
        specimenContainer: css.specimenContainer,
      } }
    >
      <Btn className={ css.btn }>
        <Icon name="bogroll" />
        Default
      </Btn>
    </Specimen>
    <p>
      When adding a loader, apply the same rules as a regular icon.
    </p>
    <Specimen
      classNames={ {
        root: css.specimenRoot,
        specimenContainer: css.specimenContainer,
      } }
    >
      <Btn>
        <Loader />
        Default
      </Btn>
    </Specimen>
  </div>
);

export default Buttons;
