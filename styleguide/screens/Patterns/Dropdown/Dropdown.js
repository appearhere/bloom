import React, { Component } from 'react';
import cx from 'classnames';
import dedent from 'dedent';

import Dropdown, { HORIZONTAL_ATTACHMENTS } from '../../../../components/Dropdown/Dropdown';
import Specimen from '../../../components/Specimen/Specimen';
import { H, T, D, A, C, Bq, Note, List, Placeholder } from '../../../components/Scaffold/Scaffold';

import m from '../../../../globals/modifiers.css';
import css from './Dropdown.css';

// eslint-disable-next-line react/prop-types
const Target = ({ onClick, placeholderText }) => (
  <Placeholder onClick={ onClick }>{ placeholderText }</Placeholder>
);

export default class DropdownDocumentation extends Component {
  state = {
    showDropdown: false,
  };

  handleClick = () => {
    this.setState(({ showDropdown }) => ({
      showDropdown: !showDropdown,
    }));
  };

  render() {
    const { showDropdown } = this.state;

    return (
      <div>
        <H level={ 1 }>Dropdown</H>
        <T elm="p" className={ cx(m.mtr, m.largeI, m.demi) }>
          Dropdowns are toggleable overlays. They’re typically used to add additional information or
          functionality to a given element. Only trigger the display of a dropdown using
          a <C>click</C>.
        </T>
        <D>
          <T elm="p" className={ m.mtr }>
            Attach it to a specific element, by proving that element in the <C>target</C> prop
          </T>
          <Specimen
            classNames={ {
              root: m.mtr,
              specimenContainer: css.specimenContainer,
            } }
            code={ dedent`
            <Dropdown
              onClose={ this.handleClick }
              target={ <Target /> }
              active={ this.state.showDropdown }
            >
              <DropdownContent />
            </Dropdown>
          ` }
          >
            <Dropdown
              horizontalAttachment={ HORIZONTAL_ATTACHMENTS.LEFT }
              target={
                <Target
                  onClick={ this.handleClick }
                  placeholderText={ !showDropdown ? 'Open dropdown' : 'Close dropdown' }
                />
              }
              flushHorizontal
              active={ showDropdown }
              targetClassName={ css.target }
              closeOnEsc={ false }
              closeOnOutsideClick={ false }
            >
              <button onClick={ this.handleClick }>Close dropdown</button>
            </Dropdown>
          </Specimen>
          <Note className={ m.mtr }>
            For consistency’s sake, all dropdowns also wrap their content in { ' ' }
            <C>DropdownInner</C> component.
          </Note>
          <T elm="p" className={ m.mtr }>
            Be cautious when using dropdowns, especially the case where you are hiding away
            important functionality from the user. Defaulting to a dropdown, or a form of
            "overflow menu" may result in a "cleaner" interface. However, we’re simply hiding the
            complexity as opposed to solving it. By limiting ourselves from using this sort of
            design, it encourages us to make tough decisions, resulting in much better product.
          </T>
          <T elm="p" className={ m.mtr }>
            In scenario&#39;s where an "overflow menu" is hard to avoid:
          </T>
          <List className={ m.mtr } type="ordered">
            <T elm="li">
              Show as many of the available actions as you can, prioritising the most valuable
              actions first.
            </T>
            <T elm="li">
              Ensure the label for the menu is highly descriptive of what is hidden behind the menu,
              e.g., "More filters" vs "More".
            </T>
            <T elm="li">
              Never mix action types in an overflow menu. This causes confusion for the user,
              as they are unable to predict what is hidden in the dropdown.
            </T>
          </List>
          <Bq
            citation={
              <div className={ m.mtr }>
                <A href="https://medium.freecodecamp.org/stop-the-overuse-of-overflow-menus-5caa4b54e843">
                  Daniel Burka: Stop the use of overflow menus
                </A>
              </div>
            }
            className={ m.mtr }
          >
            Overflow menus seem like the perfect solution. Designers can "take away" complexity and
            leave just the really important bits. You can quickly and easily create a clean looking
            user interface. The trouble with overflow menus is that you didn’t actually take
            anything away, you just obnoxiously obfuscated it.
          </Bq>
        </D>
      </div>
    );
  }
}
