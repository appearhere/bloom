import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import dedent from 'dedent';

import Specimen from '../../../components/Specimen/Specimen';
import { D, H, T, C, Note } from '../../../components/Scaffold/Scaffold';
import Tether, {
  VERTICAL_ATTACHMENTS,
  HORIZONTAL_ATTACHMENTS,
  Select,
  Option,
  Checkbox,
  Label
} from '@appearhere/bloom';

import { Modifiers as m } from '@appearhere/bloom';
import css from './Tether.module.css';
import scaffoldCss from '../../../components/Scaffold/Scaffold.module.css';

const Target = () => <div>Anchor</div>;
// eslint-disable-next-line react/prop-types
const TetherChild = ({ className }) => <div className={className} />;

export default class TetherDocumentation extends Component {
  state = {
    verticalAttachment: VERTICAL_ATTACHMENTS.CENTER,
    horizontalAttachment: HORIZONTAL_ATTACHMENTS.RIGHT,
    flushVertical: false,
    flushHorizontal: false,
  };

  handleVerticalAttachmentChange = e => {
    const { value: attachment } = e.target;

    this.setState({
      verticalAttachment: VERTICAL_ATTACHMENTS[attachment],
    });
  };

  handleHorizontallAttachmentChange = e => {
    const { value: attachment } = e.target;

    this.setState({
      horizontalAttachment: HORIZONTAL_ATTACHMENTS[attachment],
    });
  };

  handleFlushVerticalChange = e => {
    const { checked: flushVertical } = e.target;

    this.setState({
      flushVertical,
    });
  };

  handleFlushHorizontalChange = e => {
    const { checked: flushHorizontal } = e.target;

    this.setState({
      flushHorizontal,
    });
  };

  render() {
    const { verticalAttachment, horizontalAttachment, flushVertical, flushHorizontal } = this.state;

    return (
      <div>
        <H level={1}>Tether</H>
        <T elm="p" className={cx(m.mtr, m.largeI, m.demi)}>
          The <C>Tether</C> component allows you define and manage the position of an element in
          relation to another element.
        </T>
        <D>
          <T elm="p" className={m.mtr}>
            Tether is useful where you need to position a element in relation to another element.
            It’s great as the foundation for other components such as{' '}
            <Link className={scaffoldCss.link} to="/patterns/dropdown">
              Dropdown
            </Link>.
          </T>
          <T elm="p" className={m.mtr}>
            A useful fact about the Tether component is that it will reposition itself back into the
            viewport if incorrect horizontal and vertical positioning or scrolling cause it to move
            outside of the viewport.
          </T>
          <Note className={m.mtr}>
            <T elm="p">
              It is best to avoid using the <C>Tether</C> component with a target with{' '}
              <C>position: fixed</C> as it will break the repositioning functionality.
            </T>
          </Note>
          <div className={css.controls}>
            <div className={css.control}>
              <Label className={css.label} htmlFor="verticalAttachment">
                vertical attachment
              </Label>
              <Select
                classNames={{ select: m.mtSmIi }}
                name="verticalAttachment"
                value={verticalAttachment}
                onChange={this.handleVerticalAttachmentChange}
              >
                <Option value="TOP">TOP</Option>
                <Option value="BOTTOM">BOTTOM</Option>
                <Option value="CENTER">CENTER</Option>
              </Select>
            </div>
            <div className={css.control}>
              <Label className={css.label} htmlFor="horizontalAttachment">
                horizontal attachment
              </Label>
              <Select
                classNames={{ select: m.mtSmIi }}
                name="horizontalAttachment"
                value={horizontalAttachment}
                onChange={this.handleHorizontallAttachmentChange}
              >
                <Option value="CENTER">CENTER</Option>
                <Option value="LEFT">LEFT</Option>
                <Option value="RIGHT">RIGHT</Option>
              </Select>
            </div>
            <div className={css.control}>
              <Label className={css.label} htmlFor="flushVertical">
                flush vertical
              </Label>
              <Checkbox
                className={m.mtSmIi}
                name="flushVertical"
                checked={flushVertical}
                value="flushVertical"
                onChange={this.handleFlushVerticalChange}
              />
            </div>
            <div className={css.control}>
              <Label className={css.label} htmlFor="flushHorizontal">
                flush horizontal
              </Label>
              <Checkbox
                className={m.mtSmIi}
                name="flushHorizontal"
                checked={flushHorizontal}
                value="flushHorizontal"
                onChange={this.handleFlushHorizontalChange}
              />
            </div>
          </div>
          <Specimen
            classNames={{
              root: m.mtr,
              specimenContainer: cx(m.paLgV, css.specimenContainer),
            }}
            code={dedent`
              <Tether
                target={ <button>Anchor</button> }
                verticalAttachment={ ${verticalAttachment} }
                horizontalAttachment={ ${horizontalAttachment} }
                active
              >
                <div />
              </Tether>
            `}
          >
            <Tether
              target={<Target />}
              verticalAttachment={verticalAttachment}
              horizontalAttachment={horizontalAttachment}
              flushVertical={flushVertical}
              flushHorizontal={flushHorizontal}
              active
            >
              <TetherChild className={css.tether} />
            </Tether>
          </Specimen>
          <T elm="p" className={m.mtr}>
            Passing the <C>flushHorizontal</C> will align the tether element so it is parallel to
            the <C>horizontalAttachment</C> and the <C>flushVertical</C> prop will align the element
            so it is parallel to the <C>verticalAttachment</C>.
          </T>
        </D>
      </div>
    );
  }
}
