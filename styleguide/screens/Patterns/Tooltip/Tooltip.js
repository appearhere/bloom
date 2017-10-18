import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import dedent from 'dedent';

import Specimen from '../../../components/Specimen/Specimen';
import { D, H, T, C, Placeholder } from '../../../components/Scaffold/Scaffold';
import Tooltip from '../../../../components/Tooltip/Tooltip';
import { HORIZONTAL_ATTACHMENTS, VERTICAL_ATTACHMENTS } from '../../../../components/Tether/Tether';

import m from '../../../../globals/modifiers.css';
import css from './Tooltip.css';
import scaffoldCss from '../../../components/Scaffold/Scaffold.css';

// eslint-disable-next-line react/prop-types
const DefaultTarget = ({ onClick, placeholderText }) => (
  <Placeholder onClick={ () => { onClick('showDefaultTooltip'); } }>
    { placeholderText }
  </Placeholder>
);

// eslint-disable-next-line react/prop-types
const LightTarget = ({ onClick, placeholderText }) => (
  <Placeholder onClick={ () => { onClick('showLightTooltip'); } }>
    { placeholderText }
  </Placeholder>
);

const Content = () => <div>Was that not the best button you have ever clicked?</div>;

export default class TooltipDocumentation extends Component {
  state = {
    showDefaultTooltip: false,
    showLightTooltip: false,
  };

  handleClick = (id) => {
    this.setState((state) => {
      const currentShowState = state[id];

      return {
        [id]: !currentShowState,
      };
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
              specimenContainer: css.specimenContainer,
            } }
            code={ dedent`
              <Tooltip
                target={ <Target /> }
                active={ this.state.showTooltip }
              >
                <Content />
              </Tooltip>
            ` }
          >
            <Tooltip
              target={
                <DefaultTarget
                  onClick={ this.handleClick }
                  placeholderText={ !showDefaultTooltip ? 'Show tooltip' : 'Hide tooltip' }
                />
              }
              verticalAttachment={ VERTICAL_ATTACHMENTS.TOP }
              horizontalAttachment={ HORIZONTAL_ATTACHMENTS.CENTER }
              active={ showDefaultTooltip }
              targetClassName={ css.target }
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
              specimenContainer: css.specimenContainer,
            } }
            code={ dedent`
              <Tooltip
                target={ <Target /> }
                active={ this.state.showTooltip }
              >
                <Content />
              </Tooltip>
            ` }
          >
            <Tooltip
              target={
                <LightTarget
                  onClick={ this.handleClick }
                  placeholderText={ !showLightTooltip ? 'Show tooltip' : 'Hide tooltip' }
                />
              }
              verticalAttachment={ VERTICAL_ATTACHMENTS.TOP }
              horizontalAttachment={ HORIZONTAL_ATTACHMENTS.CENTER }
              active={ showLightTooltip }
              variant="light"
              targetClassName={ css.target }
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
            and therefore can be positioned in the same way. Refer to { ' ' }
            <Link className={ scaffoldCss.link } to="/patterns/tether/">Tether&#39;s</Link> { ' ' }
            documentation for more information.
          </T>
        </D>
      </div>
    );
  }
}
