import React, { Component } from 'react';
import cx from 'classnames';
import dedent from 'dedent';

import Specimen from '../../../components/Specimen/Specimen';
import { D, H, T, C, Note, Placeholder } from '../../../components/Scaffold/Scaffold';
import ModalAnimator from '../../../../components/Modal/ModalAnimator';
import Window, { WindowTitle } from '../../../../components/Modal/Window';
import WithCross from '../../../../components/Modal/WithCross';
import Btn from '../../../../components/Btn/Btn';
import Markdown from '../../../../components/Markdown/Markdown';
import exampleContent from './modal-content.md';

import shared from '../../../shared.css';
import { markdown } from '../../../typography.css';
import css from './Modals.css';
import m from '../../../../globals/modifiers.css';

export default class ModalDocumentation extends Component {
  state = {
    showAnimator: false,
    showWindow: false,
    showWindowDark: false,
    showWithCross: false,
    showWithCrossDark: false,
  };

  toggleModal = (id) => {
    this.setState((state) => {
      const currentActive = state[id];

      return {
        [id]: !currentActive,
      };
    });
  };

  toggleAnimator = this.toggleModal.bind(this, 'showAnimator');
  toggleWindow = this.toggleModal.bind(this, 'showWindow');
  toggleWindowDark = this.toggleModal.bind(this, 'showWindowDark');
  toggleWithCross = this.toggleModal.bind(this, 'showWithCross');
  toggleWithCrossDark = this.toggleModal.bind(this, 'showWithCrossDark');

  render() {
    const {
      showAnimator,
      showWindow,
      showWindowDark,
      showWithCross,
      showWithCrossDark,
    } = this.state;

    return (
      <div>
        <H level={ 1 }>Modals</H>
        <T elm="p" className={ cx(m.mtr, m.largeI, m.demi) }>
          Modals are a secondary window that allow you to display additional
          information whilst keeping context. Please use sparingly, as modals
          interrupt a users flow.
        </T>
        <D>
          <H level={ 2 }>Modal Animator</H>
          <T elm="p" className={ m.mtr }>
            Use the modal animator to control how the modal window enters and leaves
            the page. By default, the animator fades the window in.
          </T>
          <Note className={ m.mtr }>
            <T elm="p">
              We original wanted to have a more extravagant entrance animation for
              our modal windows. Limitations within iOS Safari however prevent us
              from doing this; at the time of writing you cannot
              animate <C>transform: translate()</C> in conjunction the use
              of <C>-webkit-overflow-scrolling: touch</C>.
            </T>
          </Note>
          <Specimen
            classNames={ {
              root: m.mtr,
            } }
            code={ dedent`
              <ModalAnimator
                active={ this.state.active }
                onClose={ this.closeModal }
              >
                { /* Modal window */ }
              </ModalAnimator>
            ` }
          >
            <Placeholder onClick={ this.toggleAnimator }>
              Trigger modal
            </Placeholder>
            <ModalAnimator active={ showAnimator } onClose={ this.toggleAnimator }>
              <div className={ css.exampleModal }>
                <button onClick={ this.toggleAnimator }>Close</button>
              </div>
            </ModalAnimator>
          </Specimen>
        </D>
        <D>
          <H level={ 2 } className={ shared.componentTitle }>
            Using the standard <C>Window</C> component
          </H>
          <T elm="p" className={ m.mtr }>
            This is an actionable modal. Typically used when an action(s) is
            required by a user.
          </T>
          <Specimen
            classNames={ {
              root: m.mtr,
            } }
            code={ dedent`
              <ModalAnimator
                active={ this.state.active }
                onClose={ this.closeModal }
              >
                <Window
                  header={
                    <WindowTitle>Example modal</WindowTitle>
                  }
                  footer={ (
                    <Btn
                      context="primary"
                      className={ m.widthFull }
                      onClick={ this.closeModal }
                    >
                      Confirm
                    </Btn>
                  ) }
                >
                  { /* Modal content */ }
                </Window>
              </ModalAnimator>
            ` }
          >
            <Placeholder onClick={ this.toggleWindow }>Trigger modal</Placeholder>
            <ModalAnimator
              active={ showWindow }
              onClose={ this.toggleWindow }
            >
              <Window
                header={
                  <WindowTitle>The power of good design</WindowTitle>
                }
                footer={ (
                  <Btn
                    context="primary"
                    className={ m.widthFull }
                    onClick={ this.toggleWindow }
                  >
                    Confirm
                  </Btn>
                ) }
              >
                <Markdown className={ markdown } overrideClassname>{ exampleContent }</Markdown>
              </Window>
            </ModalAnimator>
          </Specimen>
          <H level={ 3 } className={ m.mtLgIi }>
            Dark variant
          </H>
          <T elm="p" className={ m.mtr }>
            If you’re using a modal on a dark interface, use the <C>dark</C> variant.
          </T>
          <Specimen
            classNames={ {
              root: m.mtr,
            } }
            code={ dedent`
              <ModalAnimator
                active={ this.state.active }
                onClose={ this.closeModal }
              >
                <Window variant="dark" ...>
                  { /* Modal content */ }
                </Window>
              </ModalAnimator>
            ` }
          >
            <Placeholder onClick={ this.toggleWindowDark }>Trigger modal</Placeholder>
            <ModalAnimator
              active={ showWindowDark }
              onClose={ this.toggleWindowDark }
            >
              <Window
                variant="dark"
                header={
                  <WindowTitle>The power of good design</WindowTitle>
                }
                footer={ (
                  <Btn
                    context="primary"
                    className={ m.widthFull }
                    onClick={ this.toggleWindowDark }
                  >
                    Confirm
                  </Btn>
                ) }
              >
                <Markdown className={ markdown } overrideClassname>{ exampleContent }</Markdown>
              </Window>
            </ModalAnimator>
          </Specimen>
        </D>
        <D>
          <H level={ 2 } className={ shared.componentTitle }>
            Using the <C>WithCross</C> component
          </H>
          <T elm="p" className={ m.mtr }>
            This is your typical modal. Use to display non actionable messaging
            to a user.
          </T>
          <Specimen
            classNames={ {
              root: m.mtr,
            } }
            code={ dedent`
              <ModalAnimator
                active={ this.state.active }
                onClose={ this.closeModal }
              >
                <WithCross onClick={ this.closeModal }>
                  { /* Modal content */ }
                </WithCross>
              </ModalAnimator>
            ` }
          >
            <Placeholder onClick={ this.toggleWithCross }>Trigger modal</Placeholder>
            <ModalAnimator
              active={ showWithCross }
              onClose={ this.toggleWithCross }
            >
              <WithCross onClose={ this.toggleWithCross }>
                <Markdown className={ markdown } overrideClassname>{ exampleContent }</Markdown>
              </WithCross>
            </ModalAnimator>
          </Specimen>
          <H level={ 3 } className={ m.mtLgIi }>
            Dark variant
          </H>
          <T elm="p" className={ m.mtr }>
            Similarly with the <C>Window</C> component, you should use the <C>dark</C> variant
            when using this component on a dark interface.
          </T>
          <Specimen
            classNames={ {
              root: m.mtr,
            } }
            code={ dedent`
              <ModalAnimator
                active={ this.state.active }
                onClose={ this.closeModal }
              >
                <WithCross
                  variant="dark"
                  onClose={ this.closeModal }
                >
                  { /* Modal content */ }
                </WithCross>
              </ModalAnimator>
            ` }
          >
            <Placeholder onClick={ this.toggleWithCrossDark }>Trigger modal</Placeholder>
            <ModalAnimator
              active={ showWithCrossDark }
              onClose={ this.toggleWithCrossDark }
            >
              <WithCross variant="dark" onClose={ this.toggleWithCrossDark }>
                <Markdown className={ markdown } overrideClassname>{ exampleContent }</Markdown>
              </WithCross>
            </ModalAnimator>
          </Specimen>
        </D>
      </div>
    );
  }
}
