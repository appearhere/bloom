import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import dedent from 'dedent';

import Specimen from '../../../components/Specimen/Specimen';
import { D, H, T, C } from '../../../components/Scaffold/Scaffold';
import Tooltip from '../../../../components/Tooltip/Tooltip';
import { HORIZONTAL_ATTACHMENTS, VERTICAL_ATTACHMENTS } from '../../../../components/Tether/Tether';

import m from '../../../../globals/modifiers.css';
import css from './Tooltip.css';
import scaffoldCss from '../../../components/Scaffold/Scaffold.css';

// eslint-disable-next-line react/prop-types
const DefaultTarget = ({ onMouseEnter, onMouseLeave }) => (
  <button
    onMouseEnter={ () => { onMouseEnter('showDefaultTooltip'); } }
    onMouseLeave={ () => { onMouseLeave('showDefaultTooltip'); } }
  >
    Hover on me
  </button>
);

// eslint-disable-next-line react/prop-types
const LightTarget = ({ onMouseEnter, onMouseLeave }) => (
  <button
    onMouseEnter={ () => { onMouseEnter('showLightTooltip'); } }
    onMouseLeave={ () => { onMouseLeave('showLightTooltip'); } }
  >
    Hover on me
  </button>
);

const Content = () => <div>You should click this button, seriously it is great.</div>;

export default class TooltipDocumentation extends Component {
  state = {
    showDefaultTooltip: false,
    showLightTooltip: false,
  };

  handleMouseEnter = (id) => {
    this.setState({
      [id]: true,
    });
  };

  handleMouseLeave = (id) => {
    this.setState({
      [id]: false,
    });
  };

  render() {
    const { showDefaultTooltip, showLightTooltip } = this.state;

    return (
      <div>
        <H level={ 1 }>Tooltip</H>
        <T elm="p" className={ cx(m.mtr, m.largeI, m.demi) }>
          A <C>tooltip</C> provides additional information to an item on user
          interaction (click or hover).  They’re typically used add more context to the element
          in question.  They should only be used when unable to surface enough information to the
          user.  Try to avoid providing critical information to the user like this, as the
          additional interaction as this isn’t great for usability on touch devices.
        </T>
        <D>
          <H level={ 2 } className={ m.mtr }>Default Tooltip</H>
          <T elm="p" className={ m.mtr }>
            Our default <C>tooltip</C> comes in black. Attach it to a specific element, by proving
            that element in the target prop.
          </T>
          <Specimen
            classNames={ {
              root: m.mtr,
              specimenContainer: cx(m.par, css.specimenContainer),
            } }
            code={ dedent`
              <Tooltip
                target={ <DefaultTarget /> }
                verticalAttachment={ VERTICAL_ATTACHMENTS.TOP }
                horizontalAttachment={ HORIZONTAL_ATTACHMENTS.CENTER }
                active
              >
                <Content />
              </Tooltip>
            ` }
          >
            <Tooltip
              target={
                <DefaultTarget
                  onMouseEnter={ this.handleMouseEnter }
                  onMouseLeave={ this.handleMouseLeave }
                />
              }
              verticalAttachment={ VERTICAL_ATTACHMENTS.TOP }
              horizontalAttachment={ HORIZONTAL_ATTACHMENTS.CENTER }
              active={ showDefaultTooltip }
            >
              <Content />
            </Tooltip>
          </Specimen>
        </D>
        <D>
          <H level={ 2 } className={ m.mtr }>Light Tooltip</H>
          <T elm="p" className={ m.mtr }>
            If you’re using a tooltip on a dark background, use the light variant.
          </T>
          <Specimen
            classNames={ {
              root: m.mtr,
              specimenContainer: cx(m.par, css.specimenContainer),
            } }
            code={ dedent`
              <Tooltip
                target={ <DefaultTarget /> }
                verticalAttachment={ VERTICAL_ATTACHMENTS.TOP }
                horizontalAttachment={ HORIZONTAL_ATTACHMENTS.CENTER }
                active
              >
                <Content />
              </Tooltip>
            ` }
            variant="dark"
          >
            <Tooltip
              target={
                <LightTarget
                  onMouseEnter={ this.handleMouseEnter }
                  onMouseLeave={ this.handleMouseLeave }
                />
              }
              verticalAttachment={ VERTICAL_ATTACHMENTS.CENTER }
              horizontalAttachment={ HORIZONTAL_ATTACHMENTS.RIGHT }
              active={ showLightTooltip }
              variant="light"
            >
              <Content />
            </Tooltip>
          </Specimen>
        </D>
        <D>
          <H level={ 2 } className={ m.mtr }>Positioning</H>
          <T elm="p" className={ m.mtr }>
            Tooltips are based on
            the <Link className={ scaffoldCss.link } to="/patterns/tether/">Tether</Link> component
            and therefore can be positioned in the same way. Refer
            to <Link className={ scaffoldCss.link } to="/patterns/tether/">Tether&#39;s</Link> documentation
            for more information.
          </T>
        </D>
      </div>
    );
  }
}
