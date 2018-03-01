import React, { Component } from 'react';
import cx from 'classnames';
import dedent from 'dedent';

import Panel from '../../../../components/Panel/Panel';
import DismissablePanel from '../../../../components/DismissablePanel/DismissablePanel';
import Specimen from '../../../components/Specimen/Specimen';
import { H, T, D, C, Note, Placeholder } from '../../../components/Scaffold/Scaffold';

import css from './Panels.css';
import m from '../../../../globals/modifiers.css';

export default class Panels extends Component {
  state = {
    defaultPanel: true,
    blackoutPanel: true,
    successPanel: true,
    errorPanel: true,
  };

  closePanel(panelContext) {
    this.setState({
      [panelContext]: false,
    });
  }

  resetPanels = () => {
    this.setState({
      defaultPanel: true,
      blackoutPanel: true,
      successPanel: true,
      errorPanel: true,
    });
  }

  /* eslint-disable react/jsx-no-bind */
  render() {
    const {
      defaultPanel,
      blackoutPanel,
      successPanel,
      errorPanel,
    } = this.state;

    const panelsClosed = !defaultPanel && !blackoutPanel && !successPanel && !errorPanel;

    return (
      <div>
        <H level={1}>Panels</H>
        <T elm="p" className={cx(m.mtr, m.largeI, m.demi)}>
          Panels are used to push messages to a user.
        </T>
        <D>
          <H level={2}>Standard Panel</H>
          <T elm="p" className={m.mtr}>
            Should be used to display general messaging to a user.
          </T>
          <Specimen
            classNames={{
              root: m.mtr,
              specimenContainer: m.par,
            }}
            code={dedent`
              <Panel>Default</Panel>
              <Panel context="blackout">Blackout</Panel>
              <Panel context="success">Success</Panel>
              <Panel context="error">Error</Panel>
            ` }
          >
            <Panel className={m.mtr}>Default</Panel>
            <Panel context="blackout" className={m.mtr}>Blackout</Panel>
            <Panel context="success" className={m.mtr}>Success</Panel>
            <Panel context="error" className={m.mtr}>Error</Panel>
          </Specimen>
          <Note className={m.mtr}>
            <T elm="p">
              Be sure to provide enough meaning in the content of the panel
              itself, as opposed to relying on the additional context provided
              by the <C>context</C> prop and the colours this provides you. This is to
              ensure that users of assistive technologies are able to fully
              understand the content and are not reliant on the colour of the
              panel.
            </T>
          </Note>
        </D>
        <D>
          <H level={2}>Dismissable Panel</H>
          <T elm="p" className={m.mtr}>
            Use to make the panel dismissible by a user. Available in the same
            contexts as the standard panel.
          </T>
          <Note className={m.mtr}>
            <T elm="p">
              We also provide a <C>Notification</C> component. For now, this
              is an alias of the <C>DismissablePanel</C>. Use it where providing the
              additional context makes sense, i.e., when you are notifying the
              user of something.
            </T>
          </Note>
          <Specimen
            classNames={{
              root: m.mtr,
              specimenContainer: !panelsClosed ? m.par : '',
            }}
            code={dedent`
              <DismissablePanel onClick={ this.closePanel }>
                Default
              </DismissablePanel>
              <DismissablePanel
                context="blackout"
                onClick={ this.closePanel }
              >
                Blackout
              </DismissablePanel>
              <DismissablePanel
                context="success"
                onClick={ this.closePanel }
              >
                Success
              </DismissablePanel>
              <DismissablePanel
                context="error"
                onClick={ this.closePanel }
              >
                Error
              </DismissablePanel>
            ` }
          >
            { defaultPanel && (
              <DismissablePanel
                onClose={this.closePanel.bind(this, 'defaultPanel')}
                className={css.panel}
              >
                Default
              </DismissablePanel>
            ) }
            { blackoutPanel && (
              <DismissablePanel
                onClose={this.closePanel.bind(this, 'blackoutPanel')}
                context="blackout"
                className={css.panel}
              >
                Blackout
              </DismissablePanel>
            ) }
            { successPanel && (
              <DismissablePanel
                onClose={this.closePanel.bind(this, 'successPanel')}
                context="success"
                className={css.panel}
              >
                Success
              </DismissablePanel>
            ) }
            { errorPanel && (
              <DismissablePanel
                onClose={this.closePanel.bind(this, 'errorPanel')}
                context="error"
                className={css.panel}
              >
                Error
              </DismissablePanel>
            ) }
            { panelsClosed && (
              <Placeholder onClick={this.resetPanels}>
                Reset state
              </Placeholder>
            ) }
          </Specimen>
        </D>
      </div>
    );
  }
  /* eslint-enable react/jsx-no-bind */
}
